import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ArrowRight, Brain, Lightbulb, Cog, Rocket, CheckCircle } from 'lucide-react';

// Simple 3D Scene Component - Safer fallback
const ProcessScene = () => {
  return (
    <mesh rotation={[0, 0, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#00D9FF" />
    </mesh>
  );
};

const ProcessStepDetailed = ({ 
  icon: Icon, 
  number, 
  title, 
  description, 
  details, 
  deliverables,
  isReversed = false 
}: {
  icon: any;
  number: string;
  title: string;
  description: string;
  details: string[];
  deliverables: string[];
  isReversed?: boolean;
}) => {
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
        <div className="h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-cortex-navy/50 to-cortex-black/50 backdrop-blur-sm border border-cortex-blue/20">
          <Suspense fallback={<div className="flex items-center justify-center h-full text-cortex-blue">Loading 3D Scene...</div>}>
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <ProcessScene />
              <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
          </Suspense>
        </div>
        
        {/* Floating Number Badge */}
        <motion.div 
          className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-r from-cortex-blue to-cortex-teal flex items-center justify-center text-2xl font-bold text-white shadow-2xl"
          animate={{ 
            boxShadow: [
              "0 0 20px rgba(0, 217, 255, 0.5)",
              "0 0 40px rgba(0, 217, 255, 0.8)",
              "0 0 20px rgba(0, 217, 255, 0.5)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {number}
        </motion.div>
      </div>

      {/* Content */}
      <div className={`space-y-6 ${isReversed ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-full bg-gradient-to-r from-cortex-blue/20 to-cortex-teal/20 border border-cortex-blue/30">
            <Icon className="w-6 h-6 text-cortex-blue" />
          </div>
          <Badge variant="secondary" className="bg-cortex-blue/10 text-cortex-blue border-cortex-blue/30">
            Step {number}
          </Badge>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-gradient mb-4">{title}</h3>
          <p className="text-cortex-gray text-lg leading-relaxed">{description}</p>
        </div>

        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-cortex-white">What We Do:</h4>
          <ul className="space-y-2">
            {details.map((detail, index) => (
              <motion.li 
                key={index}
                className="flex items-start gap-3 text-cortex-gray"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <CheckCircle className="w-5 h-5 text-cortex-teal mt-0.5 flex-shrink-0" />
                {detail}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-cortex-white">Deliverables:</h4>
          <div className="flex flex-wrap gap-2">
            {deliverables.map((deliverable, index) => (
              <Badge 
                key={index}
                variant="outline" 
                className="bg-cortex-navy/50 text-cortex-white border-cortex-blue/30 hover:bg-cortex-blue/20 transition-colors"
              >
                {deliverable}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Process: React.FC = () => {
  const processSteps = [
    {
      icon: Lightbulb,
      number: "01",
      title: "Discovery & Analysis",
      description: "We dive deep into understanding your business challenges, goals, and current infrastructure to identify the perfect AI opportunities.",
      details: [
        "Comprehensive business analysis and requirement gathering",
        "Technical infrastructure assessment and compatibility review",
        "Competitive landscape analysis and market research",
        "Stakeholder interviews and workshop sessions",
        "AI readiness evaluation and gap analysis"
      ],
      deliverables: ["Discovery Report", "Technical Assessment", "AI Strategy Roadmap", "ROI Projections"]
    },
    {
      icon: Brain,
      number: "02",
      title: "Strategic Planning",
      description: "Based on our findings, we create a comprehensive AI strategy tailored to your specific needs and objectives.",
      details: [
        "Custom AI solution architecture design",
        "Technology stack selection and justification",
        "Implementation timeline and milestone planning",
        "Resource allocation and team structure planning",
        "Risk assessment and mitigation strategies"
      ],
      deliverables: ["AI Blueprint", "Technical Specifications", "Project Timeline", "Team Structure Plan"]
    },
    {
      icon: Cog,
      number: "03",
      title: "Development & Integration",
      description: "Our expert team builds and integrates cutting-edge AI solutions seamlessly into your existing systems.",
      details: [
        "Agile development with continuous feedback loops",
        "API development and third-party integrations",
        "Machine learning model training and optimization",
        "Quality assurance and comprehensive testing",
        "Performance optimization and scalability planning"
      ],
      deliverables: ["AI Solution", "API Documentation", "Integration Guides", "Testing Reports"]
    },
    {
      icon: Rocket,
      number: "04",
      title: "Deployment & Training",
      description: "We ensure smooth deployment and provide comprehensive training to maximize your team's AI capabilities.",
      details: [
        "Production deployment and monitoring setup",
        "User training and onboarding programs",
        "Documentation and best practices guides",
        "Performance monitoring and analytics setup",
        "Ongoing support and maintenance planning"
      ],
      deliverables: ["Live AI System", "Training Materials", "Support Documentation", "Monitoring Dashboard"]
    }
  ];

  return (
    <div className="min-h-screen bg-cortex-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-cortex-black via-cortex-navy to-cortex-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-4 bg-cortex-blue/20 text-cortex-blue border-cortex-blue/30">
                Our Process
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                From <span className="text-gradient">Concept</span> to 
                <br />
                <span className="text-gradient">AI Reality</span>
              </h1>
              <p className="text-cortex-gray text-xl leading-relaxed mb-8">
                Discover our proven 4-step methodology that transforms your business challenges into intelligent AI solutions. 
                We guide you through every phase of your AI journey with transparency and expertise.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge variant="secondary" className="bg-cortex-teal/20 text-cortex-teal border-cortex-teal/30">
                  Proven Methodology
                </Badge>
                <Badge variant="secondary" className="bg-cortex-blue/20 text-cortex-blue border-cortex-blue/30">
                  End-to-End Support
                </Badge>
                <Badge variant="secondary" className="bg-cortex-purple/20 text-cortex-purple border-cortex-purple/30">
                  Measurable Results
                </Badge>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-cortex-navy/50 to-cortex-black/50 backdrop-blur-sm border border-cortex-blue/20"
            >
              <Suspense fallback={<div className="flex items-center justify-center h-full text-cortex-blue">Loading 3D Scene...</div>}>
                <Canvas camera={{ position: [0, 0, 5] }}>
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} />
                  <ProcessScene />
                  <OrbitControls enableZoom={false} enablePan={false} />
                </Canvas>
              </Suspense>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="space-y-32">
            {processSteps.map((step, index) => (
              <div key={step.number}>
                <ProcessStepDetailed 
                  {...step} 
                  isReversed={index % 2 !== 0}
                />
                {index < processSteps.length - 1 && (
                  <div className="flex justify-center mt-16">
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="p-4 rounded-full bg-gradient-to-r from-cortex-blue to-cortex-teal"
                    >
                      <ArrowRight className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Process Works */}
      <AnimatedSection className="py-20 bg-gradient-to-b from-cortex-black via-cortex-navy to-cortex-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">
              Why Our Process Delivers Results
            </h2>
            <p className="text-cortex-gray text-xl max-w-3xl mx-auto">
              Our methodology is built on years of experience and proven success across industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Transparent Communication",
                description: "Regular updates, clear milestones, and open communication throughout the entire process",
                stat: "100%"
              },
              {
                title: "Proven Success Rate",
                description: "Successful delivery of AI solutions with measurable business impact across all projects",
                stat: "98%"
              },
              {
                title: "Client Satisfaction",
                description: "Clients report improved efficiency and ROI within the first 6 months of implementation",
                stat: "95%"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-cortex-navy/50 border-cortex-blue/20 hover:border-cortex-blue/40 transition-all duration-300">
                  <CardHeader className="text-center">
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
            <h3 className="text-2xl font-bold text-cortex-white mb-4">Ready to Start Your Journey?</h3>
            <p className="text-cortex-gray mb-6">Schedule a free consultation to begin your AI transformation.</p>
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

export default Process;