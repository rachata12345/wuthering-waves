import React from 'react';

export default function GameFeatures({ onPlayTone }) {
  return (
    <section className="features-section" id="features">
      <div className="container">
        <div className="section-title-wrap">
          <div className="section-subtitle">✦ CORE GAMEPLAY & MECHANICS ✦</div>
          <h2 className="section-h2">
            ระบบเกมอันเป็นเอกลักษณ์ <span className="cyan-gradient-text">& Echo System</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '650px', margin: '0.75rem auto 0', fontSize: '0.95rem' }}>
            สัมผัสประสบการณ์เกมแอ็กชันระดับท็อปเทียร์ด้วยความลื่นไหลของระบบต่อสู้และการปรับแต่งไร้ขีดจำกัด
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card" onMouseEnter={() => onPlayTone && onPlayTone(440, 'sine', 0.08)}>
            <div className="feature-icon">🔮</div>
            <h3 className="feature-card-title">Echo Absorption (การดูดกลืนเสียง)</h3>
            <p className="feature-card-desc">
              กำจัดศัตรูในโลกกว้างเพื่อจับร่างสะท้อน (Echo) มาติดตั้ง สามารถแปลงร่างเป็นบอสหรือมอนสเตอร์เพื่อกดใช้สกิลในสนามรบได้ทันที พร้อมระบบสเตตัสแบบเซ็ต (Sonata Effects)
            </p>
          </div>

          <div className="feature-card" onMouseEnter={() => onPlayTone && onPlayTone(500, 'sine', 0.08)}>
            <div className="feature-icon">🔄</div>
            <h3 className="feature-card-title">Concerto System & QTE</h3>
            <p className="feature-card-desc">
              สะสมเกจ Concerto จากการต่อสู้จนเต็มเพื่อทริกเกอร์ Intro Skill ของตัวละครที่สลับเข้ามา พร้อมส่งต่อ Outro Skill มอบบัฟมหาศาล (เช่น ธาตุ +20%, ท่าไม้ตาย +25%)
            </p>
          </div>

          <div className="feature-card" onMouseEnter={() => onPlayTone && onPlayTone(560, 'sine', 0.08)}>
            <div className="feature-icon">⚡</div>
            <h3 className="feature-card-title">Parry & Extreme Dodge</h3>
            <p className="feature-card-desc">
              จังหวะการโจมตีสวนกลับ (Parry) เมื่อวงแหวนสีทองของบอสปรากฏ เพื่อสตั้นศัตรูทันที หรือหลบหลีกในเสี้ยววินาทีเพื่อเปิดหน้าต่างสโลว์โมชันและโจมตีเคาน์เตอร์รุนแรง
            </p>
          </div>

          <div className="feature-card" onMouseEnter={() => onPlayTone && onPlayTone(620, 'sine', 0.08)}>
            <div className="feature-icon">🌌</div>
            <h3 className="feature-card-title">Tactical Hologram (โฮโลแกรมบอส)</h3>
            <p className="feature-card-desc">
              การต่อสู้จำลองระดับสูงสุด ท้าทายบอสที่มีเมคานิกส์สังหารในครั้งเดียว (One-shot) ทดสอบปฏิกิริยา ความแม่นยำ และการวางแผนคอมโบของปาร์ตี้อย่างแท้จริง
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
