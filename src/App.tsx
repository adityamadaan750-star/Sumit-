/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PhotoProvider } from './context/PhotoContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PillarsSection } from './components/PillarsSection';
import { LineageTimeline } from './components/LineageTimeline';
import { TeamMovementSection } from './components/TeamMovementSection';
import { PhotoGallery } from './components/PhotoGallery';
import { OfficeContact } from './components/OfficeContact';
import { Footer } from './components/Footer';
import { PhotoManagerModal } from './components/PhotoManagerModal';
import { PublicConnectModal } from './components/PublicConnectModal';
import { DigitalCardModal } from './components/DigitalCardModal';

export default function App() {
  return (
    <PhotoProvider>
      <div className="min-h-screen bg-[#070b14] text-slate-100 font-sans-modern flex flex-col selection:bg-amber-500 selection:text-black">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* Hero Section */}
          <Hero />

          {/* Four Pillars: Advocate • Politician • Businessman • Social Worker */}
          <PillarsSection />

          {/* Lineage, Father Mr. Mahipal Singh's Legacy & Timeline */}
          <LineageTimeline />

          {/* Team Sumit Chaudhary Movement ("टीम सुमित चौधरी") */}
          <TeamMovementSection />

          {/* Official Photo Gallery & Mapping Details */}
          <PhotoGallery />

          {/* Legal Chambers & Central Public Office */}
          <OfficeContact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Interactive Modals */}
        <PhotoManagerModal />
        <PublicConnectModal />
        <DigitalCardModal />
      </div>
    </PhotoProvider>
  );
}
