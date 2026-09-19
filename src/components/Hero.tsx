import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { usePhotos } from '../context/PhotoContext';
import { ASSET_IMAGES } from '../data/content';
import { 
  Scale, 
  Landmark, 
  Briefcase, 
  HeartHandshake, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Camera, 
  Users, 
  ChevronDown 
} from 'lucide-react';

export const Hero: React.FC = () => {
  const { language, getPhotoSrc, setIsManagerOpen, setIsGrievanceOpen, setIsVisitingCardOpen } = usePhotos();

  const heroPhoto1 = getPhotoSrc('photo-1'); // FB_IMG_1789495929300.jpg (Waving / Vijay greeting)
  const heroPhoto4 = getPhotoSrc('photo-4'); // file_000000004e2481f5bffb12a2cad1ba14.png (Triple banner)

  const roles = [
    {
      en: 'High Court & Constitutional Advocate',
      hi: 'संवैधानिक अधिवक्ता एवं न्याय के सजग प्रहरी',
      icon: Scale,
      color: 'text-amber-400',
    },
    {
      en: 'Dynamic Political Leader (Team Sumit Chaudhary)',
      hi: 'जनप्रिय राजनीतिज्ञ - टीम सुमित चौधरी के प्रेरणास्रोत',
      icon: Landmark,
      color: 'text-sky-400',
    },
    {
      en: 'Visionary Businessman & Entrepreneur',
      hi: 'प्रगतिशील उद्यमी एवं रोजगार सृजनकर्ता',
      icon: Briefcase,
      color: 'text-emerald-400',
    },
    {
      en: 'Devoted Philanthropist & Social Reformer',
      hi: 'समर्पित समाजसेवी एवं जनकल्याण के अग्रदूत',
      icon: HeartHandshake,
      color: 'text-rose-400',
    },
  ];

  const [activeRoleIndex, setActiveRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [roles.length]);

  const CurrentIcon = roles[activeRoleIndex].icon;

  return (
    <section id="hero" className="relative min-h-screen pt-4 pb-20 overflow-hidden flex flex-col justify-between">
      {/* Background Graphic & Ambient Glows */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <img
          src={ASSET_IMAGES.heroBg}
          alt="Cinematic Background"
          className="w-full h-full object-cover object-center opacity-25 filter blur-[1px] scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070b14]/70 via-[#070b14]/90 to-[#070b14]" />
        
        {/* Ambient radial glows */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-amber-500/15 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 -right-40 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 sm:pt-12">
        {/* Lineage & Prestige Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3 mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-500/20 via-amber-400/10 to-transparent border border-amber-500/40 text-amber-300 text-xs font-semibold tracking-wide shadow-sm shadow-amber-500/10">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>
              {language === 'hi'
                ? 'परम आदरणीय सुपुत्र: श्री महीपाल सिंह जी'
                : 'Proud Son of Mr. Mahipal Singh'}
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700/60 text-slate-300 text-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
            <span>
              {language === 'hi' ? 'संविधान रक्षक • जनसेवक' : 'Constitutional Defender • Public Icon'}
            </span>
          </div>
        </motion.div>

        {/* Main Grid: Content + Leader Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Titles & Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 space-y-6 text-center sm:text-left"
          >
            <div className="space-y-2">
              <span className="text-sm uppercase font-mono tracking-[0.25em] text-amber-400 font-bold block">
                {language === 'hi' ? 'राष्ट्र व समाज को समर्पित व्यक्तित्व' : 'Statesmanship • Advocacy • Enterprise'}
              </span>
              
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight font-serif-royal leading-[1.1] text-white">
                <span className="block text-slate-100">Advocate</span>
                <span className="gold-gradient-text drop-shadow-md">
                  Sumit Chaudhary
                </span>
              </h1>
              
              {language === 'hi' && (
                <p className="text-xl sm:text-2xl font-bold text-amber-300/90 font-hindi-royal tracking-wide pt-1">
                  अधिवक्ता सुमित चौधरी (सुपुत्र: श्री महीपाल सिंह)
                </p>
              )}
            </div>

            {/* Dynamic Rotating Role Ribbon */}
            <div className="h-12 flex items-center justify-center sm:justify-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeRoleIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900/90 border border-amber-500/30 shadow-lg shadow-black/40"
                >
                  <CurrentIcon className={`w-5 h-5 ${roles[activeRoleIndex].color}`} />
                  <span className="text-sm sm:text-base font-semibold text-slate-200 font-sans-modern">
                    {language === 'hi' ? roles[activeRoleIndex].hi : roles[activeRoleIndex].en}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Powerful Bio Synopsis */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-sans-modern font-normal">
              {language === 'hi'
                ? 'न्याय, निष्ठा और जनकल्याण के संगम — अधिवक्ता सुमित चौधरी संविधान की मर्यादा के रक्षक, प्रखर राजनीतिक वक्ता, दूरदर्शी उद्यमी एवं समाज के अंतिम पायदान पर खड़े व्यक्ति की सशक्त आवाज हैं।'
                : 'A visionary force synthesizing legal integrity, grassroots political empowerment, dynamic business development, and profound social philanthropy for the empowerment of citizens.'}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-3.5">
              <button
                id="hero-consultation-btn"
                onClick={() => setIsGrievanceOpen(true)}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/25 hover:scale-105 transition-all cursor-pointer"
              >
                <Scale className="w-4 h-4" />
                <span>{language === 'hi' ? 'विधिक परामर्श व जनसुनवाई' : 'Legal Chamber Consultation'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#team-movement"
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 text-sm font-semibold transition-all hover:border-amber-500/50"
              >
                <Users className="w-4 h-4 text-amber-400" />
                <span>{language === 'hi' ? 'टीम सुमित चौधरी से जुड़ें' : 'Join Team Movement'}</span>
              </a>

              <button
                onClick={() => setIsManagerOpen(true)}
                className="flex items-center gap-2 px-4 py-3.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold transition-all"
                title="Manage or Upload photos"
              >
                <Camera className="w-4 h-4" />
                <span>{language === 'hi' ? 'फोटो स्लॉट गाइड' : 'Photo Guide'}</span>
              </button>
            </div>

            {/* Quick Micro-Tribute Pillars Strip */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-xl text-xs">
              <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300 text-center">
                <span className="block font-bold text-amber-400 font-serif-royal">Advocate</span>
                <span className="text-[11px] text-slate-400">{language === 'hi' ? 'विधि व न्याय' : 'Legal Stalwart'}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300 text-center">
                <span className="block font-bold text-sky-400 font-serif-royal">Politician</span>
                <span className="text-[11px] text-slate-400">{language === 'hi' ? 'जननायक' : 'Grassroots Leader'}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300 text-center">
                <span className="block font-bold text-emerald-400 font-serif-royal">Businessman</span>
                <span className="text-[11px] text-slate-400">{language === 'hi' ? 'उद्यम व रोजगार' : 'Job Creator'}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300 text-center">
                <span className="block font-bold text-rose-400 font-serif-royal">Social Worker</span>
                <span className="text-[11px] text-slate-400">{language === 'hi' ? 'निस्वार्थ सेवा' : 'Philanthropy'}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: High-Prestige Leader Visual Presentation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative flex flex-col items-center"
          >
            {/* Main Framed Portrait Card */}
            <div className="relative w-full max-w-md rounded-2xl p-1 bg-gradient-to-b from-amber-400 via-amber-600 to-slate-900 shadow-2xl shadow-amber-500/20 gold-border-glow">
              <div className="relative overflow-hidden rounded-[14px] bg-[#0c1424]">
                
                {/* Photo Header Overlay Badge */}
                <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-amber-500/40 text-amber-300 text-xs font-semibold">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span>Adv. Sumit Chaudhary</span>
                </div>

                <div className="absolute top-3.5 right-3.5 z-10">
                  <button
                    onClick={() => setIsManagerOpen(true)}
                    className="p-1.5 rounded-full bg-black/60 hover:bg-amber-500 text-slate-200 hover:text-black transition-colors"
                    title="Change or view photo details"
                  >
                    <Camera className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Displaying the Portrait */}
                <div className="aspect-[4/5] sm:aspect-[3/4] relative overflow-hidden group">
                  <img
                    src={heroPhoto1}
                    alt="Adv. Sumit Chaudhary"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080d19] via-transparent to-black/20" />
                  
                  {/* Bottom Text Over Photo */}
                  <div className="absolute bottom-0 inset-x-0 p-5 text-left bg-gradient-to-t from-[#070b14] via-[#070b14]/80 to-transparent">
                    <p className="text-xs uppercase tracking-widest text-amber-400 font-bold">
                      {language === 'hi' ? 'जन-अभिनंदन एवं आशीर्वाद' : 'People\'s Champion'}
                    </p>
                    <h3 className="text-xl font-bold text-white font-serif-royal">
                      Adv. Sumit Chaudhary
                    </h3>
                    <p className="text-xs text-slate-300">
                      {language === 'hi' 
                        ? 'सुपुत्र: श्री महीपाल सिंह जी | अधिवक्ता व जनसेवक'
                        : 'S/O Mr. Mahipal Singh | High Court Advocate'}
                    </p>
                  </div>
                </div>

                {/* Card Sub-Banner with Seal */}
                <div className="p-3.5 bg-slate-950/90 border-t border-amber-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={ASSET_IMAGES.emblem}
                      alt="Gold Seal"
                      className="w-8 h-8 rounded-full border border-amber-500/40 object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <span className="text-xs font-bold text-amber-200 block font-serif-royal">
                        {language === 'hi' ? 'सत्यमेव जयते' : 'Official Credentials'}
                      </span>
                      <span className="text-[10px] text-slate-400 block font-mono">
                        {language === 'hi' ? 'संविधान व न्याय के प्रति समर्पित' : 'Bar Council & Civic Leadership'}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsVisitingCardOpen(true)}
                    className="text-xs font-semibold px-3 py-1 rounded bg-amber-500/20 hover:bg-amber-500 text-amber-300 hover:text-black border border-amber-500/40 transition-colors"
                  >
                    {language === 'hi' ? 'परिचय पत्र' : 'VIP Card'}
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Floating Badge */}
            <div className="absolute -bottom-4 right-4 sm:-right-4 px-4 py-2 rounded-xl bg-slate-900/95 border border-amber-500/50 shadow-2xl backdrop-blur-md flex items-center gap-2.5">
              <div className="w-3 h-3 rounded-full bg-amber-400 animate-pulse" />
              <div>
                <p className="text-[11px] font-bold text-white uppercase tracking-wider">
                  {language === 'hi' ? 'टीम सुमित चौधरी' : 'Team Sumit Chaudhary'}
                </p>
                <p className="text-[10px] text-amber-300">
                  {language === 'hi' ? '150,000+ सक्रिय साथी' : '150,000+ Grassroots Members'}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Triple Panoramic Banner Preview Strip */}
        <div className="mt-14 pt-8 border-t border-slate-800/80">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs uppercase tracking-widest text-amber-400/90 font-mono flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              {language === 'hi' 
                ? 'राष्ट्र निर्माण का संकल्प (संसद, पावन नदी व हिमालय क्षितिज)' 
                : 'National Vision & Statesmanship (Parliament & Holy Horizon)'}
            </span>
            <span className="text-[11px] text-slate-400">
              {language === 'hi' ? 'अटैच फोटो: file_...ba14.png' : 'Photo 4 Horizon'}
            </span>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 group shadow-2xl shadow-black">
            <img
              src={heroPhoto4}
              alt="Adv. Sumit Chaudhary Triple Banner"
              className="w-full h-32 sm:h-48 md:h-56 object-cover object-center group-hover:scale-102 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            
            <div className="absolute bottom-3 left-4 sm:left-6 right-4 flex flex-wrap items-end justify-between gap-2">
              <div>
                <p className="text-xs font-semibold text-amber-300 uppercase tracking-widest">
                  {language === 'hi' ? 'संसद से सड़क तक — जनता की आवाज' : 'From The Courts to Parliament — Voice of People'}
                </p>
                <h4 className="text-base sm:text-xl font-bold text-white font-serif-royal">
                  Adv. Sumit Chaudhary • S/O Mr. Mahipal Singh
                </h4>
              </div>
              <button
                onClick={() => setIsManagerOpen(true)}
                className="text-xs px-3 py-1 rounded bg-black/60 hover:bg-amber-500 text-amber-300 hover:text-black border border-amber-500/40 backdrop-blur-md transition-colors flex items-center gap-1"
              >
                <Camera className="w-3 h-3" />
                <span>{language === 'hi' ? 'फोटो विवरण देखें' : 'View Banner Slot'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="pt-8 flex justify-center">
          <a
            href="#pillars"
            className="flex flex-col items-center gap-1 text-slate-400 hover:text-amber-400 transition-colors text-xs font-mono"
          >
            <span>{language === 'hi' ? 'विस्तृत आयाम देखें' : 'Explore 4 Pillars'}</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-amber-400" />
          </a>
        </div>
      </div>
    </section>
  );
};
