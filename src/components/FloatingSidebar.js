import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { BOT_RESPONSES } from '../constants/PortfolioInsight';

const FloatingSidebar = ({ isVisible, onClose }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const STORAGE_KEY = 'chat_messages';
  const STORAGE_LOADING_KEY = 'chat_isLoading';

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);

      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
            setMessages(parsed);
        }
      }

      const rawLoading = sessionStorage.getItem(STORAGE_LOADING_KEY);

      if (rawLoading === 'true') {
        setIsLoading(true);
      }
    } catch (e) {
      console.warn('Could not read chats from sessionStorage', e);
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (message.trim()) {
      const newMessage = message.trim();
      setMessage('');
      
      setMessages(prev => {
        const next = [...prev, { text: newMessage, type: 'user-message' }];
        try { sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch (e) { /* ignore */ }
        return next;
      });

      setIsLoading(true);
      try { sessionStorage.setItem(STORAGE_LOADING_KEY, 'true'); } catch (e) { /* ignore */ }

      try {
        const response = await axios.post(
          process.env.REACT_APP_CHAT_API_URL,
          { message: newMessage },
          { headers: { 'Content-Type': 'application/json' }, timeout: 10000 }
        );

        setMessages(prev => {
          const next = [
            ...prev,
            {
              text: response?.data?.message ?? JSON.stringify(response?.data) ?? 'No response body',
              type: 'system-message'
            }
          ];
          
          try { sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch (_) { }
          return next;
        });
      } catch (error) {

        setMessages(prev => {
            let botResponse = BOT_RESPONSES[Math.floor(Math.random() * BOT_RESPONSES.length)];
            const next = [...prev, { text: botResponse, type: 'system-message' }];
            try { sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch (_) { }
            return next;
          });
      } finally {
        setIsLoading(false);
        try { sessionStorage.setItem(STORAGE_LOADING_KEY, 'false'); } catch (_) { }
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-30 bg-black transition-opacity duration-300 ${
          isVisible ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-screen z-40 w-full sm:w-96 bg-white shadow-2xl flex flex-col transition-transform duration-300 transform ${
          isVisible ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 sm:p-6 border-b border-slate-200 bg-gradient-to-r from-blue-600 to-blue-500">
          <h2 className="text-lg sm:text-xl font-bold text-white">Ask AI</h2>
          <button
            onClick={onClose}
            aria-label="Close sidebar"
            className="p-2 hover:bg-blue-700 rounded-lg transition-colors duration-200"
          >
            <FontAwesomeIcon icon={faTimes} className="text-white text-lg" />
          </button>
        </div>

        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {messages.length === 0 ? (
            <div className="flex items-center justify-center h-full text-center">
              <p className="text-slate-500 text-sm sm:text-base">Start a conversation by typing a message below...</p>
            </div>
          ) : (
            <>
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.type === 'user-message' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg text-sm sm:text-base ${
                      msg.type === 'user-message'
                        ? 'bg-blue-600 text-white rounded-br-none'
                        : 'bg-slate-100 text-slate-900 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-2 px-4 py-3 bg-slate-100 rounded-lg rounded-bl-none">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </>
          )}
        </div>

        {/* Input Area */}
        <div className="p-4 sm:p-6 border-t border-slate-200 bg-slate-50">
          <div className="flex gap-2">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a message..."
              rows="3"
              aria-label="Message input"
              disabled={isLoading}
              className="flex-1 px-4 py-2 border border-slate-300 rounded-lg text-sm sm:text-base text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent disabled:bg-slate-200 disabled:text-slate-500 resize-none transition-all duration-200"
            />
            <button
              onClick={handleSendMessage}
              disabled={!message.trim() || isLoading}
              aria-label="Send message"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:bg-slate-300 text-white font-semibold rounded-lg transition-colors duration-200 disabled:cursor-not-allowed flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faPaperPlane} className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingSidebar;