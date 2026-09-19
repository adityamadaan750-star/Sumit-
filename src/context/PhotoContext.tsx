import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { PhotoSlot, Language } from '../types';
import { INITIAL_PHOTO_SLOTS } from '../data/content';

interface PhotoContextType {
  photoSlots: PhotoSlot[];
  getPhotoSrc: (slotId: string) => string;
  updatePhotoSlot: (slotId: string, newSrc: string) => void;
  resetAllPhotos: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  isManagerOpen: boolean;
  setIsManagerOpen: (open: boolean) => void;
  isGrievanceOpen: boolean;
  setIsGrievanceOpen: (open: boolean) => void;
  isVisitingCardOpen: boolean;
  setIsVisitingCardOpen: (open: boolean) => void;
}

const STORAGE_KEY = 'adv_sumit_photos_v3';
const LANG_STORAGE_KEY = 'adv_sumit_lang_v1';

const PhotoContext = createContext<PhotoContextType | undefined>(undefined);

export const PhotoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [photoSlots, setPhotoSlots] = useState<PhotoSlot[]>(() => {
    try {
      // Clean up legacy v1 and v2 storage if it exists
      if (typeof window !== 'undefined') {
        localStorage.removeItem('adv_sumit_photos_v1');
        localStorage.removeItem('adv_sumit_photos_v2');
      }
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as Record<string, string>;
        return INITIAL_PHOTO_SLOTS.map((slot) => {
          const userVal = parsed[slot.id];
          // If stored value is empty or contains an old unsplash stock url, use defaultSrc
          if (!userVal || userVal.includes('unsplash.com')) {
            return slot;
          }
          return {
            ...slot,
            defaultSrc: userVal,
          };
        });
      }
    } catch {
      // ignore
    }
    return INITIAL_PHOTO_SLOTS;
  });

  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(LANG_STORAGE_KEY);
      if (saved === 'hi' || saved === 'en') return saved;
    } catch {
      // ignore
    }
    return 'hi'; // Default to Hindi + English richness for political & social stature
  });

  const [isManagerOpen, setIsManagerOpen] = useState(false);
  const [isGrievanceOpen, setIsGrievanceOpen] = useState(false);
  const [isVisitingCardOpen, setIsVisitingCardOpen] = useState(false);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch {
      // ignore
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'hi' ? 'en' : 'hi');
  };

  const updatePhotoSlot = (slotId: string, newSrc: string) => {
    setPhotoSlots((prev) => {
      const updated = prev.map((s) => (s.id === slotId ? { ...s, defaultSrc: newSrc } : s));
      try {
        const cache: Record<string, string> = {};
        updated.forEach((s) => {
          cache[s.id] = s.defaultSrc;
        });
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cache));
      } catch {
        // ignore quota exceeded if huge base64
      }
      return updated;
    });
  };

  const resetAllPhotos = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    setPhotoSlots(INITIAL_PHOTO_SLOTS);
  };

  const getPhotoSrc = (slotId: string): string => {
    const slot = photoSlots.find((s) => s.id === slotId);
    return slot?.defaultSrc || INITIAL_PHOTO_SLOTS[0].defaultSrc;
  };

  return (
    <PhotoContext.Provider
      value={{
        photoSlots,
        getPhotoSrc,
        updatePhotoSlot,
        resetAllPhotos,
        language,
        setLanguage,
        toggleLanguage,
        isManagerOpen,
        setIsManagerOpen,
        isGrievanceOpen,
        setIsGrievanceOpen,
        isVisitingCardOpen,
        setIsVisitingCardOpen,
      }}
    >
      {children}
    </PhotoContext.Provider>
  );
};

export const usePhotos = () => {
  const context = useContext(PhotoContext);
  if (!context) {
    throw new Error('usePhotos must be used within a PhotoProvider');
  }
  return context;
};
