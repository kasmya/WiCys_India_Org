import { Calendar, Clock, MapPin, X } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useState } from 'react';
import { registerForEvent } from '../../utils/api';

export function WiCySEvents() {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedEvent) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await registerForEvent({
        eventTitle: selectedEvent,
        ...formData
      });
      setSubmitStatus({ 
        type: 'success', 
        message: 'Successfully registered! You will receive a confirmation email soon.' 
      });
      setFormData({ name: '', email: '', phone: '' });
      setTimeout(() => {
        setSelectedEvent(null);
        setSubmitStatus(null);
      }, 3000);
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Failed to register. Please try again later.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const events = [
    {
      title: 'Cybersecurity Leadership Summit',
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
    <div className="pt-16">
      <section className="py-20 bg-white">
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

                  <Button 
                    onClick={() => setSelectedEvent(event.title)}
                    className="w-full bg-accent hover:bg-accent/90 text-white"
                  >
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

      {/* Registration Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl text-gray-900 mb-2">Register for Event</h3>
                  <p className="text-sm text-gray-600">{selectedEvent}</p>
                </div>
                <button
                  onClick={() => {
                    setSelectedEvent(null);
                    setSubmitStatus(null);
                  }}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleRegister} className="space-y-4">
                <div>
                  <label htmlFor="reg-name" className="block mb-2 text-sm text-gray-700">
                    Name *
                  </label>
                  <Input
                    id="reg-name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="reg-email" className="block mb-2 text-sm text-gray-700">
                    Email *
                  </label>
                  <Input
                    id="reg-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="reg-phone" className="block mb-2 text-sm text-gray-700">
                    Phone (Optional)
                  </label>
                  <Input
                    id="reg-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 1234567890"
                  />
                </div>

                {submitStatus && (
                  <div className={`p-3 rounded-lg text-sm ${
                    submitStatus.type === 'success' 
                      ? 'bg-accent/10 text-gray-900 border border-accent/20' 
                      : 'bg-destructive/10 text-destructive border border-destructive/20'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}

                <div className="flex gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setSelectedEvent(null);
                      setSubmitStatus(null);
                    }}
                    className="flex-1"
                    disabled={isSubmitting}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 bg-accent hover:bg-accent/90 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Registering...' : 'Register'}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}