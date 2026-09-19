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
            // Fallback gracefully if specific file is missing
            e.target.style.opacity = '0.7';
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
