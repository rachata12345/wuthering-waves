import React, { useState } from 'react';

const featuredCharacters = [
  {
    id: "jinhsi",
    name: "Jinhsi",
    nameTh: "จินซี (ผู้นำแห่งจินโจว)",
    element: "Spectro",
    weapon: "Broadblade (Ages of Harvest)",
    role: "Burst Hypercarry (Tier EX)",
    rarity: 5,
    thumb: "assets/characters/resonator_jinhsi.png",
    splash: "assets/characters/jinhsi_splash.png",
    desc: "ผู้ว่าการแห่งเมือง Jinzhou ผู้เชื่อมต่อกับเทพมังกร Jue ปลดปล่อยลำแสงสุริยะ Illuminous Dragon Breath รุนแรงที่สุดในเกม ด้วยพลังสะสมเกจมังกร Incandescence 50 แต้มจากการโจมตีประสานต่างธาตุ",
    skills: [
      { name: "Trailing Lights", type: "Basic Attack", desc: "ฟันดาบใหญ่ 4 จังหวะ สร้างความเสียหาย Spectro พร้อมสะสมเกจ" },
      { name: "Overflowing Radiance", type: "Resonance Skill", desc: "พุ่งทะยานขึ้นฟ้าเข้าสู่สถานะ Incarnation ยิงกระสุนแสงต่อเนื่อง" },
      { name: "Purification of World", type: "Resonance Liberation", desc: "อัญเชิญมังกรทอง Jue พ่นลำแสงสุริยะยักษ์ทำลายล้างทั้งฉาก ดาเมจ 400,000+" }
    ],
    stats: { burst: 98, single: 99, aoe: 90, mobility: 85, difficulty: 75 },
    recommendedTeam: "Jinhsi + Zhezhi + Shorekeeper"
  },
  {
    id: "changli",
    name: "Changli",
    nameTh: "ฉางลี่ (ที่ปรึกษาแห่งจินโจว)",
    element: "Fusion",
    weapon: "Sword (Blazing Brilliance)",
    role: "Dual Quickswap / Main DPS (Tier S+)",
    rarity: 5,
    thumb: "assets/characters/resonator_changli.png",
    splash: "assets/characters/changli_splash.png",
    desc: "ที่ปรึกษาคนสนิทของจินซี ใช้เพลงดาบเพลิงวิหคเฟิ่งหวง สลับฟันกลางอากาศอย่างงดงาม พร้อมระบบ Quickswap ไร้รอยต่อ มอบบัฟ Fusion 20% และ Liberation 25% ให้เพื่อนร่วมทีม",
    skills: [
      { name: "Tripartite Flames", type: "Basic Attack", desc: "กระบวนท่าดาบเพลิง 4 จังหวะ รวดเร็วและพริ้วไหว" },
      { name: "True Sight", type: "Resonance Skill", desc: "พุ่งฟันทะลุศัตรูพร้อมปลดปล่อยขนนกเพลิง สะสมเกจ Enflamement" },
      { name: "Radiance of Feathers", type: "Resonance Liberation", desc: "สยายปีกวิหคเพลิงระเบิดลาวากวาดล้างทั้งสนามรบ" }
    ],
    stats: { burst: 92, single: 94, aoe: 88, mobility: 96, difficulty: 88 },
    recommendedTeam: "Changli + Encore + Shorekeeper"
  },
  {
    id: "camellya",
    name: "Camellya",
    nameTh: "คาเมลเลีย (ดอกไม้โลหิตแห่ง Black Shores)",
    element: "Havoc",
    weapon: "Sword (Red Spring)",
    role: "Basic Attack Hypercarry (Tier EX)",
    rarity: 5,
    thumb: "assets/characters/resonator_camellya.png",
    splash: "assets/characters/camellya_splash.png",
    desc: "สมาชิกองค์กร Black Shores ผู้มีสายเลือดเถาวัลย์ปีศาจ ดึงดูดศัตรูเข้าสู่ตาข่ายสีเลือดและหมุนตัวสับเถาวัลย์ Blossom Swirl กวาดล้าง Tower of Adversity ได้รวดเร็วที่สุดในเกม",
    skills: [
      { name: "Crimson Weave", type: "Basic Attack", desc: "ควงดาบและเถาวัลย์ฟันต่อเนื่องนับเป็น Basic Attack ดาเมจสูง" },
      { name: "Ephemera Bud", type: "Resonance Skill", desc: "พุ่งผูกมัดศัตรู เข้าสู่สภาวะ Blossom Mode ลอยตัวฟันกลางเวหา" },
      { name: "Fabulous Petals", type: "Resonance Liberation", desc: "ปลดปล่อยเกสรสีเลือดระเบิดสนามรบให้กลายเป็นทุ่งดอกไม้แห่งความตาย" }
    ],
    stats: { burst: 96, single: 96, aoe: 94, mobility: 92, difficulty: 70 },
    recommendedTeam: "Camellya + Sanhua + Shorekeeper"
  },
  {
    id: "shorekeeper",
    name: "Shorekeeper",
    nameTh: "ชอร์คีปเปอร์ (ผู้พิทักษ์แห่ง Black Shores)",
    element: "Spectro",
    weapon: "Rectifier (Stellar Symphony)",
    role: "Universal Support & Healer (Tier EX)",
    rarity: 5,
    thumb: "assets/characters/resonator_shorekeeper.png",
    splash: "assets/characters/shorekeeper_splash.png",
    desc: "สิ่งมีชีวิตโบราณผู้พิทักษ์มิติ Black Shores มอบโดม Stellar Realm ที่มอบบัฟ CRIT Rate 12.5% และ CRIT DMG 25% ให้เพื่อนร่วมทีมทุกคน พร้อมการฮีลและการป้องกันการตาย",
    skills: [
      { name: "Origin Frequency", type: "Basic Attack", desc: "ยิงคลื่นผีเสื้อแสงระยิบระยับฟื้นฟูพลังงาน" },
      { name: "Chaos to Order", type: "Resonance Skill", desc: "แปลงร่างเป็นผีเสื้อพุ่งรวบรวมข้อมูล พร้อมฟื้นฟู HP ทั้งปาร์ตี้" },
      { name: "End of Stellaria", type: "Resonance Liberation", desc: "กางม่านดวงดาว Stellar Realm 3 ลำดับ บัฟคริติคอลสูงสุดในเกม" }
    ],
    stats: { burst: 70, single: 65, aoe: 95, mobility: 95, difficulty: 55 },
    recommendedTeam: "ใช้ได้กับทุกทีมในเกม (Best in Slot)"
  },
  {
    id: "jiyan",
    name: "Jiyan",
    nameTh: "จี้เหยียน (แม่ทัพมังกรเขียว)",
    element: "Aero",
    weapon: "Broadblade (Verdant Summit)",
    role: "Heavy Attack Hypercarry (Tier S+)",
    rarity: 5,
    thumb: "assets/characters/resonator_jiyan.png",
    splash: "assets/characters/jiyan_splash.png",
    desc: "แม่ทัพใหญ่แห่ง Midnight Rangers ผู้ใช้เพลงทวนมังกรสายลม ควงหอกมังกร Qingloong ดูดรวบศัตรูทั้งห้องและฟันกระหน่ำด้วย Heavy Attack ต่อเนื่อง มอนสเตอร์ไม่สามารถขยับตัวได้",
    skills: [
      { name: "Lone Pine", type: "Basic Attack", desc: "เพลงหอกโบราณ 5 กระบวนท่าทรงพลัง" },
      { name: "Windbreaker", type: "Resonance Skill", desc: "พุ่งทะลวงด้วยหอกสายลมสร้างคลื่นพายุตัดผ่านศัตรู" },
      { name: "Emerald Storm: Finale", type: "Resonance Liberation", desc: "อัญเชิญมังกรพายุ Qingloong สถิตในร่าง ควงหอกดูดมอนสเตอร์ทั้งเวที" }
    ],
    stats: { burst: 90, single: 88, aoe: 99, mobility: 88, difficulty: 60 },
    recommendedTeam: "Jiyan + Mortefi + Verina"
  },
  {
    id: "yinlin",
    name: "Yinlin",
    nameTh: "หยินหลิน (ผู้ควบคุมหุ่นเชิดสายฟ้า)",
    element: "Electro",
    weapon: "Rectifier (Stringmaster)",
    role: "Off-field Sub DPS / Buffer (Tier S+)",
    rarity: 5,
    thumb: "assets/characters/resonator_yinlin.png",
    splash: "assets/characters/yinlin_splash.png",
    desc: "อดีตเจ้าหน้าที่สืบสวนคดีพิเศษ ใช้หุ่นเชิด Zapstring ฟาดฟันสายฟ้ากักขังศัตรู มอบ Outro Buff สายฟ้า Electro Deepen +20% และ Resonance Liberation +25% ให้ตัวละครถัดไป",
    skills: [
      { name: "Zapstring Dance", type: "Basic Attack", desc: "ควบคุมหุ่นเชิดยิงกระแสไฟฟ้าใส่ศัตรูจากระยะไกล" },
      { name: "Magnetic Roar", type: "Resonance Skill", desc: "ฟาดสายฟ้าระเบิดวงกว้าง ทำสัญลักษณ์ Sinister Dappling" },
      { name: "Thundering Wrath", type: "Resonance Liberation", desc: "รวมพลังสายฟ้าลงสู่หุ่นเชิด ช็อตสายฟ้าผ่าทำลายล้างทั้งกลุ่ม" }
    ],
    stats: { burst: 88, single: 90, aoe: 92, mobility: 80, difficulty: 75 },
    recommendedTeam: "Xiangli Yao / Calcharo + Yinlin + Shorekeeper"
  },
  {
    id: "rover",
    name: "Rover",
    nameTh: "ผู้เดินทาง (Spectro / Havoc)",
    element: "Spectro / Havoc",
    weapon: "Sword (Emerald of Genesis)",
    role: "Versatile Main DPS (Tier S)",
    rarity: 5,
    thumb: "assets/characters/rover_thumb.png",
    splash: "assets/characters/rover_splash.png",
    desc: "ผู้เดินทางไร้ความทรงจำ สามารถสลับธาตุระหว่าง Spectro (หยุดเวลา & บัฟ) และ Havoc (ควงเคียวมืดระเบิดพลัง Dark Surge ดาเมจหลักแสน) เป็นตัวฟรีระดับ S Tier ของเกม",
    skills: [
      { name: "Vibration Slash", type: "Basic Attack", desc: "ฟันคลื่นดาบ 4 จังหวะประสานพลัง Tacet Disc" },
      { name: "Resonance Surge", type: "Resonance Skill", desc: "ปลดปล่อยคลื่นกระแทกธาตุ สลายเกจสั่นสะเทือนของศัตรู" },
      { name: "Dead Trance / Echo Burst", type: "Resonance Liberation", desc: "ทุบพื้นระเบิดคลื่นพลังมืดมิดหรือลำแสงสุริยะ ดาเมจมหาศาล" }
    ],
    stats: { burst: 91, single: 90, aoe: 85, mobility: 86, difficulty: 65 },
    recommendedTeam: "Havoc Rover + Danjin + Verina"
  }
];

export default function ResonatorShowcase({ onPlayTone }) {
  const [activeId, setActiveId] = useState('jinhsi');

  const activeChar = featuredCharacters.find(c => c.id === activeId) || featuredCharacters[0];

  const handleTabClick = (id) => {
    if (onPlayTone) onPlayTone(520);
    setActiveId(id);
  };

  return (
    <section className="resonators-section" id="resonators">
      <div className="container">
        <div className="section-title-wrap">
          <div className="section-subtitle">✦ FEATURED RESONATORS ✦</div>
          <h2 className="section-h2">
            เจาะลึกตัวละครเด่น <span className="gold-text">แห่ง Solaris-3</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '650px', margin: '0.75rem auto 0', fontSize: '0.95rem' }}>
            สำรวจข้อมูลเชิงลึก สกิล ค่าสถานะ เรดาร์ชาร์ต และทีมแนะนำของตัวละครยอดนิยม
          </p>
        </div>

        {/* Tabs Bar */}
        <div className="char-tabs-bar">
          {featuredCharacters.map((char) => (
            <button
              key={char.id}
              className={`char-tab-item ${char.id === activeId ? 'active' : ''}`}
              onClick={() => handleTabClick(char.id)}
            >
              <img
                src={char.thumb}
                alt={char.name}
                className="char-tab-thumb"
                onError={(e) => {
                  if (!e.target.dataset.fallbackTried) {
                    e.target.dataset.fallbackTried = '1';
                    const clean = char.thumb.startsWith('/') ? char.thumb.substring(1) : char.thumb;
                    e.target.src = '/' + clean;
                  }
                }}
              />
              <span className="char-tab-label">{char.name}</span>
            </button>
          ))}
        </div>

        {/* Active Character Showcase Box */}
        <div className="resonator-showcase">
          <div className="showcase-content">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
              <span className="showcase-element-tag">{activeChar.element}</span>
              <span style={{ color: 'var(--gold-bright)', letterSpacing: '2px', fontWeight: 'bold' }}>
                ★★★★★ 5-Star
              </span>
              <span style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>
                • {activeChar.role}
              </span>
            </div>

            <h3 className="showcase-title">{activeChar.name}</h3>
            <div className="showcase-sub">{activeChar.nameTh}</div>
            <p className="showcase-desc">{activeChar.desc}</p>

            {/* Skills */}
            <div style={{ margin: '1.5rem 0' }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--cyan-wave)', fontWeight: 'bold', marginBottom: '0.75rem', letterSpacing: '1px' }}>
                ✦ ทักษะการต่อสู้ (COMBAT TALENTS)
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {activeChar.skills.map((skill, idx) => (
                  <div key={idx} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '0.65rem 0.85rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.2rem' }}>
                      <strong style={{ fontSize: '0.9rem', color: 'var(--text-main)' }}>{skill.name}</strong>
                      <span style={{ fontSize: '0.7rem', color: 'var(--gold-bright)', background: 'rgba(245,158,11,0.1)', padding: '1px 6px', borderRadius: '4px' }}>
                        {skill.type}
                      </span>
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', lineHeight: 1.4 }}>{skill.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Team */}
            <div style={{ background: 'rgba(6, 182, 212, 0.08)', border: '1px solid rgba(6, 182, 212, 0.25)', borderRadius: '10px', padding: '0.85rem 1rem', marginTop: '1.25rem' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--cyan-wave)', fontWeight: 'bold' }}>
                ⚡ ทีมที่แนะนำ (RECOMMENDED SYNERGY):
              </div>
              <div style={{ color: 'var(--text-main)', fontSize: '0.95rem', fontWeight: 600, marginTop: '0.25rem' }}>
                {activeChar.recommendedTeam}
              </div>
            </div>
          </div>

          <div className="showcase-visual">
            <div className="showcase-avatar-wrapper">
              <img
                src={activeChar.splash}
                alt={activeChar.name}
                className="showcase-portrait-img"
                onError={(e) => {
                  if (!e.target.dataset.fallbackTried) {
                    e.target.dataset.fallbackTried = '1';
                    const clean = activeChar.splash.startsWith('/') ? activeChar.splash.substring(1) : activeChar.splash;
                    e.target.src = '/' + clean;
                  }
                }}
              />
            </div>

            <div className="showcase-weapon-tag">
              ⚔️ อาวุธประจำตัว: {activeChar.weapon}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
