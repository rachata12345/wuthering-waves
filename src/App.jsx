import React, { useState, useCallback } from 'react';
import { useSoundEffects } from './hooks/useSoundEffects';
import { usePerformanceMode } from './hooks/usePerformanceMode';
import { allResonators, elementConfig } from './data/resonators';
import { metaTeams } from './data/metaTeams';
import { redeemCodes } from './data/redeemCodes';

import ParticleCanvas from './components/ParticleCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSolaris from './components/AboutSolaris';
import ResonatorShowcase from './components/ResonatorShowcase';
import RosterEncyclopedia from './components/RosterEncyclopedia';
import MetaTeams from './components/MetaTeams';
import GameFeatures from './components/GameFeatures';
import RedeemCodes from './components/RedeemCodes';
import ToastNotification from './components/ToastNotification';
import Footer from './components/Footer';

export default function App() {
  const { soundEnabled, toggleSound, playSynthTone, playCopyChime } = useSoundEffects();
  const { perfMode, togglePerfMode } = usePerformanceMode();
  const [toast, setToast] = useState(null);

  const showToast = useCallback((msg) => {
    setToast(msg);
    setTimeout(() => {
      setToast(null);
    }, 3200);
  }, []);

  const handleSelectCharacter = useCallback((char) => {
    const featuredIds = ['jinhsi', 'changli', 'yinlin', 'jiyan', 'camellya', 'shorekeeper', 'rover'];
    if (featuredIds.includes(char.id)) {
      const showcaseElem = document.getElementById('resonators');
      if (showcaseElem) {
        showcaseElem.scrollIntoView({ behavior: 'smooth' });
      }
      showToast(`✦ กำลังดูข้อมูลเชิงลึก: ${char.name} (${char.nameTh})`);
    } else {
      showToast(`✦ ${char.name} (${char.nameTh}) • ธาตุ ${char.element} • อาวุธ ${char.weapon} (v${char.version})`);
    }
  }, [showToast]);

  const handleCopyCode = useCallback((code) => {
    showToast(`✓ คัดลอกโค้ด "${code}" เรียบร้อยแล้ว! นำไปแลกรับในเกมได้ทันที`);
  }, [showToast]);

  return (
    <div className={`app-wrapper ${perfMode ? 'perf-mode-on' : ''}`}>
      {/* 60 FPS Particle Canvas */}
      <ParticleCanvas perfMode={perfMode} />

      {/* Navigation Bar */}
      <Navbar
        soundEnabled={soundEnabled}
        onToggleSound={toggleSound}
        perfMode={perfMode}
        onTogglePerfMode={togglePerfMode}
        onPlayTone={playSynthTone}
      />

      {/* Main Content */}
      <main>
        <Hero onPlayTone={playSynthTone} />
        <AboutSolaris onPlayTone={playSynthTone} />
        <ResonatorShowcase onPlayTone={playSynthTone} />
        <RosterEncyclopedia
          allResonators={allResonators}
          elementConfig={elementConfig}
          onSelectCharacter={handleSelectCharacter}
          onPlayTone={playSynthTone}
        />
        <MetaTeams metaTeams={metaTeams} onPlayTone={playSynthTone} />
        <GameFeatures onPlayTone={playSynthTone} />
        <RedeemCodes
          redeemCodes={redeemCodes}
          onCopyCode={handleCopyCode}
          onPlayChime={playCopyChime}
        />
      </main>

      {/* Footer */}
      <Footer onPlayTone={playSynthTone} />

      {/* Sci-Fi Toast Notification */}
      <ToastNotification toast={toast} />
    </div>
  );
}
