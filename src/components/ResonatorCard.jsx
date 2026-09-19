import React from 'react';

export default function ResonatorCard({ char, elementConfig, onClick, onPlayTone }) {
  const conf = elementConfig[char.element] || elementConfig.Spectro;
  const starClass = char.rarity === 5 ? 'five-star' : 'four-star';
  const starsText = char.rarity === 5 ? '★★★★★' : '★★★★';

  const handleClick = () => {
    if (onPlayTone) onPlayTone(580);
    if (onClick) onClick(char);
  };

  return (
    <div
      className={`roster-card ${starClass}`}
      style={{
        '--card-element-color': conf.color,
        '--card-glow': conf.glow
      }}
      data-char={char.id}
      onClick={handleClick}
    >
      <span className={`roster-card-version ${char.version === 'TBA' ? 'tba' : ''}`}>
        {char.version === 'TBA' ? 'TBA' : `v${char.version}`}
      </span>

      <div className="roster-card-avatar">
        <img
          src={char.thumb}
          alt={char.name}
          loading="lazy"
          decoding="async"
          onError={(e) => {
            if (!e.target.dataset.fallbackTried) {
              e.target.dataset.fallbackTried = '1';
              // Try leading slash if relative failed
              const cleanPath = char.thumb.startsWith('/') ? char.thumb.substring(1) : char.thumb;
              e.target.src = '/' + cleanPath;
            } else {
              e.target.style.display = 'none';
              if (e.target.parentElement) {
                e.target.parentElement.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-size:1.8rem;color:${conf.color};font-weight:bold;background:rgba(255,255,255,0.05);">${char.name.charAt(0)}</div>`;
              }
            }
          }}
        />
      </div>

      <div className="roster-card-name">{char.name}</div>
      <div className="roster-card-sub">{char.nameTh}</div>

      <div
        style={{
          fontFamily: 'var(--font-tech)',
          fontSize: '0.7rem',
          color: char.rarity === 5 ? 'var(--gold-bright)' : '#c084fc',
          marginBottom: '0.45rem'
        }}
      >
        {starsText} • {char.weapon}
      </div>

      <div
        className="roster-card-badge"
        style={{
          background: conf.bg,
          color: conf.color,
          border: `1px solid ${conf.border}`
        }}
      >
        {conf.icon} {char.element}
      </div>
    </div>
  );
}
