import React, { useState, useMemo } from 'react';
import ResonatorCard from './ResonatorCard';

export default function RosterEncyclopedia({ allResonators, elementConfig, onSelectCharacter, onPlayTone }) {
  const [elementFilter, setElementFilter] = useState('all');
  const [rarityFilter, setRarityFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredResonators = useMemo(() => {
    return allResonators.filter(char => {
      const matchElement = elementFilter === 'all' || char.element === elementFilter;
      const matchRarity = rarityFilter === 'all' || String(char.rarity) === rarityFilter;
      const q = searchQuery.trim().toLowerCase();
      const matchSearch = !q ||
        char.name.toLowerCase().includes(q) ||
        char.nameTh.toLowerCase().includes(q) ||
        char.weapon.toLowerCase().includes(q) ||
        (char.version && char.version.toLowerCase().includes(q));

      return matchElement && matchRarity && matchSearch;
    });
  }, [allResonators, elementFilter, rarityFilter, searchQuery]);

  const handleElementClick = (elem) => {
    if (onPlayTone) onPlayTone(600);
    setElementFilter(elem);
  };

  const handleRarityClick = (rarity) => {
    if (onPlayTone) onPlayTone(620);
    setRarityFilter(rarity);
  };

  return (
    <section id="all-resonators" style={{ padding: '6rem 0', background: 'rgba(8, 12, 23, 0.95)' }}>
      <div className="container">
        <div className="section-title-wrap">
          <div className="section-subtitle">✦ COMPLETE RESONATOR ROSTER ✦</div>
          <h2 className="section-h2">
            สารานุกรมตัวละครทั้งหมด <span className="cyan-gradient-text">({allResonators.length} Resonators)</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '650px', margin: '0.75rem auto 0', fontSize: '0.95rem' }}>
            รวบรวมตัวละครทั้งหมดใน Wuthering Waves ครบทุกตัวตั้งแต่เวอร์ชัน 1.0 ถึง 3.6 และตัวละครล่าสุด ครบ {allResonators.length} ตัวละคร ทั้งระดับ 5 ดาวและ 4 ดาว
          </p>
        </div>

        {/* Filter Controls */}
        <div className="filter-controls-wrap">
          {/* Element Filter */}
          <div className="filter-group">
            <span className="filter-label">ธาตุ (Element):</span>
            <button
              className={`filter-btn ${elementFilter === 'all' ? 'active' : ''}`}
              onClick={() => handleElementClick('all')}
            >
              ทั้งหมด (All)
            </button>
            <button
              className={`filter-btn ${elementFilter === 'Spectro' ? 'active' : ''}`}
              onClick={() => handleElementClick('Spectro')}
            >
              ✦ แสง (Spectro)
            </button>
            <button
              className={`filter-btn ${elementFilter === 'Fusion' ? 'active' : ''}`}
              onClick={() => handleElementClick('Fusion')}
            >
              🔥 ไฟ (Fusion)
            </button>
            <button
              className={`filter-btn ${elementFilter === 'Electro' ? 'active' : ''}`}
              onClick={() => handleElementClick('Electro')}
            >
              ⚡ ไฟฟ้า (Electro)
            </button>
            <button
              className={`filter-btn ${elementFilter === 'Aero' ? 'active' : ''}`}
              onClick={() => handleElementClick('Aero')}
            >
              🍃 ลม (Aero)
            </button>
            <button
              className={`filter-btn ${elementFilter === 'Glacio' ? 'active' : ''}`}
              onClick={() => handleElementClick('Glacio')}
            >
              ❄️ น้ำแข็ง (Glacio)
            </button>
            <button
              className={`filter-btn ${elementFilter === 'Havoc' ? 'active' : ''}`}
              onClick={() => handleElementClick('Havoc')}
            >
              🌑 มืด (Havoc)
            </button>
          </div>

          {/* Rarity Filter & Search Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div className="filter-group">
              <span className="filter-label">ระดับดาว:</span>
              <button
                className={`filter-btn ${rarityFilter === 'all' ? 'active' : ''}`}
                onClick={() => handleRarityClick('all')}
              >
                ทั้งหมด
              </button>
              <button
                className={`filter-btn ${rarityFilter === '5' ? 'active' : ''}`}
                onClick={() => handleRarityClick('5')}
                style={{ color: 'var(--gold-bright)' }}
              >
                ★★★★★ 5-Star
              </button>
              <button
                className={`filter-btn ${rarityFilter === '4' ? 'active' : ''}`}
                onClick={() => handleRarityClick('4')}
                style={{ color: '#c084fc' }}
              >
                ★★★★ 4-Star
              </button>
            </div>

            <div className="filter-search-wrap">
              <input
                type="text"
                className="filter-search-input"
                placeholder="🔍 ค้นหาชื่อตัวละคร / อาวุธ / แพตช์..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  className="filter-btn"
                  style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}
                  onClick={() => setSearchQuery('')}
                >
                  ล้างค่า
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div style={{ margin: '1.25rem 0', color: 'var(--text-dim)', fontSize: '0.85rem', textAlign: 'right' }}>
          แสดงผลลัพธ์ <strong>{filteredResonators.length}</strong> จากทั้งหมด {allResonators.length} ตัวละคร
        </div>

        {/* Resonators Grid */}
        <div className="all-roster-grid" id="allRosterGrid">
          {filteredResonators.length === 0 ? (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3.5rem 1rem', color: 'var(--text-muted)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>🔍</div>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-main)' }}>ไม่พบตัวละครที่ตรงกับเงื่อนไขการค้นหา</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginTop: '0.25rem' }}>
                ลองเปลี่ยนตัวกรองธาตุ ระดับดาว หรือพิมพ์ชื่อใหม่อีกครั้ง
              </p>
            </div>
          ) : (
            filteredResonators.map(char => (
              <ResonatorCard
                key={char.id}
                char={char}
                elementConfig={elementConfig}
                onClick={onSelectCharacter}
                onPlayTone={onPlayTone}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
