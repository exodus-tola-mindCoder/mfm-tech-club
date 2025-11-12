import { Calendar, MapPin, Clock } from 'lucide-react';

export default function Events() {
  const events = [
    {
      title: 'Weekly Coding Sessions',
      date: 'Every Friday',
      time: '4:00 PM - 6:00 PM',
      location: 'Computer Lab A',
      description: 'Join us for collaborative coding sessions where we work on projects and help each other grow.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Tech Talk Series',
      date: 'Monthly',
      time: '6:00 PM - 7:30 PM',
      location: 'Main Auditorium',
      description: 'Industry experts and alumni share insights on latest technologies and career paths.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Hackathon 2024',
      date: 'Coming Soon',
      time: '24 Hours',
      location: 'Innovation Center',
      description: 'Our annual hackathon where teams compete to build innovative solutions to real-world problems.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="events" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay connected with our exciting lineup of workshops, talks, and competitions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`h-3 bg-gradient-to-r ${event.color}`}></div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {event.title}
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-3 text-blue-600" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-3 text-blue-600" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-3 text-blue-600" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {event.description}
                </p>

                <button className="w-full py-3 bg-slate-900 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
