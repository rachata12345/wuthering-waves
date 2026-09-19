import React from 'react';

export default function Footer({ onPlayTone }) {
  const scrollToTop = () => {
    if (onPlayTone) onPlayTone(650);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <div className="logo-emblem">✦</div>
          <div>
            <div style={{ fontWeight: 800, color: 'var(--text-main)', letterSpacing: '1px' }}>
              WUTHERING WAVES • SOLARIS-3 GUIDE
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
              ฐานข้อมูลและสารานุกรมตัวละคร 60 Resonators & เมต้าไกด์
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-dim)', maxWidth: '500px', lineHeight: 1.5 }}>
          Wuthering Waves และรูปภาพเนื้อหาทั้งหมดเป็นลิขสิทธิ์ของ <strong>KURO GAMES</strong>
          <br />
          เว็บไซต์นี้จัดทำขึ้นเพื่อเป็นคู่มือและสารานุกรมสำหรับแฟนเกมชาวไทย
        </div>

        <div>
          <button
            className="btn btn-outline"
            style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
            onClick={scrollToTop}
          >
            ↑ กลับขึ้นด้านบน
          </button>
        </div>
      </div>
    </footer>
  );
}
