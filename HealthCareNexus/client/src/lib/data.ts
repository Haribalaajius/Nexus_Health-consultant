import { 
  Heart, 
  Pill, 
  TrendingUp, 
  Smartphone, 
  Shield, 
  Brain,
  Linkedin,
  Twitter,
  Facebook,
  Instagram
} from 'lucide-react';

export const servicesData = [
  {
    title: 'Patient Management Systems',
    description: 'Streamline patient data management with our comprehensive solution that integrates seamlessly with existing healthcare infrastructure.',
    icon: Heart
  },
  {
    title: 'Medication Management',
    description: 'Optimize pharmaceutical inventory, track prescriptions, and ensure medication safety with our advanced tracking system.',
    icon: Pill
  },
  {
    title: 'Healthcare Analytics',
    description: 'Transform raw healthcare data into actionable insights with our powerful analytics platform designed for medical professionals.',
    icon: TrendingUp
  },
  {
    title: 'Telehealth Solutions',
    description: 'Connect healthcare providers with patients remotely through our secure, HIPAA-compliant telehealth platform.',
    icon: Smartphone
  },
  {
    title: 'Health Data Security',
    description: 'Protect sensitive patient information with our enterprise-grade security solutions built specifically for healthcare organizations.',
    icon: Shield
  },
  {
    title: 'AI-Powered Diagnostics',
    description: 'Enhance diagnostic accuracy with our artificial intelligence tools that assist healthcare professionals in image analysis and pattern recognition.',
    icon: Brain
  }
];

export const featuresData = [
  {
    title: 'Industry-Leading Security',
    description: 'Our solutions meet or exceed all healthcare security standards including HIPAA, ensuring your patient data is always protected.'
  },
  {
    title: 'Seamless Integration',
    description: 'Our platforms integrate effortlessly with your existing systems, minimizing disruption and maximizing efficiency.'
  },
  {
    title: '24/7 Expert Support',
    description: 'Our dedicated healthcare technology specialists are available around the clock to ensure your systems run smoothly.'
  },
  {
    title: 'Customizable Solutions',
    description: 'We understand that every healthcare organization is unique, which is why our solutions can be tailored to your specific needs.'
  }
];

export const statsData = [
  {
    value: '250+',
    label: 'Healthcare Partners'
  },
  {
    value: '15M+',
    label: 'Patients Served'
  },
  {
    value: '98%',
    label: 'Client Satisfaction'
  },
  {
    value: '30+',
    label: 'Countries Reached'
  }
];

export const testimonialData = [
  {
    name: 'Dr. Sarah Johnson',
    title: 'Medical Director, CareFirst Hospital',
    quote: 'VRG Health Consult\'s patient management system has completely transformed our clinic\'s operations. We\'ve seen a 40% increase in efficiency and our staff can now focus on what really matters - patient care.',
    stars: 5
  },
  {
    name: 'James Wilson',
    title: 'CTO, HealthPlus Systems',
    quote: 'The analytics platform from VRG Health Consult has given us unprecedented insights into our clinical operations. The data-driven decisions we can now make have improved patient outcomes significantly.',
    stars: 5
  },
  {
    name: 'Dr. Michael Chen',
    title: 'CEO, MediTech Clinics',
    quote: 'Implementation was seamless, and the support team at VRG Health Consult has been exceptional. Their telehealth solution allowed us to continue providing care during the pandemic and has now become an integral part of our service offering.',
    stars: 4
  }
];

export const resourcesData = [
  {
    title: 'Digital Transformation in Healthcare: A Comprehensive Guide',
    description: 'Explore how digital technologies are reshaping healthcare delivery and improving patient outcomes.',
    type: 'Whitepaper'
  },
  {
    title: 'How AI is Revolutionizing Healthcare Diagnostics',
    description: 'Learn how artificial intelligence is enhancing diagnostic accuracy and accelerating treatment planning.',
    type: 'Case Study'
  },
  {
    title: 'The Complete Guide to HIPAA Compliance for Healthcare Technology',
    description: 'A comprehensive resource on ensuring your healthcare technology solutions meet all HIPAA requirements.',
    type: 'Guide'
  }
];

export const contactData = {
  address: '123 Innovation Drive, Boston, MA 02115, United States',
  email: 'contact@vrghealthconsult.com',
  phone: '+1 (800) 555-HEALTH',
  hours: 'Monday - Friday, 9:00 AM - 6:00 PM EST',
  socialMedia: [
    {
      icon: Linkedin,
      url: '#'
    },
    {
      icon: Twitter,
      url: '#'
    },
    {
      icon: Facebook,
      url: '#'
    },
    {
      icon: Instagram,
      url: '#'
    }
  ]
};

export const footerLinks = {
  solutions: [
    { name: 'Patient Management', url: '#' },
    { name: 'Medication Management', url: '#' },
    { name: 'Healthcare Analytics', url: '#' },
    { name: 'Telehealth Solutions', url: '#' },
    { name: 'Health Data Security', url: '#' },
    { name: 'AI-Powered Diagnostics', url: '#' }
  ],
  company: [
    { name: 'About Us', url: '#about' },
    { name: 'Our Team', url: '#' },
    { name: 'Careers', url: '#' },
    { name: 'Resources', url: '#resources' },
    { name: 'Blog', url: '#' },
    { name: 'Contact', url: '#contact' }
  ],
  legal: [
    { name: 'Privacy Policy', url: '#' },
    { name: 'Terms of Service', url: '#' },
    { name: 'Cookies Policy', url: '#' }
  ]
};

export const clientsData = [
  { name: 'MediTech' },
  { name: 'HealthPlus' },
  { name: 'CareFirst' },
  { name: 'MedSolutions' },
  { name: 'LifeSciences' },
  { name: 'PharmaCorp' }
];

export const chatbotResponses = [
  {
    keywords: ['hello', 'hi', 'hey', 'greetings'],
    response: 'Hello! How can I assist you with VRG Health Consult\'s healthcare solutions today?'
  },
  {
    keywords: ['patient', 'management', 'patient management'],
    response: 'Our Patient Management System streamlines workflows, reduces administrative burden, and improves patient care. Would you like to learn more about its features?'
  },
  {
    keywords: ['telehealth', 'remote', 'video'],
    response: 'VRG Health Consult\'s Telehealth Solution enables secure virtual consultations, remote patient monitoring, and integrated EHR access. It\'s fully HIPAA-compliant and easy to implement.'
  },
  {
    keywords: ['analytics', 'data', 'insights'],
    response: 'Our Healthcare Analytics platform transforms your data into actionable insights, helping you improve clinical outcomes, optimize operations, and reduce costs. Would you like to see a demo?'
  },
  {
    keywords: ['security', 'hipaa', 'compliance', 'secure'],
    response: 'Security is our top priority. All VRG Health Consult solutions are HIPAA-compliant and feature end-to-end encryption, role-based access controls, and comprehensive audit trails.'
  },
  {
    keywords: ['demo', 'demonstration', 'try', 'trial'],
    response: 'I\'d be happy to arrange a personalized demo of our solutions. Please fill out the contact form, and our team will reach out to schedule a convenient time.'
  },
  {
    keywords: ['price', 'cost', 'pricing', 'subscription'],
    response: 'Our pricing varies based on your organization\'s specific needs and scale. Please contact our sales team for a customized quote that fits your requirements.'
  },
  {
    keywords: ['contact', 'speak', 'talk', 'representative', 'sales'],
    response: 'You can reach our team by filling out the contact form on our website, emailing contact@vrghealthconsult.com, or calling +1 (800) 555-HEALTH during business hours.'
  },
  {
    keywords: ['ai', 'artificial intelligence', 'machine learning'],
    response: 'Our AI-Powered Diagnostic tools use advanced algorithms to assist healthcare professionals with image analysis, predictive analytics, and clinical decision support.'
  },
  {
    keywords: ['integration', 'integrate', 'compatible'],
    response: 'VRG Health Consult solutions are designed for seamless integration with major EHR systems, billing platforms, and healthcare management software. Our team handles the entire integration process.'
  },
  {
    keywords: ['unique', 'different', 'special', 'why vrg'],
    response: 'What makes VRG Health Consult unique is our patient-centered approach, deep healthcare expertise, and commitment to innovation. We develop solutions that address real-world healthcare challenges.'
  }
];
