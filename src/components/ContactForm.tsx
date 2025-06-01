
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
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    service: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: false,
      }));
    }
  };

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      service: value,
    }));
    
    // Clear service error when user selects a service
    if (errors.service) {
      setErrors((prev) => ({
        ...prev,
        service: false,
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: !formData.name.trim(),
      email: !formData.email.trim(),
      service: !formData.service.trim(),
    };
    
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Form incomplete",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const webhookUrl = 'https://script.google.com/macros/s/AKfycbwGkNL6TRQPCbbdpxoRtdhu2jP5V_ypcfrveVT_DD6Kfmm6njcV_fED0ImrIENpni0ZHA/exec?gid=0';
      
      const payload = {
        Name: formData.name,
        Email: formData.email,
        "Service type": formData.service,
        "Client message": formData.message || 'No message provided'
      };

      console.log('Sending JSON payload to webhook:', payload);

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors',
        body: JSON.stringify(payload),
      });

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
      
    } catch (error) {
      console.error('Error sending form data:', error);
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
        <label htmlFor="name" className="block text-cortex-white mb-1">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-2 bg-cortex-navy bg-opacity-30 rounded border ${
            errors.name ? 'border-red-500' : 'border-cortex-gray border-opacity-20'
          } text-cortex-white focus:outline-none focus:border-cortex-blue transition-colors`}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">Name is required</p>
        )}
      </div>
      
      <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
        <label htmlFor="email" className="block text-cortex-white mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-2 bg-cortex-navy bg-opacity-30 rounded border ${
            errors.email ? 'border-red-500' : 'border-cortex-gray border-opacity-20'
          } text-cortex-white focus:outline-none focus:border-cortex-blue transition-colors`}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">Email is required</p>
        )}
      </div>
      
      <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
        <label htmlFor="service" className="block text-cortex-white mb-1">
          Service Type <span className="text-red-500">*</span>
        </label>
        <Select value={formData.service} onValueChange={handleServiceChange}>
          <SelectTrigger 
            className={`w-full px-4 py-2 bg-cortex-navy bg-opacity-30 rounded border ${
              errors.service ? 'border-red-500' : 'border-cortex-gray border-opacity-20'
            } text-cortex-white focus:outline-none focus:border-cortex-blue transition-colors`}
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
        {errors.service && (
          <p className="mt-1 text-sm text-red-500">Service type is required</p>
        )}
      </div>
      
      <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
        <label htmlFor="message" className="block text-cortex-white mb-1">Your Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
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
