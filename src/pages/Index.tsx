
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

// Import icons
import { MessageSquare, Zap, Bot, Database, BarChart, Wrench } from 'lucide-react';

const Index = () => {
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Update the document title
    document.title = "Cortex.ai - Your AI Automation & Agent Partner";
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
      title: "AI Chatbots",
      description: "Web, WhatsApp, and Instagram chatbots that handle customer inquiries 24/7.",
      icon: <MessageSquare size={48} />
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
      quote: "Working with Cortex.ai was a turning point for us. Their AI agent reduced our customer response time by over 80%, and their team was with us every step of the way.",
      author: "Sarah N.",
      position: "Operations Director, Swift Rentals"
    },
    {
      quote: "Cortex.ai didn't just deliver a chatbot — they created a digital team member. We've streamlined our sales pipeline and improved customer experience across channels.",
      author: "James T.",
      position: "CEO, UrbanRide Solutions"
    },
    {
      quote: "The automation Cortex built has saved us hundreds of hours. What really impressed me was their long-term support — they actually care.",
      author: "Leila K.",
      position: "Ecom Manager, FlowWear"
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
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow opacity-0 animate-fade-in-up" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
                Build AI that works for you — <span className="text-gradient">24/7</span>
              </h1>
              
              <p className="text-cortex-gray text-lg md:text-xl mb-8 max-w-xl opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                Cortex.ai helps businesses scale smarter through custom chatbots, automation systems, and AI agents tailored to your needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
                <a 
                  href="#contact" 
                  className="bg-cortex-blue px-8 py-3 rounded text-cortex-white font-medium hover:bg-opacity-80 transition-all duration-300 text-center animate-pulse-glow"
                >
                  Book a Discovery Call
                </a>
                
                <a 
                  href="#process" 
                  className="border border-cortex-navy bg-transparent px-8 py-3 rounded text-cortex-white font-medium hover:border-cortex-blue transition-all duration-300 text-center"
                >
                  Talk to an Expert
                </a>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 flex justify-center">
              <BrainAnimation />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-cortex-black to-transparent"></div>
      </section>
      
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
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                delay={index * 100}
              />
            ))}
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
        </div>
      </AnimatedSection>
      
      {/* Testimonials Section */}
      <AnimatedSection id="testimonials" className="py-20 bg-cortex-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <SectionHeader title="Client Testimonials" gradient="text-gradient" />
            <p className="text-cortex-gray text-lg max-w-2xl mx-auto">
              Don't just take our word for it — see what our clients have to say about working with Cortex.ai.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                position={testimonial.position}
                delay={index * 150}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>
      
      {/* Contact Section */}
      <AnimatedSection id="contact" className="py-20 bg-gradient-to-b from-cortex-navy to-cortex-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="relative inline-block group mb-4 opacity-0 animate-fade-in-left" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
                <h2 className="text-3xl md:text-4xl font-bold text-shadow">
                  Talk to Us — <span className="text-gradient">Let's Collaborate</span>
                </h2>
                <div className="absolute -bottom-2 left-0 w-1/4 h-0.5 bg-cortex-teal transition-all duration-300 group-hover:w-full"></div>
              </div>
              
              <p className="text-cortex-gray text-lg mb-8 opacity-0 animate-fade-in-left" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                Ready to transform your business with AI? Get in touch with our team of experts and let's discuss how we can help you achieve your goals.
              </p>
              
              <div className="glass-card rounded-lg p-8 mb-8 opacity-0 animate-fade-in-left" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
                <h3 className="text-xl font-semibold mb-4 text-cortex-white">Still thinking?</h3>
                <p className="text-cortex-gray mb-6">
                  Let's chat and see how we can transform your business with AI.
                </p>
                <a 
                  href="#" 
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
      
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Index;
