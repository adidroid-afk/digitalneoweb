import { useState } from 'react';
import {
  Shield, Search, FileCheck, BookOpen, ClipboardCheck,
  Menu, X, ArrowRight, CheckCircle, Mail, Phone, MapPin,
  Globe, Database, Users, Award, Zap, Link2, Cloud,
  Cpu, Coins, Terminal, Gauge, Calendar, ExternalLink,
  Fingerprint, Scale, Building2, Server, ChevronDown
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Digital Forensics",
      desc: "Investigasi digital, pengumpulan bukti, pemulihan data, analisis malware, dan respons insiden untuk proses hukum.",
      items: ["Computer Forensics", "Mobile Forensics", "Network Forensics", "Expert Testimony"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Application Security",
      desc: "Penilaian keamanan aplikasi, penetration testing, code review, dan secure development lifecycle.",
      items: ["Penetration Testing", "Code Review", "Secure SDLC", "API Security"]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "IT Governance",
      desc: "Kerangka tata kelola IT strategis selaras dengan COBIT, ISO 27001, NIST, dan regulasi Indonesia.",
      items: ["COBIT Framework", "ISO 27001", "Risk Management", "Policy Development"]
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "SOP Development",
      desc: "Prosedur Operasi Standar untuk operasi digital, memastikan konsistensi, kepatuhan, dan efisiensi.",
      items: ["Process Mapping", "Documentation", "Compliance", "Training Programs"]
    },
    {
      icon: <ClipboardCheck className="w-6 h-6" />,
      title: "IT Audit",
      desc: "Audit infrastruktur IT, kontrol keamanan, manajemen data, dan kepatuhan regulasi.",
      items: ["Control Assessment", "Compliance Audit", "Gap Analysis", "Remediation"]
    }
  ];

  const techStack = [
    { icon: <Link2 className="w-5 h-5" />, label: "Blockchain" },
    { icon: <Cloud className="w-5 h-5" />, label: "Cloud Computing" },
    { icon: <Cpu className="w-5 h-5" />, label: "AI" },
    { icon: <Coins className="w-5 h-5" />, label: "Crypto" },
    { icon: <Terminal className="w-5 h-5" />, label: "CLI Tools" },
    { icon: <Gauge className="w-5 h-5" />, label: "Monitoring" },
  ];

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d0d0d]/90 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg gradient-green flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-base font-bold">
                <span className="text-white">Digital</span>
                <span className="text-[#00d68f]">Neo</span>
                <span className="text-[#00b4d8] text-xs">.id</span>
              </span>
            </a>

            <div className="hidden md:flex items-center space-x-6">
              <a href="#services" className="text-sm text-gray-400 hover:text-white transition-colors">Services</a>
              <a href="#forensics" className="text-sm text-gray-400 hover:text-white transition-colors">Forensics</a>
              <a href="#governance" className="text-sm text-gray-400 hover:text-white transition-colors">Governance</a>
              <a href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</a>
              <a href="#contact" className="px-4 py-2 gradient-green rounded-lg text-white text-sm font-medium hover:opacity-90 transition-opacity">
                Get Started
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
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 text-sm">Services</a>
              <a href="#forensics" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 text-sm">Forensics</a>
              <a href="#governance" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 text-sm">Governance</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 text-sm">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center relative pt-16 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-[#00d68f]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#00b4d8]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(rgba(0,214,143,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,214,143,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full glass mb-8">
            <div className="w-2 h-2 rounded-full bg-[#00d68f] animate-pulse-slow"></div>
            <span className="text-xs text-gray-400">PT Digital Neo Sistem</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
            <span className="text-white">Digital Neo</span>
            <br />
            <span className="gradient-text">Sistem</span>
          </h1>

          <p className="text-xl text-[#00d68f] mb-3 font-light">
            Partner in Digital World
          </p>

          <p className="text-base text-gray-500 mb-8 italic">
            "Learning by doing and real life Hands-on"
          </p>

          <p className="text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
            Spesialis dalam Digital Forensics, IT Governance, Application Security, 
            SOP Development, dan Audit untuk organisasi di Indonesia.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#services" className="px-6 py-3 gradient-green rounded-lg text-white font-medium hover:opacity-90 transition-opacity flex items-center space-x-2">
              <span>Our Services</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="px-6 py-3 glass rounded-lg text-white font-medium hover:bg-white/10 transition-all">
              Contact Us
            </a>
          </div>

          {/* Terminal */}
          <div className="mt-16 max-w-lg mx-auto text-left">
            <div className="bg-[#111] border border-[#333] rounded-lg p-4">
              <div className="flex items-center space-x-1.5 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
              </div>
              <div className="font-mono text-xs">
                <div><span className="text-[#00d68f]">$</span> <span className="text-gray-400">digitalneo --forensics --governance --audit</span></div>
                <div className="text-gray-500 mt-1">→ Scanning digital infrastructure...</div>
                <div className="text-gray-500">→ Analyzing security posture...</div>
                <div className="text-[#00d68f] mt-1">✓ All systems ready. Let's secure your digital assets.</div>
              </div>
            </div>
          </div>

          <a href="#services" className="inline-block mt-12 animate-bounce">
            <ChevronDown className="w-5 h-5 text-[#00d68f]/50" />
          </a>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-white/5 bg-[#111]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "500+", label: "Cases Handled" },
              { value: "150+", label: "Organizations" },
              { value: "99%", label: "Success Rate" },
              { value: "15+", label: "Years Experience" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Comprehensive digital solutions for modern organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, i) => (
              <div key={i} className="glass rounded-xl p-6 hover:scale-[1.02] transition-all">
                <div className="w-10 h-10 rounded-lg gradient-green flex items-center justify-center text-white mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{service.desc}</p>
                <ul className="space-y-1.5">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-center space-x-2 text-xs text-gray-400">
                      <CheckCircle className="w-3 h-3 text-[#00d68f] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Forensics */}
      <section id="forensics" className="py-20 bg-[#111]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full glass mb-4">
                <Fingerprint className="w-3.5 h-3.5 text-[#00d68f]" />
                <span className="text-xs text-gray-400">Digital Forensics</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Forensik Digital <span className="gradient-text">Profesional</span>
              </h2>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Tim forensik digital bersertifikat CHFI menyediakan investigasi lengkap untuk 
                mengungkap insiden keamanan siber, penipuan berbasis komputer, dan pelanggaran data.
              </p>
              <p className="text-gray-500 text-sm mb-6">
                Setiap investigasi dilakukan dengan metodologi ketat, menjaga chain of custody, 
                dan menghasilkan laporan yang memenuhi standar hukum Indonesia dan internasional.
              </p>
              <div className="flex flex-wrap gap-2">
                {["CHFI", "EnCE", "GCFA", "CCFP", "ISO 27001"].map((cert, i) => (
                  <span key={i} className="px-2.5 py-1 text-[10px] font-medium rounded-full bg-[#00d68f]/10 text-[#00d68f] border border-[#00d68f]/20">
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: <Fingerprint className="w-5 h-5" />, title: "Computer", desc: "Akuisisi & analisis bukti digital" },
                { icon: <Server className="w-5 h-5" />, title: "Mobile", desc: "Ekstraksi data smartphone & tablet" },
                { icon: <Database className="w-5 h-5" />, title: "Network", desc: "Analisis traffic & deteksi intrusi" },
                { icon: <Cloud className="w-5 h-5" />, title: "Cloud", desc: "Investigasi insiden cloud" },
                { icon: <Scale className="w-5 h-5" />, title: "Legal", desc: "Kesaksian ahli & dokumentasi" },
                { icon: <Shield className="w-5 h-5" />, title: "Malware", desc: "Analisis malware & threat intel" },
              ].map((item, i) => (
                <div key={i} className="glass rounded-lg p-4 hover:scale-[1.02] transition-all">
                  <div className="text-[#00d68f] mb-2">{item.icon}</div>
                  <h4 className="text-white font-semibold text-sm mb-1">{item.title}</h4>
                  <p className="text-gray-500 text-[11px]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Governance & Audit */}
      <section id="governance" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full glass mb-4">
              <Shield className="w-3.5 h-3.5 text-[#00d68f]" />
              <span className="text-xs text-gray-400">Governance & Audit</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-3">
              IT Governance & <span className="gradient-text">Compliance</span>
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Kerangka tata kelola IT selaras dengan standar internasional dan regulasi Indonesia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { title: "COBIT 2019", desc: "Framework tata kelola IT enterprise", pct: 95 },
              { title: "ISO 27001", desc: "Sistem manajemen keamanan informasi", pct: 90 },
              { title: "NIST CSF", desc: "Cybersecurity framework", pct: 88 },
              { title: "ITIL v4", desc: "Best practices manajemen layanan IT", pct: 85 },
              { title: "POJK", desc: "Regulasi Otoritas Jasa Keuangan", pct: 92 },
              { title: "UU PDP", desc: "Perlindungan Data Pribadi", pct: 87 },
            ].map((fw, i) => (
              <div key={i} className="glass rounded-xl p-5">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-white font-bold text-sm">{fw.title}</h4>
                  <span className="text-[#00d68f] text-xs font-bold">{fw.pct}%</span>
                </div>
                <p className="text-gray-500 text-xs mb-3">{fw.desc}</p>
                <div className="w-full h-1.5 bg-[#222] rounded-full overflow-hidden">
                  <div className="h-full gradient-green rounded-full" style={{ width: `${fw.pct}%` }}></div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="glass rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <BookOpen className="w-5 h-5 text-[#00d68f]" />
                <h3 className="text-white font-bold">SOP Development</h3>
              </div>
              <ul className="space-y-2">
                {[
                  "Incident Response Procedures",
                  "Data Handling & Classification",
                  "Access Control Management",
                  "Change Management Process",
                  "Business Continuity Planning",
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-2 text-sm text-gray-400">
                    <CheckCircle className="w-3.5 h-3.5 text-[#00d68f] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <ClipboardCheck className="w-5 h-5 text-[#00b4d8]" />
                <h3 className="text-white font-bold">IT Audit Services</h3>
              </div>
              <ul className="space-y-2">
                {[
                  "IT General Controls Audit",
                  "Application Controls Review",
                  "Security Awareness Assessment",
                  "Regulatory Compliance Check",
                  "Vendor Risk Assessment",
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-2 text-sm text-gray-400">
                    <CheckCircle className="w-3.5 h-3.5 text-[#00b4d8] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-16 bg-[#111]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">
              Technology <span className="gradient-text">Stack</span>
            </h2>
            <p className="text-gray-500 text-sm">
              Everything digital can be copied, modified and transferred easily.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, i) => (
              <div key={i} className="glass rounded-lg px-4 py-3 flex items-center space-x-2 hover:scale-105 transition-all">
                <span className="text-[#00d68f]">{tech.icon}</span>
                <span className="text-sm text-gray-300">{tech.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="glass rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  PT Digital Neo <span className="gradient-text">Sistem</span>
                </h2>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  Perusahaan teknologi berfokus pada solusi keamanan digital, forensik, dan tata kelola IT. 
                  Dengan pendekatan "Learning by doing and real life Hands-on", kami memastikan setiap solusi 
                  praktis dan efektif.
                </p>
                <p className="text-gray-500 text-sm mb-4">
                  "The next few years will be completely different and Learning is the best way to survive."
                </p>
                <div className="flex flex-wrap gap-2">
                  {["ISO 27001", "CHFI Certified", "COBIT", "NIST"].map((item, i) => (
                    <span key={i} className="px-2.5 py-1 text-[10px] font-medium rounded-full bg-white/5 text-gray-400 border border-white/10">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-white font-bold mb-4">Why Choose Us</h3>
                <div className="space-y-3">
                  {[
                    "Court-ready forensic evidence",
                    "Deep regulatory expertise (POJK, UU PDP, UU ITE)",
                    "End-to-end solutions from assessment to monitoring",
                    "24/7 incident response support",
                    "Knowledge transfer & team empowerment",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-[#00d68f] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-400">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-[#111]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-gray-500">Ready to discuss your digital security needs?</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Info */}
            <div className="space-y-4">
              <div className="glass rounded-xl p-5 flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-[#00d68f]/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#00d68f]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">Email</h4>
                  <p className="text-gray-400 text-sm">info@digitalneo.id</p>
                </div>
              </div>

              <div className="glass rounded-xl p-5 flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-[#00b4d8]/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#00b4d8]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">Phone</h4>
                  <p className="text-gray-400 text-sm">24/7 Emergency Hotline</p>
                </div>
              </div>

              <div className="glass rounded-xl p-5 flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-[#00d68f]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#00d68f]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">Office</h4>
                  <p className="text-gray-400 text-sm">Wisma Iskandarsyah Blok A10</p>
                  <p className="text-gray-400 text-sm">Jl. Iskandarsyah Raya Kav 12-14</p>
                  <p className="text-gray-400 text-sm">Kel. Melawai, Kec. Kebayoran Baru</p>
                  <p className="text-gray-400 text-sm">Jakarta Selatan, DKI Jakarta</p>
                </div>
              </div>

              <div className="glass rounded-xl p-5 flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-[#00b4d8]/10 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-5 h-5 text-[#00b4d8]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">Social</h4>
                  <a href="https://x.com/digitalneoid" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-[#00d68f] transition-colors flex items-center space-x-1">
                    <span>X: @digitalneoid</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <form className="glass rounded-xl p-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-400 mb-1.5">Name</label>
                  <input type="text" className="w-full px-3 py-2.5 bg-[#1a1a1a] border border-white/10 rounded-lg text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#00d68f] transition-colors" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1.5">Email</label>
                  <input type="email" className="w-full px-3 py-2.5 bg-[#1a1a1a] border border-white/10 rounded-lg text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#00d68f] transition-colors" placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1.5">Organization</label>
                <input type="text" className="w-full px-3 py-2.5 bg-[#1a1a1a] border border-white/10 rounded-lg text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#00d68f] transition-colors" placeholder="Company name" />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1.5">Service</label>
                <select className="w-full px-3 py-2.5 bg-[#1a1a1a] border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-[#00d68f] transition-colors">
                  <option value="">Select a service</option>
                  <option value="forensics">Digital Forensics</option>
                  <option value="application">Application Security</option>
                  <option value="governance">IT Governance</option>
                  <option value="sop">SOP Development</option>
                  <option value="audit">IT Audit</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1.5">Message</label>
                <textarea rows={4} className="w-full px-3 py-2.5 bg-[#1a1a1a] border border-white/10 rounded-lg text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#00d68f] transition-colors resize-none" placeholder="Tell us about your needs..."></textarea>
              </div>
              <button type="submit" className="w-full px-6 py-3 gradient-green rounded-lg text-white font-medium hover:opacity-90 transition-opacity">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 rounded-lg gradient-green flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-bold">
                <span className="text-white">Digital</span>
                <span className="text-[#00d68f]">Neo</span>
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
