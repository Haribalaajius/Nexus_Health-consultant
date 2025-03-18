import React from 'react';
import Logo from './Logo';
import { footerLinks, contactData } from '@/lib/data';

const Footer: React.FC = () => {
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

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="h-10 mb-6 text-white">
              <Logo />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              PharmaQube is a leading provider of innovative healthcare technology solutions that enable healthcare organizations to optimize their operations and improve patient outcomes.
            </p>
            <div className="flex space-x-4">
              {contactData.socialMedia.map((item, index) => (
                <a 
                  key={index}
                  href={item.url} 
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary transition-all duration-300"
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Solutions</h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((item, index) => (
                <li key={index}>
                  <a href={item.url} className="text-gray-400 hover:text-white transition-colors duration-300">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.url} 
                    onClick={(e) => {
                      if (item.url.startsWith('#')) {
                        e.preventDefault();
                        scrollToSection(item.url.substring(1));
                      }
                    }}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} PharmaQube. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {footerLinks.legal.map((item, index) => (
              <a key={index} href={item.url} className="text-gray-400 text-sm hover:text-white transition-colors duration-300">
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
