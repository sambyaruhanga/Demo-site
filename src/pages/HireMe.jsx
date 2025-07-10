import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const HireMe = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    plan: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const openModal = (plan) => {
    setSelectedPlan(plan);
    setFormData(prev => ({ ...prev, plan }));
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSubmitStatus(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create enhanced message with sender's email
      const enhancedMessage = `
        ${formData.message}
        
        ---
        Sender's Email: ${formData.email}
        Plan Selected: ${selectedPlan}
      `;

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          plan: selectedPlan,
          message: enhancedMessage
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        message: '',
        plan: selectedPlan
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="HireMe" className="py-5 bg-white relative">
      {/* Modal Backdrop */}
      {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
                  <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 max-h-[90vh] flex flex-col">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold">Inquire About {selectedPlan}</h3>
                      <button 
                        onClick={closeModal}
                        className="text-gray-500 hover:text-gray-700 text-2xl"
                      >
                        ✕
                      </button>
                    </div>
                    
                    {submitStatus === 'success' ? (
                      <div className="text-center py-8 flex-grow flex flex-col justify-center">
                        <div className="text-green-500 text-5xl mb-4">✓</div>
                        <h4 className="text-xl font-bold mb-2">Thank You!</h4>
                        <p>Your inquiry has been sent. I'll get back to you soon.</p>
                        <button
                          onClick={closeModal}
                          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 self-center"
                        >
                          Close
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="flex flex-col flex-grow overflow-hidden">
                        <div className="overflow-y-auto flex-grow">
                          <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Name</label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              className="w-full px-3 py-2 border rounded"
                              required
                            />
                          </div>
                          
                          <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Email</label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full px-3 py-2 border rounded"
                              required
                            />
                          </div>
                          
                          <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Plan</label>
                            <input
                              type="text"
                              value={selectedPlan}
                              readOnly
                              className="w-full px-3 py-2 border rounded bg-gray-100"
                            />
                          </div>
                          
                          <div className="mb-6">
                            <label className="block text-gray-700 mb-2">Your Message</label>
                            <textarea
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              rows="8"
                              className="w-full px-3 py-2 border rounded min-h-[150px]"
                              required
                            ></textarea>
                          </div>
                        </div>
                        
                        <div className="mt-auto pt-4">
                          {submitStatus === 'error' && (
                            <p className="text-red-500 mb-4">Failed to send message. Please try again.</p>
                          )}
                          
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded hover:shadow-lg disabled:opacity-70"
                          >
                            {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
      )}
      {/* Pricing Cards Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hire <span className="gradient-text">Me</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">Available for part-time, contract, or full-time engagements. Let's discuss how I can help with your data science or web development needs.</p>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">Let's create some inspiring Projects together!</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Part-time Plan */}
          <div className="pricing-card bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2">Part-time</h3>
              <p className="text-gray-600 mb-4">Ideal for small projects</p>
              <div className="text-4xl font-bold mb-2">$800<span className="text-lg text-gray-500">/Week</span></div>
              <p className="text-gray-500 text-sm">20 hours/week minimum</p>
            </div>
            <ul className="space-y-3 mb-8 text-gray-700">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Data analysis & Reporting
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Small ML model development
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Website Development
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Resource Training
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Mentoring
              </li>
            </ul>
            <button 
              onClick={() => openModal('Part-time')}
              className="w-full px-6 py-3 border-2 border-blue-500 text-blue-500 font-medium rounded-lg hover:bg-blue-50 transition-all duration-300"
            >
              Get Started
            </button>
          </div>

          {/* Contract - Most Popular */}
          <div className="pricing-card bg-white p-8 rounded-xl shadow-sm border-2 border-blue-500 relative transform hover:scale-[1.02] transition-transform duration-300">
            <div className="absolute top-0 right-0 -mt-1 -mr-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
              Most Popular
            </div>
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2">Contract</h3>
              <p className="text-gray-600 mb-4">Perfect for specific projects</p>
              <div className="text-4xl font-bold mb-2">$5,000<span className="text-lg text-gray-500">/project</span></div>
              <p className="text-gray-500 text-sm">Starting at $5,000 per project</p>
            </div>
            <ul className="space-y-3 mb-8 text-gray-700">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Fixed project scope
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                ML model development
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Full website development
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Data pipeline creation
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Weekly progress reports
              </li>
            </ul>
            <button 
              onClick={() => openModal('Contract')}
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Get Started
            </button>
          </div>

          {/* Full-time */}
          <div className="pricing-card bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2">Full-time</h3>
              <p className="text-gray-600 mb-4">Dedicated resource</p>
              <div className="text-4xl font-bold mb-2">$4,500<span className="text-lg text-gray-500">/month</span></div>
              <p className="text-gray-500 text-sm">40+ hours per week</p>
            </div>
            <ul className="space-y-3 mb-8 text-gray-700">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                40+ hours per week
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                End-to-end project ownership
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Complex ML/AI solutions
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Full-stack development
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Priority support
              </li>
            </ul>
            <button 
              onClick={() => openModal('Full-time')}
              className="w-full px-6 py-3 border-2 border-blue-500 text-blue-500 font-medium rounded-lg hover:bg-blue-50 transition-all duration-300"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireMe;