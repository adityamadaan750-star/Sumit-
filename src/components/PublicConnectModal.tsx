import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { usePhotos } from '../context/PhotoContext';
import { OFFICE_CONTACT, DEVELOPER_INFO } from '../data/content';
import { X, Scale, Send, CheckCircle2, ShieldAlert, Phone, Mail, MapPin, MessageCircle, Code2 } from 'lucide-react';

export const PublicConnectModal: React.FC = () => {
  const { isGrievanceOpen, setIsGrievanceOpen, language } = usePhotos();

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [category, setCategory] = useState<'Legal' | 'Social' | 'Political' | 'Business'>('Legal');
  const [message, setMessage] = useState('');
  const [ticketId, setTicketId] = useState<string | null>(null);

  if (!isGrievanceOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !message) return;

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newTicket = `ASC-${category.toUpperCase().slice(0, 3)}-${randomNum}`;
    setTicketId(newTicket);
  };

  const handleClose = () => {
    setIsGrievanceOpen(false);
    setTicketId(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-3xl bg-[#0c1322] border border-amber-500/40 shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-800 bg-[#070b14] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white font-serif-royal">
                {language === 'hi' ? 'विधिक परामर्श एवं जनसुनवाई केंद्र' : 'Legal Chamber & Public Grievance Portal'}
              </h3>
              <p className="text-xs text-slate-400">
                {language === 'hi'
                  ? 'अधिवक्ता सुमित चौधरी जी के कार्यालय से सीधा संपर्क'
                  : 'Direct channel to the chamber of Adv. Sumit Chaudhary'}
              </p>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="p-2 rounded-xl bg-slate-900 hover:bg-amber-500 text-slate-300 hover:text-black transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-6">
          {ticketId ? (
            <div className="py-8 text-center space-y-4 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h4 className="text-xl font-bold text-white font-serif-royal">
                  {language === 'hi' ? 'आवेदन सफलतापूर्वक पंजीकृत हुआ!' : 'Request Registered Successfully!'}
                </h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  {language === 'hi'
                    ? 'आपकी समस्या / परामर्श आवेदन अधिवक्ता सुमित चौधरी जी के विधिक एवं प्रशासनिक सचिवालय को प्रेषित कर दिया गया है।'
                    : 'Your consultation or assistance request has been submitted to Adv. Sumit Chaudhary\'s chamber.'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-amber-500/30 max-w-sm mx-auto space-y-1">
                <span className="text-[11px] uppercase tracking-widest text-slate-400 font-mono">
                  {language === 'hi' ? 'टोकन / पावती क्रमांक:' : 'Your Reference Token:'}
                </span>
                <p className="text-2xl font-mono font-bold text-amber-400 tracking-wider">
                  {ticketId}
                </p>
                <p className="text-[10px] text-slate-400">
                  {language === 'hi' ? 'कृपया इसे सुरक्षित रखें।' : 'Kindly keep this token for follow-up.'}
                </p>
              </div>

              <div className="pt-2 flex justify-center gap-3">
                <button
                  onClick={handleClose}
                  className="px-6 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs shadow-md transition-colors"
                >
                  {language === 'hi' ? 'समाप्त करें' : 'Close Window'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs flex items-center gap-2.5">
                <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
                <span>
                  {language === 'hi'
                    ? 'निर्धन व असहाय परिवारों के लिए निशुल्क कानूनी परामर्श शिविर प्रतिदिन उपलब्ध हैं।'
                    : 'Free legal consultations and grievance redressals are conducted daily for needy families.'}
                </span>
              </div>

              {/* Consultation Category */}
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5 font-mono">
                  {language === 'hi' ? 'परामर्श की श्रेणी *' : 'Consultation Category *'}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  {[
                    { key: 'Legal', labelHi: 'विधिक / मुकदमा', labelEn: 'Legal Advocacy' },
                    { key: 'Social', labelHi: 'सामाजिक सहायता', labelEn: 'Social Welfare' },
                    { key: 'Political', labelHi: 'टीम जनआंदोलन', labelEn: 'Team Movement' },
                    { key: 'Business', labelHi: 'उद्योग व स्टार्टअप', labelEn: 'Business Advice' },
                  ].map((cat) => (
                    <button
                      type="button"
                      key={cat.key}
                      onClick={() => setCategory(cat.key as any)}
                      className={`py-2 px-3 rounded-lg border text-center font-medium transition-all ${
                        category === cat.key
                          ? 'bg-amber-500 text-black font-bold border-amber-400 shadow-sm'
                          : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      {language === 'hi' ? cat.labelHi : cat.labelEn}
                    </button>
                  ))}
                </div>
              </div>

              {/* Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-medium text-slate-300 block mb-1">
                    {language === 'hi' ? 'आवेदक का पूरा नाम *' : 'Full Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder={language === 'hi' ? 'जैसे: विजय कुमार' : 'e.g. Vijay Kumar'}
                    className="w-full text-xs px-3 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-medium text-slate-300 block mb-1">
                    {language === 'hi' ? 'संपर्क नंबर (मोबाइल) *' : 'Mobile Number *'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 XXXXX"
                    className="w-full text-xs px-3 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-medium text-slate-300 block mb-1">
                    {language === 'hi' ? 'ईमेल (वैकल्पिक)' : 'Email Address (Optional)'}
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full text-xs px-3 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-medium text-slate-300 block mb-1">
                    {language === 'hi' ? 'शहर / जिला / गांव' : 'City / District'}
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder={language === 'hi' ? 'जैसे: मेरठ / दिल्ली / गाजियाबाद' : 'e.g. New Delhi'}
                    className="w-full text-xs px-3 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-medium text-slate-300 block mb-1">
                  {language === 'hi' ? 'समस्या या परामर्श का संक्षिप्त विवरण *' : 'Brief Details / Matter Description *'}
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={language === 'hi' ? 'कृपया अपनी समस्या या विधिक मामले का संक्षिप्त विवरण लिखें...' : 'Please describe your query or assistance required...'}
                  className="w-full text-xs p-3 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold text-xs shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{language === 'hi' ? 'आवेदन प्रेषित करें' : 'Submit Consultation Request'}</span>
              </button>
            </form>
          )}
        </div>

        {/* Footer Contact Snippet & Appointment Coordinator */}
        <div className="p-4 border-t border-slate-800 bg-[#070b14] space-y-2.5 text-[11px] text-slate-400">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="flex items-center gap-1.5 text-white font-mono">
              <Phone className="w-3 h-3 text-amber-400" />
              <span>हेल्पलाइन: {OFFICE_CONTACT.helpline}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-3 h-3 text-amber-400" />
              <span>{OFFICE_CONTACT.email}</span>
            </span>
          </div>

          <div className="pt-2 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-2 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80">
            <div className="text-left">
              <span className="text-amber-400 font-medium block">
                {language === 'hi' ? 'क्वेरी / त्वरित अपॉइंटमेंट सहायता:' : 'Direct Appointment Coordinator:'}
              </span>
              <span className="text-[10px] text-slate-300">
                {language === 'hi' 
                  ? 'वेबसाइट निर्माता: आदित्य मदान (Aditya Madaan)' 
                  : 'Portal Creator & Coordinator: Aditya Madaan'}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={`tel:${DEVELOPER_INFO.phoneRaw}`}
                className="px-2.5 py-1 rounded-md bg-amber-500/20 hover:bg-amber-500 text-amber-300 hover:text-black font-semibold text-[10px] transition-colors flex items-center gap-1"
              >
                <Phone className="w-2.5 h-2.5" />
                <span>{DEVELOPER_INFO.phone}</span>
              </a>
              <a
                href={DEVELOPER_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-[10px] transition-colors flex items-center gap-1"
              >
                <MessageCircle className="w-2.5 h-2.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
