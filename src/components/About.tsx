import { Award, BookOpen, Network, Target } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function About() {
  const values = [
    {
      icon: Network,
      title: 'Community',
      description: 'Building a strong network of women in cybersecurity across India',
    },
    {
      icon: BookOpen,
      title: 'Education',
      description: 'Providing resources and training to advance cybersecurity skills',
    },
    {
      icon: Target,
      title: 'Opportunity',
      description: 'Creating pathways for career growth and leadership',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Promoting excellence and innovation in cybersecurity',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-4">
            About Us
          </div>
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
            Who We Are
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            WiCyS India is a dynamic community dedicated to recruiting, retaining, and advancing women in the cybersecurity field across India. We create opportunities for networking, mentorship, and professional development.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-primary rounded-2xl p-8 sm:p-12 text-white mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl mb-4">Our Mission</h3>
            <p className="text-lg opacity-95">
              To bring together women in cybersecurity from academia, research, and industry to share knowledge, experience, networking, and mentoring. We aim to increase the number of women in leadership positions and create a more diverse and inclusive cybersecurity workforce in India.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="border-2 hover:border-accent/30 transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
