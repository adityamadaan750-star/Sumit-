import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { usePhotos } from '../context/PhotoContext';
import { X, Upload, RotateCcw, Check, Camera, Image as ImageIcon, Sparkles, FolderDown } from 'lucide-react';

export const PhotoManagerModal: React.FC = () => {
  const { 
    isManagerOpen, 
    setIsManagerOpen, 
    photoSlots, 
    getPhotoSrc, 
    updatePhotoSlot, 
    resetAllPhotos, 
    language 
  } = usePhotos();

  const [activeSlotId, setActiveSlotId] = useState<string>('photo-1');
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  if (!isManagerOpen) return null;

  const currentSlot = photoSlots.find((s) => s.id === activeSlotId) || photoSlots[0];
  const currentSrc = getPhotoSrc(currentSlot.id);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        updatePhotoSlot(currentSlot.id, result);
        setSuccessMessage(
          language === 'hi'
            ? `स्लॉट "${currentSlot.title.hi}" सफलतापूर्वक अपडेट हुआ!`
            : `Slot "${currentSlot.title.en}" updated successfully!`
        );
        setTimeout(() => setSuccessMessage(null), 3000);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl bg-[#0c1322] border border-amber-500/40 shadow-2xl overflow-hidden"
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-slate-800 bg-[#070b14] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white font-serif-royal">
                {language === 'hi' ? 'फोटो प्रबंधन एवं अपलोड सेंटर' : 'Photo Attachment & Upload Center'}
              </h3>
              <p className="text-xs text-slate-400">
                {language === 'hi' 
                  ? 'अपनी 5 तस्वीरों को तुरंत अपलोड करें या बदलें' 
                  : 'Directly upload and map the 5 photos of Adv. Sumit Chaudhary'}
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsManagerOpen(false)}
            className="p-2 rounded-xl bg-slate-900 hover:bg-amber-500 text-slate-300 hover:text-black transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* Notification bar if uploaded */}
          {successMessage && (
            <div className="p-3.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center gap-2 animate-in fade-in">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>{successMessage}</span>
            </div>
          )}

          {/* Slot Selection Pills */}
          <div>
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-2 font-mono">
              {language === 'hi' ? 'फोटो स्लॉट चुनें (5 प्रमाणित स्लॉट):' : 'Select Photo Slot (5 Mapped Slots):'}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {photoSlots.map((slot, idx) => (
                <button
                  key={slot.id}
                  onClick={() => setActiveSlotId(slot.id)}
                  className={`p-2.5 rounded-xl text-left border transition-all text-xs flex flex-col justify-between ${
                    activeSlotId === slot.id
                      ? 'bg-amber-500 text-black font-bold border-amber-400 shadow-md shadow-amber-500/20'
                      : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <span className="text-[10px] opacity-75 font-mono">Slot #{idx + 1}</span>
                  <span className="font-semibold line-clamp-1 mt-1 font-sans-modern">{slot.title[language]}</span>
                  <span className="text-[10px] opacity-80 mt-1 font-mono">{slot.roleCategory}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Slot Detailed Editor */}
          <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Live Image Preview */}
            <div className="md:col-span-5 relative">
              <div className="rounded-xl overflow-hidden border border-amber-500/40 bg-black aspect-[3/4] max-h-72 w-full mx-auto relative group shadow-lg">
                <img
                  src={currentSrc}
                  alt={currentSlot.title[language]}
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 text-xs text-white">
                  <span className="font-mono text-[10px] text-amber-300 block">{currentSlot.originalFileName}</span>
                  <span className="font-semibold">{currentSlot.title[language]}</span>
                </div>
              </div>
            </div>

            {/* Upload Controls & Instructions */}
            <div className="md:col-span-7 space-y-4">
              <div>
                <span className="text-xs font-bold text-amber-400 font-mono uppercase tracking-wider block">
                  {language === 'hi' ? 'स्लॉट विवरण:' : 'Slot Details:'}
                </span>
                <h4 className="text-lg font-bold text-white font-serif-royal">
                  {currentSlot.title[language]}
                </h4>
                <p className="text-xs text-slate-300 mt-1 font-sans-modern">
                  {currentSlot.description[language]}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">{language === 'hi' ? 'मूल फाइल नाम:' : 'Original File:'}</span>
                  <code className="text-amber-300 font-mono font-bold">{currentSlot.originalFileName}</code>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">{language === 'hi' ? 'वेबसाइट स्थान:' : 'Assigned Section:'}</span>
                  <span className="text-slate-200">{currentSlot.suggestedSection}</span>
                </div>
              </div>

              {/* Upload Input */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-300">
                  {language === 'hi' ? 'अपनी असली फोटो फाइल चुनें:' : 'Upload Your Real Photo File:'}
                </label>
                <label className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl border-2 border-dashed border-amber-500/50 hover:border-amber-400 bg-amber-500/10 hover:bg-amber-500/15 text-amber-300 font-bold text-xs cursor-pointer transition-colors">
                  <Upload className="w-4 h-4" />
                  <span>{language === 'hi' ? 'कंप्यूटर या मोबाइल से फाइल चुनें' : 'Browse & Upload Photo'}</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
                <p className="text-[11px] text-slate-400 italic">
                  {language === 'hi' 
                    ? 'अपलोड करते ही यह फोटो पूरे पोर्टल में तुरंत लाइव दिखाई देगी।' 
                    : 'Uploaded photos update instantly in the preview and persist in local storage.'}
                </p>
              </div>
            </div>

          </div>

          {/* Quick Technical Note */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 font-sans-modern leading-relaxed">
            <p className="font-semibold text-slate-200 mb-1">
              💡 {language === 'hi' ? 'डेवलपर व डिप्लॉयमेंट नोट:' : 'Deployment & Static Asset Storage:'}
            </p>
            {language === 'hi' ? (
              <p>
                यदि आप इन तस्वीरों को स्थायी रूप से कोडबेस में रखना चाहते हैं, तो इन 5 फाइलों को प्रोजेक्ट के <code className="text-amber-400 font-mono">public/photos/</code> डायरेक्टरी में उनके संबंधित नामों जैसे <code className="text-amber-400 font-mono">FB_IMG_1789495929300.jpg</code> इत्यादि के रूप में सेव कर सकते हैं।
              </p>
            ) : (
              <p>
                For permanent bundled deployment, you can place these 5 files with their exact filenames into <code className="text-amber-400 font-mono">public/photos/</code> or continue using the browser storage.
              </p>
            )}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-800 bg-[#070b14] flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={resetAllPhotos}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-rose-400 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'मूल सेटिंग्स पर रीसेट करें' : 'Reset to Default Photos'}</span>
          </button>

          <button
            onClick={() => setIsManagerOpen(false)}
            className="px-6 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md transition-colors"
          >
            {language === 'hi' ? 'पूर्ण / बंद करें' : 'Done & Close'}
          </button>
        </div>
      </motion.div>
    </div>
  );
};
