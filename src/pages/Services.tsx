import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, Zap, Bot, Cog, Wrench, GraduationCap, ArrowRight, CheckCircle, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// AI-relevant 3D models for each service
const ServiceScene = ({ type }: { type: string }) => {
  const getSceneByType = () => {
    switch (type) {
      case 'chatbot':
        return (
          <group>
            {/* Chat bubble main */}
            <mesh position={[0, 0, 0]} rotation={[0, Math.PI / 6, 0]}>
              <sphereGeometry args={[1.2, 32, 32]} />
              <meshStandardMaterial 
                color="#00D9FF" 
                emissive="#00D9FF"
                emissiveIntensity={0.1}
              />
            </mesh>
            {/* Chat bubble tail */}
            <mesh position={[-0.8, -0.8, 0.3]} rotation={[0, 0, Math.PI / 4]}>
              <coneGeometry args={[0.3, 0.6, 4]} />
              <meshStandardMaterial 
                color="#00D9FF" 
                emissive="#00D9FF"
                emissiveIntensity={0.1}
              />
            </mesh>
            {/* Message indicators */}
            <mesh position={[0.8, 1.2, 0]} rotation={[0, -Math.PI / 4, 0]}>
              <sphereGeometry args={[0.2, 16, 16]} />
              <meshStandardMaterial 
                color="#4ECDC4" 
                emissive="#4ECDC4"
                emissiveIntensity={0.3}
              />
            </mesh>
          </group>
        );
      case 'automation':
        return (
          <group>
            {/* Gear main */}
            <mesh position={[0, 0, 0]} rotation={[Math.PI / 6, 0, 0]}>
              <cylinderGeometry args={[1.2, 1.2, 0.4, 12]} />
              <meshStandardMaterial 
                color="#4ECDC4" 
                emissive="#4ECDC4"
                emissiveIntensity={0.1}
                metalness={0.8}
                roughness={0.2}
              />
            </mesh>
            {/* Inner gear */}
            <mesh position={[0, 0, 0]} rotation={[Math.PI / 6, Math.PI / 12, 0]}>
              <cylinderGeometry args={[0.6, 0.6, 0.5, 8]} />
              <meshStandardMaterial 
                color="#FFE66D" 
                emissive="#FFE66D"
                emissiveIntensity={0.2}
                metalness={0.9}
                roughness={0.1}
              />
            </mesh>
            {/* Circuit connections */}
            <mesh position={[1.5, 0.5, 0]}>
              <boxGeometry args={[0.3, 0.1, 0.1]} />
              <meshStandardMaterial 
                color="#00D9FF" 
                emissive="#00D9FF"
                emissiveIntensity={0.4}
              />
            </mesh>
          </group>
        );
      case 'agent':
        return (
          <group>
            {/* AI Brain core */}
            <mesh position={[0, 0, 0]}>
              <icosahedronGeometry args={[1.2, 2]} />
              <meshStandardMaterial 
                color="#A8E6CF" 
                emissive="#A8E6CF"
                emissiveIntensity={0.2}
                transparent={true}
                opacity={0.8}
              />
            </mesh>
            {/* Neural connections */}
            <mesh position={[1.2, 0.8, 0.8]} rotation={[0, 0, Math.PI / 4]}>
              <octahedronGeometry args={[0.4, 1]} />
              <meshStandardMaterial 
                color="#FFB3BA" 
                emissive="#FFB3BA"
                emissiveIntensity={0.3}
              />
            </mesh>
            <mesh position={[-1.0, -0.6, 0.6]}>
              <dodecahedronGeometry args={[0.3, 0]} />
              <meshStandardMaterial 
                color="#DDA0DD" 
                emissive="#DDA0DD"
                emissiveIntensity={0.3}
              />
            </mesh>
            {/* Data stream */}
            <mesh position={[0, 1.8, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.1, 0.1, 1, 6]} />
              <meshStandardMaterial 
                color="#00D9FF" 
                emissive="#00D9FF"
                emissiveIntensity={0.5}
              />
            </mesh>
          </group>
        );
      default:
        return (
          <mesh rotation={[0, 0, 0]}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial 
              color="#00D9FF" 
              emissive="#00D9FF"
              emissiveIntensity={0.1}
            />
          </mesh>
        );
    }
  };

  return getSceneByType();
};

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  features, 
  benefits,
  sceneType,
  isReversed = false 
}: {
  icon: any;
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  sceneType: string;
  isReversed?: boolean;
}) => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/#contact');
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };
  return (
    <motion.div 
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isReversed ? 'lg:grid-flow-col-dense' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* 3D Visualization */}
      <div className={`relative ${isReversed ? 'lg:col-start-2' : ''}`}>
        <div className="h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-cortex-navy/50 to-cortex-black/50 backdrop-blur-sm border border-cortex-blue/20 hover:border-cortex-blue/40 transition-all duration-300 group">
          <Suspense fallback={<div className="flex items-center justify-center h-full text-cortex-blue">Loading 3D Scene...</div>}>
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.3} />
              <pointLight position={[10, 10, 10]} intensity={0.8} />
              <pointLight position={[-10, 5, 5]} color="#00D9FF" intensity={0.4} />
              <pointLight position={[5, -10, 5]} color="#4ECDC4" intensity={0.4} />
              <ServiceScene type={sceneType} />
              {/* No OrbitControls - static display only */}
            </Canvas>
          </Suspense>
          
          {/* Hover glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-cortex-blue/20 to-cortex-teal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
        
        {/* Service Icon Badge */}
        <motion.div 
          className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-r from-cortex-blue to-cortex-teal flex items-center justify-center shadow-2xl"
          animate={{ 
            boxShadow: [
              "0 0 20px rgba(0, 217, 255, 0.5)",
              "0 0 40px rgba(0, 217, 255, 0.8)",
              "0 0 20px rgba(0, 217, 255, 0.5)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Icon className="w-8 h-8 text-white" />
        </motion.div>
      </div>

      {/* Content */}
      <div className={`space-y-6 ${isReversed ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
        <div className="flex items-center gap-4">
          <Badge variant="outline" className="bg-cortex-teal/10 text-cortex-teal border-cortex-teal/30">
            Popular
          </Badge>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-gradient mb-4">{title}</h3>
          <p className="text-cortex-gray text-lg leading-relaxed">{description}</p>
        </div>

        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-cortex-white">Key Features:</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <motion.li 
                key={index}
                className="flex items-start gap-3 text-cortex-gray"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <CheckCircle className="w-5 h-5 text-cortex-teal mt-0.5 flex-shrink-0" />
                {feature}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-cortex-white">Benefits:</h4>
          <div className="flex flex-wrap gap-2">
            {benefits.map((benefit, index) => (
              <Badge 
                key={index}
                variant="outline" 
                className="bg-cortex-navy/50 text-cortex-white border-cortex-blue/30 hover:bg-cortex-blue/20 transition-colors"
              >
                {benefit}
              </Badge>
            ))}
          </div>
        </div>

        <Button 
          onClick={handleGetStarted}
          className="bg-gradient-to-r from-cortex-blue to-cortex-teal hover:from-cortex-blue/80 hover:to-cortex-teal/80 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 group"
        >
          Get Started
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: MessageSquare,
      title: "Personalized Consultation & Chatbots",
      description: "Web, WhatsApp, and Instagram chatbots that handle customer inquiries 24/7 with intelligent responses and seamless human handoff.",
      features: [
        "Multi-platform chatbot deployment (Web, WhatsApp, Instagram)",
        "Natural language processing for human-like conversations",
        "Intelligent routing and escalation to human agents",
        "Custom knowledge base integration",
        "Real-time analytics and conversation insights",
        "Multilingual support and localization"
      ],
      benefits: ["24/7 Availability", "Instant Response", "Cost Reduction", "Lead Generation"],
      sceneType: "chatbot"
    },
    {
      icon: Zap,
      title: "Channel Automations",
      description: "Seamlessly integrate your messaging platforms for automated workflows across channels with unified customer experience.",
      features: [
        "Cross-platform message synchronization",
        "Automated workflow triggers and responses",
        "Customer journey mapping and automation",
        "Integration with CRM and marketing tools",
        "Advanced segmentation and targeting",
        "Performance tracking and optimization"
      ],
      benefits: ["Unified Experience", "Workflow Efficiency", "Better Targeting", "Increased ROI"],
      sceneType: "automation"
    },
    {
      icon: Bot,
      title: "AI Agents",
      description: "Intelligent agents that handle lead nurturing, sales, and support tasks with advanced decision-making capabilities.",
      features: [
        "Intelligent lead scoring and qualification",
        "Automated sales pipeline management",
        "Personalized customer support interactions",
        "Advanced conversation memory and context",
        "Integration with sales and support tools",
        "Continuous learning and improvement"
      ],
      benefits: ["Sales Automation", "Lead Quality", "Support Efficiency", "Scalability"],
      sceneType: "agent"
    },
    {
      icon: Cog,
      title: "Backend Automations",
      description: "Powerful workflow automation using n8n, Zapier, and Make platforms for seamless business process optimization.",
      features: [
        "Custom workflow design and implementation",
        "Integration with 1000+ apps and services",
        "Data synchronization and transformation",
        "Conditional logic and decision trees",
        "Error handling and monitoring",
        "Scalable cloud-based execution"
      ],
      benefits: ["Process Efficiency", "Error Reduction", "Time Savings", "Scalability"],
      sceneType: "automation"
    },
    {
      icon: Wrench,
      title: "Custom Tool Automations",
      description: "Connect your systems with custom tools and APIs for specialized automation tailored to your unique business needs.",
      features: [
        "Custom API development and integration",
        "Bespoke automation tool creation",
        "Legacy system modernization",
        "Real-time data processing",
        "Custom dashboard and reporting",
        "Security and compliance features"
      ],
      benefits: ["Custom Solutions", "System Integration", "Competitive Advantage", "Future-Proof"],
      sceneType: "chatbot"
    },
    {
      icon: GraduationCap,
      title: "Custom Training & Support",
      description: "Personalized training and ongoing support for your team and AI systems to maximize adoption and effectiveness.",
      features: [
        "Comprehensive team training programs",
        "Custom documentation and guides",
        "Ongoing technical support",
        "Performance monitoring and optimization",
        "Regular system updates and maintenance",
        "Strategic consultation and planning"
      ],
      benefits: ["Team Expertise", "System Optimization", "Ongoing Support", "Strategic Growth"],
      sceneType: "agent"
    }
  ];

  return (
    <div className="min-h-screen bg-cortex-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-cortex-black via-cortex-navy to-cortex-black">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-4 bg-cortex-blue/20 text-cortex-blue border-cortex-blue/30">
                Our Services
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Solutions That <span className="text-gradient">Transform</span>
                <br />
                Your <span className="text-gradient">Business</span>
              </h1>
              <p className="text-cortex-gray text-xl leading-relaxed mb-8">
                Comprehensive AI services designed to automate, optimize, and accelerate your business operations. 
                From chatbots to custom automations, we deliver solutions that drive real results.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="bg-cortex-teal/20 text-cortex-teal border-cortex-teal/30">
                  24/7 Support
                </Badge>
                <Badge variant="secondary" className="bg-cortex-blue/20 text-cortex-blue border-cortex-blue/30">
                  Custom Solutions
                </Badge>
                <Badge variant="secondary" className="bg-cortex-purple/20 text-cortex-purple border-cortex-purple/30">
                  Proven Results
                </Badge>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div key={service.title}>
                <ServiceCard 
                  {...service} 
                  isReversed={index % 2 !== 0}
                />
                {index < services.length - 1 && (
                  <div className="flex justify-center mt-16">
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="p-4 rounded-full bg-gradient-to-r from-cortex-blue to-cortex-teal"
                    >
                      <ArrowRight className="w-6 h-6 text-white rotate-90" />
                    </motion.div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <AnimatedSection className="py-20 bg-gradient-to-b from-cortex-black via-cortex-navy to-cortex-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">
              Why Choose Cortex-AI Services
            </h2>
            <p className="text-cortex-gray text-xl max-w-3xl mx-auto">
              Industry-leading expertise with proven track record of successful AI implementations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "Expert Team",
                description: "Certified AI specialists with extensive experience in automation and machine learning",
                stat: "10+"
              },
              {
                icon: CheckCircle,
                title: "Success Rate",
                description: "Successful AI implementations with measurable ROI improvements for our clients",
                stat: "98%"
              },
              {
                icon: Zap,
                title: "Faster Deployment",
                description: "Average deployment time compared to industry standards, getting you results sooner",
                stat: "3x"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-cortex-navy/50 border-cortex-blue/20 hover:border-cortex-blue/40 transition-all duration-300 h-full">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cortex-blue to-cortex-teal flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-gradient mb-2">{item.stat}</div>
                    <CardTitle className="text-cortex-white">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-cortex-gray text-center">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Book a Call Section */}
      <div className="py-12 bg-cortex-navy">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-cortex-white mb-4">Ready to Get Started?</h3>
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

      <Footer />
    </div>
  );
};

export default Services;