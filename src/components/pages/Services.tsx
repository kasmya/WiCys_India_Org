import { Code, Smartphone, Palette, Search, ShoppingCart, LineChart } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies',
      features: ['Responsive Design', 'Fast Performance', 'SEO Optimized', 'Secure & Scalable'],
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps for iOS and Android',
      features: ['User-Friendly UI', 'Offline Support', 'Push Notifications', 'App Store Ready'],
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that users love',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    },
    {
      icon: <Search className="w-12 h-12" />,
      title: 'SEO Optimization',
      description: 'Improve your search rankings and drive organic traffic',
      features: ['Keyword Research', 'On-Page SEO', 'Link Building', 'Analytics'],
    },
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: 'E-Commerce Solutions',
      description: 'Complete online store setup and management',
      features: ['Payment Integration', 'Inventory Management', 'Order Tracking', 'Marketing Tools'],
    },
    {
      icon: <LineChart className="w-12 h-12" />,
      title: 'Digital Marketing',
      description: 'Grow your business with data-driven marketing strategies',
      features: ['Social Media', 'Email Campaigns', 'Content Marketing', 'PPC Advertising'],
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow"
            >
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-blue-600 text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-xl mb-6 text-blue-100">
            We can create a tailored package that perfectly fits your requirements
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </div>
  );
}
