import { Code2, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Code2 className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold">MFM Tech Club</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Empowering students through technology, innovation, and community.
              Join us in building the future, one line of code at a time.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#events" className="text-gray-400 hover:text-blue-400 transition-colors">Events</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-blue-400 transition-colors">Our Team</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} MFM Tech Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
