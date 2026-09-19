import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { usePhotos } from '../context/PhotoContext';
import { PILLARS_DATA, ASSET_IMAGES } from '../data/content';
import { 
  Scale, 
  Landmark, 
  Briefcase, 
  HeartHandshake, 
  CheckCircle2, 
  ArrowUpRight, 
  Camera, 
  Quote, 
  Sparkles 
} from 'lucide-react';

export const PillarsSection: React.FC = () => {
  const { language, getPhotoSrc, setIsManagerOpen, setIsGrievanceOpen } = usePhotos();
  const [selectedPillarKey, setSelectedPillarKey] = useState<string>('advocate');

  const activePillar = PILLARS_DATA.find((p) => p.key === selectedPillarKey) || PILLARS_DATA[0];

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scale':
        return Scale;
      case 'Landmark':
        return Landmark;
      case 'Briefcase':
        return Briefcase;
      case 'HeartHandshake':
      default:
        return HeartHandshake;
    }
  };

  // Get photo for active pillar
  let pillarPhotoSrc = getPhotoSrc(activePillar.photoSlotId);
  if (activePillar.key === 'businessman') {
    // If user hasn't replaced photo 1, can also showcase enterprise visual
    pillarPhotoSrc = pillarPhotoSrc || ASSET_IMAGES.enterprise;
  }

  return (
    <section id="pillars" className="py-20 relative bg-[#090e1a] border-t border-slate-800/80">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            {language === 'hi' ? 'व्यक्तित्व के चार मुख्य स्तम्भ' : 'The Four Pillars of Excellence'}
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-bold font-serif-royal text-white tracking-tight">
            {language === 'hi' 
              ? 'एक व्यक्तित्व — चार ऐतिहासिक आयाम' 
              : 'One Visionary Leader — Four Pillars of Impact'}
          </h2>
          
          <p className="mt-4 text-sm sm:text-base text-slate-300 font-sans-modern">
            {language === 'hi'
              ? 'न्यायालय में संविधान के रक्षक, राजनीति में जनआकांक्षाओं के नेता, व्यापार में आत्मनिर्भरता के प्रतीक और समाजसेवा में दयालु मसीहा।'
              : 'A harmonious synthesis of legal mastery, political courage, commercial acumen, and deep-seated humanitarian commitment.'}
          </p>
        </div>

        {/* 4 Interactive Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {PILLARS_DATA.map((pillar) => {
            const Icon = getPillarIcon(pillar.iconName);
            const isSelected = pillar.key === selectedPillarKey;

            return (
              <button
                key={pillar.id}
                onClick={() => setSelectedPillarKey(pillar.key)}
                className={`text-left p-4 rounded-xl transition-all duration-300 relative border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-800/90 border-amber-400 shadow-lg shadow-amber-500/10 scale-[1.02]'
                    : 'bg-slate-900/60 border-slate-800/80 hover:bg-slate-800/50 hover:border-slate-700'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="pillar-tab-indicator"
                    className="absolute inset-0 rounded-xl border-2 border-amber-400 pointer-events-none"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                  />
                )}

                <div>
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${
                    isSelected ? 'bg-amber-500 text-black' : 'bg-slate-800 text-amber-400'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white font-serif-royal leading-tight">
                    {pillar.title[language]}
                  </h3>
                </div>

                <p className="mt-2 text-xs text-slate-400 line-clamp-2">
                  {pillar.subtitle[language]}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Deep-Dive Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePillar.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Pillar Visual & Photo Slot */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 bg-black aspect-[4/5] shadow-xl group">
                  <img
                    src={pillarPhotoSrc}
                    alt={activePillar.title[language]}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  
                  {/* Photo Slot Tag */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-amber-500/40 text-amber-300 text-xs font-mono flex items-center gap-1.5">
                    <Camera className="w-3 h-3" />
                    <span>Slot: {activePillar.photoSlotId}</span>
                  </div>

                  <div className="absolute top-3 right-3">
                    <button
                      onClick={() => setIsManagerOpen(true)}
                      className="text-xs px-2.5 py-1 rounded-md bg-amber-500 hover:bg-amber-400 text-black font-semibold shadow transition-colors"
                    >
                      {language === 'hi' ? 'फोटो बदलें' : 'Attach Photo'}
                    </button>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs uppercase tracking-widest text-amber-400 font-bold">
                      Adv. Sumit Chaudhary
                    </p>
                    <h4 className="text-lg font-bold text-white font-serif-royal">
                      {activePillar.title[language]}
                    </h4>
                  </div>
                </div>

                {/* Additional context image if businessman or social */}
                {activePillar.key === 'businessman' && (
                  <div className="rounded-xl overflow-hidden border border-slate-800 h-28 relative">
                    <img
                      src={ASSET_IMAGES.enterprise}
                      alt="Enterprise"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center px-4">
                      <p className="text-xs text-white font-medium">
                        {language === 'hi' ? 'उद्योग, विनिर्माण एवं कॉर्पोरेट उत्कृष्टता' : 'Commercial Development & Corporate Governance'}
                      </p>
                    </div>
                  </div>
                )}

                {activePillar.key === 'social_worker' && (
                  <div className="rounded-xl overflow-hidden border border-slate-800 h-28 relative">
                    <img
                      src={ASSET_IMAGES.social}
                      alt="Social Camps"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center px-4">
                      <p className="text-xs text-white font-medium">
                        {language === 'hi' ? 'निशुल्क शिक्षा, रक्तदान व कन्या विवाह सहायता शिविर' : 'Free Education, Blood Donation & Community Camps'}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Pillar Content & Highlights */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block font-mono">
                    {activePillar.subtitle[language]}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif-royal mt-1">
                    {activePillar.title[language]}
                  </h3>
                </div>

                {/* Direct Quote Block */}
                <div className="p-4 rounded-xl bg-amber-500/5 border-l-4 border-amber-500 text-amber-200/90 italic text-sm flex gap-3">
                  <Quote className="w-5 h-5 shrink-0 text-amber-400 not-italic" />
                  <p>"{activePillar.quote[language]}"</p>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans-modern">
                  {activePillar.description[language]}
                </p>

                {/* Key Bullet Highlights */}
                <div className="space-y-2.5 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {language === 'hi' ? 'प्रमुख उपलब्धियां एवं कार्य' : 'Core Focus & Achievements'}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activePillar.highlights[language].map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-800/50 border border-slate-800 text-xs text-slate-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pillar Stats Strip */}
                <div className="pt-4 border-t border-slate-800 grid grid-cols-3 gap-3 text-center">
                  {activePillar.stats.map((stat, sIdx) => (
                    <div key={sIdx} className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                      <div className="text-xl sm:text-2xl font-extrabold text-amber-400 font-serif-royal">
                        {stat.value}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        {stat.label[language]}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action CTA within Pillar */}
                <div className="pt-2 flex flex-wrap gap-3">
                  <button
                    onClick={() => setIsGrievanceOpen(true)}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md transition-colors"
                  >
                    <span>
                      {activePillar.key === 'advocate'
                        ? (language === 'hi' ? 'मुकदमा व विधिक परामर्श' : 'Legal Consultation')
                        : activePillar.key === 'politician'
                        ? (language === 'hi' ? 'टीम में सम्मिलित हों' : 'Join The Team')
                        : (language === 'hi' ? 'सीधा संपर्क करें' : 'Connect Directly')}
                    </span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <a
                    href="#gallery"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
                  >
                    <span>{language === 'hi' ? 'संबंधित फोटो देखें' : 'View Photos'}</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
