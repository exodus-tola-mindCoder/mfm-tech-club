import { Github, Linkedin, Mail } from 'lucide-react';

export default function Team() {
  const teamMembers = [
    {
      name: 'Exodus Gemechu',
      role: 'Club President',
      description: 'Leading our vision and strategy',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Henok Tesfay',
      role: 'Vice President',
      description: 'Managing operations and events',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Henok Birhan',
      role: 'Technical Lead',
      description: 'Overseeing technical projects',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Kenian Amhare',
      role: 'Events Coordinator',
      description: 'Planning amazing experiences',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section id="team" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-300 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.description}</p>

                  <div className="flex space-x-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href="#" className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors">
                      <Github className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors">
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-gray-600 mb-6">
            Want to join our leadership team?
          </p>
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg">
            Get Involved
          </button>
        </div>
      </div>
    </section>
  );
}
