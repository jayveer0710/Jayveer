import React, { useState } from 'react';
import LottiePopup from './LottiePopup';
import { Mail, Github, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  } | null>(null);

  // Loading state for AJAX submission
  const [isLoading, setIsLoading] = useState(false);
  // Lottie popup state
  const [showPopup, setShowPopup] = useState(false);
  // default lottie animation URL (can be replaced with your own)
  const [popupSrc] = useState('./Email.json');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Use FormSubmit AJAX endpoint to avoid redirects/popups.
    // Replace email below with your own if needed.
    const endpoint = `https://formsubmit.co/ajax/${import.meta.env.VITE_FORMSUBMIT_API_KEY}`;

    setIsLoading(true);

    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('message', formData.message);
      // Optional: disable formsubmit captcha
      data.append('_captcha', 'false');
      data.append('_template', 'table');
      data.append('_autoresponse', 'Thanks for reaching out! Your message is now safely stored in our cloud (no SQL injection detected).');
      
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          // Request JSON response so the service doesn't redirect.
          Accept: 'application/json'
        },
        body: data
      });

      // Parse response where possible
      let result: any = null;
      try {
        result = await res.json();
      } catch (err) {
        // ignore JSON parse errors
      }

      if (res.ok && result && result.success === "true") {
        setFormStatus({
          submitted: true,
          success: true,
          message: 'Thank you! Your message has been sent successfully.'
        });

        // Clear form so user can re-fill if needed; keep formStatus so animations can trigger
        setFormData({ name: '', email: '', message: '' });
        // Show Lottie popup for success
        setShowPopup(true);
      } else {
        setFormStatus({
          submitted: true,
          success: false,
          message: 'An error occurred while sending your message.'
        });
      }
    } catch (error) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Network error. Please try again later.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16 relative after:content-[''] after:block after:w-20 after:h-1 after:bg-black after:mx-auto after:mt-4 animate-on-scroll">
          Get In Touch
        </h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-serif font-semibold mb-6">Contact Information</h3>

            <div className="space-y-8">
              <div className="flex items-start animate-fadeInLeft animate-delay-100">
                <div className="p-3 bg-gray-100 rounded-lg mr-4 animate-float">
                  <Mail className="text-black" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Email</h4>
                  <a href="mailto:jayvee00433@gmail.com" className="text-gray-600 hover:text-black transition-all-smooth hover:scale-105">
                    jayvee00433@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start animate-fadeInLeft animate-delay-200">
                <div className="p-3 bg-gray-100 rounded-lg mr-4 animate-float">
                  <Github className="text-black" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">GitHub</h4>
                  <a
                    href="https://github.com/jayveer0710"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black transition-all-smooth hover:scale-105"
                  >
                    github.com/jayveer0710
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll">
            <h3 className="text-2xl font-serif font-semibold mb-6">Send Me a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all-smooth hover:border-gray-400"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all-smooth hover:border-gray-400"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all-smooth hover:border-gray-400"
                />
              </div>
              <input type="hidden" name="_template" value="table"></input>
              <input type="hidden" name="_autoresponse" value="Thanks for reaching out! Your message is now safely stored in our cloud (no SQL injection detected).">
              </input>
              <button
                type="submit"
                disabled={isLoading}
                aria-busy={isLoading}
                className={`inline-flex items-center gap-2 px-8 py-3 bg-black text-white rounded-lg transition-all-smooth hover:scale-105 hover:shadow-lg ${isLoading ? 'opacity-60 cursor-not-allowed' : 'hover:bg-gray-800'}`}
              >
                <Send size={18} className={isLoading ? 'animate-spin' : ''} />
                <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
              </button>

              {formStatus && (
                <div className={`mt-4 p-4 rounded-lg animate-scaleIn ${formStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                  {formStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
        {/* Lottie popup overlay (renders at top-level of this section) */}
        <LottiePopup src={popupSrc} visible={showPopup} onClose={() => setShowPopup(false)} duration={5000} />
      </div>
    </section>
  );
};

export default Contact;