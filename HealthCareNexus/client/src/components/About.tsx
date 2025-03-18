import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { statsData } from '@/lib/data';
import { 
  CheckCircle2, 
  Calendar, 
  Users, 
  Award, 
  ChevronRight, 
  ChevronLeft 
} from 'lucide-react';

const About: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const milestones = [
    { year: '2018', title: 'Founded in Boston', description: 'VRG Health Consult was established with a mission to transform healthcare through technology.' },
    { year: '2020', title: 'Launch of EHR Platform', description: 'Released our flagship Electronic Health Records system, now used by over 100 healthcare providers.' },
    { year: '2022', title: 'International Expansion', description: 'Opened offices in Europe and Asia, expanding our global healthcare solutions reach.' },
    { year: '2023', title: 'AI Integration', description: 'Pioneered AI-driven diagnostic tools to enhance medical accuracy and patient outcomes.' },
    { year: '2025', title: 'New Telehealth Division', description: 'Launched dedicated telehealth division to meet the growing demand for remote care solutions.' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === milestones.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? milestones.length - 1 : prev - 1));
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-primary/5 z-0"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              {/* Timeline component */}
              <div className="bg-white p-8 rounded-lg shadow-lg relative">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Our Journey</h3>
                  <div className="flex space-x-2">
                    <Button size="icon" variant="outline" onClick={prevSlide}>
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="outline" onClick={nextSlide}>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="relative h-60">
                  {milestones.map((milestone, index) => (
                    <motion.div
                      key={index}
                      className="absolute inset-0"
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ 
                        opacity: currentSlide === index ? 1 : 0,
                        x: currentSlide === index ? 0 : 100
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="bg-primary/10 text-primary font-bold text-lg py-2 px-4 rounded-full inline-block mb-3">
                        {milestone.year}
                      </div>
                      <h4 className="text-xl font-semibold mb-2">{milestone.title}</h4>
                      <p className="text-gray-600">{milestone.description}</p>
                    </motion.div>
                  ))}
                </div>
                
                <div className="flex justify-center mt-6 space-x-2">
                  {milestones.map((_, index) => (
                    <motion.button
                      key={index}
                      className={`w-2 h-2 rounded-full ${currentSlide === index ? 'bg-primary' : 'bg-gray-300'}`}
                      onClick={() => setCurrentSlide(index)}
                      whileHover={{ scale: 1.5 }}
                    />
                  ))}
                </div>
              </div>
              
              <motion.div 
                className="absolute -left-5 -top-5 bg-primary text-white rounded px-6 py-3 shadow-lg transform -rotate-3 z-20"
                whileHover={{ rotate: 0, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <span className="font-bold flex items-center">
                  <Calendar className="mr-2 h-4 w-4" /> 
                  Est. 2018
                </span>
              </motion.div>
            </motion.div>
            
            <div className="absolute -z-10 -bottom-10 -left-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="order-1 md:order-2">
            <motion.span 
              className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              About VRG Health Consult
            </motion.span>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Driving Innovation in Healthcare Technology
            </motion.h2>
            
            <motion.p 
              className="text-gray-600 mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Founded in 2018, VRG Health Consult has been at the forefront of healthcare technology innovation. We combine deep industry expertise with cutting-edge technology to create solutions that address the most pressing challenges in healthcare delivery.
            </motion.p>
            
            <motion.p 
              className="text-gray-600 mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Our team of healthcare specialists, software engineers, and data scientists work collaboratively to develop technologies that enhance patient care, optimize operations, and drive better health outcomes.
            </motion.p>
            
            <motion.div 
              className="mt-8 space-y-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {[
                "Patient-centered design approach",
                "Evidence-based healthcare solutions",
                "Continuous innovation and improvement",
                "Collaborative partnerships with healthcare providers"
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                >
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </motion.div>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              {statsData.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, backgroundColor: "#fffafa" }}
                >
                  {index === 0 && <Users className="h-6 w-6 text-primary mx-auto mb-2" />}
                  {index === 1 && <Users className="h-6 w-6 text-primary mx-auto mb-2" />}
                  {index === 2 && <Award className="h-6 w-6 text-primary mx-auto mb-2" />}
                  {index === 3 && <Award className="h-6 w-6 text-primary mx-auto mb-2" />}
                  <span className="block text-3xl font-bold text-primary">{stat.value}</span>
                  <span className="text-gray-600">{stat.label}</span>
                </motion.div>
              ))}
            </div>
            
            <Button variant="outline" size="lg" className="mt-8">
              Meet Our Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
