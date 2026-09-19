import React from 'react';
import { usePhotos } from '../context/PhotoContext';
import { ASSET_IMAGES, OFFICE_CONTACT, DEVELOPER_INFO } from '../data/content';
import { Scale, Heart, Shield, Award, Camera, ArrowUp, Code2, Phone, MessageCircle, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language, setIsManagerOpen, setIsVisitingCardOpen, setIsGrievanceOpen } = usePhotos();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05080f] text-slate-400 border-t border-slate-800 text-xs font-sans-modern relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Col 1 & 2: Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={ASSET_IMAGES.emblem}
                alt="Emblem Seal"
                className="w-12 h-12 rounded-full border-2 border-amber-500/40 object-cover"
                referrerPolicy="no-referrer"
              />
              <div>
                <h3 className="text-xl font-bold text-white font-serif-royal">
                  Adv. Sumit Chaudhary
                </h3>
                <p className="text-xs text-amber-300 font-semibold font-hindi-royal">
                  सुपुत्र: श्री महीपाल सिंह जी
                </p>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed max-w-sm">
              {language === 'hi'
                ? 'संविधान व न्याय के रक्षक, प्रखर राजनीतिक नेतृत्व, दूरदर्शी उद्यमी एवं समाज कल्याण के प्रति समर्पित जननायक।'
                : 'Distinguished advocate defending constitutional rights, visionary entrepreneur, and selfless social worker dedicated to public empowerment.'}
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-2.5 py-1 rounded-md bg-slate-900 text-amber-400 border border-slate-800 text-[11px] font-mono">
                ⚖️ Advocate
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 text-sky-400 border border-slate-800 text-[11px] font-mono">
                🏛️ Politician
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 text-emerald-400 border border-slate-800 text-[11px] font-mono">
                💼 Businessman
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 text-rose-400 border border-slate-800 text-[11px] font-mono">
                🤝 Social Worker
              </span>
            </div>
          </div>

          {/* Col 3: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              {language === 'hi' ? 'महत्वपूर्ण अनुभाग' : 'Navigation'}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="hover:text-amber-400 transition-colors">
                  {language === 'hi' ? 'मुख्य पृष्ठ' : 'Home'}
                </a>
              </li>
              <li>
                <a href="#pillars" className="hover:text-amber-400 transition-colors">
                  {language === 'hi' ? 'चार स्तम्भ (Pillars)' : 'Four Pillars'}
                </a>
              </li>
              <li>
                <a href="#lineage" className="hover:text-amber-400 transition-colors">
                  {language === 'hi' ? 'विरासत: श्री महीपाल सिंह' : 'Lineage & Heritage'}
                </a>
              </li>
              <li>
                <a href="#team-movement" className="hover:text-amber-400 transition-colors">
                  {language === 'hi' ? 'टीम सुमित चौधरी' : 'Team Sumit Chaudhary'}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-400 transition-colors">
                  {language === 'hi' ? 'फोटो दीर्घा (5 प्रमाणित स्लॉट)' : 'Photo Archive'}
                </a>
              </li>
              <li>
                <a href="#office" className="hover:text-amber-400 transition-colors">
                  {language === 'hi' ? 'चैंबर व कार्यालय' : 'Chambers & Office'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Public Action Portals */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              {language === 'hi' ? 'नागरिक सुविधाएं' : 'Services'}
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setIsGrievanceOpen(true)}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  {language === 'hi' ? 'निशुल्क विधिक परामर्श' : 'Free Legal Counsel'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsGrievanceOpen(true)}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  {language === 'hi' ? 'जनसुनवाई व समस्या निवारण' : 'Public Grievance Portal'}
                </button>
              </li>
              <li>
                <a href="#team-movement" className="hover:text-amber-400 transition-colors">
                  {language === 'hi' ? 'टीम सदस्यता अभियान' : 'Volunteer Registration'}
                </a>
              </li>
              <li>
                <button
                  onClick={() => setIsManagerOpen(true)}
                  className="hover:text-amber-400 transition-colors text-left flex items-center gap-1"
                >
                  <Camera className="w-3 h-3 text-amber-400" />
                  <span>{language === 'hi' ? 'फोटो प्रबंधन एवं अपलोड' : 'Attach / Upload Photos'}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsVisitingCardOpen(true)}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  {language === 'hi' ? 'डिजिटल विजिटिंग कार्ड' : 'Digital Visiting Pass'}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Central Secretariat Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              {language === 'hi' ? 'केंद्रीय सचिवालय' : 'Secretariat'}
            </h4>
            <p className="text-slate-300">
              {OFFICE_CONTACT.publicOfficeAddress[language]}
            </p>
            <p className="font-mono text-amber-300">
              {OFFICE_CONTACT.helpline}
            </p>
            <p className="text-slate-400">
              {OFFICE_CONTACT.email}
            </p>
          </div>

        </div>

        {/* Developer Credit & Appointment Coordination Signature Box */}
        <div className="relative rounded-2xl p-0.5 bg-gradient-to-r from-amber-500/40 via-sky-500/30 to-amber-500/40 mb-8 shadow-2xl shadow-black">
          <div className="rounded-[15px] bg-gradient-to-b from-[#0c1424] to-[#070b14] p-5 sm:p-6 flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Left: Architect Details */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
              <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-600 p-0.5 shadow-lg shadow-amber-500/20 shrink-0">
                <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-amber-400">
                  <Code2 className="w-7 h-7" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-slate-950 flex items-center justify-center">
                  <Sparkles className="w-2.5 h-2.5 text-slate-950" />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30">
                    {DEVELOPER_INFO.creditBadge[language]}
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">
                    Digital Architect
                  </span>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-white font-serif-royal flex items-center justify-center sm:justify-start gap-2">
                  <span>{DEVELOPER_INFO.name}</span>
                  <span className="text-sm font-hindi-royal text-amber-300 font-normal">
                    (आदित्य मदान)
                  </span>
                </h3>

                <p className="text-xs text-slate-300 max-w-xl font-sans-modern leading-relaxed">
                  {language === 'hi'
                    ? 'यह संपूर्ण आधिकारिक पोर्टल आदित्य मदान द्वारा डिजाइन एवं विकसित किया गया है। किसी भी प्रकार की पूछताछ (Query), तकनीकी सहायता अथवा विधिक/सार्वजनिक अपॉइंटमेंट समन्वय के लिए मुझसे सीधे संपर्क करें।'
                    : 'This entire official portal is custom designed and engineered by Aditya Madaan. For any portal query, technical assistance, or appointment coordination with Adv. Sumit Chaudhary, please reach out directly.'}
                </p>
              </div>
            </div>

            {/* Right: Direct Actions (Call & WhatsApp) */}
            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <a
                href={`tel:${DEVELOPER_INFO.phoneRaw}`}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold text-xs shadow-md transition-transform hover:scale-105"
                title={`Call ${DEVELOPER_INFO.name}`}
              >
                <Phone className="w-4 h-4" />
                <span>कॉल करें: {DEVELOPER_INFO.phone}</span>
              </a>

              <a
                href={DEVELOPER_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-transform hover:scale-105"
                title="WhatsApp Aditya Madaan"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp चैट</span>
              </a>
            </div>

          </div>
        </div>

        {/* Legal Disclaimer Bar */}
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-900 text-[11px] text-slate-500 leading-relaxed mb-8">
          <p>
            <strong>{language === 'hi' ? 'कानूनी एवं बार काउंसिल सूचना:' : 'Legal & Compliance Note:'}</strong>{' '}
            {language === 'hi'
              ? 'यह पोर्टल अधिवक्ता सुमित चौधरी जी के विधिक, सामाजिक और सार्वजनिक कार्यों की प्रामाणिक जानकारी हेतु निर्मित है। बार काउंसिल ऑफ इंडिया के नियमों के अनुपालन में यह किसी भी प्रकार का व्यावसायिक विज्ञापन या याचना नहीं है।'
              : 'This portal is designed for informational purposes regarding the civic, legal, and philanthropic endeavors of Adv. Sumit Chaudhary. As per Bar Council of India guidelines, this does not constitute advertisement or solicitation of legal work.'}
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-900 text-[11px]">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-slate-400 text-center sm:text-left">
            <span>
              © {new Date().getFullYear()} Adv. Sumit Chaudhary (S/O Mr. Mahipal Singh). All Rights Reserved.
            </span>
            <span className="hidden sm:inline text-slate-700">•</span>
            <span className="text-amber-400 font-medium">
              {language === 'hi' ? 'वेबसाइट निर्माण:' : 'Designed & Developed by:'}{' '}
              <a 
                href={`tel:${DEVELOPER_INFO.phoneRaw}`}
                className="hover:underline text-amber-300 font-semibold"
              >
                {DEVELOPER_INFO.name} ({DEVELOPER_INFO.phone})
              </a>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsManagerOpen(true)}
              className="text-amber-400 hover:underline flex items-center gap-1"
            >
              <Camera className="w-3.5 h-3.5" />
              <span>{language === 'hi' ? 'फोटो स्लॉट प्रबंधन' : 'Photo Slots'}</span>
            </button>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-amber-500 text-slate-400 hover:text-black transition-colors flex items-center gap-1"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="hidden sm:inline">{language === 'hi' ? 'शीर्ष पर जाएं' : 'Top'}</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
