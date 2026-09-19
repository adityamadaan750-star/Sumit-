import React from 'react';
import { usePhotos } from '../context/PhotoContext';
import { OFFICE_CONTACT, ASSET_IMAGES, DEVELOPER_INFO } from '../data/content';
import { 
  Building2, 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  Scale, 
  Users, 
  Calendar, 
  ArrowUpRight,
  Send,
  Code2,
  MessageCircle,
  Sparkles
} from 'lucide-react';

export const OfficeContact: React.FC = () => {
  const { language, setIsGrievanceOpen } = usePhotos();

  return (
    <section id="office" className="py-20 relative bg-[#090e1a] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5 text-amber-400" />
            <span>{language === 'hi' ? 'चैंबर एवं जनसंपर्क सचिवालय' : 'Chambers & Public Offices'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-serif-royal text-white tracking-tight">
            {language === 'hi' ? 'सीधा संपर्क एवं विधिक परामर्श' : 'Chambers & Central Secretariat'}
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300 font-sans-modern">
            {language === 'hi'
              ? 'अधिवक्ता सुमित चौधरी जी के कानूनी चैंबर और मुख्य जनसंपर्क कार्यालय के पते, समय और त्वरित संपर्क माध्यम।'
              : 'Direct communication channels for legal case consultations, public assistance, and grassroots organizational affairs.'}
          </p>
        </div>

        {/* 2 Primary Offices Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          
          {/* Card 1: High Court Legal Chamber */}
          <div className="rounded-3xl p-1 bg-gradient-to-b from-amber-500/30 via-slate-800 to-slate-900 shadow-xl">
            <div className="rounded-[22px] bg-[#0c1322] p-6 sm:p-8 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                    <Scale className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30">
                    {language === 'hi' ? 'विधिक चैंबर' : 'Legal Chamber'}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white font-serif-royal mb-2">
                  {language === 'hi' ? 'उच्च न्यायालय अधिवक्ता चैंबर' : 'High Court Legal Chamber'}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 font-sans-modern leading-relaxed mb-6">
                  {language === 'hi'
                    ? 'संविधान, दीवानी व जनहित मुकदमों के लिए वरिष्ठ अधिवक्ताओं की कोर टीम के साथ विधिक परामर्श।'
                    : 'Chamber dedicated to constitutional litigation, civil disputes, public welfare writs, and corporate legal audits.'}
                </p>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase font-mono block">Chamber Address</span>
                      <span className="text-slate-200">{OFFICE_CONTACT.chamberAddress[language]}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase font-mono block">Chamber Hours</span>
                      <span className="text-slate-200">{OFFICE_CONTACT.timings[language]}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800">
                <button
                  onClick={() => setIsGrievanceOpen(true)}
                  className="w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{language === 'hi' ? 'चैंबर में समय (अपॉइंटमेंट) लें' : 'Schedule Chamber Appointment'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Team Sumit Chaudhary Central Camp Office */}
          <div className="rounded-3xl p-1 bg-gradient-to-b from-blue-500/30 via-slate-800 to-slate-900 shadow-xl">
            <div className="rounded-[22px] bg-[#0c1322] p-6 sm:p-8 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400">
                    <Users className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/30">
                    {language === 'hi' ? 'केंद्रीय जनसंपर्क' : 'Camp Office'}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white font-serif-royal mb-2">
                  {language === 'hi' ? 'टीम सुमित चौधरी मुख्य कार्यालय' : 'Team Sumit Chaudhary Central Office'}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 font-sans-modern leading-relaxed mb-6">
                  {language === 'hi'
                    ? 'नागरिकों की दैनिक जनसुनवाई, सामाजिक सहायता, युवा रोजगार सेल और संगठनात्मक अभियानों का केंद्र।'
                    : 'The primary headquarters for public grievance redressals, social assistance camps, and grassroots coordination.'}
                </p>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase font-mono block">Camp Office Address</span>
                      <span className="text-slate-200">{OFFICE_CONTACT.publicOfficeAddress[language]}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <Phone className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase font-mono block">24x7 Public Helpline</span>
                      <span className="text-white font-mono font-bold">{OFFICE_CONTACT.helpline}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800">
                <a
                  href={`tel:${OFFICE_CONTACT.helpline.split('/')[0].trim().replace(/\s+/g, '')}`}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-sky-400" />
                  <span>{language === 'hi' ? 'हेल्पलाइन पर कॉल करें' : 'Call Official Helpline'}</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Direct Helpline Banner */}
        <div className="rounded-2xl p-6 bg-gradient-to-r from-amber-500/20 via-slate-900 to-amber-500/20 border border-amber-500/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-slate-950 font-bold shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-amber-300 uppercase tracking-wider font-mono">
                {language === 'hi' ? 'केंद्रीय हेल्पलाइन नंबर' : 'Central Public Helpline'}
              </p>
              <h4 className="text-xl sm:text-2xl font-bold text-white font-mono">
                {OFFICE_CONTACT.helpline}
              </h4>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsGrievanceOpen(true)}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold text-xs shadow-lg transition-all"
            >
              {language === 'hi' ? 'ऑनलाइन जनसुनवाई फॉर्म' : 'Online Grievance Form'}
            </button>
          </div>
        </div>

        {/* Appointment & Technical Query Coordinator Desk (Aditya Madaan) */}
        <div className="mt-8 rounded-2xl p-1 bg-gradient-to-r from-slate-800 via-amber-500/30 to-slate-800 shadow-xl">
          <div className="rounded-[14px] bg-[#0c1322] p-5 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                <Code2 className="w-6 h-6" />
              </div>
              <div>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-1">
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30">
                    {language === 'hi' ? 'वेबसाइट निर्माता एवं समन्वयक' : 'Creator & Digital Coordinator'}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">
                    {DEVELOPER_INFO.name} (आदित्य मदान)
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white font-serif-royal">
                  {language === 'hi'
                    ? 'अपॉइंटमेंट समन्वय अथवा किसी भी तकनीकी क्वेरी के लिए संपर्क'
                    : 'VIP Appointment Coordination & Technical Queries Desk'}
                </h4>
                <p className="text-xs text-slate-300 mt-1 max-w-xl">
                  {language === 'hi'
                    ? 'यह पोर्टल आदित्य मदान द्वारा तैयार किया गया है। यदि आपको अधिवक्ता सुमित चौधरी जी से मुलाकात/अपॉइंटमेंट में कोई समस्या आ रही है या वेबसाइट संबंधित कोई प्रश्न है, तो सीधे आदित्य मदान से संपर्क कर सकते हैं।'
                    : 'Engineered by Aditya Madaan. For immediate appointment guidance, technical support, or portal questions, reach out directly.'}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <a
                href={`tel:${DEVELOPER_INFO.phoneRaw}`}
                className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-amber-500/40 text-amber-300 hover:text-white font-semibold text-xs transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>{DEVELOPER_INFO.phone}</span>
              </a>

              <a
                href={DEVELOPER_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-transform hover:scale-105 flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
