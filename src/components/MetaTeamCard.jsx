import React from 'react';

export default function MetaTeamCard({ team, onPlayTone }) {
  const getRankBadgeClass = (rank) => {
    if (rank === 1) return 'rank-1';
    if (rank === 2) return 'rank-2';
    if (rank === 3) return 'rank-3';
    return 'rank-other';
  };

  const getTierClass = (tier) => {
    if (tier === 'EX') return 'tier-ex';
    if (tier === 'S+') return 'tier-s-plus';
    return 'tier-s';
  };

  return (
    <div
      className="meta-team-card"
      onMouseEnter={() => onPlayTone && onPlayTone(480, 'sine', 0.06)}
    >
      <div className="meta-team-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <div className={`meta-team-rank-badge ${getRankBadgeClass(team.rank)}`}>
            #{team.rank}
          </div>
          <div>
            <div className="meta-team-title">{team.name}</div>
            <div className="meta-team-sub">{team.nameTh}</div>
          </div>
        </div>

        <div className={`meta-team-tier-badge ${getTierClass(team.tier)}`}>
          TIER {team.tier}
        </div>
      </div>

      <div style={{ margin: '1rem 0 0.5rem', color: 'var(--cyan-wave)', fontSize: '0.9rem', fontWeight: 600 }}>
        ✦ {team.highlight}
      </div>

      <div className="meta-team-tags">
        {team.tags.map((tag, idx) => (
          <span key={idx} className="meta-tag">{tag}</span>
        ))}
      </div>

      {/* 3 Members Display */}
      <div className="meta-team-members-grid">
        {team.members.map((member, idx) => (
          <div key={idx} className="meta-member-item">
            <div className="meta-member-avatar">
              <img
                src={member.thumb}
                alt={member.name}
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  if (!e.target.dataset.fallbackTried) {
                    e.target.dataset.fallbackTried = '1';
                    const cleanPath = member.thumb.startsWith('/') ? member.thumb.substring(1) : member.thumb;
                    e.target.src = '/' + cleanPath;
                  } else {
                    e.target.style.display = 'none';
                  }
                }}
              />
              <span className="meta-member-role">{member.role}</span>
            </div>
            <div className="meta-member-name">{member.name}</div>
            <div className="meta-member-elem">
              {member.element} • {member.weapon}
            </div>
          </div>
        ))}
      </div>

      {/* Synergy Breakdown */}
      <div className="meta-synergy-box">
        <div className="meta-synergy-title">
          <span>⚡</span> จุดเด่นและเหตุผลความเก่ง (Synergy Breakdown):
        </div>
        <p className="meta-synergy-text">{team.synergy}</p>
      </div>

      {/* Rotation Steps */}
      <div className="meta-rotation-box">
        <div className="meta-rotation-title">
          <span>🔄</span> ลำดับคอมโบ & สลับตัว (Concerto Rotation 1-2-3):
        </div>
        <div className="meta-rotation-steps">
          {team.rotation.map((r) => (
            <div key={r.step} className="rotation-step-card">
              <div className="step-num-badge">STEP {r.step}</div>
              <div className="step-char-name">{r.char}</div>
              <div className="step-desc-text">{r.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
