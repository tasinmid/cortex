
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
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
        <select
          id="service"
          name="service"
          required
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-cortex-navy bg-opacity-30 rounded border border-cortex-gray border-opacity-20 text-cortex-white focus:outline-none focus:border-cortex-blue transition-colors"
        >
          <option value="" disabled>Select a service</option>
          <option value="chatbot">AI Chatbot</option>
          <option value="agent">AI Agent</option>
          <option value="automation">Automation</option>
          <option value="integration">Integration Support</option>
        </select>
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
