import { useState } from 'react';
import {
  Shield, Search, FileCheck, BookOpen, ClipboardCheck,
  Menu, X, ArrowRight, CheckCircle, Mail, Phone, MapPin,
  Globe, Database, Users, Award, Zap, Link2, Cloud,
  Cpu, Coins, Terminal, Gauge, Calendar, ExternalLink,
  Fingerprint, Scale, ChevronDown
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Data dari website asli digitalneo.id
  const features = [
    { icon: <Link2 className="w-8 h-8" />, title: "BlockChain" },
    { icon: <Cloud className="w-8 h-8" />, title: "Cloud Computing" },
    { icon: <Cpu className="w-8 h-8" />, title: "Artificial Intelligence" },
    { icon: <Coins className="w-8 h-8" />, title: "Crypto Currency" },
    { icon: <Users className="w-8 h-8" />, title: "Interactive Learning" },
    { icon: <Terminal className="w-8 h-8" />, title: "Powerful CLI" },
    { icon: <Gauge className="w-8 h-8" />, title: "Progress Improvement" },
    { icon: <Calendar className="w-8 h-8" />, title: "Tight Schedule" },
  ];

  // Services section (sesuai permintaan user sebelumnya)
  const services = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Digital Forensics",
      desc: "Investigasi digital komprehensif termasuk pengumpulan bukti, pemulihan data, analisis malware, dan respons insiden untuk proses hukum dan korporasi.",
      items: ["Computer Forensics", "Mobile Forensics", "Network Forensics", "Expert Testimony"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Application Security",
      desc: "Penilaian keamanan aplikasi end-to-end, secure development lifecycle, dan manajemen kerentanan untuk aplikasi enterprise.",
      items: ["Penetration Testing", "Code Review", "Secure SDLC", "API Security"]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "IT Governance",
      desc: "Kerangka tata kelola IT strategis yang selaras dengan COBIT, ISO 27001, dan NIST untuk manajemen sumber daya IT yang efektif.",
      items: ["COBIT Framework", "ISO 27001", "Risk Management", "Policy Development"]
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "SOP Development",
      desc: "Prosedur Operasi Standar yang disesuaikan dengan operasi digital organisasi, memastikan konsistensi, kepatuhan, dan keunggulan operasional.",
      items: ["Process Mapping", "Documentation", "Compliance", "Training Programs"]
    },
    {
      icon: <ClipboardCheck className="w-6 h-6" />,
      title: "IT Audit",
      desc: "Audit IT menyeluruh yang mencakup infrastruktur, kontrol keamanan, manajemen data, dan kepatuhan regulasi.",
      items: ["Control Assessment", "Compliance Audit", "Gap Analysis", "Remediation Planning"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00d68f] to-[#00b4d8] flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-base font-bold">
                <span className="text-white">Digital</span>
                <span className="text-[#00d68f]"> Neo</span>
                <span className="text-[#00b4d8] text-xs">.id</span>
              </span>
            </a>

            <div className="hidden md:flex items-center space-x-6">
              <a href="#revolution" className="text-sm text-gray-400 hover:text-white transition-colors">Digital Revolution</a>
              <a href="#services" className="text-sm text-gray-400 hover:text-white transition-colors">Services</a>
              <a href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</a>
              <a href="https://digitalneo.id/readme" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-[#00d68f] to-[#00b4d8] rounded-lg text-white text-sm font-medium hover:opacity-90 transition-opacity">
                ReadMe Doc
              </a>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-[#111] border-t border-white/5">
            <div className="px-4 py-4 space-y-3">
              <a href="#revolution" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 text-sm">Digital Revolution</a>
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 text-sm">Services</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 text-sm">Contact</a>
              <a href="https://digitalneo.id/readme" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 bg-gradient-to-r from-[#00d68f] to-[#00b4d8] rounded-lg text-white text-sm font-medium text-center">
                ReadMe Doc
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Data dari website asli */}
      <section className="min-h-screen flex items-center justify-center relative pt-16 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#00d68f]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#00b4d8]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(rgba(0,214,143,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,214,143,0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}></div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 leading-tight">
              <span className="text-white">Digital Neo</span>
              <br />
              <span className="gradient-text">Sistem</span>
            </h1>

            <h2 className="text-2xl sm:text-3xl text-[#00d68f] mb-4 font-light">
              Partner in Digital World
            </h2>

            <p className="text-lg text-gray-400 mb-8 italic">
              Learning by doing and real life Hands-on
            </p>

            <a href="https://digitalneo.id/readme" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#00d68f] to-[#00b4d8] rounded-lg text-white font-medium hover:opacity-90 transition-opacity">
              <span>ReadMe Doc</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <a href="#revolution" className="inline-block mt-16 animate-bounce">
            <ChevronDown className="w-6 h-6 text-[#00d68f]/50" />
          </a>
        </div>
      </section>

      {/* Digital Revolution Section - Data dari website asli */}
      <section id="revolution" className="py-20 bg-[#111]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Digital Revolution
            </h2>
            <h3 className="text-2xl font-bold text-white mb-3">
              Learning technology to be come <em className="gradient-text">Relevant</em> ...
            </h3>
            <p className="text-gray-500 text-lg">
              everything digital can be copy, modified and transfer easily
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="glass rounded-xl p-6 text-center hover:scale-105 transition-all group">
                <div className="text-[#00d68f] flex justify-center mb-3 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h6 className="text-white font-semibold text-sm">
                  {feature.title}
                </h6>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Comprehensive digital solutions for modern organizations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="glass rounded-xl p-6 hover:scale-[1.02] transition-all">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00d68f] to-[#00b4d8] flex items-center justify-center text-white mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{service.desc}</p>
                <ul className="space-y-2">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-center space-x-2 text-xs text-gray-400">
                      <CheckCircle className="w-3.5 h-3.5 text-[#00d68f] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Data dari website asli */}
      <section id="contact" className="py-20 bg-[#111]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Contact <span className="gradient-text">Us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Contact Info - Data asli dari website */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                PT Digital Neo Sistem
              </h3>
              <h4 className="text-lg text-[#00d68f] mb-6">
                Wisma Iskandarsyah Blok A10
              </h4>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#00d68f] flex-shrink-0 mt-0.5" />
                  <div className="text-gray-400 text-sm">
                    <p>Jl. Iskandarsyah Raya Kav 12-14</p>
                    <p>Kel. Melawai, Kec. Kebayoran Baru</p>
                    <p>Jakarta Selatan, DKI Jakarta</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#00d68f] flex-shrink-0" />
                  <a href="mailto:info@digitalneo.id" className="text-gray-400 text-sm hover:text-[#00d68f] transition-colors">
                    info@digitalneo.id
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-[#00d68f] flex-shrink-0" />
                  <a href="https://x.com/digitalneoid" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-[#00d68f] transition-colors flex items-center space-x-1">
                    <span>x.com/digitalneoid</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <a href="https://digitalneo.id/location" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#00d68f] to-[#00b4d8] rounded-lg text-white text-sm font-medium hover:opacity-90 transition-opacity mt-4">
                  <span>Find out more...</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass rounded-xl p-6">
              <form className="space-y-4">
                <div>
                  <label className="block text-xs text-gray-400 mb-1.5">Name</label>
                  <input type="text" className="w-full px-3 py-2.5 bg-[#1a1a1a] border border-white/10 rounded-lg text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#00d68f] transition-colors" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1.5">Email</label>
                  <input type="email" className="w-full px-3 py-2.5 bg-[#1a1a1a] border border-white/10 rounded-lg text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#00d68f] transition-colors" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1.5">Message</label>
                  <textarea rows={4} className="w-full px-3 py-2.5 bg-[#1a1a1a] border border-white/10 rounded-lg text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#00d68f] transition-colors resize-none" placeholder="Your message..."></textarea>
                </div>
                <button type="submit" className="w-full px-6 py-3 bg-gradient-to-r from-[#00d68f] to-[#00b4d8] rounded-lg text-white font-medium hover:opacity-90 transition-opacity">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#00d68f] to-[#00b4d8] flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-bold">
                <span className="text-white">Digital</span>
                <span className="text-[#00d68f]"> Neo</span>
                <span className="text-[#00b4d8] text-xs">.id</span>
              </span>
            </div>

            <p className="text-gray-600 text-xs text-center">
              © 2024 PT Digital Neo Sistem. All rights reserved.
            </p>

            <div className="flex items-center space-x-4">
              <a href="https://digitalneo.id" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#00d68f] text-xs transition-colors flex items-center space-x-1">
                <span>digitalneo.id</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
