import React from 'react';

export default function Hero({ onPlayTone }) {
  const scrollTo = (id) => {
    if (onPlayTone) onPlayTone(580);
    const elem = document.getElementById(id);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-glow-sphere"></div>
      <div className="container hero-content">
        <div className="hero-tag">
          <span className="hero-tag-pulse"></span>
          <span>✦ SOLARIS-3 • OFFICIAL DATABASE & ENCYCLOPEDIA ✦</span>
        </div>

        <h1 className="hero-title">
          ตื่นขึ้นสู่โลกแห่ง <br />
          <span className="gold-text">เสียงคลื่น</span> และ <span className="cyan-gradient-text">การกำทอน</span>
        </h1>

        <p className="hero-desc">
          คู่มือและสารานุกรมรวมข้อมูลตัวละครครบทุกเวอร์ชันใน <strong>Wuthering Waves</strong> (เวอร์ชัน 1.0 ถึง 3.6 และตัวละครล่าสุด) พร้อมบทวิเคราะห์ 10 อันดับทีมที่เก่งที่สุดในปัจจุบัน เทคนิค Concerto Rotation และระบบจำลองเสียงระดับสตูดิโอ
        </p>

        <div className="hero-actions">
          <button className="btn btn-gold" onClick={() => scrollTo('all-resonators')}>
            ✦ สำรวจสารานุกรม 60 ตัวละคร
          </button>
          <button className="btn btn-outline" onClick={() => scrollTo('meta-teams')}>
            🏆 ดู 10 อันดับทีมเก่งที่สุด
          </button>
          <button className="btn btn-outline" onClick={() => scrollTo('redeem')}>
            🎁 โค้ดของขวัญฟรี
          </button>
        </div>

        <div className="hero-stats">
          <div className="stat-card">
            <div className="stat-num">60</div>
            <div className="stat-label">Resonators ครบทุกตัว</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">10</div>
            <div className="stat-label">สุดยอดทีม Meta Guide</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">6</div>
            <div className="stat-label">ธาตุแห่งการกำทอน</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">60 FPS</div>
            <div className="stat-label">โหมดลื่นไหลไร้อาการหน่วง</div>
          </div>
        </div>
      </div>
    </section>
  );
}
