import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { resourcesData } from '@/lib/data';
import { ChevronRight } from 'lucide-react';

const Resources: React.FC = () => {
  return (
    <section id="resources" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">Resources</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Healthcare Knowledge Center</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends, insights, and best practices in healthcare technology.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {resourcesData.map((resource, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden">
                <div className="w-full h-52 bg-gray-200 transform group-hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center justify-center h-full text-gray-400">
                    <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
                  {resource.type}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {resource.description}
                </p>
                <a href="#" className="inline-block font-semibold text-primary hover:text-primary/80 transition-colors duration-300 flex items-center">
                  Read More <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Resources
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Resources;
