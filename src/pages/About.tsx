
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProfileCard from '@/components/ProfileCard';
import { Separator } from '@/components/ui/separator';

const About = () => {
  const handleContactClick = () => {
    window.open("https://calendly.com/tasinmid/30min?month=2025-07", '_blank');
  };

  return (
    <>
      <Navbar />
      
      {/* About Us Section */}
      <section className="min-h-screen py-20 bg-gradient-to-b from-cortex-navy to-cortex-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* About Us Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow">
                About <span className="text-gradient">Us</span>
              </h1>
              <div className="w-24 h-1 bg-cortex-blue mx-auto mb-8"></div>
            </div>

            {/* Main Content */}
            <div className="prose prose-lg max-w-none text-cortex-gray leading-relaxed">
              <p className="text-xl mb-8">
                We're not just another AI agency — we build intelligent systems that save time, cut costs, and grow businesses.
              </p>
              
              <p className="mb-6">
                At <span className="text-cortex-blue font-semibold">Cortex-AI</span>, we specialize in automation development, helping companies streamline operations using custom-built AI tools, chatbots, voice assistants, and workflow automations. Whether you're drowning in repetitive tasks, struggling with lead management, or looking to modernize how your team works, we create tailored AI solutions that just make sense.
              </p>

              <p className="mb-6">
                Founded by a developer who believes in real impact over hype, our mission is simple:
              </p>
              
              <div className="text-center my-12">
                <h2 className="text-3xl font-bold text-gradient">Make businesses run smarter.</h2>
              </div>

              <p className="mb-6">
                From startups to agencies, e-commerce to education — we've helped teams automate everything from customer support to internal workflows using platforms like Flowise, n8n, Botpress, Make.com, Vapi, and more.
              </p>

              <p className="mb-12 text-xl font-medium text-cortex-white">
                No fluff. No complicated jargon. Just smart systems that do the work for you — 24/7.
              </p>

              <div className="text-center mb-16">
                <h3 className="text-2xl font-semibold text-cortex-teal mb-4">Let's build something powerful together.</h3>
              </div>
            </div>

            <Separator className="my-16" />

            {/* Founder Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  From the <span className="text-gradient">Founder</span>
                </h2>
                
                <div className="space-y-6 text-cortex-gray">
                  <p>
                    <strong className="text-cortex-white">Tahmid Hasan — Founder & CEO</strong>
                  </p>
                  
                  <p>
                    I didn't start this agency just to follow trends — I started it because I was tired of seeing businesses stuck in the same loop:
                  </p>
                  
                  <p className="text-center italic text-cortex-teal">
                    Too many tools. Too little time. No real system.
                  </p>
                  
                  <p>
                    Before founding this agency, I spent years building over 100+ chatbots and automations for agencies, consultants, and startups. I saw firsthand how AI can completely change the game — when it's actually done right.
                  </p>
                  
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
              
              {/* Profile Card */}
              <div className="flex justify-center">
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
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default About;
