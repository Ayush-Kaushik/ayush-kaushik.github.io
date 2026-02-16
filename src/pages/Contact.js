import { useState } from 'react';
import { useContactContext } from "../context/ContactContext";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState(""); // "success" or "error"
    const [modalMessage, setModalMessage] = useState("");
    const contactContext = useContactContext();

    const closeModal = () => {
        setIsModalOpen(false);
        setModalType("");
        setModalMessage("");
    };

    const handleSubmit = async () => {
        try {
            let isSent = await contactContext.sendMessage(email, name, message);

            if (isSent === true) {
                setModalType("success");
                setModalMessage("Awesome! I'll text you back 🙌");
                setIsModalOpen(true);
                setMessage("");
                setName("");
                setEmail("");
            } else {
                setModalType("error");
                setModalMessage("Unable to deliver your message ☹️\n\nYou can reach me at:\nwww.linkedin.com/in/ayushkaushik");
                setIsModalOpen(true);
            }
        } catch (_) {
            setModalType("error");
            setModalMessage("Unable to deliver your message ☹️\n\nYou can reach me at:\nwww.linkedin.com/in/ayushkaushik");
            setIsModalOpen(true);
        }
    }

    return (
        <section id="contact" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12 sm:mb-16 text-slate-900">
                    Let's Connect!
                </h1>

                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 md:p-8 border border-slate-200">
                    {/* Name Field */}
                    <div className="mb-8">
                        <label htmlFor="name" className="block text-lg font-semibold text-slate-900 mb-3">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Your name"
                            onChange={(event) => setName(event.target.value)}
                            value={name}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                        />
                    </div>

                    {/* Email Field */}
                    <div className="mb-8">
                        <label htmlFor="email" className="block text-lg font-semibold text-slate-900 mb-3">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="youremail@email.com"
                            onChange={(event) => setEmail(event.target.value)}
                            value={email}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                        />
                    </div>

                    {/* Message Field */}
                    <div className="mb-8">
                        <label htmlFor="message" className="block text-lg font-semibold text-slate-900 mb-3">
                            Message
                        </label>
                        <textarea
                            id="message"
                            placeholder="Let's work on something cool!"
                            onChange={(event) => setMessage(event.target.value)}
                            value={message}
                            rows="5"
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 resize-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        onClick={handleSubmit}
                        className="w-full px-6 py-3 text-base sm:text-lg font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                    >
                        Send
                    </button>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
                    <div className="bg-white rounded-lg shadow-2xl max-w-md w-full overflow-hidden animate-fadeIn">
                        {/* Modal Header */}
                        <div
                            className={`px-6 py-4 ${
                                modalType === "success"
                                    ? "bg-green-50 border-b border-green-200"
                                    : "bg-red-50 border-b border-red-200"
                            }`}
                        >
                            <h2
                                className={`text-xl sm:text-2xl font-bold ${
                                    modalType === "success" ? "text-green-900" : "text-red-900"
                                }`}
                            >
                                {modalType === "success" ? "Success! ✨" : "Oops! ☹️"}
                            </h2>
                        </div>

                        {/* Modal Body */}
                        <div className="px-6 py-6">
                            <p
                                className={`text-base whitespace-pre-line leading-relaxed ${
                                    modalType === "success"
                                        ? "text-slate-700"
                                        : "text-slate-700"
                                }`}
                            >
                                {modalMessage}
                            </p>
                        </div>

                        {/* Modal Footer */}
                        <div className="px-6 py-4 border-t border-slate-200 flex gap-3">
                            <button
                                onClick={closeModal}
                                className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-colors duration-200 ${
                                    modalType === "success"
                                        ? "bg-green-600 hover:bg-green-700 text-white"
                                        : "bg-red-600 hover:bg-red-700 text-white"
                                }`}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Contact;