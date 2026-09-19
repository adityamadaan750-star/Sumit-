import React, { useState } from 'react';
import { motion } from 'motion/react';
import { usePhotos } from '../context/PhotoContext';
import { OFFICE_CONTACT, ASSET_IMAGES } from '../data/content';
import { X, QrCode, Download, Share2, Check, Scale, Phone, Mail, MapPin, Award } from 'lucide-react';

export const DigitalCardModal: React.FC = () => {
  const { isVisitingCardOpen, setIsVisitingCardOpen, language, getPhotoSrc } = usePhotos();
  const [copied, setCopied] = useState(false);

  if (!isVisitingCardOpen) return null;

  const photoAvatar = getPhotoSrc('photo-1'); // Waving portrait

  const handleDownloadVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Adv. Sumit Chaudhary
N:Chaudhary;Sumit;;Adv.;
ORG:High Court Chambers & Team Sumit Chaudhary
TITLE:Advocate, Politician, Businessman & Social Worker
NOTE:Son of Mr. Mahipal Singh
TEL;TYPE=CELL:${OFFICE_CONTACT.helpline.replace(/\s+/g, '')}
EMAIL:${OFFICE_CONTACT.email}
ADR;TYPE=WORK:;;${OFFICE_CONTACT.chamberAddress.en};;;;
URL:https://advsumitchaudhary.in
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Adv_Sumit_Chaudhary.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Adv. Sumit Chaudhary - Official Digital Profile',
        text: 'Official Profile of Adv. Sumit Chaudhary (S/O Mr. Mahipal Singh) - Advocate, Politician, Businessman & Social Worker.',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="relative w-full max-w-lg rounded-3xl bg-[#090f1d] border border-amber-500/50 shadow-2xl overflow-hidden p-1"
      >
        {/* Card Canvas */}
        <div className="rounded-[22px] bg-gradient-to-b from-[#0e172a] to-[#070b14] p-6 relative overflow-hidden">
          
          {/* Close button */}
          <button
            onClick={() => setIsVisitingCardOpen(false)}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/80 hover:bg-amber-500 text-slate-300 hover:text-black transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Top Crest & Bar */}
          <div className="flex items-center justify-between border-b border-amber-500/30 pb-4 mb-5">
            <div className="flex items-center gap-3">
              <img
                src={ASSET_IMAGES.emblem}
                alt="Seal"
                className="w-10 h-10 rounded-full border border-amber-500/50 object-cover"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="text-xs font-bold text-amber-300 uppercase tracking-widest font-mono block">
                  Official Digital Pass
                </span>
                <span className="text-[11px] text-slate-400">
                  {language === 'hi' ? 'उच्च न्यायालय एवं जनसेवा सचिवालय' : 'High Court & Public Secretariat'}
                </span>
              </div>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 font-mono">
              VIP PASS
            </span>
          </div>

          {/* Profile Header */}
          <div className="flex items-center gap-4 mb-5">
            <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-amber-400 shadow-md bg-black shrink-0">
              <img
                src={photoAvatar}
                alt="Adv. Sumit Chaudhary"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-0.5">
              <h3 className="text-xl font-bold text-white font-serif-royal">
                Adv. Sumit Chaudhary
              </h3>
              <p className="text-xs font-semibold text-amber-400 font-hindi-royal">
                अधिवक्ता सुमित चौधरी
              </p>
              <p className="text-[11px] text-slate-300 font-sans-modern">
                {language === 'hi' ? 'सुपुत्र: श्री महीपाल सिंह जी' : 'S/O Mr. Mahipal Singh'}
              </p>
              <div className="pt-1 flex flex-wrap gap-1">
                <span className="text-[9px] px-1.5 py-0.2 rounded bg-slate-800 text-amber-300 border border-slate-700">
                  Advocate
                </span>
                <span className="text-[9px] px-1.5 py-0.2 rounded bg-slate-800 text-sky-300 border border-slate-700">
                  Politician
                </span>
                <span className="text-[9px] px-1.5 py-0.2 rounded bg-slate-800 text-emerald-300 border border-slate-700">
                  Businessman
                </span>
                <span className="text-[9px] px-1.5 py-0.2 rounded bg-slate-800 text-rose-300 border border-slate-700">
                  Social Worker
                </span>
              </div>
            </div>
          </div>

          {/* Contact Details List */}
          <div className="space-y-2.5 p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-300 mb-5">
            <div className="flex items-start gap-2.5">
              <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] text-slate-500 block uppercase font-mono">Helpline</span>
                <span className="text-white font-medium">{OFFICE_CONTACT.helpline}</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] text-slate-500 block uppercase font-mono">Email</span>
                <span className="text-white font-medium">{OFFICE_CONTACT.email}</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] text-slate-500 block uppercase font-mono">Chamber / Office</span>
                <span className="text-white font-medium">{OFFICE_CONTACT.chamberAddress[language]}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2.5">
            <button
              onClick={handleDownloadVCard}
              className="py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md transition-colors flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>{language === 'hi' ? 'फोन में संपर्क सेव करें' : 'Save Contact (.vcf)'}</span>
            </button>

            <button
              onClick={handleShare}
              className="py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-colors flex items-center justify-center gap-2"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
              <span>{copied ? (language === 'hi' ? 'लिंक कॉपी हुआ' : 'Copied!') : (language === 'hi' ? 'कार्ड शेयर करें' : 'Share Profile')}</span>
            </button>
          </div>

        </div>
      </motion.div>
    </div>
  );
};
