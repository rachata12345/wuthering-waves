import React, { useState, useMemo } from 'react';
import MetaTeamCard from './MetaTeamCard';

export default function MetaTeams({ metaTeams, onPlayTone }) {
  const [activeTier, setActiveTier] = useState('all');

  const filteredTeams = useMemo(() => {
    if (activeTier === 'all') return metaTeams;
    return metaTeams.filter(team => team.tier === activeTier);
  }, [metaTeams, activeTier]);

  const handleTierChange = (tier) => {
    if (onPlayTone) onPlayTone(560);
    setActiveTier(tier);
  };

  return (
    <section id="meta-teams" style={{ padding: '6rem 0', background: 'var(--bg-main)' }}>
      <div className="container">
        <div className="section-title-wrap">
          <div className="section-subtitle">✦ TOWER OF ADVERSITY & ENDGAME TIER LIST ✦</div>
          <h2 className="section-h2">
            10 อันดับทีมที่เก่งที่สุดในปัจจุบัน <span className="gold-text">(Top 10 Meta Teams)</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0.75rem auto 0', fontSize: '0.95rem' }}>
            จัดอันดับความเก่งจากการพิชิต Tower of Adversity และดันเจี้ยนระดับสูง พร้อมวิเคราะห์เจาะลึกระบบ Synergy และผังลำดับ Rotation Combo ครบทั้ง 10 ทีม
          </p>
        </div>

        {/* Tier Filter Tabs */}
        <div className="team-filter-tabs">
          <button
            className={`team-tab-btn ${activeTier === 'all' ? 'active' : ''}`}
            onClick={() => handleTierChange('all')}
          >
            🏆 ทุกอันดับ (Top 1 - 10)
          </button>
          <button
            className={`team-tab-btn ${activeTier === 'EX' ? 'active' : ''}`}
            onClick={() => handleTierChange('EX')}
            style={{ color: 'var(--gold-bright)' }}
          >
            👑 Tier EX (ดาเมจสูงสุดในเกม)
          </button>
          <button
            className={`team-tab-btn ${activeTier === 'S+' ? 'active' : ''}`}
            onClick={() => handleTierChange('S+')}
            style={{ color: '#c084fc' }}
          >
            ⭐ Tier S+ (เมต้าสุดแกร่ง)
          </button>
          <button
            className={`team-tab-btn ${activeTier === 'S' ? 'active' : ''}`}
            onClick={() => handleTierChange('S')}
            style={{ color: 'var(--cyan-wave)' }}
          >
            ✦ Tier S (คอมโบดุดัน / F2P)
          </button>
        </div>

        {/* Teams List */}
        <div className="meta-teams-list">
          {filteredTeams.map((team) => (
            <MetaTeamCard
              key={team.rank}
              team={team}
              onPlayTone={onPlayTone}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
