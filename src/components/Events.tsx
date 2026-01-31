import { Calendar, Clock, MapPin } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Events() {
  const events = [
    {
      title: 'Cybersecurity Leadership Summit 2025',
      date: 'November 15-16, 2025',
      time: '9:00 AM - 5:00 PM IST',
      location: 'Bangalore, India',
      type: 'Conference',
      image: 'https://images.unsplash.com/photo-1573497161249-42447f9f6706?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29uZmVyZW5jZSUyMHdvbWVufGVufDF8fHx8MTc2MDA4OTE5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      status: 'Upcoming',
    },
    {
      title: 'Web Application Security Workshop',
      date: 'October 25, 2025',
      time: '2:00 PM - 6:00 PM IST',
      location: 'Virtual',
      type: 'Workshop',
      image: 'https://images.unsplash.com/photo-1691435828932-911a7801adfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29ya3xlbnwxfHx8fDE3NjAwNjYyMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      status: 'Open',
    },
    {
      title: 'Monthly Networking Meetup',
      date: 'October 18, 2025',
      time: '6:00 PM - 8:00 PM IST',
      location: 'Mumbai, India',
      type: 'Meetup',
      image: 'https://images.unsplash.com/photo-1700616270842-0e14a8c42004?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NjAwMjM4ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      status: 'Open',
    },
  ];

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-4">
            Events
          </div>
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
            Upcoming Events
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join us for workshops, conferences, and networking opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all group">
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className={`${
                    event.status === 'Upcoming' ? 'bg-primary' : 'bg-accent'
                  } hover:bg-opacity-90 text-white`}>
                    {event.status}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-3">
                  <Badge variant="outline" className="text-primary border-primary">
                    {event.type}
                  </Badge>
                </div>
                
                <h3 className="text-lg text-gray-900 mb-4">{event.title}</h3>
                
                <div className="space-y-2 mb-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    {event.location}
                  </div>
                </div>

                <Button className="w-full bg-accent hover:bg-accent/90 text-white">
                  Register Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="hover:bg-primary/10 hover:border-primary hover:text-primary">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
}
