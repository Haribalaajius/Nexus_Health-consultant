import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, MessageSquare, Bot, User, Sparkles, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { chatbotResponses } from '@/lib/data';

type Message = {
  id: number;
  type: 'user' | 'bot';
  text: string;
};

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, type: 'bot', text: 'Hello! Welcome to VRG Health Consult. How can I assist you with your healthcare technology needs today?' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [pulseAnimation, setPulseAnimation] = useState(false);
  
  // Pulse the chat button periodically
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isOpen) {
        setPulseAnimation(true);
        setTimeout(() => setPulseAnimation(false), 1000);
      }
    }, 10000);
    return () => clearInterval(timer);
  }, [isOpen]);
  
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);
  
  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      text: inputMessage
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);
    
    // Simulate bot response
    setTimeout(() => {
      // Choose random response or search for a matching one
      const lowerCaseInput = inputMessage.toLowerCase();
      
      const relevantResponses = chatbotResponses.filter(resp => 
        resp.keywords.some(keyword => lowerCaseInput.includes(keyword))
      );
      
      const botResponse = relevantResponses.length > 0
        ? relevantResponses[Math.floor(Math.random() * relevantResponses.length)].response
        : "I'm not sure how to help with that specific query. Would you like to speak with one of our healthcare specialists?";
      
      setIsTyping(false);
      const botMessage: Message = {
        id: messages.length + 2,
        type: 'bot',
        text: botResponse
      };
      
      setMessages(prev => [...prev, botMessage]);
    }, 1500);
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  
  const suggestedQueries = [
    "What services do you offer?",
    "How can I schedule a demo?",
    "Tell me about telehealth solutions",
    "What makes VRG Health unique?"
  ];
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-xl w-80 md:w-96 h-[500px] mb-4 overflow-hidden flex flex-col"
          >
            <div className="bg-primary p-4 text-white flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary mr-3">
                  <Bot className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold">VRG Health Assistant</h3>
                  <div className="text-xs text-white/80">Always here to help</div>
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:text-white/80 hover:bg-primary/80"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className="flex flex-col space-y-2">
                  <div className={`flex items-start ${message.type === 'user' ? 'justify-end' : ''}`}>
                    {message.type === 'bot' && (
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-2 mt-1">
                        <Bot className="h-4 w-4" />
                      </div>
                    )}
                    
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className={`rounded-lg p-3 max-w-[80%] ${
                        message.type === 'bot' 
                          ? 'bg-gray-100 text-gray-900' 
                          : 'bg-primary/10 text-gray-900'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                    </motion.div>
                    
                    {message.type === 'user' && (
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white ml-2 mt-1">
                        <User className="h-4 w-4" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-2 mt-1">
                    <Bot className="h-4 w-4" />
                  </div>
                  <motion.div 
                    className="bg-gray-100 rounded-lg p-3"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className="flex space-x-1">
                      <motion.div 
                        className="w-2 h-2 rounded-full bg-primary"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, repeatType: "loop", delay: 0 }}
                      />
                      <motion.div 
                        className="w-2 h-2 rounded-full bg-primary"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, repeatType: "loop", delay: 0.2 }}
                      />
                      <motion.div 
                        className="w-2 h-2 rounded-full bg-primary"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, repeatType: "loop", delay: 0.4 }}
                      />
                    </div>
                  </motion.div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
            
            {messages.length === 1 && (
              <div className="px-4 pb-2">
                <p className="text-xs text-gray-500 mb-2">Suggested questions:</p>
                <div className="flex flex-wrap gap-2">
                  {suggestedQueries.map((query, index) => (
                    <Button 
                      key={index} 
                      variant="outline" 
                      size="sm"
                      className="text-xs py-1 h-auto"
                      onClick={() => {
                        setInputMessage(query);
                        setTimeout(() => handleSendMessage(), 100);
                      }}
                    >
                      {query}
                    </Button>
                  ))}
                </div>
              </div>
            )}
            
            <div className="border-t border-gray-200 p-4">
              <div className="flex">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                <Button 
                  className="rounded-l-none group"
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim().length}
                >
                  <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <div className="text-center mt-2">
                <span className="text-xs text-gray-400 flex items-center justify-center">
                  <Sparkles className="h-3 w-3 mr-1" /> 
                  Powered by VRG Health AI
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.div
        whileHover={{ scale: 1.05 }}
        animate={{ 
          scale: pulseAnimation ? [1, 1.1, 1] : 1
        }}
        transition={{
          duration: 0.3,
          type: "spring",
          stiffness: 500
        }}
      >
        <Button
          size="icon"
          className="w-16 h-16 rounded-full shadow-lg flex items-center justify-center text-2xl relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MessageSquare className="h-6 w-6" />
          
          {!isOpen && (
            <motion.div 
              className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-green-500 border-2 border-white"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
          )}
        </Button>
      </motion.div>
    </div>
  );
};

export default Chatbot;
