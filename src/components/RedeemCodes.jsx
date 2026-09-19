import React, { useState } from 'react';

export default function RedeemCodes({ redeemCodes, onCopyCode, onPlayChime }) {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(code);
    }
    if (onPlayChime) onPlayChime();
    setCopiedCode(code);
    if (onCopyCode) onCopyCode(code);
    setTimeout(() => {
      setCopiedCode(null);
    }, 2500);
  };

  return (
    <section className="redeem-section" id="redeem">
      <div className="container">
        <div className="section-title-wrap">
          <div className="section-subtitle">✦ FREE ASTRITE & REWARDS ✦</div>
          <h2 className="section-h2">
            โค้ดของขวัญ & รางวัลฟรี <span className="gold-text">(Redeem Codes)</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '650px', margin: '0.75rem auto 0', fontSize: '0.95rem' }}>
            คัดลอกโค้ดไปแลกรับ Astrite, Shell Credits และไอเทมอัปเกรดตัวละครในเกมได้ทันที
          </p>
        </div>

        <div className="redeem-grid">
          {redeemCodes.map((item, idx) => (
            <div key={idx} className="redeem-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span className="redeem-status-tag">{item.status}</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>{item.expiry}</span>
              </div>

              <div className="redeem-code-val">{item.code}</div>

              <div className="redeem-rewards-text">
                🎁 รางวัล: {item.rewards}
              </div>

              <button
                className={`btn ${copiedCode === item.code ? 'btn-gold' : 'btn-outline'}`}
                style={{ width: '100%', marginTop: '1rem', padding: '0.65rem' }}
                onClick={() => handleCopy(item.code)}
              >
                {copiedCode === item.code ? "✓ คัดลอกสำเร็จ!" : "คัดลอกโค้ดแลกรับ"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
