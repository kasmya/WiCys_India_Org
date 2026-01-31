import { Briefcase, GraduationCap, MessageSquare, Users2 } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

export function Programs() {
  const programs = [
    {
      icon: GraduationCap,
      title: 'Workshops & Training',
      description: 'Regular hands-on workshops covering the latest cybersecurity tools, techniques, and best practices.',
      bgColor: 'bg-primary/10',
      iconColor: 'text-primary',
      features: ['Technical Skills', 'Certifications', 'Hands-on Labs'],
    },
    {
      icon: Users2,
      title: 'Mentorship Program',
      description: 'Connect with experienced professionals who can guide your career journey in cybersecurity.',
      bgColor: 'bg-accent/10',
      iconColor: 'text-accent',
      features: ['1-on-1 Mentoring', 'Career Guidance', 'Skill Development'],
    },
    {
      icon: MessageSquare,
      title: 'Networking Events',
      description: 'Join meetups, conferences, and networking sessions to build meaningful professional connections.',
      bgColor: 'bg-primary/10',
      iconColor: 'text-primary',
      features: ['Monthly Meetups', 'Annual Conference', 'Online Community'],
    },
    {
      icon: Briefcase,
      title: 'Career Development',
      description: 'Access job opportunities, resume reviews, and interview preparation resources.',
      bgColor: 'bg-accent/10',
      iconColor: 'text-accent',
      features: ['Job Board', 'Resume Help', 'Interview Prep'],
    },
  ];

  return (
    <section id="programs" className="py-20 bg-gradient-to-b from-secondary to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-4">
            What We Offer
          </div>
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
            Our Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive programs designed to support your growth at every stage of your cybersecurity career
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all border-2 hover:border-accent/30">
              <CardContent className="p-8">
                <div className={`w-16 h-16 ${program.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <program.icon className={`w-8 h-8 ${program.iconColor}`} />
                </div>
                
                <h3 className="text-xl text-gray-900 mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-6">{program.description}</p>
                
                <div className="space-y-2 mb-6">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="w-full group-hover:bg-accent/10 group-hover:border-accent">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
