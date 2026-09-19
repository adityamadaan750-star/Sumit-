export type Language = 'en' | 'hi';

export interface PhotoSlot {
  id: string;
  keyName: string;
  originalFileName: string;
  title: {
    en: string;
    hi: string;
  };
  roleCategory: 'Hero' | 'Advocate' | 'Politician' | 'Social' | 'General';
  description: {
    en: string;
    hi: string;
  };
  suggestedSection: string;
  defaultSrc: string;
}

export interface Pillar {
  id: string;
  key: 'advocate' | 'politician' | 'businessman' | 'social_worker';
  title: {
    en: string;
    hi: string;
  };
  subtitle: {
    en: string;
    hi: string;
  };
  quote: {
    en: string;
    hi: string;
  };
  description: {
    en: string;
    hi: string;
  };
  highlights: {
    en: string[];
    hi: string[];
  };
  stats: {
    value: string;
    label: {
      en: string;
      hi: string;
    };
  }[];
  iconName: string;
  photoSlotId: string;
  accentColor: string;
}

export interface TimelineEvent {
  year: string;
  title: {
    en: string;
    hi: string;
  };
  category: {
    en: string;
    hi: string;
  };
  description: {
    en: string;
    hi: string;
  };
}

export interface GrievanceRequest {
  id: string;
  fullName: string;
  contactNumber: string;
  email: string;
  location: string;
  category: 'Legal' | 'Public Welfare' | 'Political' | 'Business' | 'Other';
  description: string;
  submittedAt: string;
}
