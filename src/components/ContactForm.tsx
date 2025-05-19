
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      service: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      setFormData({
        name: '',
        email: '',
        service: '',
        message: '',
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
        <label htmlFor="name" className="block text-cortex-white mb-1">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-cortex-navy bg-opacity-30 rounded border border-cortex-gray border-opacity-20 text-cortex-white focus:outline-none focus:border-cortex-blue transition-colors"
        />
      </div>
      
      <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
        <label htmlFor="email" className="block text-cortex-white mb-1">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-cortex-navy bg-opacity-30 rounded border border-cortex-gray border-opacity-20 text-cortex-white focus:outline-none focus:border-cortex-blue transition-colors"
        />
      </div>
      
      <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
        <label htmlFor="service" className="block text-cortex-white mb-1">Service Type</label>
        <Select value={formData.service} onValueChange={handleServiceChange} required>
          <SelectTrigger 
            className="w-full px-4 py-2 bg-cortex-navy bg-opacity-30 rounded border border-cortex-gray border-opacity-20 text-cortex-white focus:outline-none focus:border-cortex-blue transition-colors"
          >
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent className="bg-cortex-black text-cortex-white border border-cortex-gray border-opacity-20">
            <SelectItem value="personalized-consultation">Personalized Consultation</SelectItem>
            <SelectItem value="channel-automations">Channel Automations</SelectItem>
            <SelectItem value="ai-agents">AI Agents</SelectItem>
            <SelectItem value="backend-automations">Backend Automations</SelectItem>
            <SelectItem value="custom-tool-automations">Custom Tool Automations</SelectItem>
            <SelectItem value="custom-training">Custom Training & Support</SelectItem>
            <SelectItem value="something-else">Something else</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
        <label htmlFor="message" className="block text-cortex-white mb-1">Your Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-cortex-navy bg-opacity-30 rounded border border-cortex-gray border-opacity-20 text-cortex-white focus:outline-none focus:border-cortex-blue transition-colors"
        ></textarea>
      </div>
      
      <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-cortex-blue hover:bg-opacity-80 text-white font-medium py-3 px-6 rounded transition-all duration-300 animate-pulse-glow disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
