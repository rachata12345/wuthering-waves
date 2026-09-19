import React from 'react';

export default function AboutSolaris({ onPlayTone }) {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="section-title-wrap">
          <div className="section-subtitle">✦ THE STORY OF SOLARIS-3 ✦</div>
          <h2 className="section-h2">
            มหากาพย์แห่ง <span className="cyan-gradient-text">เสียงคลื่นที่ไม่มีวันสิ้นสุด</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '650px', margin: '0.75rem auto 0', fontSize: '0.95rem' }}>
            เรื่องราวการต่อสู้เพื่อความอยู่รอดของมนุษยชาติหลังหายนะครั้งใหญ่ กับโลกที่ถูกเขียนขึ้นใหม่ด้วยคลื่นความถี่
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card" onMouseEnter={() => onPlayTone && onPlayTone(400, 'sine', 0.08)}>
            <div className="about-icon">🌊</div>
            <h3 className="about-card-title">The Lament (วิบัติการณ์)</h3>
            <p className="about-card-desc">
              ภัยพิบัติปริศนาที่นำพาคลื่นสั่นสะเทือนกลืนกินอารยธรรมโบราณ เปลี่ยนสภาพภูมิศาสตร์และก่อกำเนิดมอนสเตอร์กลายพันธุ์ Tacet Discords ที่ตามล่าคลื่นเสียงของมนุษย์
            </p>
          </div>

          <div className="about-card" onMouseEnter={() => onPlayTone && onPlayTone(460, 'sine', 0.08)}>
            <div className="about-icon">✦</div>
            <h3 className="about-card-title">Resonators (ผู้กำทอน)</h3>
            <p className="about-card-desc">
              มนุษย์ผู้มีพลังพิเศษในการเชื่อมต่อความถี่ทางกายภาพเข้ากับแก่นแท้ของโลก ก่อกำเนิดพลังธาตุทั้ง 6 (Spectro, Fusion, Electro, Aero, Glacio, Havoc) เพื่อปกป้องดินแดน
            </p>
          </div>

          <div className="about-card" onMouseEnter={() => onPlayTone && onPlayTone(520, 'sine', 0.08)}>
            <div className="about-icon">⚔️</div>
            <h3 className="about-card-title">Rover (ผู้เดินทาง)</h3>
            <p className="about-card-desc">
              ตัวละครเอกผู้ตื่นขึ้นมาอย่างไร้ความทรงจำ แต่กลับครอบครองพลัง Tacet Mark พิเศษที่สามารถดูดกลืนพลังเสียงของศัตรู และสลับเปลี่ยนธาตุการกำทอนได้ตามความปรารถนา
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
