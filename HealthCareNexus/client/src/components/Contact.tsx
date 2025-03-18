import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';
import { contactData } from '@/lib/data';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-primary/5 z-0"></div>
      
      <motion.div
        className="absolute right-0 top-20 w-64 h-64 rounded-full bg-primary/5 z-0"
        initial={{ opacity: 0.3 }}
        animate={{ 
          opacity: [0.2, 0.3, 0.2],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div
        className="absolute left-20 bottom-20 w-48 h-48 rounded-full bg-blue-500/5 z-0"
        initial={{ opacity: 0.2 }}
        animate={{ 
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-lg mx-auto text-center mb-16">
          <motion.span 
            className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            transition={{ duration: 0.3 }}
          >
            Get In Touch
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            Ready to Transform Your Healthcare Solutions?
          </motion.h2>
          
          <motion.p 
            className="text-gray-600"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            Connect with VRG Health Consult today. Our team is ready to help you implement cutting-edge healthcare technology solutions tailored to your needs.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-8">
              <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
              <ContactForm />
            </div>
          </motion.div>
          
          <div className="space-y-8">
            <motion.div
              className="bg-white rounded-lg shadow-lg p-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Our Location</p>
                    <p className="font-medium">{contactData.address}</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Phone Number</p>
                    <p className="font-medium">{contactData.phone}</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Email Address</p>
                    <p className="font-medium">{contactData.email}</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Business Hours</p>
                    <p className="font-medium">{contactData.hours}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-lg shadow-lg p-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold mb-4">Schedule a Demo</h3>
              <p className="text-gray-600 mb-4">
                See our healthcare solutions in action with a personalized demonstration tailored to your specific needs.
              </p>
              <motion.a 
                href="#" 
                className="inline-flex items-center text-primary font-medium hover:underline"
                whileHover={{ x: 5 }}
              >
                Book a demo session <ArrowRight className="ml-2 h-4 w-4" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
