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
      <div className={`floating-sidebar-overlay ${isVisible ? 'visible' : ''}`} onClick={onClose} />
      <div className={`floating-sidebar ${isVisible ? 'visible' : ''}`}>
        <button 
          className="sidebar-close"
          onClick={onClose}
          aria-label="Close sidebar"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="sidebar-content">
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.type}`}>
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div className="typing-indicator">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>
        <div className="sidebar-message-box">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
            rows="3"
            aria-label="Message input"
            disabled={isLoading}
          />
          <button 
            onClick={handleSendMessage}
            disabled={!message.trim() || isLoading}
            aria-label="Send message"
            className="send-button"
          >
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>
      </div>
    </>
  );
};

export default FloatingSidebar;