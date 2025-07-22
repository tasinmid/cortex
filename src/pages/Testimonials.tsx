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
import { Star, Quote, ArrowRight, Building, Users, TrendingUp, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// 3D Scene Component for testimonials
const TestimonialScene = ({ type }: { type: string }) => {
  const getSceneByType = () => {
    switch (type) {
      case 'success':
        return (
          <group>
            <mesh position={[0, 0, 0]} rotation={[0, Math.PI / 4, 0]}>
              <torusGeometry args={[1.5, 0.5, 16, 100]} />
              <meshStandardMaterial color="#FFD700" />
            </mesh>
            <mesh position={[0, 0, 0]}>
              <sphereGeometry args={[0.3, 16, 16]} />
              <meshStandardMaterial color="#00D9FF" />
            </mesh>
          </group>
        );
      case 'growth':
        return (
          <group>
            <mesh position={[0, -1, 0]} rotation={[0, 0, 0]}>
              <coneGeometry args={[1, 2, 8]} />
              <meshStandardMaterial color="#4ECDC4" />
            </mesh>
            <mesh position={[0, 1, 0]}>
              <octahedronGeometry args={[0.5, 0]} />
              <meshStandardMaterial color="#FFE66D" />
            </mesh>
          </group>
        );
      case 'innovation':
        return (
          <group>
            <mesh position={[0, 0, 0]}>
              <dodecahedronGeometry args={[1.2, 0]} />
              <meshStandardMaterial color="#A8E6CF" />
            </mesh>
            <mesh position={[1.5, 1, 0]} rotation={[0, 0, Math.PI / 6]}>
              <tetrahedronGeometry args={[0.6, 0]} />
              <meshStandardMaterial color="#FFB3BA" />
            </mesh>
          </group>
        );
      default:
        return (
          <mesh rotation={[0, 0, 0]}>
            <icosahedronGeometry args={[1, 1]} />
            <meshStandardMaterial color="#00D9FF" />
          </mesh>
        );
    }
  };

  return getSceneByType();
};

const TestimonialCard = ({ 
  name,
  role,
  company,
  testimonial,
  rating,
  results,
  industry,
  sceneType,
  isReversed = false 
}: {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  rating: number;
  results: string[];
  industry: string;
  sceneType: string;
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
              <pointLight position={[-10, -10, -10]} color="#FFD700" intensity={0.3} />
              <TestimonialScene type={sceneType} />
              <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
            </Canvas>
          </Suspense>
        </div>
        
        {/* Quote Icon Badge */}
        <motion.div 
          className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-r from-cortex-blue to-cortex-teal flex items-center justify-center shadow-2xl"
          animate={{ 
            boxShadow: [
              "0 0 20px rgba(255, 215, 0, 0.5)",
              "0 0 40px rgba(255, 215, 0, 0.8)",
              "0 0 20px rgba(255, 215, 0, 0.5)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Quote className="w-8 h-8 text-white" />
        </motion.div>
      </div>

      {/* Content */}
      <div className={`space-y-6 ${isReversed ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
        <div className="flex items-center gap-4">
          <Badge variant="secondary" className="bg-cortex-blue/10 text-cortex-blue border-cortex-blue/30">
            {industry}
          </Badge>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
              />
            ))}
          </div>
        </div>

        <div>
          <blockquote className="text-xl md:text-2xl text-cortex-white leading-relaxed mb-6 italic">
            "{testimonial}"
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cortex-blue to-cortex-teal flex items-center justify-center">
              <span className="text-white font-bold text-lg">{name.charAt(0)}</span>
            </div>
            <div>
              <p className="text-cortex-white font-semibold">{name}</p>
              <p className="text-cortex-gray">{role} at {company}</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-cortex-white">Key Results:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {results.map((result, index) => (
              <motion.div 
                key={index}
                className="bg-cortex-navy/30 rounded-lg p-4 border border-cortex-blue/20"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <p className="text-cortex-white font-medium">{result}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials: React.FC = () => {
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

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechFlow Solutions",
      testimonial: "Cortex-AI transformed our customer service completely. Our response times improved by 80% and customer satisfaction scores reached an all-time high.",
      rating: 5,
      results: ["80% faster response times", "95% customer satisfaction", "50% cost reduction", "24/7 availability"],
      industry: "Technology",
      sceneType: "success"
    },
    {
      name: "Michael Chen",
      role: "Operations Director",
      company: "Global Logistics Inc",
      testimonial: "The automation solutions delivered by Cortex-AI streamlined our entire supply chain. We've seen unprecedented efficiency gains across all operations.",
      rating: 5,
      results: ["40% process efficiency", "60% error reduction", "35% cost savings", "Real-time tracking"],
      industry: "Logistics",
      sceneType: "growth"
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Manager",
      company: "Creative Digital Agency",
      testimonial: "Their AI agents revolutionized our lead generation and nurturing process. We're now converting 3x more leads with half the manual effort.",
      rating: 5,
      results: ["300% lead conversion", "50% effort reduction", "65% ROI increase", "Automated workflows"],
      industry: "Marketing",
      sceneType: "innovation"
    },
    {
      name: "David Thompson",
      role: "CTO",
      company: "FinTech Innovations",
      testimonial: "Cortex-AI's custom automation tools integrated seamlessly with our existing systems. The scalability and reliability have been exceptional.",
      rating: 5,
      results: ["99.9% uptime", "Seamless integration", "Infinite scalability", "Enhanced security"],
      industry: "FinTech",
      sceneType: "success"
    },
    {
      name: "Lisa Park",
      role: "Founder",
      company: "E-commerce Plus",
      testimonial: "The chatbot implementation exceeded all expectations. Our customers love the instant support, and we've reduced support costs by 70%.",
      rating: 5,
      results: ["70% cost reduction", "Instant support", "Higher satisfaction", "Multi-channel reach"],
      industry: "E-commerce",
      sceneType: "growth"
    },
    {
      name: "Robert Kim",
      role: "VP of Sales",
      company: "SaaS Enterprise",
      testimonial: "Their training and support were outstanding. Our team adapted quickly to the new AI tools, and productivity soared within weeks.",
      rating: 5,
      results: ["Team adoption", "Productivity boost", "Quick implementation", "Ongoing support"],
      industry: "SaaS",
      sceneType: "innovation"
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
                Client Success Stories
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Real <span className="text-gradient">Results</span> from
                <br />
                Real <span className="text-gradient">Clients</span>
              </h1>
              <p className="text-cortex-gray text-xl leading-relaxed mb-8">
                Discover how businesses across industries have transformed their operations with our AI solutions. 
                These success stories showcase measurable improvements and lasting impact.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="bg-cortex-teal/20 text-cortex-teal border-cortex-teal/30">
                  Proven Results
                </Badge>
                <Badge variant="secondary" className="bg-cortex-blue/20 text-cortex-blue border-cortex-blue/30">
                  Industry Leaders
                </Badge>
                <Badge variant="secondary" className="bg-cortex-purple/20 text-cortex-purple border-cortex-purple/30">
                  Measurable Impact
                </Badge>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="space-y-32">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.name}>
                <TestimonialCard 
                  {...testimonial} 
                  isReversed={index % 2 !== 0}
                />
                {index < testimonials.length - 1 && (
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

      {/* Success Metrics */}
      <AnimatedSection className="py-20 bg-gradient-to-b from-cortex-black via-cortex-navy to-cortex-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">
              Our Track Record Speaks
            </h2>
            <p className="text-cortex-gray text-xl max-w-3xl mx-auto">
              Consistent results across industries with measurable business impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Building,
                title: "Companies Served",
                stat: "100+",
                description: "Successful AI implementations across various industries"
              },
              {
                icon: Users,
                title: "Team Members Trained",
                stat: "500+",
                description: "Professionals equipped with AI knowledge and skills"
              },
              {
                icon: TrendingUp,
                title: "Average ROI Increase",
                stat: "250%",
                description: "Return on investment within first 12 months"
              },
              {
                icon: Award,
                title: "Customer Satisfaction",
                stat: "98%",
                description: "Clients would recommend our services to others"
              }
            ].map((metric, index) => (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-cortex-navy/50 border-cortex-blue/20 hover:border-cortex-blue/40 transition-all duration-300 h-full text-center">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cortex-blue to-cortex-teal flex items-center justify-center mx-auto mb-4">
                      <metric.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-gradient mb-2">{metric.stat}</div>
                    <CardTitle className="text-cortex-white">{metric.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-cortex-gray">
                      {metric.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-cortex-gray text-xl mb-8">
              Let's discuss how we can help transform your business with AI solutions that deliver real results.
            </p>
            <Button 
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-cortex-blue to-cortex-teal hover:from-cortex-blue/80 hover:to-cortex-teal/80 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 group"
            >
              Start Your Success Story
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  );
};

export default Testimonials;