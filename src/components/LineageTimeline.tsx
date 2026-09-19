import React from 'react';
import { motion } from 'motion/react';
import { usePhotos } from '../context/PhotoContext';
import { LINEAGE_DATA, TIMELINE_EVENTS, ASSET_IMAGES } from '../data/content';
import { Sparkles, Shield, Award, Calendar, Heart, ArrowRight } from 'lucide-react';

export const LineageTimeline: React.FC = () => {
  const { language, getPhotoSrc, setIsVisitingCardOpen } = usePhotos();
  const photoNamaste = getPhotoSrc('photo-2'); // IMG-20260915-WA0027.jpg (Namaste / traditional kurta)

  return (
    <section id="lineage" className="py-20 relative bg-[#070b14] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Lineage & Father's Legacy Tribute Card */}
        <div className="relative rounded-3xl p-1 bg-gradient-to-r from-amber-500/40 via-amber-300/20 to-slate-800 mb-20 shadow-2xl">
          <div className="rounded-[22px] bg-[#0c1322] p-6 sm:p-10 lg:p-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Photo of Traditional Respect / Namaste */}
              <div className="lg:col-span-4">
                <div className="relative rounded-2xl overflow-hidden border border-amber-500/40 shadow-xl aspect-[3/4] group">
                  <img
                    src={photoNamaste}
                    alt="Adv. Sumit Chaudhary - Traditional Pranaam"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs uppercase tracking-widest text-amber-300 font-bold">
                      {language === 'hi' ? 'संस्कार एवं संस्कृति' : 'Heritage & Humility'}
                    </p>
                    <p className="text-sm font-semibold text-white font-serif-royal">
                      Adv. Sumit Chaudhary
                    </p>
                    <p className="text-[11px] text-slate-300">
                      {language === 'hi' ? 'सुपुत्र: श्री महीपाल सिंह जी' : 'S/O Mr. Mahipal Singh'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Father & Family Values Text */}
              <div className="lg:col-span-8 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                  <Heart className="w-3.5 h-3.5 text-amber-400" />
                  <span>{language === 'hi' ? 'पितृ-आशीर्वाद व पारिवारिक प्रतिष्ठा' : 'Ancestral Heritage & Guiding Light'}</span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-bold text-white font-serif-royal">
                  {LINEAGE_DATA.fatherTitle[language]}
                </h3>

                <p className="text-base sm:text-lg text-amber-200/90 font-serif-royal italic">
                  "{language === 'hi' 
                    ? 'संस्कार वही जो झुकना भी सिखाएं और अन्याय के विरुद्ध अडिग खड़ा होना भी।' 
                    : 'Values are genuine only when they teach humility to the elders and unyielding courage against injustice.'}"
                </p>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans-modern">
                  {LINEAGE_DATA.values[language]}
                </p>

                {/* Cultural Pillars Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <Shield className="w-5 h-5 text-amber-400 mb-1.5" />
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider font-serif-royal">
                      {language === 'hi' ? 'सत्य व ईमानदारी' : 'Uncompromising Truth'}
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-1">
                      {language === 'hi' ? 'पिताजी द्वारा सिखाया गया सत्यनिष्ठा का मार्ग' : 'Ethical bedrock learned at home'}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <Award className="w-5 h-5 text-amber-400 mb-1.5" />
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider font-serif-royal">
                      {language === 'hi' ? 'राष्ट्र व जनसेवा' : 'Nation & Service'}
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-1">
                      {language === 'hi' ? 'समाज के प्रति सर्वस्व अर्पण की भावना' : 'Dedication to common citizen welfare'}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <Sparkles className="w-5 h-5 text-amber-400 mb-1.5" />
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider font-serif-royal">
                      {language === 'hi' ? 'संघर्ष व साहस' : 'Resilience & Courage'}
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-1">
                      {language === 'hi' ? 'हर संकट में पीड़ित के साथ खड़े रहने का प्रण' : 'Standing tall during all public crises'}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* The Inspiring Journey: Milestone Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-4xl font-bold font-serif-royal text-white">
              {language === 'hi' ? 'कर्मयोगी का जीवन प्रवाह — प्रमुख पड़ाव' : 'The Journey of a Visionary Leader'}
            </h3>
            <p className="mt-2 text-sm text-slate-400 font-sans-modern">
              {language === 'hi' 
                ? 'छात्र जीवन से लेकर उच्च न्यायालय व जनआंदोलनों तक निरंतर कर्मठता की गाथा'
                : 'A chronological tapestry of law, politics, commerce, and humanitarian reform.'}
            </p>
          </div>

          <div className="relative border-l-2 border-amber-500/30 pl-6 sm:pl-8 space-y-10 ml-4 sm:ml-8">
            {TIMELINE_EVENTS.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Timeline node */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-[#070b14] border-2 border-amber-400 group-hover:bg-amber-400 transition-colors flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-amber-400 group-hover:bg-black transition-colors" />
                </div>

                <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-amber-500/40 transition-all shadow-lg">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold font-mono px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      {event.year}
                    </span>
                    <span className="text-xs text-slate-400 uppercase tracking-widest font-mono">
                      {event.category[language]}
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold text-white font-serif-royal">
                    {event.title[language]}
                  </h4>

                  <p className="mt-2 text-xs sm:text-sm text-slate-300 font-sans-modern leading-relaxed">
                    {event.description[language]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
