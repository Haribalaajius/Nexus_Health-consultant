import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Heart, 
  ShieldCheck, 
  Stethoscope, 
  Brain, 
  PlusCircle,
  ChevronRight
} from 'lucide-react';

const Hero: React.FC = () => {
  const [activeIcon, setActiveIcon] = useState(0);
  const icons = [Heart, ShieldCheck, Stethoscope, Brain];
  const iconColors = ['#C02031', '#f59e0b', '#3b82f6', '#8b5cf6'];
  const iconText = ['Care', 'Protection', 'Expertise', 'Innovation'];
  
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIcon((prev) => (prev + 1) % icons.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: 'smooth'
      });
    }
  };

  const IconComponent = icons[activeIcon];

  return (
    <section id="home" className="pt-24 md:pt-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-100/30 to-white z-0"></div>
      
      {/* Animated circles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/5"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        <motion.div 
          className="absolute top-1/3 -left-12 w-48 h-48 rounded-full bg-blue-500/5"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-1/4 w-32 h-32 rounded-full bg-purple-500/5"
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="inline-flex items-center space-x-2 mb-6 bg-white shadow-md rounded-full px-4 py-2"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                <PlusCircle className="h-4 w-4 text-primary" />
              </span>
              <span className="text-sm font-medium">Transforming Healthcare Since 2018</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Elevating Health Through 
              <div className="inline-flex items-center relative mt-2">
                <span className="text-primary ml-2">
                  {iconText[activeIcon]}
                </span>
                <motion.div 
                  className="absolute -right-12 top-2"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  key={activeIcon}
                >
                  <div className="p-2 rounded-full" style={{ backgroundColor: `${iconColors[activeIcon]}20` }}>
                    <IconComponent style={{ color: iconColors[activeIcon] }} className="h-8 w-8" />
                  </div>
                </motion.div>
              </div>
            </h1>
            
            <p className="mt-6 text-lg text-gray-600">
              VRG Health Consult delivers innovative solutions that enhance patient care, streamline operations, and revolutionize healthcare delivery systems.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={() => scrollToSection('services')}
                className="group"
              >
                Explore Our Solutions
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="hover:bg-primary/5"
              >
                Get In Touch
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: '10+', label: 'Years Experience' },
                { value: '50k+', label: 'Patients Served' },
                { value: '100+', label: 'Healthcare Partners' },
                { value: '98%', label: 'Client Satisfaction' }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center p-3 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (index * 0.1) }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            className="relative hidden md:block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <motion.div 
                className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300 z-20 relative"
                whileHover={{ y: -10 }}
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-100 h-64 relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5"></div>
                  <motion.div
                    animate={{ 
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      repeatType: "reverse" 
                    }}
                  >
                    <svg width="120" height="120" viewBox="0 0 224 224" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M171.1 112C171.1 145 144.2 171.9 111.1 171.9C78.1 171.9 51.2 145 51.2 112C51.2 79 78.1 52.1 111.1 52.1C144.2 52.1 171.1 79 171.1 112Z" fill="#C02031"/>
                      <path d="M111.1 134.3C123.6 134.3 133.7 124.3 133.7 111.8C133.7 99.3 123.6 89.3 111.1 89.3C98.6 89.3 88.6 99.3 88.6 111.8C88.6 124.3 98.6 134.3 111.1 134.3Z" fill="white"/>
                      <path d="M223.1 112C223.1 173.9 173.1 224 111.1 224C49.2 224 -0.8 173.9 -0.8 112C-0.8 50.1 49.2 0 111.1 0C173.1 0 223.1 50.1 223.1 112ZM111.1 20.3C60.4 20.3 19.4 61.2 19.4 112C19.4 162.8 60.4 203.7 111.1 203.7C161.9 203.7 202.9 162.8 202.9 112C202.9 61.2 161.9 20.3 111.1 20.3Z" fill="#C02031"/>
                    </svg>
                  </motion.div>
                </div>
                <div className="p-6">
                  <span className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">Featured</span>
                  <h3 className="text-xl font-semibold mt-3">Digital Health Management Platform</h3>
                  <p className="mt-2 text-gray-600">Streamline patient data and provide seamless healthcare experiences.</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -right-8 -bottom-8 w-3/4 h-48 bg-white rounded-lg shadow-lg z-10 p-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Stethoscope className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Expert Medical Consulting</h4>
                    <p className="text-sm text-gray-600 mt-1">Our team of specialists provides comprehensive healthcare consultations.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
