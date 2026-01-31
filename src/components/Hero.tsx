import { ArrowRight, Shield, Users, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-b from-[#F7F7F7] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#6B2F90]/10 rounded-full">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-primary">Empowering Women in CyberSecurity</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900">
                Building India's Future in <span className="text-primary">CyberSecurity</span>
              </h1>
              <p className="text-lg text-gray-600">
                Join a thriving community of women professionals, students, and enthusiasts shaping the future of cybersecurity in India. Connect, learn, and grow together.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                Become a Member
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => {
                  const element = document.querySelector('#about');
                  if (element) {
                    const headerOffset = 64;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Members</div>
              </div>
              <div>
                <div className="text-3xl text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Events</div>
              </div>
              <div>
                <div className="text-3xl text-gray-900">20+</div>
                <div className="text-sm text-gray-600">Partners</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://plus.unsplash.com/premium_photo-1742859761436-19e1dded4780?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29tZW4lMjB0ZWFtJTIwaW4lMjB0ZWNofGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"
                alt="Women in technology team"
                className="w-full h-auto"
              />
            </div>

            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-gray-900">Active Community</div>
                  <div className="text-sm text-gray-600">Growing Daily</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-gray-900">Expert Led</div>
                  <div className="text-sm text-gray-600">Industry Leaders</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
