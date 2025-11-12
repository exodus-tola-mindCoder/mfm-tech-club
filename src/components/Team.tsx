import { Github, Linkedin, Mail } from 'lucide-react';
// import images here 

import birhan from '../assets/birhan.png';
import exo from '../assets/exo_best.jpg';
import heni from '../assets/hena.jpg'
import kenian from '../assets/kenian.jpg'


export default function Team() {
  const teamMembers = [
    {
      name: 'Exodus Gemechu',
      role: 'Club President',
      description: 'Leading our vision and strategy',
      image: exo,
    },
    {
      name: 'Henok Tesfay',
      role: 'Vice President',
      description: 'Managing operations and events',
      image: heni,
    },
    {
      name: 'Henok Birhan',
      role: 'Technical Lead',
      description: 'Overseeing technical projects',
      image: birhan,
    },
    {
      name: 'Kenian Amhare',
      role: 'Events Coordinator',
      description: 'Planning amazing experiences',
      image: kenian,
    }
  ];

  return (
    <section id="team" className="py-24 px-6 bg-bw-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-bw-black mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-bw-muted max-w-2xl mx-auto">
            Dedicated leaders working to make MFM Tech Club an amazing community
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bw-black via-bw-black/40 to-transparent opacity-80"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-bw-white">
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-bw-black font-semibold mb-2">{member.role}</p>
                  <p className="text-bw-gray text-sm">{member.description}</p>

                  <div className="flex space-x-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href="#" className="w-8 h-8 bg-bw-white/10 hover:bg-bw-white/20 rounded-full flex items-center justify-center transition-colors">
                      <Github className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-8 h-8 bg-bw-white/10 hover:bg-bw-white/20 rounded-full flex items-center justify-center transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-8 h-8 bg-bw-white/10 hover:bg-bw-white/20 rounded-full flex items-center justify-center transition-colors">
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-bw-muted mb-6">
            Want to join our leadership team?
          </p>
          <button className="px-8 py-4 bg-bw-black hover:bg-bw-muted text-bw-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg">
            Get Involved
          </button>
        </div>
      </div>
    </section>
  );
}
