import { useState, useEffect } from 'react';
import {
  Shield, Search, FileCheck, BookOpen, ClipboardCheck,
  Menu, X, ArrowRight, CheckCircle, ChevronRight,
  Mail, Phone, MapPin, Linkedin, Globe, Lock,
  Database, Users, Award, TrendingUp, Zap, Target,
  Server, FileText, Eye, AlertTriangle
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Digital Forensics",
      description: "Comprehensive digital investigation services including evidence collection, data recovery, malware analysis, and incident response for legal and corporate proceedings.",
      features: ["Evidence Acquisition", "Data Recovery", "Malware Analysis", "Expert Testimony"],
      color: "from-red-500 to-orange-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Application Security",
      description: "End-to-end application security assessments, secure development lifecycle implementation, and vulnerability management for enterprise applications.",
      features: ["Penetration Testing", "Code Review", "Secure SDLC", "API Security"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "IT Governance",
      description: "Strategic IT governance frameworks aligned with COBIT, ISO 27001, and NIST standards to ensure effective management of enterprise IT resources.",
      features: ["COBIT Framework", "ISO 27001", "Risk Management", "Policy Development"],
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "SOP Development",
      description: "Custom Standard Operating Procedures tailored to your organization's digital operations, ensuring consistency, compliance, and operational excellence.",
      features: ["Process Mapping", "Documentation", "Compliance Alignment", "Training Programs"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: "IT Audit",
      description: "Thorough IT audit services covering infrastructure, security controls, data management, and regulatory compliance with actionable recommendations.",
      features: ["Control Assessment", "Compliance Audit", "Gap Analysis", "Remediation Planning"],
      color: "from-amber-500 to-yellow-500"
    }
  ];

  const stats = [
    { value: "500+", label: "Cases Handled", icon: <FileCheck className="w-6 h-6" /> },
    { value: "150+", label: "Organizations Served", icon: <Users className="w-6 h-6" /> },
    { value: "99%", label: "Success Rate", icon: <Award className="w-6 h-6" /> },
    { value: "15+", label: "Years Experience", icon: <TrendingUp className="w-6 h-6" /> },
  ];

  const process = [
    { step: "01", title: "Assessment", description: "Initial evaluation of your current digital infrastructure, security posture, and compliance status." },
    { step: "02", title: "Strategy", description: "Develop customized roadmap aligned with your business objectives and regulatory requirements." },
    { step: "03", title: "Implementation", description: "Execute solutions with minimal disruption, ensuring knowledge transfer and team empowerment." },
    { step: "04", title: "Monitoring", description: "Continuous oversight, regular reporting, and iterative improvement of all implemented controls." },
  ];

  return (
    <div className="min-h-screen bg-dark-900 text-white font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-dark-900/95 backdrop-blur-lg shadow-lg shadow-black/20' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">
                <span className="text-white">Digital</span>
                <span className="text-accent-400">Neo</span>
                <span className="text-primary-400">.id</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Services</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">About</a>
              <a href="#process" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Process</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Contact</a>
              <a href="#contact" className="px-5 py-2.5 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg text-white text-sm font-semibold hover:opacity-90 transition-opacity">
                Get Started
              </a>
            </div>

            {/* Mobile menu button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-dark-800/95 backdrop-blur-lg border-t border-white/10">
            <div className="px-4 py-6 space-y-4">
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 hover:text-white transition-colors">Services</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#process" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 hover:text-white transition-colors">Process</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 hover:text-white transition-colors">Contact</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block px-5 py-2.5 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg text-white text-sm font-semibold text-center">
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-900/20 rounded-full blur-3xl"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <div className="animate-slide-up">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card mb-8">
              <Lock className="w-4 h-4 text-accent-400" />
              <span className="text-sm text-gray-300">Trusted Digital Security Partner in Indonesia</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
              <span className="text-white">Securing Your</span>
              <br />
              <span className="gradient-text">Digital Future</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
              Expert solutions in digital forensics, IT governance, application security, 
              SOP development, and comprehensive audit services for organizations across Indonesia.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#services" className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 rounded-xl text-white font-semibold hover:opacity-90 transition-all shadow-lg shadow-primary-600/25 flex items-center space-x-2">
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#contact" className="px-8 py-4 glass-card rounded-xl text-white font-semibold hover:bg-white/10 transition-all flex items-center space-x-2">
                <span>Free Consultation</span>
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="glass-card rounded-xl p-6 text-center hover:scale-105 transition-transform">
                <div className="text-accent-400 flex justify-center mb-2">{stat.icon}</div>
                <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card mb-4">
              <Zap className="w-4 h-4 text-accent-400" />
              <span className="text-sm text-gray-300">Our Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Comprehensive <span className="gradient-text">Digital Solutions</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              From forensic investigations to governance frameworks, we deliver end-to-end digital security and compliance solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="glass-card rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300 group">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-accent-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-800/50 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card mb-4">
                <Target className="w-4 h-4 text-accent-400" />
                <span className="text-sm text-gray-300">About DigitalNeo</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Indonesia's Trusted Partner in <span className="gradient-text">Digital Integrity</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                DigitalNeo.id is a leading digital forensics and IT governance consultancy based in Indonesia. 
                We specialize in helping organizations navigate the complexities of digital security, compliance, 
                and operational excellence.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Our team of certified professionals brings deep expertise in forensic investigation, 
                risk management, and regulatory compliance. We work with government agencies, 
                financial institutions, and enterprises to build resilient digital ecosystems.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Eye className="w-5 h-5" />, text: "ISO 27001 Certified" },
                  { icon: <Award className="w-5 h-5" />, text: "CHFI Certified" },
                  { icon: <Shield className="w-5 h-5" />, text: "COBIT Framework" },
                  { icon: <Server className="w-5 h-5" />, text: "NIST Aligned" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 glass-card rounded-lg p-3">
                    <span className="text-accent-400">{item.icon}</span>
                    <span className="text-sm text-gray-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-full blur-2xl"></div>
                <h3 className="text-xl font-bold text-white mb-6 relative">Why Organizations Choose Us</h3>
                <div className="space-y-4 relative">
                  {[
                    { title: "Court-Ready Evidence", desc: "Forensic investigations that meet legal standards" },
                    { title: "Regulatory Expertise", desc: "Deep knowledge of Indonesian and international regulations" },
                    { title: "End-to-End Solutions", desc: "From assessment to implementation and monitoring" },
                    { title: "Rapid Response", desc: "24/7 incident response and forensic support" },
                    { title: "Knowledge Transfer", desc: "Empowering your team with skills and documentation" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card mb-4">
              <TrendingUp className="w-4 h-4 text-accent-400" />
              <span className="text-sm text-gray-300">Our Process</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              How We <span className="gradient-text">Deliver Results</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Our proven methodology ensures consistent, measurable outcomes for every engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <div key={index} className="glass-card rounded-2xl p-8 relative group hover:scale-[1.02] transition-all">
                <div className="text-5xl font-black text-primary-600/30 mb-4 group-hover:text-primary-500/50 transition-colors">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ChevronRight className="w-6 h-6 text-primary-500/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-800/50 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Industries We <span className="gradient-text">Serve</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Specialized expertise across critical sectors requiring robust digital governance and forensic capabilities.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: <Server className="w-8 h-8" />, label: "Banking & Finance" },
              { icon: <Shield className="w-8 h-8" />, label: "Government" },
              { icon: <Database className="w-8 h-8" />, label: "Telecommunications" },
              { icon: <Users className="w-8 h-8" />, label: "Healthcare" },
              { icon: <Globe className="w-8 h-8" />, label: "E-Commerce" },
              { icon: <AlertTriangle className="w-8 h-8" />, label: "Energy & Mining" },
            ].map((industry, index) => (
              <div key={index} className="glass-card rounded-xl p-6 text-center hover:scale-105 transition-transform cursor-default">
                <div className="text-primary-400 flex justify-center mb-3">{industry.icon}</div>
                <span className="text-sm text-gray-300 font-medium">{industry.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative glass-card rounded-3xl p-12 md:p-16 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-600/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl"></div>
            </div>
            <div className="relative text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Strengthen Your <span className="gradient-text">Digital Defense?</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
                Let our experts assess your organization's digital security posture and develop 
                a comprehensive strategy tailored to your needs.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl text-white font-semibold hover:opacity-90 transition-all shadow-lg shadow-primary-600/25">
                  Schedule Consultation
                </a>
                <a href="mailto:info@digitalneo.id" className="px-8 py-4 glass-card rounded-xl text-white font-semibold hover:bg-white/10 transition-all">
                  info@digitalneo.id
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-800/50 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card mb-4">
              <Mail className="w-4 h-4 text-accent-400" />
              <span className="text-sm text-gray-300">Get In Touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Contact <span className="gradient-text">DigitalNeo</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Ready to discuss your digital security needs? Our team is here to help.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="glass-card rounded-xl p-6 flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-primary-600/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <p className="text-gray-400 text-sm">info@digitalneo.id</p>
                  <p className="text-gray-400 text-sm">support@digitalneo.id</p>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6 flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-accent-500/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Phone</h4>
                  <p className="text-gray-400 text-sm">+62 21 xxxx xxxx</p>
                  <p className="text-gray-400 text-sm">24/7 Emergency Hotline</p>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6 flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Office</h4>
                  <p className="text-gray-400 text-sm">Jakarta, Indonesia</p>
                  <p className="text-gray-400 text-sm">Serving nationwide</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form className="glass-card rounded-2xl p-8 space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-300 mb-2">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-dark-700/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-300 mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 bg-dark-700/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-300 mb-2">Organization</label>
                    <input type="text" className="w-full px-4 py-3 bg-dark-700/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors" placeholder="Company name" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-300 mb-2">Service Needed</label>
                    <select className="w-full px-4 py-3 bg-dark-700/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors">
                      <option value="">Select a service</option>
                      <option value="forensics">Digital Forensics</option>
                      <option value="application">Application Security</option>
                      <option value="governance">IT Governance</option>
                      <option value="sop">SOP Development</option>
                      <option value="audit">IT Audit</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 bg-dark-700/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors resize-none" placeholder="Tell us about your needs..."></textarea>
                </div>
                <button type="submit" className="w-full px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl text-white font-semibold hover:opacity-90 transition-all shadow-lg shadow-primary-600/25">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">
                  <span className="text-white">Digital</span>
                  <span className="text-accent-400">Neo</span>
                  <span className="text-primary-400">.id</span>
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Indonesia's trusted partner for digital forensics, IT governance, and compliance solutions.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-400 hover:text-white text-sm transition-colors">Digital Forensics</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white text-sm transition-colors">Application Security</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white text-sm transition-colors">IT Governance</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white text-sm transition-colors">SOP Development</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white text-sm transition-colors">IT Audit</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Case Studies</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Whitepapers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Compliance Guide</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center space-x-2"><Linkedin className="w-4 h-4" /><span>LinkedIn</span></a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center space-x-2"><Globe className="w-4 h-4" /><span>Website</span></a></li>
                <li><a href="mailto:info@digitalneo.id" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center space-x-2"><Mail className="w-4 h-4" /><span>Email</span></a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-500 text-sm">
              © 2024 DigitalNeo.id. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
