import React from 'react';
import Hero from '@/components/Hero';
import Clients from '@/components/Clients';
import Services from '@/components/Services';
import Features from '@/components/Features';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Resources from '@/components/Resources';
import Contact from '@/components/Contact';
import Chatbot from '@/components/Chatbot';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Clients />
      <Services />
      <Features />
      <About />
      <Testimonials />
      <Resources />
      <Contact />
      <Chatbot />
    </div>
  );
};

export default Home;
