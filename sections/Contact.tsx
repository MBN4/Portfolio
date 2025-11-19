import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/Button';
import InputField from '../components/InputField';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const whatsappMessage = `*New message from portfolio:*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n\n*Message:*\n${formData.message}`;
      const whatsappUrl = `https://wa.me/923174311618?text=${encodeURIComponent(whatsappMessage)}`;
      
      window.open(whatsappUrl, '_blank');
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

    } catch (error) {
      console.error("Failed to open WhatsApp link:", error);
      setStatus('error');
    }

    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section id="contact" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold mb-4">Contact <span className="text-primary">Me</span></h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
          Have a project in mind or just want to say hello? Feel free to reach out!
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border border-green-500/20 shadow-lg shadow-green-900/10"
      >
        <form onSubmit={handleSubmit}>
          <InputField
            id="name"
            name="name"
            label="Your Name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <InputField
            id="email"
            name="email"
            label="Your Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <InputField
            id="message"
            name="message"
            label="Your Message"
            isTextarea
            value={formData.message}
            onChange={handleChange}
            required
          />
          <div className="text-center">
            <Button type="submit" className="w-full sm:w-auto" disabled={status === 'sending'}>
              {status === 'sending' ? 'Redirecting...' : 'Send Message via WhatsApp'}
            </Button>
          </div>
        </form>
        <AnimatePresence>
          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-4 p-3 text-center bg-green-500/20 text-green-300 rounded-lg"
            >
              Redirecting to WhatsApp. Your message is ready to be sent!
            </motion.div>
          )}
          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-4 p-3 text-center bg-red-500/20 text-red-300 rounded-lg"
            >
              An error occurred. Please try again or contact me directly.
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Contact;