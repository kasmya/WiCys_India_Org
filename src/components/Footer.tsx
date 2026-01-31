import { Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router';
import logo from 'figma:asset/86dcb2bb7815fe1b57995dd04e7332d33eafa19b.png';

export function Footer() {
  const footerLinks = {
    'Quick Links': [
      { name: 'About Us', href: '/about' },
      { name: 'Programs', href: '/programs' },
      { name: 'Events', href: '/events' },
      { name: 'Community', href: '/community' },
    ],
    'Resources': [
      { name: 'Blog', href: 'https://www.wicys.org/about/wicys-stories/' },
      { name: 'News', href: 'https://www.wicys.org/events/' },
      { name: 'FAQs', href: 'https://www.wicys.org/events/wicys-2026-faq/' },
      { name: 'Career Resources', href: 'https://www.wicys.org/resources/resources/' },
    ],
    'Get Involved': [
      { name: 'Membership', href: 'https://sites.google.com/wicys.org/wicys-india/join-us' },
      { name: 'Volunteer', href: 'https://sites.google.com/wicys.org/wicys-india/internship-program' },
      { name: 'Partner With Us', href: 'https://sites.google.com/wicys.org/wicys-india/partnership' },
      { name: 'Donate', href: 'https://sites.google.com/wicys.org/wicys-india/partnership' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <img src={logo} alt="WiCyS India - Women in CyberSecurity" className="h-10 mb-4 brightness-[1.2]" />
            </div>
            <p className="text-sm text-gray-400 mb-4 max-w-sm">
              Empowering women in cybersecurity across India through community, education, and opportunity.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:india@wicys.org" className="hover:text-white transition-colors">
                  india@wicys.org
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span>India (Multiple Chapters)</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white mb-4">{category}</h4>
              <ul className="space-y-2 text-sm">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith('/') ? (
                      <Link
                        to={link.href}
                        className="hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="hover:text-white transition-colors"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div>
              © 2025 WiCyS India. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="https://www.wicys.org/privacy-policy/" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="https://www.wicys.org/terms-of-use/" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="https://www.wicys.org/code-of-conduct/" className="hover:text-white transition-colors">
                Code of Conduct
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}