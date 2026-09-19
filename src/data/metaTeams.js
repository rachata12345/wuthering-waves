export const metaTeams = [
  {
    rank: 1,
    tier: "T0 Apex",
    name: "Aemeath Tune Rupture Premier",
    nameTh: "อันดับ 1: Aemeath (เอมิธ) + Lynae (ไลนี) + Mornye (มอร์นี)",
    highlight: "ทีมอันดับ 1 เมต้าปัจจุบัน (Prydwen T0 Apex) Tune Rupture บิวต์ดาเมจเดี่ยวรุนแรงที่สุดในเกม",
    tags: ["อันดับ 1 เมต้า", "T0 Apex", "Aemeath BiS", "Tune Rupture"],
    members: [
      { id: "aemeath", name: "Aemeath", role: "Main DPS", element: "Fusion", weapon: "Sword", thumb: "assets/characters/resonator_aemeath.png" },
      { id: "lynae", name: "Lynae", role: "Sub DPS / Tune", element: "Spectro", weapon: "Pistols", thumb: "assets/characters/resonator_lynae.png" },
      { id: "mornye", name: "Mornye", role: "Support / Sustain", element: "Fusion", weapon: "Broadblade", thumb: "assets/characters/resonator_mornye.png" }
    ],
    synergy: "ทีม Best-in-Slot (BiS) ที่ตรงตามสูตรตัวเกม 100% สกิลติดตัว 'Between the Stars' ของ Aemeath สเกลความแรงตามสถานะ Tune Rupture ซึ่ง Lynae ทำหน้าที่ยิงกระสุนเร่งเกจ Synchronization และแปะ Tune Effects ได้เร็วที่สุดในเกม ส่วน Mornye ทำหน้าที่ทริกเกอร์ 'Tune Rupture - Interfered' ลดเกราะศัตรูพร้อมฮีลทีม ทำให้เพลงดาบระบำเพลิงของเอมิธระเบิดดาเมจเดี่ยวได้สูงสุดในเกม",
    rotation: [
      { step: 1, char: "Mornye", desc: "ฟาดดาบใหญ่ทริกเกอร์ Tune Rupture - Interfered ลดเกราะบอสและมอบบัฟต้านทานขัดจังหวะ" },
      { step: 2, char: "Lynae", desc: "ยิงปืนคู่สาดกระสุนแสงแปะ Tune Effects สะสมเกจ Synchronization เต็มพิกัด -> ส่ง Outro ให้ Aemeath" },
      { step: 3, char: "Aemeath", desc: "เอมิธเข้าสู่โหมด Mecha/Humanoid ฟันระบำเพลิงผลาญ ปลดปล่อย Resonance Liberation Finisher ดาเมจนิวเคลียร์!" }
    ]
  },
  {
    rank: 2,
    tier: "T0 Apex",
    name: "Hiyuki Glacio Chafe Premier",
    nameTh: "อันดับ 2: Hiyuki (ฮิยูกิ) + Lynae (ไลนี) + Chisa (ชิสะ)",
    highlight: "ทีม Best-in-Slot อันดับ 1 ของ Hiyuki สแต็ค Glacio Chafe เต็มหลอด ฟันหยุดเวลา Time-stop ปลิดชีพ",
    tags: ["อันดับ 2 เมต้า", "T0 Apex", "Hiyuki BiS", "Glacio Chafe"],
    members: [
      { id: "hiyuki", name: "Hiyuki", role: "Main DPS", element: "Glacio", weapon: "Sword", thumb: "assets/characters/resonator_hiyuki.png" },
      { id: "lynae", name: "Lynae", role: "Sub DPS / Enabler", element: "Spectro", weapon: "Pistols", thumb: "assets/characters/resonator_lynae.png" },
      { id: "chisa", name: "Chisa", role: "Support / Sub DPS", element: "Havoc", weapon: "Broadblade", thumb: "assets/characters/resonator_chisa.png" }
    ],
    synergy: "ตี้ BiS ทางการของ Hiyuki เมคานิกส์ของฮิยูกิต้องการเพื่อนร่วมทีมที่ช่วยแปะและคงสถานะ Glacio Chafe เพื่อสะสม 'Bite Stacks' และแต้ม Dedication ให้ไวที่สุด ซึ่งการจับคู่กับ Lynae และ Chisa คือทีมที่คำนวณดาเมจต่อรอบ (Damage per Rotation) ออกมาสูงที่สุดในเกม ช่วยให้ฮิยูกิใช้ท่าฟันชาร์จหยุดเวลา (Time-stop Heavy Attack) สับบอสละลายได้อย่างสมบูรณ์แบบ",
    rotation: [
      { step: 1, char: "Chisa", desc: "ฟาดดาบใหญ่ทำลายเกราะและแปะสถานะรองรับการสะสม Bite Stacks" },
      { step: 2, char: "Lynae", desc: "ยิงประสานเร่งสแต็ค Dedication ให้ฮิยูกิจนเต็มหลอด -> ส่ง Outro ให้ Hiyuki" },
      { step: 3, char: "Hiyuki", desc: "ฮิยูกิ Intro เข้ามาฟันชาร์จหยุดเวลา Time-stop ตัดมิติเยือกแข็ง ดาเมจคริติคอลเด้งรัวๆ บอสไม่สามารถขยับได้" }
    ]
  },
  {
    rank: 3,
    tier: "T0 Apex",
    name: "Yangyang: Xuanling Havoc Bane",
    nameTh: "อันดับ 3: Yangyang: Xuanling (หยางหยาง เสวียนหลิง) + Chisa (ชิสะ) + Suisui (สุ่ยสุ่ย)",
    highlight: "ทีมพรีเมียมอันดับ 1 ของหยางหยางร่างเสวียนหลิง เมต้า Havoc Bane ดูดรวบและฟันหนักสะบั้นทุกสิ่ง",
    tags: ["อันดับ 3 เมต้า", "T0 Apex", "Xuanling BiS", "Havoc Bane"],
    members: [
      { id: "yangyang_xuanling", name: "Yangyang: Xuanling", role: "Main DPS", element: "Havoc", weapon: "Sword", thumb: "assets/characters/resonator_yangyang_xuanling.png" },
      { id: "chisa", name: "Chisa", role: "Sub DPS / Enabler", element: "Havoc", weapon: "Broadblade", thumb: "assets/characters/resonator_chisa.png" },
      { id: "suisui", name: "Suisui", role: "Support / Buffer", element: "Glacio", weapon: "Rectifier", thumb: "assets/characters/resonator_suisui.png" }
    ],
    synergy: "ทีมตรงสายตามฐานข้อมูลของเกมสำหรับ Yangyang: Xuanling (หยางหยางร่าง 5 ดาว) โดยสกิลหลักเน้นการระเบิดดาเมจ Havoc Bane และ Heavy Attack ซึ่ง Chisa เป็นตัวยึดสถานะ Havoc Bane ค้างไว้ได้ตลอดเวลา และ Suisui ทำหน้าที่บัฟตัวคูณความเสียหายสถานะติดลบ (Negative Status DMG) พร้อมฟื้นฟูพลังงาน ทำให้หยางหยางเสวียนหลิงควงดาบพายุทมิฬกวาดล้างทั้งเวที",
    rotation: [
      { step: 1, char: "Suisui", desc: "ร่ายม่านหิมะสุ่ยสุ่ย บัฟ Negative Status ทั้งทีมและฟื้นฟูเลือด" },
      { step: 2, char: "Chisa", desc: "ฟาดดาบใหญ่คงสถานะ Havoc Bane บนตัวศัตรู -> ส่ง Outro ให้หยางหยางเสวียนหลิง" },
      { step: 3, char: "Yangyang: Xuanling", desc: "หยางหยางเสวียนหลิงเปิดพายุทมิฬดูดรวบศัตรูทั้งห้อง ฟัน Heavy Attack ซ้ำตัวเลขหลักล้าน!" }
    ]
  },
  {
    rank: 4,
    tier: "T0",
    name: "Cyberpunk Edgerunners Protocol",
    nameTh: "อันดับ 4: Lucy (ลูซี่) + Rebecca (รีเบคกา) + Mornye (มอร์นี)",
    highlight: "ทีมคู่หูคอลแลปส์ Cyberpunk: Edgerunners แฮกเกอร์เจาะเกราะบอสขาด ไม่แย่ง Shorekeeper ใน ToA",
    tags: ["อันดับ 4 เมต้า", "T0", "Cyberpunk Collab", "Lucy BiS"],
    members: [
      { id: "lucy", name: "Lucy", role: "Main DPS", element: "Spectro", weapon: "Pistols", thumb: "assets/characters/resonator_lucy.png" },
      { id: "rebecca", name: "Rebecca", role: "Sub DPS / Buffer", element: "Electro", weapon: "Pistols", thumb: "assets/characters/resonator_rebecca.png" },
      { id: "mornye", name: "Mornye", role: "Support / Sustain", element: "Fusion", weapon: "Broadblade", thumb: "assets/characters/resonator_mornye.png" }
    ],
    synergy: "ตี้ที่ถูกต้อง 100% ของ Lucy (Netrunner จาก Cyberpunk: Edgerunners) คู่หูที่ขาดไม่ได้คือ Rebecca ซึ่งมีบัฟสายใยเฉพาะตัว 'Edgerunner Bonds' มอบบัฟ All DMG และ Heavy Attack ให้ Lucy มหาศาล และตัวที่สามคือ Mornye ที่มอบบัฟเกราะต้านทานการขัดจังหวะ (Interruption Resistance) และฮีลทีม ทำให้ไม่ต้องไปแย่ง Shorekeeper จากทีมอื่นในหอคอย ToA",
    rotation: [
      { step: 1, char: "Mornye", desc: "กางอาณาเขตสังเกตการณ์ มอบเกราะต้านทานการขัดจังหวะและฮีลทีม" },
      { step: 2, char: "Rebecca", desc: "สาดปืนกลตั้งป้อม แจกบัฟ Edgerunner Bonds (All DMG & Heavy Attack) -> ส่ง Outro ให้ Lucy" },
      { step: 3, char: "Lucy", desc: "ลูซี่เชื่อมต่อ Cyberspace ใช้ RAM ปลดล็อก Quick-Hack เจาะเกราะ (DEF Shred) สาดกระสุน Spectral Trigger ละลายบอส!" }
    ]
  },
  {
    rank: 5,
    tier: "T0",
    name: "Camellya Crimson Blossom Hypercarry",
    nameTh: "อันดับ 5: Camellya (คาเมลเลีย) + Sanhua (ซานหัว) + Shorekeeper",
    highlight: "ทีมจักรพรรดินีแห่ง Tower of Adversity ท่าสับเถาวัลย์เป็น Basic Attack บัฟตรงสาย 100%",
    tags: ["อันดับ 5 เมต้า", "T0", "Camellya BiS", "ToA Queen"],
    members: [
      { id: "camellya", name: "Camellya", role: "Main DPS", element: "Havoc", weapon: "Sword", thumb: "assets/characters/resonator_camellya.png" },
      { id: "sanhua", name: "Sanhua", role: "Sub DPS / Buffer", element: "Glacio", weapon: "Sword", thumb: "assets/characters/resonator_sanhua.png" },
      { id: "shorekeeper", name: "Shorekeeper", role: "Support / Healer", element: "Spectro", weapon: "Rectifier", thumb: "assets/characters/resonator_shorekeeper.png" }
    ],
    synergy: "สูตรทีมที่คำนวณมาอย่างสมบูรณ์แบบ ท่า Blossom Swirl ของ Camellya ทุกฮิตนับเป็น Basic Attack ทั้งหมด ซึ่ง Sanhua กดสะสม Concerto ไวที่สุดในเกม (3 วินาที) มอบบัฟ Outro Basic Attack DMG Deepen +38% ผสานกับ Shorekeeper บัฟ CRIT Rate 12.5% และ CRIT DMG 25% กลายเป็นทีมสปีดรันบอสที่เสถียรที่สุด",
    rotation: [
      { step: 1, char: "Shorekeeper", desc: "กาง Stellar Realm สเตจ 1-2 มอบบัฟคริติคอล ฮีล และใช้ Echo Fallacy of No Return" },
      { step: 2, char: "Sanhua", desc: "กด E ยกแท่งน้ำแข็ง -> กดอัลติ -> ชาร์จเกจเสี้ยววินาทีระเบิด ส่ง Outro Basic Attack +38% ให้ Camellya" },
      { step: 3, char: "Camellya", desc: "เข้า Blossom Mode สับเถาวัลย์กลางอากาศต่อเนื่อง -> ปิดฉากด้วยอัลติระเบิดดอกไม้สีเลือดบอสสลายทันที" }
    ]
  },
  {
    rank: 6,
    tier: "T0",
    name: "Jinhsi Celestial Dragon Burst",
    nameTh: "อันดับ 6: Jinhsi (จินซี) + Zhezhi (เจ๋อจือ) + Shorekeeper",
    highlight: "ทีม Single-Target นิวเคลียร์ ดอกเดียวบอสหาย ลำแสงมังกรทอง 400,000 - 600,000+",
    tags: ["อันดับ 6 เมต้า", "T0", "Jinhsi BiS", "Single Target God"],
    members: [
      { id: "jinhsi", name: "Jinhsi", role: "Main DPS", element: "Spectro", weapon: "Broadblade", thumb: "assets/characters/resonator_jinhsi.png" },
      { id: "zhezhi", name: "Zhezhi", role: "Sub DPS / Battery", element: "Glacio", weapon: "Rectifier", thumb: "assets/characters/resonator_zhezhi.png" },
      { id: "shorekeeper", name: "Shorekeeper", role: "Support / Healer", element: "Spectro", weapon: "Rectifier", thumb: "assets/characters/resonator_shorekeeper.png" }
    ],
    synergy: "Jinhsi ต้องการการโจมตีประสานต่างธาตุเพื่อสะสมเกจมังกร Incandescence 50 แต้ม ซึ่ง Zhezhi โจมตีประสานน้ำแข็งรัวที่สุดในเกม พร้อมส่ง Outro บัฟ Resonance Skill DMG +25% ตรงสายลำแสงมังกร 100% ผสานกับ Shorekeeper ช่วยค้ำประกันให้อัตราคริติคอลของลำแสงมังกรติด 100% เสมอ",
    rotation: [
      { step: 1, char: "Shorekeeper", desc: "กางโดม Stellar Realm แจกบัฟคริติคอลและฮีล" },
      { step: 2, char: "Zhezhi", desc: "ตวัดพู่กันปล่อยนกกระเรียนน้ำแข็งโจมตีประสาน กางม่านหมึกอัลติ -> ส่ง Outro Skill DMG +25% ให้ Jinhsi" },
      { step: 3, char: "Jinhsi", desc: "เกจมังกร 50 หลอดเต็ม -> สกิล E พุ่งบินขึ้นฟ้า ยิงเลเซอร์ Illuminous Dragon Breath ดอกละ 500,000+ บอสละลาย!" }
    ]
  },
  {
    rank: 7,
    tier: "T0",
    name: "Qingxiao Celestial Wind Sovereign",
    nameTh: "อันดับ 7: Qingxiao (ชิงเซียว) + Sigrika (ซิกริกา) + Shorekeeper",
    highlight: "ทีมกระบี่สายลมเหินเวหา v3.6 เพลงกระบี่หมื่นเล่มทะลวงบอส ดาเมจ Aero ต่อเนื่องสูงสุด",
    tags: ["อันดับ 7 เมต้า", "T0", "Qingxiao BiS", "Aero Sovereign"],
    members: [
      { id: "qingxiao", name: "Qingxiao", role: "Main DPS", element: "Aero", weapon: "Sword", thumb: "assets/characters/resonator_qingxiao.png" },
      { id: "sigrika", name: "Sigrika", role: "Sub DPS / Buffer", element: "Aero", weapon: "Gauntlets", thumb: "assets/characters/resonator_sigrika.png" },
      { id: "shorekeeper", name: "Shorekeeper", role: "Support / Healer", element: "Spectro", weapon: "Rectifier", thumb: "assets/characters/resonator_shorekeeper.png" }
    ],
    synergy: "ทีมสายลม v3.6 ที่ดีที่สุด Qingxiao ปรมาจารย์กระบี่สายลมควบคุมกระบี่บินนับหมื่นเล่ม โจมตีประสานกับหมัดพายุของ Sigrika ที่เร่งเกจ Concerto ไวและมอบบัฟ Aero Deepen สูงสุด เสริมด้วยโดมคริติคอลของ Shorekeeper ทำให้มอนสเตอร์ลอยเคว้งกลางเวหาไม่ตกลงสู่พื้น",
    rotation: [
      { step: 1, char: "Shorekeeper", desc: "เปิด Stellar Realm บัฟคริติคอลและฮีลทั้งทีม" },
      { step: 2, char: "Sigrika", desc: "ปล่อยหมัดสายลมซิกริการวบศัตรูขึ้นฟ้า -> ส่ง Outro บัฟ Aero Deepen ให้ Qingxiao" },
      { step: 3, char: "Qingxiao", desc: "ชิงเซียวเหินเวหา อัญเชิญหมื่นกระบี่สายลมสาดถล่มเป็นสายฝนลงมาบอสสลาย" }
    ]
  },
  {
    rank: 8,
    tier: "T0",
    name: "Jingran Solar Flare Broadblade",
    nameTh: "อันดับ 8: Jingran (จิงหราน) + Denia (เดเนีย) + Mornye (มอร์นี)",
    highlight: "ทีม Mono Fusion สายดาบใหญ่ทำลายล้าง v3.6 สุริยคราสผ่ามิติเพลิง คลื่นยักษ์บดขยี้บอส",
    tags: ["อันดับ 8 เมต้า", "T0", "Jingran BiS", "Solar Flare"],
    members: [
      { id: "jingran", name: "Jingran", role: "Main DPS", element: "Fusion", weapon: "Broadblade", thumb: "assets/characters/resonator_jingran.png" },
      { id: "denia", name: "Denia", role: "Sub DPS / Enabler", element: "Fusion", weapon: "Rectifier", thumb: "assets/characters/resonator_denia.png" },
      { id: "mornye", name: "Mornye", role: "Support / Sustain", element: "Fusion", weapon: "Broadblade", thumb: "assets/characters/resonator_mornye.png" }
    ],
    synergy: "ทีมธาตุไฟสายบดขยี้เกราะ Jingran ผสานกับ Denia ที่ร่ายอาณาเขตเพลิงลาวา และ Mornye ที่ช่วยเปิดเกราะศัตรูพร้อมมอบบัฟ Fusion Amplification เป็นทีม Mono Fusion ที่ดาเมจต่อช็อตสูงมาก ฟันคลื่นเพลิงฮิตเดียวบอสเลือดหายเกือบหมดหลอด",
    rotation: [
      { step: 1, char: "Mornye", desc: "ทุบเปิดเกราะบอสและมอบบัฟต้านทานการขัดจังหวะ" },
      { step: 2, char: "Denia", desc: "ร่ายอาณาเขตเพลิงลาวาเคลือบสนามรบ -> ส่ง Outro ให้ Jingran" },
      { step: 3, char: "Jingran", desc: "จิงหรานเงื้อดาบใหญ่สุริยคราส ฟาดคลื่นลาวาผ่าครึ่งสนามรบ ดาเมจทะลุหลอด" }
    ]
  },
  {
    rank: 9,
    tier: "T0",
    name: "Carlotta Absolute Zero Sniper",
    nameTh: "อันดับ 9: Carlotta (คาร์ล็อตต้า) + Zhezhi (เจ๋อจือ) + Shorekeeper",
    highlight: "ทีมสไนเปอร์เยือกแข็งศูนย์สัมบูรณ์ ยิงเจาะเกราะระยะไกล ปลอดภัยและรุนแรงมาก",
    tags: ["อันดับ 9 เมต้า", "T0", "Carlotta BiS", "Glacio Sniper"],
    members: [
      { id: "carlotta", name: "Carlotta", role: "Main DPS", element: "Glacio", weapon: "Pistols", thumb: "assets/characters/resonator_carlotta.png" },
      { id: "zhezhi", name: "Zhezhi", role: "Sub DPS / Buffer", element: "Glacio", weapon: "Rectifier", thumb: "assets/characters/resonator_zhezhi.png" },
      { id: "shorekeeper", name: "Shorekeeper", role: "Support / Healer", element: "Spectro", weapon: "Rectifier", thumb: "assets/characters/resonator_shorekeeper.png" }
    ],
    synergy: "Carlotta สไนเปอร์น้ำแข็งที่มีตัวคูณดาเมจระยะไกลสูงมาก รับบัฟ Glacio Deepen +20% และ Skill Deepen +25% ตรงสายจาก Zhezhi 100% พร้อมโดมคริติคอลของ Shorekeeper ทำให้ทุกนัดที่ลั่นไกกลายเป็นคริติคอลดาเมจเจาะเกราะบอสขาดกระจุยจากระยะปลอดภัย",
    rotation: [
      { step: 1, char: "Shorekeeper", desc: "เปิด Stellar Realm บัฟคริติคอลและฮีลทั้งทีม" },
      { step: 2, char: "Zhezhi", desc: "สาดหมึกพู่กันน้ำแข็งเคลือบสนามรบ -> ส่ง Outro บัฟ Glacio & Skill ให้ Carlotta" },
      { step: 3, char: "Carlotta", desc: "ล็อคเป้าชาร์จสไนเปอร์เยือกแข็ง ยิงทะลวงจุดอ่อนระยะปลอดภัย ตัวเลขเด้งรัวต่อเนื่อง" }
    ]
  },
  {
    rank: 10,
    tier: "T0",
    name: "Changli & Encore Dual Quickswap",
    nameTh: "อันดับ 10: Changli (ฉางลี่) + Encore (อังกอร์) + Shorekeeper",
    highlight: "ราชาแห่งระบบ Dual Quickswap สลับตัวรัวแคนเซิลอนิเมชัน DPS ต่อเนื่องสูงสุดในเกม",
    tags: ["อันดับ 10 เมต้า", "T0", "Dual Quickswap", "Fusion Kings"],
    members: [
      { id: "changli", name: "Changli", role: "Main / Quickswap", element: "Fusion", weapon: "Sword", thumb: "assets/characters/resonator_changli.png" },
      { id: "encore", name: "Encore", role: "Main / Quickswap", element: "Fusion", weapon: "Rectifier", thumb: "assets/characters/resonator_encore.png" },
      { id: "shorekeeper", name: "Shorekeeper", role: "Support / Healer", element: "Spectro", weapon: "Rectifier", thumb: "assets/characters/resonator_shorekeeper.png" }
    ],
    synergy: "ทีมคลาสสิกระดับพระกาฬ Changli มอบ Outro Fusion Deepen 20% + Liberation 25% ซึ่งตรงกับท่าไม้ตาย Cosmos Rave ของ Encore ทุกประการ ทั้งคู่สามารถสลับตัวออกมาระหว่างที่อนิเมชันกำลังแสดงผลได้ ทำให้ดาเมจในสนามรบไม่ขาดช่วงแม้แต่วินาทีเดียว",
    rotation: [
      { step: 1, char: "Shorekeeper", desc: "กาง Stellar Realm บัฟคริติคอลทั้งทีม" },
      { step: 2, char: "Changli", desc: "ฟันขนนกเฟิ่งหวงสะสม True Sight -> ปล่อยอัลติวิหคเพลิง -> ส่ง Outro ให้ Encore" },
      { step: 3, char: "Encore", desc: "แปลงร่าง Cosmos Rave ทุบรัวๆ -> สลับตัวกลับ Changli ทันทีเพื่อแคนเซิลท่า ดาเมจสองเท่าพร้อมกัน" }
    ]
  }
];