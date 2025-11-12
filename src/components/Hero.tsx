import { Code2, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-bw-black">
      <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Code2 className="w-8 h-8 text-bw-white" />
            <span className="text-2xl font-bold text-bw-white">MFM Tech Club</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-bw-white hover:text-bw-gray transition-colors">About</button>
            <button onClick={() => scrollToSection('events')} className="text-bw-white hover:text-bw-gray transition-colors">Events</button>
            <button onClick={() => scrollToSection('team')} className="text-bw-white hover:text-bw-gray transition-colors">Team</button>
            <button onClick={() => scrollToSection('contact')} className="text-bw-white hover:text-bw-gray transition-colors">Contact</button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-bw-black border-t border-bw-gray">
            <div className="flex flex-col space-y-4 px-6 py-4">
              <button onClick={() => scrollToSection('about')} className="text-bw-white hover:text-bw-gray transition-colors text-left">About</button>
              <button onClick={() => scrollToSection('events')} className="text-bw-white hover:text-bw-gray transition-colors text-left">Events</button>
              <button onClick={() => scrollToSection('team')} className="text-bw-white hover:text-bw-gray transition-colors text-left">Team</button>
              <button onClick={() => scrollToSection('contact')} className="text-bw-white hover:text-bw-gray transition-colors text-left">Contact</button>
            </div>
          </div>
        )}
      </nav>

      <div className="flex items-center justify-center min-h-screen px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-pulse">
            <Code2 className="w-20 h-20 text-bw-white mx-auto" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-bw-white mb-6 leading-tight">
            Welcome to <span className="text-bw-white">MFM Tech Club</span>
          </h1>

          <p className="text-xl md:text-2xl text-bw-gray mb-12 leading-relaxed">
            Where innovation meets collaboration. Join us in exploring the frontiers of technology, building amazing projects, and growing together as developers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('about')}
              className="px-8 py-4 bg-bw-white text-bw-black font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Learn More
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-transparent border-2 border-bw-white hover:bg-bw-white hover:text-bw-black text-bw-white font-semibold rounded-lg transition-all transform hover:scale-105"
            >
              Join Us
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-bw-white rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-bw-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
