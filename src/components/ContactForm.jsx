import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';



const ContactForm = () => {
  const [fileName, setFileName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const formRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file ? file.name : '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Send the form using EmailJS
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log('Email successfully sent!', result);

      // Reset form
      if (formRef.current) {
        formRef.current.reset();
      }
      setFileName('');
      setSubmitted(true);

      // Hide message after a few seconds
      setTimeout(() => setSubmitted(false), 4000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setError('Failed to send message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="md:w-1/2">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-sm"
      >
        {/* ... (keep all your existing form fields) ... */}

         <div className="mb-6">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="John Doe"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="john@example.com"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
            Subject
          </label>
          <input
            type="text"
            name="Subject"
            id="subject"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Project Inquiry"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Tell me about your project..."
            required
          ></textarea>
        </div>

        <div className="mb-6">
          <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-2">
            Attach File <span className="text-gray-400 italic">(optional)</span>
          </label>
          <input
            type="file"
            id="file"
            onChange={handleFileChange}
            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
              file:rounded-lg file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
          />
          {fileName && (
            <p className="mt-2 text-sm text-gray-600">Selected file: <strong>{fileName}</strong></p>
          )}
        </div>


        <button
          type="submit"
          disabled={isLoading}
          className={`w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 ${
            isLoading ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {isLoading ? 'Sending...' : 'Send Message'} <i className="fas fa-paper-plane ml-2"></i>
        </button>

        {submitted && (
          <p className="mt-4 text-green-600 text-sm font-medium">
            ✅ Message sent successfully!
          </p>
        )}

        {error && (
          <p className="mt-4 text-red-600 text-sm font-medium">
            ❌ {error}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;