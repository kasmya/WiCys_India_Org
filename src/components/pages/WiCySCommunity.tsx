import { Quote } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { ImageWithFallback } from '../figma/ImageWithFallback';
export function WiCySCommunity() {
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

  const boardMembers = [
    {
      name: 'Lekshmi M Nair',
      role: 'President',      
      image: 'https://lh3.googleusercontent.com/sitesv/APaQ0SRtWzMwMxjTABGeDFvP1I7ixyPOdrQ88O3OtPFdfHRvQuLunuO4Wedn30Gj8MIrJspddxynjAJ8Gf2juDmWBxASwcDIUwxTCnmPT0G0Z1tIW_v3XmqR-5f4j9BSFZQz_yLHnE-cBgVNu91viYtJqhfehIj73BVaJubMl_oe3kk3K0hTedqRAKLQM-8VIYlJaL6TZBxNphYkkD0=w1280',
    },
    {
      name: 'Sarita Padmini',
      role: 'Vice President',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQGXMcSNtt1JRA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1715624064744?e=1771459200&v=beta&t=vJLeNeUtltfjXYuBC0NrT1uknNeFid_zHdZ0XrLKm-Q',
    },
    {
      name: 'Dr . Abhilasha Vyas',
      role: 'Secretary',
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQF0xqyeJAZlgg/profile-displayphoto-shrink_400_400/B4DZRoRDu5GkAk-/0/1736916090560?e=1771459200&v=beta&t=zuQFw8X8QbHSWX0cOL51GlGXbKXT2sB_rGWHgOXVHhU',
    },
    {
      name: 'Maj Janhavi Vij',
      role: 'Treasurer',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQHzAaPyk9_zSg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718705298246?e=1771459200&v=beta&t=-VWHkrT1a8CHlCejknIDOFXpFmLcDR0M5R9DrEqXV1U',
    },
    {
      name: 'Sabna Sainudeen',
      role: 'Advisor',
      image: 'https://media.licdn.com/dms/image/v2/C5603AQEVs-OoORArDA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1598682453564?e=1771459200&v=beta&t=t--ORQ7NqeFgFfq3x_rgNMEkkILTFtvj6g7dItrSEFI',
    },
    {
      name: 'Kavitha Srinivasulu',
      role: 'Advisor',
      image: 'https://lh3.googleusercontent.com/sitesv/APaQ0STNg3Dwhe_8AhXvsSdPzRpuefFiM165gPDEHz-q_KZsbxENTcooAZwW13jgB9fyMcA3eP8LwcX3bHGOYEOZRFYGra3iOt5Bz__fpMoqO-j4_snxl72plC97QcW8Ho8vKlIePin_VDn7kzSod8Xr7y_BD9yf2FzI82lE0nAdfO7K7ahUsNHgFxcgJFQ4bzdk12FJyBCuSfwNbVjUvhczqISXZvIGoUtF_EpmWgI=w1280',
    },
    {
      name: 'Preeti Bhisikar',
      role: 'Advisor',
      image: 'https://lh3.googleusercontent.com/sitesv/APaQ0SQSGv8aKJxxEw246OyKSNYmZ1RIm5eIYcEWoAukdlq_YBE4c09IVEPF5T4BJAG0WVbarmW6SPdflpV4JW2VkZa-hjgYlyCT0GoOmyLtN8FQ9VSr2DB5XomlyZVFWAdRebiWf0EowRcBuTWniciPS5aFisUXzJhxNEE_0m-2NJP1Po18wiyOfL3UYDpUIyMIQPX5vnGS_hkuuUs=w1280',
    },
  ];

  const workingGroup = [
    {
      name: 'Apoorva Singh',
      role: 'Events Lead',
      image: 'https://lh3.googleusercontent.com/sitesv/APaQ0SSEOQRlOuM1qh3S_wpqzHThsLZx1NQvCTTr5d-ed6Jb3QbXxr8WsLZQR1oJw6e3kkObkwvqSP1TgEvX5SsU3bRG2oR2AhUTawe44lVwVNZaWqilS_MoobffqZeVkR_MqPPBgbWFcsBCQGddf-aIb5Jk7PFyZMasDe0muImsjtuCGkyfCLNEdM88v6dzJTZpsCX4P-k4Nbz5auQqvjQZAR_RH2bez3ajLIfvdTU=w1280',
    },
    {
      name: 'Zeba Shamim',
      role: 'Membership Coordinator',
      image: 'https://lh3.googleusercontent.com/sitesv/APaQ0ST1KkrEB0Af3fvU5EuE5V2TKFtSvUCpcgH_2iHyhewKKHM9rfM_dB75WhoCtfodtczmZ9o0UqpS-81vzwI4x5tRIgIpquiWrhmFfWSD8t-LYD2XZ09WCb_oVG9pvaCIhlKKnhP_F9QD3KIJ-YxRkiTBBIB-eXH_uBZ_pomKeJ3dT4OZVzz0koYkBOPv5XHN6nvsGLywMTDI2XEpPYUBQ8F9F-n0xGsPOi2fxE8=w1280',
    },
    {
      name: 'Vijaya Chundawat',
      role: 'Communications Manager',
      image: 'https://lh3.googleusercontent.com/sitesv/APaQ0STNEOSlm30fCm1j84R6hqbZJcgHbNS5zJPeBoauf0cbKJtqQYZkzRxK13c84lLA4rF4YIDKLjUcpH2AmYgKhATq4Dzz4_N95RAcs7en_Mqi0h1_9tF9rhqiVKLdDNP-SrWtU-eGahudo3np2jrQ0ltyW2OmgIpxGjo8HrfZvvZVd-hjx6ItwzKQ9GxcuUjJ_266X-xJJtAwrRsTR0w_cF3xCW0K4L4YaqVpc6g=w1280',
    },
    {
      name: 'Nishtha Kamra',
      role: 'Program Coordinator',
      image:'https://lh3.googleusercontent.com/sitesv/APaQ0SQ7JKm6kKo_UJkxa323htXPNHAOA8wAVP9-AZL09Nhjm53tb_pWa8VA3GVgTmtW_YDx8PM2I3FtG_HpNuPmyvqPNJje0E_IkE_hnEMgtSPYKyIyJHkgOwmFLYCUXC-iwEEA_1SH9xKU7fQELDKwpHVn9pB8QQaHugMzPw58XqrfQcPYVLqDxQkQEkVvTsQ4m0Mp3Lu6B4mPDcE6zQTo-_lKpaBsf7wsulnZ=w1280',
    },
  ];

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-b from-secondary to-white">
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

          {/* Board Members Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl text-gray-900 mb-3">Our Board Members</h3>
              <p className="text-gray-600">Meet the leaders guiding our mission</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {boardMembers.map((member, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all group">
                  <div className="relative h-74 overflow-hidden">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4 text-center bg-white">
                    <h4 className="text-gray-900 mb-1">{member.name}</h4>
                    <p className="text-sm text-primary">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Working Group Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl text-gray-900 mb-3">Our Working Group Members</h3>
              <p className="text-gray-600">Meet the Dedicated team members driving our initiatives</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {workingGroup.map((member, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all group">
                  <div className="relative h-74 overflow-hidden">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4 text-center bg-white">
                    <h4 className="text-gray-900 mb-1">{member.name}</h4>
                    <p className="text-sm text-primary">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
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
    </div>
  );
}