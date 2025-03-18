import React from 'react';
import { servicesData } from '@/lib/data';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">Our Solutions</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Comprehensive Healthcare Solutions</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We deliver innovative solutions that address the complex challenges in today's healthcare ecosystem.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <service.icon className="text-primary text-2xl group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <a href="#" className="inline-block mt-6 font-semibold text-primary hover:text-primary/80 transition-colors duration-300 flex items-center">
                Learn more <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
