import React, { useState, useEffect } from 'react';
import { usePhotos } from '../context/PhotoContext';
import { ASSET_IMAGES, OFFICE_CONTACT } from '../data/content';
import { 
  Scale, 
  Image as ImageIcon, 
  Globe, 
  PhoneCall, 
  FileText, 
  Menu, 
  X, 
  Award, 
  Users,
  ChevronRight
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { language, toggleLanguage, setIsManagerOpen, setIsGrievanceOpen, setIsVisitingCardOpen } = usePhotos();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hero', label: language === 'hi' ? 'मुख्य पृष्ठ' : 'Home' },
    { href: '#pillars', label: language === 'hi' ? 'चार स्तम्भ' : '4 Pillars' },
    { href: '#lineage', label: language === 'hi' ? 'विरासत व संस्कार' : 'Lineage & Roots' },
    { href: '#team-movement', label: language === 'hi' ? 'टीम सुमित चौधरी' : 'Team Sumit Chaudhary' },
    { href: '#gallery', label: language === 'hi' ? 'फोटो दीर्घा' : 'Photo Gallery' },
    { href: '#office', label: language === 'hi' ? 'चैंबर व कार्यालय' : 'Contact & Chamber' },
  ];

  return (
    <>
      {/* Topmost alert ribbon */}
      <div id="top-announcement-bar" className="w-full bg-gradient-to-r from-amber-950 via-slate-950 to-amber-950 border-b border-amber-800/30 text-xs py-1.5 px-4 text-amber-200/90 text-center font-sans-modern flex items-center justify-center gap-3">
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 font-semibold text-[11px] border border-amber-500/30">
          <Award className="w-3 h-3" />
          {language === 'hi' ? 'आधिकारिक पोर्टल' : 'Official Portal'}
        </span>
        <span className="hidden sm:inline">
          {language === 'hi' 
            ? 'अधिवक्ता • राजनीतिज्ञ • उद्यमी • समर्पित समाजसेवी' 
            : 'Advocate • Political Leader • Businessman • Social Worker'}
        </span>
        <span className="text-slate-400 hidden md:inline">|</span>
        <span className="text-amber-300 font-medium">
          {language === 'hi' ? 'सुपुत्र: श्री महीपाल सिंह जी' : 'S/O Mr. Mahipal Singh'}
        </span>
      </div>

      {/* Main Glass Navbar */}
      <header
        id="main-navbar"
        className={`sticky top-0 z-40 transition-all duration-300 w-full ${
          scrolled
            ? 'bg-[#070b14]/95 backdrop-blur-xl border-b border-amber-500/20 py-2.5 shadow-2xl shadow-black/80'
            : 'bg-[#070b14]/70 backdrop-blur-md border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Identity */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-full p-0.5 bg-gradient-to-tr from-amber-500 via-yellow-200 to-amber-600 shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <img
                src={ASSET_IMAGES.emblem}
                alt="Emblem Seal"
                className="w-full h-full object-cover rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg sm:text-xl font-bold tracking-tight text-white font-serif-royal group-hover:text-amber-400 transition-colors">
                  Adv. Sumit Chaudhary
                </span>
                <span className="hidden lg:inline-block text-[10px] px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30 uppercase tracking-widest font-mono">
                  Advocate
                </span>
              </div>
              <p className="text-[11px] text-amber-300/80 font-sans-modern flex items-center gap-1">
                <span>{language === 'hi' ? 'आत्मज: श्री महीपाल सिंह' : 'S/O Mr. Mahipal Singh'}</span>
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium text-slate-300 hover:text-amber-400 px-2.5 py-1.5 rounded-md hover:bg-white/5 transition-colors font-sans-modern tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Language Toggle */}
            <button
              id="lang-toggle-btn"
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-amber-300 border border-amber-500/30 transition-colors"
              title="Toggle Language"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{language === 'hi' ? 'English' : 'हिंदी'}</span>
            </button>

            {/* Photo Attach / Slot Manager Button */}
            <button
              id="open-photo-manager-btn"
              onClick={() => setIsManagerOpen(true)}
              className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/40 transition-all hover:scale-[1.02]"
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>{language === 'hi' ? 'फोटो प्रबंधन' : 'Attach Photos'}</span>
            </button>

            {/* Digital Card */}
            <button
              id="open-digital-card-btn"
              onClick={() => setIsVisitingCardOpen(true)}
              className="hidden md:flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 transition-colors"
              title="View Digital Visiting Card"
            >
              <FileText className="w-3.5 h-3.5 text-amber-400" />
              <span>{language === 'hi' ? 'विजिटिंग कार्ड' : 'Visiting Card'}</span>
            </button>

            {/* Grievance / Consultation CTA */}
            <button
              id="open-grievance-btn"
              onClick={() => setIsGrievanceOpen(true)}
              className="flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 shadow-md shadow-amber-500/25 transition-all hover:scale-105"
            >
              <Scale className="w-3.5 h-3.5" />
              <span>{language === 'hi' ? 'परामर्श / जनसुनवाई' : 'Consultation'}</span>
            </button>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={toggleLanguage}
              className="text-xs px-2 py-1 rounded bg-slate-800 text-amber-300 border border-amber-500/30"
            >
              {language === 'hi' ? 'EN' : 'हिं'}
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 text-slate-200 hover:text-amber-400 border border-slate-800"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-[#0a101d] border-b border-amber-500/20 px-4 pt-3 pb-5 space-y-3 animate-in slide-in-from-top duration-200">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-sm py-2 px-3 rounded text-slate-200 hover:bg-amber-500/10 hover:text-amber-300"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsManagerOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 py-2 text-xs font-semibold rounded-lg bg-amber-500/15 text-amber-300 border border-amber-500/30"
              >
                <ImageIcon className="w-4 h-4" />
                <span>{language === 'hi' ? 'फोटो प्रबंधन एवं अपलोड गाइड' : 'Manage & Attach Photos'}</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsVisitingCardOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 py-2 text-xs font-semibold rounded-lg bg-slate-900 text-slate-200 border border-slate-700"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>{language === 'hi' ? 'डिजिटल विजिटिंग कार्ड' : 'Digital Visiting Card'}</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsGrievanceOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold rounded-lg bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 shadow"
              >
                <Scale className="w-4 h-4" />
                <span>{language === 'hi' ? 'विधिक परामर्श / जनसुनवाई आवेदन' : 'Book Consultation / Grievance'}</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
