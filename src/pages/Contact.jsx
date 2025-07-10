
import ContactForm from '../components/ContactForm';

const Contact = () => {
    
    
    
    
    
    return(
        <section id="contact" class="py-5 bg-white">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                 {/* text */}
                 <div class="text-center mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold mb-4">Get In <span class="gradient-text">Touch</span></h2>
                    <div class="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
                 </div>

                {/* Let's talk about your project */}
                <div class="flex flex-col md:flex-row">
                            {/* Interested.. */}
                            <div class="md:w-1/2 mb-10 md:mb-0 md:pr-10">
                                <h3 class="text-3xl font-bold mb-6">Let's talk about your project</h3>
                                <p class="text-xl text-gray-600 mb-8">
                                    Interested in working together or have questions about my services? Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                                </p>
                                    {/* Email */}
                                <div class="space-y-6">
                                    <div class="flex items-start">
                                        <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4">
                                            <i class="fas fa-envelope"></i>
                                        </div>
                                        <div>
                                            <h4 class="font-bold">Email</h4>
                                            <p className="text-gray-600 hover:underline"><a href="mailto:byaruhangasam30@gmail.com"className="hover:underline">byaruhangasam30@gmail.com</a></p>
                                        </div>
                                    </div>
                                    {/* phone Number */}
                                    <div class="flex items-start">
                                        <div class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mr-4">
                                            <i class="fas fa-phone-alt"></i>
                                        </div>
                                            <div>
                                                <h4 class="font-bold">Phone</h4>
                                                <p class="text-gray-600 hover:underline"><a href="tel:+256752424995" className="text-blue-600 hover:underline">+256 752 424995</a></p>
                                                                            
                                            </div>
                                    </div>

                                     {/* Location */}
                                    <div class="flex items-start">
                                        <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-4">
                                            <i class="fas fa-map-marker-alt"></i>
                                        </div>
                                        <div>
                                            <h4 class="font-bold">Location</h4>
                                            <p class="text-gray-600">Kampala, Uganda</p>
                                        </div>
                                    </div>
                                    <div class="mt-8">
                                        <h4 class="font-bold mb-4">Follow Me</h4>
                                            {/* Social media icons */}
                                            <div class="flex space-x-4">
                                                <a href="https://x.com/sambill0" class="icon-circle w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-sm hover:bg-blue-50"
                                                target="_blank" rel="noopener noreferrer" aria-label="Visit Sam Byaruhanga's twitter profile">
                                                    <i class="fab fa-twitter"></i>
                                                </a>
                                                <a href="https://www.linkedin.com/in/byaruhanga-sam-103753116/" class="icon-circle w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-700 shadow-sm hover:bg-blue-50"
                                                         target="_blank" rel="noopener noreferrer" aria-label="Visit Sam Byaruhanga's LinkedIn profile">
                                                    <i class="fab fa-linkedin-in"></i>
                                                </a>
                                                <a href="https://github.com/sambyaruhanga" class="icon-circle w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 shadow-sm hover:bg-gray-50"
                                                target="_blank" rel="noopener noreferrer" aria-label="Visit Sam Byaruhanga's Github profile">
                                                    <i class="fab fa-github"></i>
                                                </a>
                                                                                    
                                                <a href="https://medium.com/@byaruhangasam" class="icon-circle w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 shadow-sm hover:bg-gray-50"
                                                target="_blank" rel="noopener noreferrer" aria-label="Visit Sam Byaruhanga's medium profile">
                                                    <i class="fab fa-medium"></i>
                                                </a>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            {/* fill form  */}
                            
                        <ContactForm />     
                </div>
            </div>
        </section>
    )
};
export default Contact;