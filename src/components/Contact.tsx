import { Mail, MessageSquare, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-bw-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-bw-black mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-bw-muted max-w-2xl mx-auto">
            Have questions or want to join our community? We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="bg-bw-white rounded-2xl p-8 shadow-lg mb-8 border border-bw-gray">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-bw-black/5 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-bw-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-bw-black mb-2">Email Us</h3>
                  <p className="text-bw-muted">contact@mfmtechclub.edu</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-bw-black/5 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-bw-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-bw-black mb-2">Join Our Community</h3>
                  <p className="text-bw-muted">Follow us on social media for updates and announcements</p>
                  <div className="flex space-x-3 mt-4">
                    <a href="#" className="text-accent-emerald hover:text-bw-black transition-colors font-semibold">Discord</a>
                    <span className="text-bw-gray">•</span>
                    <a href="#" className="text-accent-emerald hover:text-bw-black transition-colors font-semibold">Twitter</a>
                    <span className="text-bw-gray">•</span>
                    <a href="#" className="text-accent-emerald hover:text-bw-black transition-colors font-semibold">Instagram</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-bw-black rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Meeting Times</h3>
              <p className="text-accent-emerald mb-4">Join us for our regular club meetings:</p>
              <ul className="space-y-2 text-bw-gray">
                <li>• General Meetings: Every Monday at 5:00 PM</li>
                <li>• Coding Sessions: Fridays at 4:00 PM</li>
                <li>• Workshop Series: First Saturday of each month</li>
              </ul>
            </div>
          </div>

          <div className="bg-bw-white rounded-2xl p-8 shadow-lg border border-bw-gray">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-bw-black mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-bw-gray border border-bw-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-bw-black focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-bw-black mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-bw-gray border border-bw-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-bw-black focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-bw-black mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-bw-gray border border-bw-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-bw-black focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about yourself and why you want to join..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-accent-emerald hover:bg-bw-muted text-bw-black font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
