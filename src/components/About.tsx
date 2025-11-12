import { Users, Lightbulb, Rocket, Trophy } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Users,
      title: 'Community',
      description: 'Connect with like-minded tech enthusiasts and build lasting relationships'
    },
    {
      icon: Lightbulb,
      title: 'Learning',
      description: 'Access workshops, talks, and resources to expand your technical skills'
    },
    {
      icon: Rocket,
      title: 'Projects',
      description: 'Work on real-world projects and bring your innovative ideas to life'
    },
    {
      icon: Trophy,
      title: 'Competitions',
      description: 'Participate in hackathons and coding competitions to test your abilities'
    }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            About Our Club
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            MFM Tech Club is a vibrant community of students passionate about technology,
            innovation, and continuous learning. We're dedicated to fostering technical excellence
            and creative problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our Mission
          </h3>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            To empower students with the technical skills, collaborative mindset, and innovative
            spirit needed to become the next generation of tech leaders and changemakers.
          </p>
        </div>
      </div>
    </section>
  );
}
