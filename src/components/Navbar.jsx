import React, { useState, useEffect } from 'react';

export default function Navbar({ soundEnabled, onToggleSound, perfMode, onTogglePerfMode, onPlayTone }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    if (onPlayTone) onPlayTone(520);
    setMobileMenuOpen(false);
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#" className="nav-logo" onClick={(e) => handleNavClick(e, 'hero')}>
          <div className="logo-emblem">✦</div>
          <div>
            <div className="logo-title">WUTHERING WAVES</div>
            <div className="logo-sub">SOLARIS-3 RESONANCE</div>
          </div>
        </a>

        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`} id="navLinks">
          <li><a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, 'about')}>โลกแห่งเสียงคลื่น</a></li>
          <li><a href="#resonators" className="nav-link" onClick={(e) => handleNavClick(e, 'resonators')}>ตัวละครเด่น</a></li>
          <li><a href="#all-resonators" className="nav-link" onClick={(e) => handleNavClick(e, 'all-resonators')}>ทุกตัวละคร (60)</a></li>
          <li><a href="#meta-teams" className="nav-link" onClick={(e) => handleNavClick(e, 'meta-teams')}>10 อันดับทีมเก่งสุด</a></li>
          <li><a href="#features" className="nav-link" onClick={(e) => handleNavClick(e, 'features')}>ระบบเกม & Echo</a></li>
          <li><a href="#redeem" className="nav-link" onClick={(e) => handleNavClick(e, 'redeem')}>โค้ดของขวัญ</a></li>
        </ul>

        <div className="nav-right">
          <button
            className={`sound-toggle-btn ${perfMode ? 'active-perf' : ''}`}
            id="perfBtn"
            onClick={() => {
              if (onPlayTone) onPlayTone(perfMode ? 440 : 660);
              onTogglePerfMode();
            }}
            title={perfMode ? "โหมดลื่นไหล: เปิดใช้งานอยู่ (60 FPS)" : "คลิกเพื่อเปิดโหมดลื่นไหลสูงสุด (Performance Mode)"}
            style={{
              background: perfMode ? 'rgba(16, 185, 129, 0.25)' : 'rgba(255, 255, 255, 0.05)',
              borderColor: perfMode ? '#10b981' : 'var(--border-color)',
              color: perfMode ? '#34d399' : 'var(--text-muted)'
            }}
          >
            ⚡
          </button>

          <button
            className="sound-toggle-btn"
            id="soundBtn"
            onClick={() => {
              if (!soundEnabled && onPlayTone) onPlayTone(600);
              onToggleSound();
            }}
            title={soundEnabled ? "ปิดเสียงเอฟเฟกต์" : "เปิดเสียงเอฟเฟกต์"}
          >
            {soundEnabled ? "🔊" : "🔇"}
          </button>

          <a
            href="https://wutheringwaves.kurogames.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
            style={{ padding: '0.65rem 1.25rem' }}
            onClick={() => onPlayTone && onPlayTone(700)}
          >
            ดาวน์โหลดเกม
          </a>

          <button
            className="menu-toggle"
            id="menuToggle"
            onClick={() => setMobileMenuOpen(prev => !prev)}
            aria-label="Toggle Navigation Menu"
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
