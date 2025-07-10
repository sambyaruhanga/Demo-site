import { useEffect, useRef, useState } from 'react';
import ProfilePic from '../assets/images/profile.jpg';

export default function WhatsAppWidget() {
  const phoneNumber = '+256752424995';
  const [isOpen, setIsOpen] = useState(false);
  const [userMessage, setUserMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const widgetRef = useRef(null); // to track clicks outside

  const openChat = () => setIsOpen(!isOpen);

  const handleSendMessage = () => {
    const defaultMessage = "Hi Sam,";
    const fullMessage = `${defaultMessage}\n${userMessage.trim()}`;
    const encodedMessage = encodeURIComponent(fullMessage);

    window.open(`https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodedMessage}`, '_blank');

    // Auto-close and reset
    setIsOpen(false);
    setUserMessage('');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  // 🧠 Detect click outside to close chat
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="fixed bottom-8 right-8 z-50" ref={widgetRef}>
      {/* Toast */}
      {showToast && (
        <div className="absolute bottom-20 right-0 bg-green-600 text-white text-sm px-4 py-2 rounded shadow-lg animate-fade-in">
          Redirecting to WhatsApp...
        </div>
      )}

      {/* Floating Button */}
      <div
        onClick={openChat}
        className="bg-[#25D366] w-16 h-16 flex items-center justify-center rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.25)] cursor-pointer hover:scale-105 transition-transform duration-300"
        title="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp text-white text-2xl"></i>
      </div>

      {/* Chat Box */}
      {isOpen && (
        <div className="mt-4 w-80 bg-white rounded-xl shadow-xl overflow-hidden animate-fade-in">
          {/* Header */}
          <div className="flex items-center gap-3 p-4 bg-green-500 text-white">
            <img
              className="w-10 h-10 rounded-full border-2 border-white"
              src={ProfilePic}
              alt="Sam"
            />
            <div>
              <h4 className="font-bold">Byaruhanga Sam</h4>
              <p className="text-xs">Typically replies within 1 hour</p>
            </div>
          </div>

          {/* Message */}
          <div className="p-4 text-sm text-gray-800">
            Hi there! 👋 How can I help you today?
          </div>

          {/* Input */}
          <div className="flex items-start border-t p-2 gap-2">
            <textarea
              rows={3}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 text-sm border rounded-lg outline-none resize-none"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
            />
            <button
              onClick={handleSendMessage}
              className="text-green-500 hover:text-green-600 transition mt-1"
              aria-label="Send Message"
            >
              <i className="fas fa-paper-plane text-lg"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
