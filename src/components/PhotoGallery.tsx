import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { usePhotos } from '../context/PhotoContext';
import { 
  Camera, 
  Sparkles, 
  ExternalLink, 
  Upload, 
  Check, 
  Info, 
  X, 
  ZoomIn, 
  FolderKanban,
  FileImage
} from 'lucide-react';
import { PhotoSlot } from '../types';

export const PhotoGallery: React.FC = () => {
  const { language, photoSlots, getPhotoSrc, setIsManagerOpen } = usePhotos();
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoSlot | null>(null);
  const [copiedSlotId, setCopiedSlotId] = useState<string | null>(null);

  const handleCopyFileName = (fileName: string, slotId: string) => {
    navigator.clipboard.writeText(fileName);
    setCopiedSlotId(slotId);
    setTimeout(() => setCopiedSlotId(null), 2000);
  };

  return (
    <section id="gallery" className="py-20 relative bg-[#070b14] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'आधिकारिक चित्र दीर्घा एवं फोटो स्लॉट' : 'Official Photo Archive & Media Gallery'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-serif-royal text-white tracking-tight">
            {language === 'hi' ? 'दृष्टिकोण और स्मृतियां — फोटो दीर्घा' : 'Visions in Action — Curated Gallery'}
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300 font-sans-modern">
            {language === 'hi'
              ? 'अधिवक्ता सुमित चौधरी जी के व्यक्तित्व, जनआंदोलनों और सामाजिक सरोकारों के 5 प्रमुख प्रमाणित चित्र एवं उनके उपयोग का पूर्ण विवरण।'
              : 'The 5 official portrait assets capturing Adv. Sumit Chaudhary across his roles as jurist, statesman, entrepreneur, and community leader.'}
          </p>

          {/* Quick Notice Banner on Uploading */}
          <div className="mt-6 p-3.5 rounded-2xl bg-slate-900/90 border border-amber-500/40 inline-flex flex-wrap items-center justify-center gap-3 text-xs text-amber-300">
            <Info className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              {language === 'hi' 
                ? 'सभी 5 फोटो सिस्टम में मैप हैं। आप "फोटो बदलें" बटन दबाकर तुरंत अपनी मूल फोटो अपलोड कर सकते हैं।' 
                : 'All 5 photo slots are mapped. Click "Manage / Replace" to upload your original files with instant preview.'}
            </span>
            <button
              onClick={() => setIsManagerOpen(true)}
              className="px-3 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors flex items-center gap-1"
            >
              <Upload className="w-3 h-3" />
              <span>{language === 'hi' ? 'फोटो अपलोड टूल' : 'Upload Tool'}</span>
            </button>
          </div>
        </div>

        {/* 5-Slot Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photoSlots.map((slot, index) => {
            const currentSrc = getPhotoSrc(slot.id);
            const isWide = slot.id === 'photo-4'; // Horizon panorama

            return (
              <motion.div
                key={slot.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-2xl p-1 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 border border-slate-800 hover:border-amber-500/50 transition-all shadow-xl group ${
                  isWide ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div className="rounded-[14px] bg-[#0b1220] p-4 flex flex-col justify-between h-full">
                  
                  {/* Card Media Preview */}
                  <div className="relative rounded-xl overflow-hidden bg-black aspect-[4/3] group-hover:shadow-lg transition-shadow">
                    <img
                      src={currentSrc}
                      alt={slot.title[language]}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                    {/* Slot badge */}
                    <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md border border-amber-500/30 text-amber-300 text-[11px] font-mono">
                      Slot #{index + 1}
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[11px] font-semibold">
                      {slot.roleCategory}
                    </div>

                    {/* Zoom / Lightbox Trigger */}
                    <button
                      onClick={() => setSelectedPhoto(slot)}
                      className="absolute bottom-3 right-3 p-2 rounded-lg bg-black/70 hover:bg-amber-500 text-white hover:text-black transition-colors backdrop-blur-sm"
                      title="View Full Resolution"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Details */}
                  <div className="mt-4 space-y-2">
                    <h3 className="text-base font-bold text-white font-serif-royal">
                      {slot.title[language]}
                    </h3>

                    <p className="text-xs text-slate-300 font-sans-modern leading-relaxed">
                      {slot.description[language]}
                    </p>

                    {/* Technical Attachment Specification */}
                    <div className="pt-2 border-t border-slate-800 space-y-1.5">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-slate-400 flex items-center gap-1 font-mono">
                          <FileImage className="w-3 h-3 text-amber-400" />
                          <span>File:</span>
                        </span>
                        <div className="flex items-center gap-1">
                          <code className="text-amber-300 bg-slate-950 px-1.5 py-0.5 rounded font-mono text-[10px] border border-slate-800 max-w-[150px] truncate">
                            {slot.originalFileName}
                          </code>
                          <button
                            onClick={() => handleCopyFileName(slot.originalFileName, slot.id)}
                            className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-amber-300"
                            title="Copy file name"
                          >
                            {copiedSlotId === slot.id ? (
                              <Check className="w-3 h-3 text-emerald-400" />
                            ) : (
                              <FolderKanban className="w-3 h-3" />
                            )}
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-slate-400">{language === 'hi' ? 'वेबसाइट स्थान:' : 'Attached Section:'}</span>
                        <span className="text-slate-200 font-medium">{slot.suggestedSection}</span>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="pt-3 flex items-center gap-2">
                      <button
                        onClick={() => setIsManagerOpen(true)}
                        className="flex-1 py-1.5 px-3 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/30 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                      >
                        <Upload className="w-3 h-3" />
                        <span>{language === 'hi' ? 'फोटो अपलोड करें' : 'Upload / Replace'}</span>
                      </button>
                    </div>

                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Explicit Photo Attachment Guide Card */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-amber-500/30">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold text-white font-serif-royal flex items-center gap-2">
                <FolderKanban className="w-5 h-5 text-amber-400" />
                <span>{language === 'hi' ? 'फोटो अटैचमेंट व प्रोजेक्ट गाइड' : 'Complete Photo Attachment Guidelines'}</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {language === 'hi' 
                  ? 'यूजर द्वारा दी गई सभी 5 तस्वीरों का कोड में सटीक विवरण एवं मैपिंग:'
                  : 'Exact mapping specifications for the 5 submitted photos of Adv. Sumit Chaudhary:'}
              </p>
            </div>

            <button
              onClick={() => setIsManagerOpen(true)}
              className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs shadow-md transition-colors"
            >
              {language === 'hi' ? 'ब्राउज़र में तुरंत अपलोड करें' : 'Upload in Browser'}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-xs font-mono">
            <div className="p-3 rounded-xl bg-black/50 border border-slate-800">
              <span className="text-amber-400 font-bold block mb-1">1. FB_IMG_1789495929300.jpg</span>
              <p className="text-slate-300 text-[11px] font-sans-modern">
                {language === 'hi' ? 'अभिवादन / आशीर्वाद मुद्रा, हाथ में अंगूठी व काली सदरी। Hero सेक्शन एवं मुख्य प्रोफाइल हेतु।' : 'Namaste / Hand wave with rings in black coat. Used in Hero Profile Card.'}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-black/50 border border-slate-800">
              <span className="text-amber-400 font-bold block mb-1">2. IMG-20260915-WA0027.jpg</span>
              <p className="text-slate-300 text-[11px] font-sans-modern">
                {language === 'hi' ? 'हाथ जोड़कर प्रणाम मुद्रा, पारंपरिक कुर्ता व वास्कट। विरासत व समाजसेवा सेक्शन हेतु।' : 'Folded hands Pranaam in traditional kurta. Used in Lineage & Heritage Card.'}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-black/50 border border-slate-800">
              <span className="text-amber-400 font-bold block mb-1">3. file_...cdad.png</span>
              <p className="text-slate-300 text-[11px] font-sans-modern">
                {language === 'hi' ? 'सफेद कुर्ता व औपचारिक काली सदरी, भुजाएं बांधे हुए। अधिवक्ता व विधिक गरिमा हेतु।' : 'Arms crossed in black waistcoat. Used in Advocate Legal Chamber Showcase.'}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-black/50 border border-slate-800">
              <span className="text-amber-400 font-bold block mb-1">4. file_...ba14.png</span>
              <p className="text-slate-300 text-[11px] font-sans-modern">
                {language === 'hi' ? 'त्रिमूर्ति पैनोरमा बैनर (संसद भवन, गंगा/नदी, हिमालय)। मुख्य वाइड बैनर हेतु।' : 'Widescreen Triple Banner with Parliament & Himalayas. Used in Hero Panorama.'}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-black/50 border border-slate-800">
              <span className="text-amber-400 font-bold block mb-1">5. file_...41ec.png</span>
              <p className="text-slate-300 text-[11px] font-sans-modern">
                {language === 'hi' ? '"टीम सुमित चौधरी" स्वर्णिम पोस्टर, लाखों समर्थकों का जनसैलाब। राजनीतिक आंदोलन हेतु।' : '"टीम सुमित चौधरी" poster with sea of supporters. Used in Team Movement Section.'}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-black/50 border border-amber-500/30 flex flex-col justify-center">
              <span className="text-emerald-400 font-bold block mb-1">{language === 'hi' ? 'स्थानिक पाथ (Local Path)' : 'File Storage'}</span>
              <p className="text-slate-300 text-[11px] font-sans-modern">
                {language === 'hi' ? 'प्रोजेक्ट के /public/photos/ में इन नामों से फाइलें रखने पर साइट स्वतः उठा लेगी।' : 'Place these files directly into /public/photos/ or use the live browser uploader.'}
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Lightbox Zoom Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl w-full rounded-2xl bg-slate-950 border border-amber-500/40 overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 hover:bg-amber-500 text-white hover:text-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={getPhotoSrc(selectedPhoto.id)}
                  alt={selectedPhoto.title[language]}
                  className="max-h-[70vh] w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-5 sm:p-6 bg-slate-900 border-t border-slate-800">
                <span className="text-xs font-mono text-amber-400 block mb-1">
                  File: {selectedPhoto.originalFileName}
                </span>
                <h3 className="text-lg font-bold text-white font-serif-royal">
                  {selectedPhoto.title[language]}
                </h3>
                <p className="text-xs text-slate-300 mt-1 font-sans-modern">
                  {selectedPhoto.description[language]}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
