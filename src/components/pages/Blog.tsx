import { Calendar, User, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function Blog() {
  const posts = [
    {
      title: '10 Web Design Trends to Watch in 2026',
      excerpt: 'Discover the latest design trends that are shaping the future of web development',
      author: 'Sarah Johnson',
      date: 'January 25, 2026',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1760071744047-5542cbfda184?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHBvcnRmb2xpb3xlbnwxfHx8fDE3Njk0ODQ0MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      readTime: '5 min read',
    },
    {
      title: 'The Ultimate Guide to React Performance',
      excerpt: 'Learn how to optimize your React applications for maximum speed and efficiency',
      author: 'Michael Chen',
      date: 'January 20, 2026',
      category: 'Development',
      image: 'https://images.unsplash.com/photo-1621743018966-29194999d736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2OTQ3OTAwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      readTime: '8 min read',
    },
    {
      title: 'SEO Best Practices for 2026',
      excerpt: 'Stay ahead of the competition with these proven SEO strategies',
      author: 'Emma Williams',
      date: 'January 15, 2026',
      category: 'Marketing',
      image: 'https://images.unsplash.com/photo-1496180470114-6ef490f3ff22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY5NDgwNzc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      readTime: '6 min read',
    },
    {
      title: 'Building Scalable Mobile Apps',
      excerpt: 'Essential architecture patterns for creating apps that grow with your business',
      author: 'David Park',
      date: 'January 10, 2026',
      category: 'Mobile',
      image: 'https://images.unsplash.com/photo-1739298061740-5ed03045b280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3Njk0NzQ2ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      readTime: '7 min read',
    },
    {
      title: 'UI/UX Design Principles That Matter',
      excerpt: 'Master the fundamentals of creating user-centered digital experiences',
      author: 'Lisa Anderson',
      date: 'January 5, 2026',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1760071744047-5542cbfda184?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHBvcnRmb2xpb3xlbnwxfHx8fDE3Njk0ODQ0MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      readTime: '5 min read',
    },
    {
      title: 'Cloud Infrastructure for Modern Apps',
      excerpt: 'Choosing the right cloud solution for your application needs',
      author: 'James Taylor',
      date: 'December 30, 2025',
      category: 'Development',
      image: 'https://images.unsplash.com/photo-1621743018966-29194999d736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2OTQ3OTAwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      readTime: '9 min read',
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, tutorials, and updates from our team of experts
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="h-64 md:h-auto">
                <ImageWithFallback
                  src={posts[0].image}
                  alt={posts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full mb-4 w-fit">
                  Featured
                </div>
                <h2 className="text-3xl font-bold mb-4">{posts[0].title}</h2>
                <p className="text-gray-600 mb-4">{posts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-gray-500 text-sm mb-6">
                  <span className="flex items-center gap-1">
                    <User size={16} /> {posts[0].author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={16} /> {posts[0].date}
                  </span>
                </div>
                <button className="flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all">
                  Read More <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-2">
                  {post.category}
                </div>
                <h3 className="text-xl font-semibold mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
                  <span className="flex items-center gap-1">
                    <User size={14} /> {post.author}
                  </span>
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={14} className="text-gray-400" />
                  <span className="text-gray-500 text-sm">{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 bg-blue-600 text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-xl mb-6 text-blue-100">
            Get the latest articles and insights delivered to your inbox
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
