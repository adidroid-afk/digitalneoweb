import { useState, useEffect } from 'react';
import {
  Shield, Search, FileCheck, BookOpen, ClipboardCheck,
  Menu, X, ArrowRight, CheckCircle, ChevronRight,
  Mail, Phone, MapPin, Linkedin, Globe, Lock,
  Database, Users, Award, TrendingUp, Zap, Target,
  Server, FileText, Eye, AlertTriangle, Link2, Cloud,
  Cpu, Coins, MessageSquare, Terminal, Gauge, Calendar,
  ExternalLink, Fingerprint, Scale, Building2
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Track active section
      const sections = ['hero', 'services', 'about', 'forensics', 'governance', 'process', 'contact'];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Search className="w-7 h-7" />,
      title: "Digital Forensics",
      description: "Investigasi digital komprehensif termasuk pengumpulan bukti, pemulihan data, analisis malware, dan respons insiden untuk proses hukum dan korporasi.",
      features: ["Evidence Acquisition", "Data Recovery", "Malware Analysis", "Expert Testimony", "Mobile Forensics"],
      color: "from-neo-green/80 to-neo-blue/80"
    },
    {
      icon: <Database className="w-7 h-7" />,
      title: "Application Security",
      description: "Penilaian keamanan aplikasi end-to-end, implementasi secure development lifecycle, dan manajemen kerentanan untuk aplikasi enterprise.",
      features: ["Penetration Testing", "Code Review", "Secure SDLC", "API Security", "Vulnerability Assessment"],
      color: "from-neo-blue/80 to-neo-purple/80"
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "IT Governance",
      description: "Kerangka tata kelola IT strategis yang selaras dengan standar COBIT, ISO 27001, dan NIST untuk memastikan manajemen sumber daya IT enterprise yang efektif.",
      features: ["COBIT Framework", "ISO 27001", "Risk Management", "Policy Development", "Compliance"],
      color: "from-neo-purple/80 to-neo-orange/80"
    },
    {
      icon: <BookOpen className="w-7 h-7" />,
      title: "SOP Development",
      description: "Prosedur Operasi Standar yang disesuaikan dengan operasi digital organisasi Anda, memastikan konsistensi, kepatuhan, dan keunggulan operasional.",
      features: ["Process Mapping", "Documentation", "Compliance Alignment", "Training Programs", "Workflow Design"],
      color: "from-neo-orange/80 to-neo-green/80"
    },
    {
      icon: <ClipboardCheck className="w-7 h-7" />,
      title: "IT Audit",
      description: "Layanan audit IT menyeluruh yang mencakup infrastruktur, kontrol keamanan, manajemen data, dan kepatuhan regulasi dengan rekomendasi yang dapat ditindaklanjuti.",
      features: ["Control Assessment", "Compliance Audit", "Gap Analysis", "Remediation Planning", "Risk Reporting"],
      color: "from-neo-green/80 to-neo-purple/80"
    }
  ];

  const techStack = [
    { icon: <Link2 className="w-6 h-6" />, title: "Blockchain", desc: "Distributed ledger technology & smart contracts" },
    { icon: <Cloud className="w-6 h-6" />, title: "Cloud Computing", desc: "Scalable cloud infrastructure & services" },
    { icon: <Cpu className="w-6 h-6" />, title: "Artificial Intelligence", desc: "Machine learning & intelligent automation" },
    { icon: <Coins className="w-6 h-6" />, title: "Crypto Currency", desc: "Digital asset security & blockchain analysis" },
    { icon: <MessageSquare className="w-6 h-6" />, title: "Interactive Learning", desc: "Hands-on training & knowledge transfer" },
    { icon: <Terminal className="w-6 h-6" />, title: "Powerful CLI", desc: "Command-line forensics & automation tools" },
    { icon: <Gauge className="w-6 h-6" />, title: "Progress Improvement", desc: "Continuous monitoring & optimization" },
    { icon: <Calendar className="w-6 h-6" />, title: "Tight Schedule", desc: "Agile delivery & rapid deployment" },
  ];

  const stats = [
    { value: "500+", label: "Cases Handled", icon: <FileCheck className="w-6 h-6" /> },
    { value: "150+", label: "Organizations Served", icon: <Users className="w-6 h-6" /> },
    { value: "99%", label: "Success Rate", icon: <Award className="w-6 h-6" /> },
    { value: "15+", label: "Years Experience", icon: <TrendingUp className="w-6 h-6" /> },
  ];

  const process = [
    { step: "01", title: "Assessment", description: "Evaluasi awal infrastruktur digital, postur keamanan, dan status kepatuhan organisasi Anda." },
    { step: "02", title: "Strategy", description: "Mengembangkan roadmap yang disesuaikan dengan tujuan bisnis dan persyaratan regulasi." },
    { step: "03", title: "Implementation", description: "Eksekusi solusi dengan gangguan minimal, memastikan transfer pengetahuan dan pemberdayaan tim." },
    { step: "04", title: "Monitoring", description: "Pengawasan berkelanjutan, pelaporan rutin, dan perbaikan iteratif dari semua kontrol yang diterapkan." },
  ];

  const forensicsCapabilities = [
    {
      icon: <Fingerprint className="w-6 h-6" />,
      title: "Computer Forensics",
      desc: "Akuisisi dan analisis bukti digital dari komputer, laptop, dan media penyimpanan dengan chain of custody yang terdokumentasi."
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Forensics",
      desc: "Ekstraksi data dari perangkat mobile termasuk smartphone, tablet, dan GPS device untuk investigasi."
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Network Forensics",
      desc: "Monitoring dan analisis traffic jaringan untuk mendeteksi intrusi, malware, dan aktivitas mencurigakan."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database Forensics",
      desc: "Investigasi manipulasi database, audit trail analysis, dan pemulihan data yang hilang atau terhapus."
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Forensics",
      desc: "Investigasi insiden keamanan pada lingkungan cloud termasuk AWS, Azure, dan Google Cloud Platform."
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Legal Support",
      desc: "Dukungan hukum dengan kesaksian ahli dan dokumentasi bukti yang memenuhi standar pengadilan."
    },
  ];

  const governanceFrameworks = [
    { title: "COBIT 2019", desc: "Framework tata kelola dan manajemen IT enterprise", level: 95 },
    { title: "ISO 27001", desc: "Sistem manajemen keamanan informasi", level: 90 },
    { title: "NIST CSF", desc: "Cybersecurity framework untuk infrastruktur kritis", level: 88 },
    { title: "ITIL v4", desc: "Best practices manajemen layanan IT", level: 85 },
    { title: "POJK", desc: "Kepatuhan regulasi Otoritas Jasa Keuangan", level: 92 },
    { title: "UU PDP", desc: "Perlindungan Data Pribadi Indonesia", level: 87 },
  ];

  return (
    <div className="min-h-screen bg-neo-dark text-white font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-neo-dark/95 backdrop-blur-lg shadow-lg shadow-black/30 border-b border-neo-border/30' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neo-green to-neo-blue flex items-center justify-center shadow-lg shadow-neo-green/20">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold block leading-tight">
                  <span className="text-white">Digital</span>
                  <span className="text-neo-green"> Neo</span>
                </span>
                <span className="text-[10px] text-neo-text tracking-wider uppercase">Sistem</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {[
                { href: '#services', label: 'Services' },
                { href: '#forensics', label: 'Forensics' },
                { href: '#governance', label: 'Governance' },
                { href: '#about', label: 'About' },
                { href: '#process', label: 'Process' },
                { href: '#contact', label: 'Contact' },
              ].map((item) => (
                <a key={item.href} href={item.href} className={`text-sm font-medium transition-colors ${activeSection === item.href.slice(1) ? 'text-neo-green' : 'text-gray-400 hover:text-white'}`}>
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="px-5 py-2.5 bg-gradient-to-r from-neo-green to-neo-blue rounded-lg text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-neo-green/20">
                Get Started
              </a>
            </div>

            {/* Mobile menu button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-white">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-neo-darker/98 backdrop-blur-lg border-t border-neo-border/30">
            <div className="px-4 py-6 space-y-4">
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 hover:text-neo-green transition-colors">Services</a>
              <a href="#forensics" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 hover:text-neo-green transition-colors">Forensics</a>
              <a href="#governance" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 hover:text-neo-green transition-colors">Governance</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 hover:text-neo-green transition-colors">About</a>
              <a href="#process" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 hover:text-neo-green transition-colors">Process</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 hover:text-neo-green transition-colors">Contact</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block px-5 py-2.5 bg-gradient-to-r from-neo-green to-neo-blue rounded-lg text-white text-sm font-semibold text-center">
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://image.qwenlm.ai/generated-images/583250cf-3d1f-429e-8ceb-94077ee0835f/_result.png" 
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0"></div>
        </div>

        {/* Animated Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-neo-green/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neo-blue/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(0,214,143,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,214,143,0.3) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <div className="animate-slide-up">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card mb-8">
              <div className="w-2 h-2 rounded-full bg-neo-green animate-pulse"></div>
              <span className="text-sm text-gray-300">PT Digital Neo Sistem — Partner in Digital World</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-4">
              <span className="text-white">Digital Neo</span>
              <br />
              <span className="gradient-text">Sistem</span>
            </h1>

            <p className="text-xl sm:text-2xl text-neo-green font-light mb-4">
              Partner in Digital World
            </p>

            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-6 leading-relaxed">
              <em>Learning by doing and real life Hands-on</em>
            </p>

            <p className="text-base text-gray-500 max-w-2xl mx-auto mb-10">
              Spesialis dalam Digital Forensics, IT Governance, Application Security, 
              SOP Development, dan Audit untuk organisasi di seluruh Indonesia.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#services" className="px-8 py-4 bg-gradient-to-r from-neo-green to-neo-blue rounded-xl text-white font-semibold hover:opacity-90 transition-all shadow-lg shadow-neo-green/25 flex items-center space-x-2">
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#forensics" className="px-8 py-4 glass-card rounded-xl text-white font-semibold hover:bg-white/10 transition-all flex items-center space-x-2">
                <span>Digital Forensics</span>
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>

            {/* Terminal-style info */}
            <div className="mt-16 max-w-2xl mx-auto">
              <div className="code-block p-4 text-left">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-xs text-gray-500 ml-2">digitalneo@forensics:~$</span>
                </div>
                <div className="text-sm">
                  <span className="text-neo-green">$</span>
                  <span className="text-gray-300 ml-2">digital-forensics --scan --governance --audit</span>
                </div>
                <div className="text-sm mt-1">
                  <span className="text-neo-blue">→</span>
                  <span className="text-gray-400 ml-2">Learning technology to become Relevant...</span>
                </div>
                <div className="text-sm mt-1">
                  <span className="text-neo-blue">→</span>
                  <span className="text-gray-400 ml-2">Everything digital can be copied, modified and transferred easily</span>
                </div>
                <div className="text-sm mt-1">
                  <span className="text-neo-green">✓</span>
                  <span className="text-neo-green ml-2">All systems operational. Ready to secure your digital assets.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-neo-green/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 rounded-full bg-neo-green/60 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 border-y border-neo-border/30 bg-neo-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-neo-green flex justify-center mb-2 group-hover:scale-110 transition-transform">{stat.icon}</div>
                <div className="text-3xl sm:text-4xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
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
              <Zap className="w-4 h-4 text-neo-green" />
              <span className="text-sm text-gray-300">Our Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Digital <span className="gradient-text">Revolution</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              <strong>Learning technology to become Relevant...</strong>
            </p>
            <p className="text-gray-500 max-w-xl mx-auto mt-2">
              Everything digital can be copied, modified and transferred easily.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="glass-card rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300 group neon-border">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed text-sm">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-neo-green flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 relative bg-neo-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Technology <span className="gradient-text">Stack</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Kami menguasai teknologi terdepan untuk memberikan solusi digital terbaik.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {techStack.map((tech, index) => (
              <div key={index} className="glass-card rounded-xl p-6 text-center hover:scale-105 transition-all group neon-border">
                <div className="text-neo-green flex justify-center mb-3 group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <h4 className="text-white font-semibold text-sm mb-1">{tech.title}</h4>
                <p className="text-gray-500 text-xs">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Forensics Section */}
      <section id="forensics" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card mb-4">
                <Fingerprint className="w-4 h-4 text-neo-green" />
                <span className="text-sm text-gray-300">Digital Forensics</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Investigasi <span className="gradient-text">Forensik Digital</span> Profesional
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Tim forensik digital kami yang bersertifikat CHFI (Computer Hacking Forensic Investigator) 
                menyediakan layanan investigasi lengkap untuk mengungkap insiden keamanan siber, 
                penipuan berbasis komputer, dan pelanggaran data.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Setiap investigasi dilakukan dengan metodologi yang ketat, menjaga chain of custody, 
                dan menghasilkan laporan yang memenuhi standar hukum Indonesia dan internasional.
              </p>

              <div className="flex flex-wrap gap-3">
                {["CHFI Certified", "EnCE", "GCFA", "CCFP"].map((cert, i) => (
                  <span key={i} className="px-3 py-1.5 text-xs font-medium rounded-full bg-neo-green/10 text-neo-green border border-neo-green/20">
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {forensicsCapabilities.map((cap, index) => (
                <div key={index} className="glass-card rounded-xl p-5 neon-border hover:scale-[1.02] transition-all">
                  <div className="text-neo-green mb-3">{cap.icon}</div>
                  <h4 className="text-white font-semibold text-sm mb-2">{cap.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Governance Section */}
      <section id="governance" className="py-24 relative bg-neo-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card mb-4">
              <Shield className="w-4 h-4 text-neo-green" />
              <span className="text-sm text-gray-300">Governance & Compliance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              IT Governance & <span className="gradient-text">Audit Framework</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Kerangka tata kelola IT yang selaras dengan standar internasional dan regulasi Indonesia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {governanceFrameworks.map((fw, index) => (
              <div key={index} className="glass-card rounded-xl p-6 neon-border">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-white font-bold">{fw.title}</h4>
                  <span className="text-neo-green text-sm font-bold">{fw.level}%</span>
                </div>
                <p className="text-gray-400 text-sm mb-4">{fw.desc}</p>
                <div className="w-full h-2 bg-neo-gray rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-neo-green to-neo-blue rounded-full transition-all duration-1000"
                    style={{ width: `${fw.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* SOP & Audit Details */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="glass-card rounded-2xl p-8 neon-border">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neo-green/20 to-neo-blue/20 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-neo-green" />
                </div>
                <h3 className="text-xl font-bold text-white">SOP Development</h3>
              </div>
              <p className="text-gray-400 text-sm mb-6">
                Pengembangan Prosedur Operasi Standar yang komprehensif untuk operasi digital organisasi Anda.
              </p>
              <ul className="space-y-3">
                {[
                  "Incident Response Procedures",
                  "Data Handling & Classification",
                  "Access Control Management",
                  "Change Management Process",
                  "Business Continuity Planning",
                  "Disaster Recovery Procedures",
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-neo-green flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card rounded-2xl p-8 neon-border">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neo-purple/20 to-neo-orange/20 flex items-center justify-center">
                  <ClipboardCheck className="w-6 h-6 text-neo-purple" />
                </div>
                <h3 className="text-xl font-bold text-white">IT Audit Services</h3>
              </div>
              <p className="text-gray-400 text-sm mb-6">
                Audit IT menyeluruh untuk memastikan kepatuhan, keamanan, dan efisiensi operasional.
              </p>
              <ul className="space-y-3">
                {[
                  "IT General Controls Audit",
                  "Application Controls Review",
                  "Security Awareness Assessment",
                  "Regulatory Compliance Check",
                  "Vendor Risk Assessment",
                  "Penetration Testing Report",
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-neo-purple flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card mb-4">
                <Building2 className="w-4 h-4 text-neo-green" />
                <span className="text-sm text-gray-300">About Us</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                PT Digital Neo <span className="gradient-text">Sistem</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                PT Digital Neo Sistem adalah perusahaan teknologi yang berfokus pada solusi keamanan digital, 
                forensik, dan tata kelola IT. Dengan pendekatan <em>"Learning by doing and real life Hands-on"</em>, 
                kami memastikan setiap solusi yang kami implementasikan praktis dan efektif.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                Kami percaya bahwa <strong className="text-white">"The next few years will be completely different 
                and Learning is the best way to survive"</strong>. Di era di mana bekerja untuk algoritma 
                menjadi new normal, kami membantu organisasi beradaptasi dan berkembang.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Berbasis di Jakarta Selatan, kami melayani organisasi di seluruh Indonesia — dari lembaga 
                pemerintah, institusi keuangan, hingga perusahaan teknologi.
              </p>

              <div className="flex items-center space-x-4">
                <a href="https://x.com/digitalneoid" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-4 py-2 glass-card rounded-lg hover:bg-white/10 transition-all">
                  <Globe className="w-4 h-4 text-neo-green" />
                  <span className="text-sm text-gray-300">@digitalneoid</span>
                  <ExternalLink className="w-3 h-3 text-gray-500" />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="glass-card rounded-2xl p-8 relative overflow-hidden neon-border">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-neo-green/10 to-neo-blue/10 rounded-full blur-2xl"></div>
                <h3 className="text-xl font-bold text-white mb-6 relative">Why Choose DigitalNeo</h3>
                <div className="space-y-4 relative">
                  {[
                    { title: "Court-Ready Evidence", desc: "Investigasi forensik yang memenuhi standar hukum" },
                    { title: "Regulatory Expertise", desc: "Pengetahuan mendalam tentang regulasi Indonesia (POJK, UU PDP, UU ITE)" },
                    { title: "End-to-End Solutions", desc: "Dari assessment hingga implementasi dan monitoring" },
                    { title: "Rapid Response", desc: "Dukungan respons insiden 24/7" },
                    { title: "Knowledge Transfer", desc: "Memberdayakan tim Anda dengan keterampilan dan dokumentasi" },
                    { title: "Hands-on Approach", desc: "Learning by doing dengan implementasi nyata" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-neo-green to-neo-blue flex items-center justify-center flex-shrink-0 mt-0.5">
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
      <section id="process" className="py-24 relative bg-neo-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card mb-4">
              <Target className="w-4 h-4 text-neo-green" />
              <span className="text-sm text-gray-300">Our Process</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              How We <span className="gradient-text">Deliver Results</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Metodologi kami yang terbukti memastikan hasil yang konsisten dan terukur.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <div key={index} className="glass-card rounded-2xl p-8 relative group hover:scale-[1.02] transition-all neon-border">
                <div className="text-5xl font-black text-neo-green/20 mb-4 group-hover:text-neo-green/40 transition-colors">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{step.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ChevronRight className="w-6 h-6 text-neo-green/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Industries We <span className="gradient-text">Serve</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Keahlian khusus di sektor-sektor kritis yang membutuhkan tata kelola digital dan kemampuan forensik yang kuat.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: <Server className="w-7 h-7" />, label: "Banking & Finance" },
              { icon: <Building2 className="w-7 h-7" />, label: "Government" },
              { icon: <Database className="w-7 h-7" />, label: "Telecommunications" },
              { icon: <Users className="w-7 h-7" />, label: "Healthcare" },
              { icon: <Globe className="w-7 h-7" />, label: "E-Commerce" },
              { icon: <AlertTriangle className="w-7 h-7" />, label: "Energy & Mining" },
            ].map((industry, index) => (
              <div key={index} className="glass-card rounded-xl p-6 text-center hover:scale-105 transition-all neon-border cursor-default">
                <div className="text-neo-green flex justify-center mb-3">{industry.icon}</div>
                <span className="text-sm text-gray-300 font-medium">{industry.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative glass-card rounded-3xl p-12 md:p-16 overflow-hidden neon-border">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-neo-green/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-neo-blue/5 rounded-full blur-3xl"></div>
            </div>
            <div className="relative text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Strengthen Your <span className="gradient-text">Digital Defense?</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
                Mari tim ahli kami menilai postur keamanan digital organisasi Anda dan 
                mengembangkan strategi komprehensif yang disesuaikan dengan kebutuhan Anda.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-neo-green to-neo-blue rounded-xl text-white font-semibold hover:opacity-90 transition-all shadow-lg shadow-neo-green/25">
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
      <section id="contact" className="py-24 relative bg-neo-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card mb-4">
              <Mail className="w-4 h-4 text-neo-green" />
              <span className="text-sm text-gray-300">Get In Touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Contact <span className="gradient-text">DigitalNeo</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Siap mendiskusikan kebutuhan keamanan digital Anda? Tim kami siap membantu.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="glass-card rounded-xl p-6 flex items-start space-x-4 neon-border">
                <div className="w-12 h-12 rounded-lg bg-neo-green/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-neo-green" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <p className="text-gray-400 text-sm">info@digitalneo.id</p>
                  <a href="mailto:info@digitalneo.id" className="text-neo-green text-sm hover:underline">Send email →</a>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6 flex items-start space-x-4 neon-border">
                <div className="w-12 h-12 rounded-lg bg-neo-blue/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-neo-blue" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Phone</h4>
                  <p className="text-gray-400 text-sm">+62 21 xxxx xxxx</p>
                  <p className="text-gray-400 text-sm">24/7 Emergency Hotline</p>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6 flex items-start space-x-4 neon-border">
                <div className="w-12 h-12 rounded-lg bg-neo-purple/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-neo-purple" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Office</h4>
                  <p className="text-gray-400 text-sm">Wisma Iskandarsyah Blok A10</p>
                  <p className="text-gray-400 text-sm">Jl. Iskandarsyah Raya Kav 12-14</p>
                  <p className="text-gray-400 text-sm">Kel. Melawai, Kec. Kebayoran Baru</p>
                  <p className="text-gray-400 text-sm">Jakarta Selatan, DKI Jakarta</p>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6 flex items-start space-x-4 neon-border">
                <div className="w-12 h-12 rounded-lg bg-neo-orange/10 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-neo-orange" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Social</h4>
                  <a href="https://x.com/digitalneoid" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-neo-green transition-colors flex items-center space-x-1">
                    <span>X (Twitter): @digitalneoid</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form className="glass-card rounded-2xl p-8 space-y-6 neon-border">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-300 mb-2">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-neo-gray/50 border border-neo-border/50 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-neo-green transition-colors" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-300 mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 bg-neo-gray/50 border border-neo-border/50 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-neo-green transition-colors" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-300 mb-2">Organization</label>
                    <input type="text" className="w-full px-4 py-3 bg-neo-gray/50 border border-neo-border/50 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-neo-green transition-colors" placeholder="Company name" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-300 mb-2">Service Needed</label>
                    <select className="w-full px-4 py-3 bg-neo-gray/50 border border-neo-border/50 rounded-lg text-white focus:outline-none focus:border-neo-green transition-colors">
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
                  <textarea rows={5} className="w-full px-4 py-3 bg-neo-gray/50 border border-neo-border/50 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-neo-green transition-colors resize-none" placeholder="Tell us about your needs..."></textarea>
                </div>
                <button type="submit" className="w-full px-8 py-4 bg-gradient-to-r from-neo-green to-neo-blue rounded-xl text-white font-semibold hover:opacity-90 transition-all shadow-lg shadow-neo-green/25">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neo-border/30 py-12 bg-neo-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neo-green to-neo-blue flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-lg font-bold block leading-tight">
                    <span className="text-white">Digital</span>
                    <span className="text-neo-green"> Neo</span>
                  </span>
                  <span className="text-[10px] text-neo-text tracking-wider uppercase">Sistem</span>
                </div>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Partner in Digital World. Spesialis dalam digital forensics, IT governance, 
                dan compliance solutions untuk organisasi di Indonesia.
              </p>
              <p className="text-gray-600 text-xs">
                <em>"Learning by doing and real life Hands-on"</em>
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#forensics" className="text-gray-500 hover:text-neo-green text-sm transition-colors">Digital Forensics</a></li>
                <li><a href="#services" className="text-gray-500 hover:text-neo-green text-sm transition-colors">Application Security</a></li>
                <li><a href="#governance" className="text-gray-500 hover:text-neo-green text-sm transition-colors">IT Governance</a></li>
                <li><a href="#governance" className="text-gray-500 hover:text-neo-green text-sm transition-colors">SOP Development</a></li>
                <li><a href="#governance" className="text-gray-500 hover:text-neo-green text-sm transition-colors">IT Audit</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Technology</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-500 hover:text-neo-green text-sm transition-colors">Blockchain</a></li>
                <li><a href="#" className="text-gray-500 hover:text-neo-green text-sm transition-colors">Cloud Computing</a></li>
                <li><a href="#" className="text-gray-500 hover:text-neo-green text-sm transition-colors">Artificial Intelligence</a></li>
                <li><a href="#" className="text-gray-500 hover:text-neo-green text-sm transition-colors">Crypto Currency</a></li>
                <li><a href="#" className="text-gray-500 hover:text-neo-green text-sm transition-colors">Interactive Learning</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-500 text-sm">info@digitalneo.id</li>
                <li className="text-gray-500 text-sm">Wisma Iskandarsyah Blok A10</li>
                <li className="text-gray-500 text-sm">Jl. Iskandarsyah Raya Kav 12-14</li>
                <li className="text-gray-500 text-sm">Jakarta Selatan, DKI Jakarta</li>
                <li>
                  <a href="https://x.com/digitalneoid" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-neo-green text-sm transition-colors flex items-center space-x-1 mt-2">
                    <Globe className="w-3 h-3" />
                    <span>@digitalneoid</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="section-divider mb-8"></div>

          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-600 text-sm">
              © 2024 PT Digital Neo Sistem. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-neo-green text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-neo-green text-sm transition-colors">Terms of Service</a>
              <a href="https://digitalneo.id" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-neo-green text-sm transition-colors flex items-center space-x-1">
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

// Smartphone icon component (since lucide-react might not have it with this exact name)
function Smartphone(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/>
      <path d="M12 18h.01"/>
    </svg>
  );
}
