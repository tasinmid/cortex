
import React, { useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import Navbar from '@/components/Navbar';
import BrainAnimation from '@/components/BrainAnimation';
import AnimatedSection from '@/components/AnimatedSection';
import ServiceCard from '@/components/ServiceCard';
import ProcessStep from '@/components/ProcessStep';
import TestimonialCard from '@/components/TestimonialCard';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import TrustedBy from '@/components/TrustedBy';
import TiltedServiceCard from '@/components/TiltedServiceCard';

// Import icons
import { UserRound, Zap, Bot, Database, BarChart, Wrench, FileText, Bell } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

const Index = () => {
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Update the document title
    document.title = "Cortex-AI - Your AI Automation & Agent Partner";
  }, []);
  
  // Section header with animated underline
  const SectionHeader = ({ title, gradient }: { title: string, gradient: string }) => {
    return (
      <div className="relative inline-block group mb-4">
        <h2 className="text-3xl md:text-4xl font-bold text-shadow">
          {title.split(' ').map((word, i, arr) => 
            i === arr.length - 1 ? (
              <span key={i} className="text-gradient"> {word}</span>
            ) : (
              <span key={i}>{word} </span>
            )
          )}
        </h2>
        <div className="absolute -bottom-2 left-0 w-1/4 h-0.5 bg-cortex-blue transition-all duration-300 group-hover:w-full"></div>
      </div>
    );
  };
  
  const services = [
    {
      title: "Personalized Consultation",
      description: "Web, WhatsApp, and Instagram chatbots that handle customer inquiries 24/7.",
      icon: <UserRound size={48} />
    },
    {
      title: "Channel Automations",
      description: "Seamlessly integrate your messaging platforms for automated workflows across channels.",
      icon: <Zap size={48} />
    },
    {
      title: "AI Agents",
      description: "Intelligent agents that handle lead nurturing, sales, and support tasks.",
      icon: <Bot size={48} />
    },
    {
      title: "Backend Automations",
      description: "Powerful workflow automation using n8n, Zapier, and Make platforms.",
      icon: <Database size={48} />
    },
    {
      title: "Custom Tool Automations",
      description: "Connect your systems with custom tools and APIs for specialized automation.",
      icon: <Wrench size={48} />
    },
    {
      title: "Custom Training & Support",
      description: "Personalized training and ongoing support for your team and AI systems.",
      icon: <BarChart size={48} />
    },
    {
      title: "Automated Reporting",
      description: "Scheduled data processing and reporting systems that compile information without manual effort.",
      icon: <FileText size={48} />
    },
    {
      title: "Real-time Notifications",
      description: "Custom alert systems that notify the right people at the right time when important events occur.",
      icon: <Bell size={48} />
    }
  ];
  
  const processSteps = [
    {
      number: "1",
      title: "Discovery Call",
      description: "We understand your business, goals, and existing systems. No tech jargon — just real conversations."
    },
    {
      number: "2",
      title: "Strategy & Proposal",
      description: "We walk you through our recommended solutions in a clear and actionable plan."
    },
    {
      number: "3",
      title: "Solution Agreement",
      description: "Finalize the offer, timelines, and deliverables in a collaborative session."
    },
    {
      number: "4",
      title: "Build & Deploy",
      description: "We develop, test, and launch your AI chatbot, automation, or agent — keeping you in the loop."
    },
    {
      number: "5",
      title: "Ongoing Care & Optimization",
      description: "We don't disappear. We monitor performance, optimize regularly, and provide full support."
    }
  ];
  
  const testimonials = [
    {
      quote: "Working with Cortex-AI was a turning point for us. Their AI agent reduced our customer response time by over 80%, and their team was with us every step of the way.",
      author: "Sarah N.",
      position: "Operations Director, Trust Immigration Consultant"
    },
    {
      quote: "Cortex-AI didn't just deliver a chatbot — they created a digital team member. We've streamlined our sales pipeline and improved customer experience across channels.",
      author: "James T.",
      position: "CEO, Evergrow digital"
    },
    {
      quote: "The automation Cortex built has saved us hundreds of hours. What really impressed me was their long-term support — they actually care.",
      author: "Leila K.",
      position: "Ecom Manager, Wannan car rental agency"
    }
  ];
  
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section 
        id="home" 
        className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-hero-pattern py-16"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-cortex-navy to-cortex-black opacity-90 z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-16">
            <div className={`${isMobile ? "order-2" : "order-2 lg:order-1"}`}>
              <h1 className="text-3xl md:text-6xl font-bold mb-4 text-shadow opacity-0 animate-fade-in-up" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
                Build AI that works for you — <span className="text-gradient">24/7</span>
              </h1>
              
              <p className="text-cortex-gray text-lg md:text-xl mb-8 max-w-xl opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                Cortex-AI helps businesses scale smarter through custom chatbots, automation systems, and AI agents tailored to your needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
                <a 
                  href="https://calendly.com/tasinmid/30min" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cortex-blue px-8 py-3 rounded text-cortex-white font-medium hover:bg-opacity-80 transition-all duration-300 text-center animate-pulse-glow"
                >
                  Book a Discovery Call
                </a>
                
                <a 
                  href="#contact" 
                  className="border border-cortex-navy bg-transparent px-8 py-3 rounded text-cortex-white font-medium hover:border-cortex-blue transition-all duration-300 text-center"
                >
                  Talk to an Expert
                </a>
              </div>
            </div>
            
            <div className={`${isMobile ? "order-1 mb-8" : "order-1 lg:order-2"} flex justify-center`}>
              <BrainAnimation />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-cortex-black to-transparent"></div>
      </section>
      
      {/* Trusted By Section */}
      <TrustedBy />
      
      {/* Services Section */}
      <AnimatedSection id="services" className="py-20 bg-cortex-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <SectionHeader title="Services We Offer" gradient="text-gradient" />
            <p className="text-cortex-gray text-lg max-w-2xl mx-auto">
              Comprehensive AI solutions designed to transform your business operations and customer experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <TiltedServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                delay={index * 100}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="/services"
              className="inline-block bg-cortex-blue hover:bg-opacity-80 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 animate-pulse-glow"
            >
              Discover Services
            </a>
          </div>
        </div>
      </AnimatedSection>
      
      {/* Process Section */}
      <AnimatedSection id="process" className="py-20 bg-gradient-radial from-cortex-navy to-cortex-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <SectionHeader title="Our Process" gradient="text-gradient" />
            <p className="text-cortex-gray text-lg max-w-2xl mx-auto">
              A streamlined approach to turning your challenges into AI-powered solutions.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
                delay={index * 150}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="/process"
              className="inline-block bg-cortex-teal hover:bg-opacity-80 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </AnimatedSection>
      
      {/* Testimonials Section */}
      <AnimatedSection id="testimonials" className="py-20 bg-gradient-to-br from-cortex-navy via-cortex-black to-cortex-navy">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <SectionHeader title="Client Success Stories" gradient="text-gradient" />
            <p className="text-cortex-gray text-lg max-w-2xl mx-auto">
              Real results from real businesses that transformed their operations with our AI solutions.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-cortex-navy/50 to-cortex-black/50 p-8 border border-cortex-blue/20 hover:border-cortex-blue/40 transition-all duration-500 hover:shadow-2xl hover:shadow-cortex-blue/10"
                  style={{ 
                    animationDelay: `${index * 150}ms`,
                    animationFillMode: 'forwards'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cortex-blue/5 to-cortex-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start mb-6">
                      <div className="flex text-cortex-teal">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    
                    <blockquote className="text-cortex-gray text-lg mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cortex-blue to-cortex-teal flex items-center justify-center text-white font-bold mr-4">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="text-cortex-white font-semibold">{testimonial.author}</div>
                        <div className="text-cortex-gray text-sm">{testimonial.position}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <a 
                href="/testimonials"
                className="inline-block bg-cortex-teal hover:bg-opacity-80 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300"
              >
                View All Testimonials
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>
      
      {/* Section Separator */}
      <div className="bg-gradient-to-b from-cortex-black via-cortex-navy to-cortex-black py-8">
        <div className="container mx-auto px-6">
          <Separator className="bg-gradient-to-r from-transparent via-cortex-blue to-transparent opacity-30" />
        </div>
      </div>
      
      {/* Contact Section */}
      <AnimatedSection id="contact" className="py-24 bg-gradient-to-b from-cortex-black via-cortex-navy to-cortex-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="relative inline-block group mb-6 opacity-0 animate-fade-in-left" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
                <h2 className="text-3xl md:text-4xl font-bold text-shadow">
                  Talk to Us — <span className="text-gradient">Let's Collaborate</span>
                </h2>
                <div className="absolute -bottom-2 left-0 w-1/4 h-0.5 bg-cortex-teal transition-all duration-300 group-hover:w-full"></div>
              </div>
              
              <p className="text-cortex-gray text-lg mb-10 opacity-0 animate-fade-in-left" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                Ready to transform your business with AI? Get in touch with our team of experts and let's discuss how we can help you achieve your goals.
              </p>
              
              <div className="glass-card rounded-lg p-8 mb-8 opacity-0 animate-fade-in-left" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
                <h3 className="text-xl font-semibold mb-4 text-cortex-white">Still thinking?</h3>
                <p className="text-cortex-gray mb-6">
                  Let's chat and see how we can transform your business with AI.
                </p>
                <a 
                  href="https://calendly.com/tasinmid/30min" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-cortex-blue hover:bg-opacity-80 text-white font-medium py-3 px-6 rounded transition-all duration-300 animate-pulse-glow"
                >
                  Book a Call
                </a>
              </div>
            </div>
            
            <div>
              <div className="glass-card rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-6 text-cortex-white text-center">Send us a message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
      
      {/* Book a Call Section */}
      <div className="py-12 bg-cortex-navy">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-cortex-white mb-4">Ready to Transform Your Business?</h3>
            <p className="text-cortex-gray mb-6">Schedule a free consultation to discuss your AI automation needs.</p>
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

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Index;
