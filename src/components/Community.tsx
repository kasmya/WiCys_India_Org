import { Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';

export function Community() {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Security Analyst',
      company: 'Tech Corp',
      content: 'WiCyS India has been instrumental in my career growth. The mentorship program connected me with industry leaders who guided me through challenging career decisions.',
      initials: 'PS',
    },
    {
      name: 'Anjali Reddy',
      role: 'Cybersecurity Consultant',
      company: 'SecureNet',
      content: 'The workshops and training sessions are top-notch. I\'ve gained practical skills that I use every day in my role. The community support is incredible!',
      initials: 'AR',
    },
    {
      name: 'Kavya Patel',
      role: 'Information Security Manager',
      company: 'Global Bank',
      content: 'Being part of WiCyS India opened doors I never knew existed. The networking opportunities and career resources helped me land my dream job.',
      initials: 'KP',
    },
  ];

  const stats = [
    { value: '500+', label: 'Active Members' },
    { value: '50+', label: 'Events Hosted' },
    { value: '100+', label: 'Mentorship Pairs' },
    { value: '20+', label: 'Partner Organizations' },
  ];

  return (
    <section id="community" className="py-20 bg-gradient-to-b from-secondary to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-4">
            Community
          </div>
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
            Join a Thriving Community
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from our members about their experiences and growth with WiCyS India
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 hover:border-accent/30 hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <p className="text-gray-700 mb-6">{testimonial.content}</p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-white">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Box */}
        <Card className="bg-primary border-0 text-white overflow-hidden relative">
          <CardContent className="p-8 sm:p-12 text-center relative z-10">
            <h3 className="text-2xl sm:text-3xl mb-4">Ready to Join Our Community?</h3>
            <p className="text-lg opacity-95 mb-8 max-w-2xl mx-auto">
              Connect with like-minded professionals, access exclusive resources, and take your cybersecurity career to the next level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors">
                Become a Member
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </CardContent>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
        </Card>
      </div>
    </section>
  );
}
