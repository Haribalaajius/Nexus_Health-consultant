import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen && isMobile) {
      // Prevent background scrolling when mobile menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen, isMobile]);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
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

  const navItems = [
    { name: 'Home', path: '#home' },
    { name: 'Services', path: '#services' },
    { name: 'About', path: '#about' },
    { name: 'Features', path: '#features' },
    { name: 'Testimonials', path: '#testimonials' },
    { name: 'Resources', path: '#resources' },
    { name: 'Contact', path: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/">
            <a className="block">
              <Logo />
            </a>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.path.substring(1))}
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary relative group`}
              >
                {item.name}
                <motion.span 
                  className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-primary rounded-full opacity-0 transform scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-200"
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={location === item.path ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
                  transition={{ duration: 0.2 }}
                />
              </button>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/5"
              onClick={() => scrollToSection('contact')}
            >
              Schedule Demo
            </Button>
            <Button onClick={() => window.open('#')}>Get Started</Button>
          </div>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-50 md:hidden"
          >
            <div className="relative h-full">
              <div className="flex justify-between items-center p-4 border-b">
                <Logo />
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              
              <div className="p-4 overflow-y-auto h-[calc(100vh-80px)]">
                <nav className="space-y-6">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={index}
                      className="flex items-center w-full p-2 text-xl font-medium hover:bg-gray-100 rounded-md"
                      onClick={() => scrollToSection(item.path.substring(1))}
                      whileHover={{ x: 5 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </nav>
                
                <div className="mt-8 space-y-4">
                  <Button className="w-full justify-center" variant="outline" onClick={() => scrollToSection('contact')}>
                    Schedule Demo
                  </Button>
                  <Button className="w-full justify-center" onClick={() => window.open('#')}>
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
