import React, { useState } from 'react';
import { motion } from 'motion/react';
import { usePhotos } from '../context/PhotoContext';
import { Users, Megaphone, Flag, Award, HeartHandshake, CheckCircle, ArrowRight, Shield } from 'lucide-react';

export const TeamMovementSection: React.FC = () => {
  const { language, getPhotoSrc, setIsGrievanceOpen } = usePhotos();
  const photoTeam = getPhotoSrc('photo-5'); // file_00000000adb88211937171e7778b41ec.png (टीम सुमित चौधरी poster)

  const [volunteerName, setVolunteerName] = useState('');
  const [volunteerMobile, setVolunteerMobile] = useState('');
  const [volunteerArea, setVolunteerArea] = useState('');
  const [joinedSuccess, setJoinedSuccess] = useState(false);

  const handleJoinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!volunteerName || !volunteerMobile) return;
    setJoinedSuccess(true);
    setTimeout(() => {
      setVolunteerName('');
      setVolunteerMobile('');
      setVolunteerArea('');
      setJoinedSuccess(false);
    }, 4000);
  };

  return (
    <section id="team-movement" className="py-20 relative bg-gradient-to-b from-[#090e1a] via-[#0d1424] to-[#070b14] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Flag className="w-3.5 h-3.5 text-amber-400" />
            <span>{language === 'hi' ? 'जन-जन का संकल्प' : 'People\'s Movement'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-serif-royal text-white tracking-tight">
            {language === 'hi' ? (
              <span className="gold-gradient-text drop-shadow">टीम सुमित चौधरी (Team Sumit Chaudhary)</span>
            ) : (
              <span>Team <span className="gold-gradient-text">Sumit Chaudhary</span> Movement</span>
            )}
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300 font-sans-modern">
            {language === 'hi'
              ? 'लाखों समर्पित युवाओं, किसानों, व्यापारियों और समाजसेवियों का वह विशाल संगठन जो अन्याय के खिलाफ ढाल और जरूरतमंदों के लिए संबल बनकर 24x7 खड़ा है।'
              : 'A formidable grassroots alliance of over 150,000 active volunteers dedicated to social justice, youth opportunity, and regional prosperity.'}
          </p>
        </div>

        {/* Feature Grid: Poster Showcase + Volunteer Drive */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Grand Poster Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl p-1 bg-gradient-to-b from-amber-400 via-amber-600 to-amber-950 shadow-2xl shadow-amber-500/20">
              <div className="rounded-[22px] overflow-hidden bg-black aspect-[3/4] relative group">
                <img
                  src={photoTeam}
                  alt="टीम सुमित चौधरी - Team Sumit Chaudhary Poster"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-black/20" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-amber-500/40 text-amber-300 text-xs font-semibold">
                  <Megaphone className="w-3.5 h-3.5 text-amber-400" />
                  <span>{language === 'hi' ? 'ऐतिहासिक जनसैलाब' : 'Mass Movement'}</span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-6 left-6 right-6 text-left">
                  <p className="text-xs uppercase tracking-widest text-amber-400 font-mono font-bold">
                    {language === 'hi' ? 'परम आदरणीय सुपुत्र: श्री महीपाल सिंह जी' : 'S/O Mr. Mahipal Singh'}
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-hindi-royal mt-1">
                    टीम सुमित चौधरी
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 font-sans-modern">
                    {language === 'hi' 
                      ? 'हर गांव, हर शहर, हर वार्ड में न्याय और विकास की सशक्त मशाल।' 
                      : 'Carrying the torch of justice and progress across every rural and urban block.'}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Movement Principles & Join Form */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif-royal">
                {language === 'hi' ? 'हमारा मिशन — हमारा संकल्प' : 'Our Mission & Pledge'}
              </h3>
              <p className="text-sm text-slate-300 font-sans-modern leading-relaxed">
                {language === 'hi'
                  ? 'टीम सुमित चौधरी का प्रत्येक सदस्य केवल एक कार्यकर्ता नहीं, अपितु समाज में सकारात्मक परिवर्तन लाने का सिपाही है।'
                  : 'Every volunteer is an ambassador of ethical service, working day and night to assist citizens with legal advice, employment opportunities, and emergency social care.'}
              </p>
            </div>

            {/* Movement Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                <Shield className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider font-serif-royal">
                    {language === 'hi' ? 'नागरिक सुरक्षा व न्याय' : 'Citizen Protection'}
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    {language === 'hi' ? 'प्रशासनिक उत्पीड़न के विरुद्ध निशुल्क विधिक संरक्षण' : 'Free legal defense against harassment'}
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                <Users className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider font-serif-royal">
                    {language === 'hi' ? 'युवा रोजगार सेल' : 'Youth Employment'}
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    {language === 'hi' ? 'स्थानीय उद्योगों व व्यापार में युवाओं को अवसर' : 'Connecting youth to enterprise careers'}
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                <HeartHandshake className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider font-serif-royal">
                    {language === 'hi' ? '24x7 जनसहयोग वाहिनी' : '24x7 Citizen Rescue'}
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    {language === 'hi' ? 'रक्तदान, चिकित्सा सहायता एवं आपदा राहत में अग्रणी' : 'Immediate medical, blood & food aid'}
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider font-serif-royal">
                    {language === 'hi' ? 'पारदर्शिता व शुचिता' : 'Uncompromising Ethics'}
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    {language === 'hi' ? 'भ्रष्टाचार मुक्त विकास और पारदर्शी प्रशासन' : 'Zero tolerance for administrative graft'}
                  </p>
                </div>
              </div>
            </div>

            {/* Instant Membership Card / Join Form */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 via-[#0d1527] to-slate-950 border border-amber-500/30 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Flag className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                    {language === 'hi' ? 'टीम सुमित चौधरी सदस्यता अभियान' : 'Join Team Sumit Chaudhary'}
                  </span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-mono">
                  {language === 'hi' ? 'निःशुल्क' : 'Free Registration'}
                </span>
              </div>

              {joinedSuccess ? (
                <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-200 text-center space-y-1 animate-in fade-in">
                  <CheckCircle className="w-6 h-6 text-emerald-400 mx-auto" />
                  <p className="text-sm font-bold">
                    {language === 'hi' ? 'अभिनंदन! आप टीम सुमित चौधरी से जुड़ गए हैं।' : 'Welcome to Team Sumit Chaudhary!'}
                  </p>
                  <p className="text-xs text-slate-300">
                    {language === 'hi' ? 'हमारा केंद्रीय कार्यालय शीघ्र आपसे संपर्क करेगा।' : 'Our regional coordinator will contact you shortly.'}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleJoinSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label className="text-[11px] font-medium text-slate-300 block mb-1">
                        {language === 'hi' ? 'आपका पूरा नाम *' : 'Your Full Name *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={volunteerName}
                        onChange={(e) => setVolunteerName(e.target.value)}
                        placeholder={language === 'hi' ? 'जैसे: राहुल शर्मा' : 'e.g. Rahul Sharma'}
                        className="w-full text-xs px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-medium text-slate-300 block mb-1">
                        {language === 'hi' ? 'मोबाइल नंबर *' : 'Mobile Number *'}
                      </label>
                      <input
                        type="tel"
                        required
                        value={volunteerMobile}
                        onChange={(e) => setVolunteerMobile(e.target.value)}
                        placeholder="+91 98765 XXXXX"
                        className="w-full text-xs px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-medium text-slate-300 block mb-1">
                      {language === 'hi' ? 'जिला / क्षेत्र / गांव' : 'District / Area / Village'}
                    </label>
                    <input
                      type="text"
                      value={volunteerArea}
                      onChange={(e) => setVolunteerArea(e.target.value)}
                      placeholder={language === 'hi' ? 'क्षेत्र या वार्ड का नाम' : 'City or Block Name'}
                      className="w-full text-xs px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold text-xs shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{language === 'hi' ? 'टीम में सम्मिलित हों' : 'Enroll in Team Sumit Chaudhary'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
