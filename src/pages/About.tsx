
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProfileCard from '@/components/ProfileCard';
import { Separator } from '@/components/ui/separator';
import { Mail } from 'lucide-react';

const About = () => {
  const handleContactClick = () => {
    window.open("https://calendly.com/tasinmid/30min?month=2025-07", '_blank');
  };

  return (
    <>
      <Navbar />
      
      {/* About Us Section */}
      <section className="min-h-screen py-20 bg-gradient-to-b from-cortex-navy to-cortex-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* About Us Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow">
                About <span className="text-gradient">Us</span>
              </h1>
              <div className="w-24 h-1 bg-cortex-blue mx-auto mb-8"></div>
            </div>

            {/* Enhanced Main Content */}
            <div className="space-y-16">
              {/* Hero Introduction */}
              <div className="text-center max-w-4xl mx-auto">
                <div className="bg-gradient-to-r from-cortex-navy/40 to-cortex-black/40 rounded-3xl p-12 border border-cortex-blue/20 backdrop-blur-sm">
                  <p className="text-3xl md:text-4xl mb-10 text-cortex-white font-medium leading-relaxed">
                    We're not just another AI agency — we build <span className="text-gradient font-semibold">intelligent systems</span> that save time, cut costs, and transform businesses.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                    <div className="bg-cortex-black/30 rounded-2xl p-6 border border-cortex-blue/10">
                      <div className="text-4xl font-bold text-gradient mb-2">50+</div>
                      <p className="text-cortex-gray">Successful Projects</p>
                    </div>
                    <div className="bg-cortex-black/30 rounded-2xl p-6 border border-cortex-teal/10">
                      <div className="text-4xl font-bold text-gradient mb-2">24/7</div>
                      <p className="text-cortex-gray">System Reliability</p>
                    </div>
                    <div className="bg-cortex-black/30 rounded-2xl p-6 border border-cortex-blue/10">
                      <div className="text-4xl font-bold text-gradient mb-2">98%</div>
                      <p className="text-cortex-gray">Client Satisfaction</p>
                    </div>
                  </div>
                  
                  <div className="text-center bg-gradient-to-r from-cortex-blue/20 to-cortex-teal/20 rounded-2xl p-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Make businesses run smarter.</h2>
                    <p className="text-cortex-gray text-lg">This isn't just our tagline — it's our commitment to every client.</p>
                  </div>
                </div>
              </div>

              {/* Two Column Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                {/* Mobile-first Profile Card */}
                <div className="flex justify-center lg:hidden mb-8">
                  <div className="w-full max-w-xs">
                    <ProfileCard
                      name="Tahmid Hasan"
                      title="Founder and CEO"
                      handle="tasinmid"
                      status="Online"
                      contactText="Contact Me"
                      avatarUrl="/lovable-uploads/646020aa-5682-4c1a-b753-5dda628dcbd5.png"
                      showUserInfo={true}
                      enableTilt={true}
                      onContactClick={handleContactClick}
                    />
                  </div>
                </div>

                {/* Left Content */}
                <div className="space-y-6 lg:space-y-8">
                  <div className="bg-gradient-to-br from-cortex-navy/50 to-cortex-black/50 rounded-2xl p-6 lg:p-8 border border-cortex-blue/20">
                    <h3 className="text-xl lg:text-2xl font-bold text-cortex-white mb-4 lg:mb-6">Our Mission</h3>
                    <p className="text-base lg:text-lg text-cortex-gray mb-4 lg:mb-6 leading-relaxed">
                      At <span className="text-cortex-blue font-semibold">Cortex-AI</span>, we specialize in automation development, helping companies streamline operations using custom-built AI tools, chatbots, voice assistants, and workflow automations. Whether you're drowning in repetitive tasks, struggling with lead management, or looking to modernize how your team works, we create tailored AI solutions that just make sense.
                    </p>
                    
                    <p className="text-base lg:text-lg text-cortex-gray leading-relaxed">
                      Founded by a developer who believes in <span className="text-cortex-teal font-semibold">real impact over hype</span>, our mission goes beyond just delivering technology — we transform how businesses operate, making them more efficient, profitable, and competitive.
                    </p>
                  </div>

                  <div className="bg-cortex-black/30 rounded-2xl p-6 lg:p-8 border-l-4 border-cortex-teal">
                    <h4 className="text-cortex-teal font-semibold text-lg lg:text-xl mb-4">Our Core Expertise</h4>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-cortex-blue rounded-full"></div>
                          <span className="text-cortex-white font-medium text-sm lg:text-base">Intelligent Chatbots</span>
                        </div>
                        <p className="text-cortex-gray text-xs lg:text-sm ml-5">Web, WhatsApp, Instagram automation</p>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-cortex-teal rounded-full"></div>
                          <span className="text-cortex-white font-medium text-sm lg:text-base">Workflow Automation</span>
                        </div>
                        <p className="text-cortex-gray text-xs lg:text-sm ml-5">Flowise, n8n, Botpress, Make.com, Zapier</p>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-cortex-blue rounded-full"></div>
                          <span className="text-cortex-white font-medium text-sm lg:text-base">AI Voice Assistants</span>
                        </div>
                        <p className="text-cortex-gray text-xs lg:text-sm ml-5">Vapi, custom voice solutions</p>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-cortex-teal rounded-full"></div>
                          <span className="text-cortex-white font-medium text-sm lg:text-base">Custom AI Tools</span>
                        </div>
                        <p className="text-cortex-gray text-xs lg:text-sm ml-5">Tailored business automation</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop Profile Card */}
                <div className="hidden lg:flex justify-center lg:justify-start">
                  <div className="w-full max-w-sm">
                    <ProfileCard
                      name="Tahmid Hasan"
                      title="Founder and CEO"
                      handle="tasinmid"
                      status="Online"
                      contactText="Contact Me"
                      avatarUrl="/lovable-uploads/646020aa-5682-4c1a-b753-5dda628dcbd5.png"
                      showUserInfo={true}
                      enableTilt={true}
                      onContactClick={handleContactClick}
                    />
                  </div>
                </div>
              </div>

              {/* Industries & Differentiators */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <div className="bg-cortex-navy/30 rounded-2xl p-6 lg:p-8 border border-cortex-blue/20">
                  <h4 className="text-cortex-white font-semibold text-lg lg:text-xl mb-4">Industries We Serve</h4>
                  <div className="flex flex-wrap gap-2 lg:gap-3">
                    {["Startups", "Agencies", "E-commerce", "Education", "Healthcare", "Finance", "Real Estate", "SaaS"].map((industry, index) => (
                      <span key={index} className="bg-cortex-blue/20 text-cortex-blue px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm border border-cortex-blue/30">
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-cortex-navy/30 rounded-2xl p-6 lg:p-8 border border-cortex-teal/20">
                  <h4 className="text-cortex-white font-semibold text-lg lg:text-xl mb-4">What Makes Us Different</h4>
                  <div className="flex flex-wrap gap-2 lg:gap-3">
                    {["Custom solutions", "24/7 reliability", "Proven ROI", "Ongoing support", "No vendor lock-in"].map((feature, index) => (
                      <span key={index} className="bg-cortex-teal/20 text-cortex-teal px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm border border-cortex-teal/30">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center bg-cortex-black/40 rounded-2xl p-6 lg:p-10 border border-cortex-blue/20">
                <h3 className="text-2xl lg:text-3xl font-semibold text-cortex-teal mb-4 animate-pulse-glow">Let's build something powerful together.</h3>
                <p className="text-cortex-gray text-base lg:text-lg mb-6">Ready to transform your business operations with AI?</p>
                <a 
                  href="#contact"
                  className="inline-block bg-cortex-blue hover:bg-opacity-80 text-white font-medium py-3 px-6 lg:px-8 rounded-lg transition-all duration-300 animate-pulse-glow text-sm lg:text-base"
                >
                  Start Your Journey
                </a>
              </div>
            </div>

            <Separator className="my-16" />

            {/* Founder Section */}
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  From the <span className="text-gradient">Founder</span>
                </h2>
              </div>
              
              <div className="space-y-8 text-cortex-gray">
                <div className="text-center">
                  <p className="text-xl font-semibold text-cortex-white mb-2">
                    Founder and CEO<br/>
                    AI Specialist
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <p>
                      I didn't start this agency just to follow trends — I started it because I was tired of seeing businesses stuck in the same loop:
                    </p>
                    
                    <p className="text-center italic text-cortex-teal text-lg font-medium">
                      Too many tools. Too little time. No real system.
                    </p>
                    
                    <p>
                      Before founding this agency, I spent years building over 100+ chatbots and automations for agencies, consultants, and startups. I saw firsthand how AI can completely change the game — when it's actually done right.
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <p>
                      That's why I created <strong className="text-cortex-blue">Cortex-AI</strong>:<br />
                      To bring real, working automation into the hands of businesses that need it — without the fluff.
                    </p>
                    
                    <p>
                      My background as a developer, strategist, and problem-solver allows me to translate messy problems into clean systems that get results. I personally lead every project, making sure it's built with care, tested with real users, and aligned with what the business truly needs.
                    </p>
                    
                    <p className="text-xl font-medium text-cortex-white">
                      If you're tired of doing everything manually — let's change that.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Separator className="my-16" />

            {/* Contact the Founder Section */}
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Contact the <span className="text-gradient">Founder</span>
                </h2>
                <p className="text-cortex-gray text-lg">
                  Connect with Tahmid directly for personalized consultation and strategic discussions.
                </p>
              </div>
              
              <div className="bg-cortex-navy/30 rounded-2xl p-8 border border-cortex-blue/20">
                <div className="text-center mb-8">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 ring-2 ring-cortex-blue">
                    <img 
                      src="/lovable-uploads/96d1ada4-96f3-47ef-ad5f-defca007b098.png" 
                      alt="Tahmid Hasan - Founder & CEO" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-cortex-white mb-2">Tahmid Hasan</h3>
                  <p className="text-cortex-gray">Founder & CEO, Cortex-AI</p>
                </div>

                <div className="flex justify-center space-x-6 mb-8">
                  <a 
                    href="https://www.linkedin.com/in/tasinmid/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#0077B5] hover:bg-[#005885] text-white px-4 py-2 rounded-lg transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                  <a 
                    href="mailto:tasinmid@cortex-ai.dev" 
                    className="flex items-center gap-2 bg-cortex-gray hover:bg-cortex-gray/80 text-white px-4 py-2 rounded-lg transition-all duration-300"
                  >
                    <Mail className="w-5 h-5" />
                    Email
                  </a>
                  <a 
                    href="https://www.facebook.com/tasinmid" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#1877F2] hover:bg-[#166FE5] text-white px-4 py-2 rounded-lg transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Facebook
                  </a>
                  <a 
                    href="https://www.instagram.com/tasinmid_official/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-80 text-white px-4 py-2 rounded-lg transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Instagram
                  </a>
                </div>

                <div className="text-center">
                  <a 
                    href="https://calendly.com/tasinmid/30min" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-cortex-blue hover:bg-opacity-80 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 animate-pulse-glow"
                  >
                    Schedule a Call with Tahmid
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book a Call Section */}
      <div className="py-12 bg-cortex-navy">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-cortex-white mb-4">Ready to Work Together?</h3>
            <p className="text-cortex-gray mb-6">Let's discuss how we can help transform your business with AI.</p>
            <a 
              href="https://calendly.com/tasinmid/30min" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-cortex-blue hover:bg-opacity-80 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 animate-pulse-glow"
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default About;
