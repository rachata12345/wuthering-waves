export const metaTeams = [
  {
    rank: 1,
    tier: "EX",
    name: "Crimson Blossom Havoc Hypercarry",
    nameTh: "อันดับ 1: Camellya + Sanhua + Shorekeeper (ราชินีดอกไม้เลือด)",
    highlight: "ทีมอันดับ 1 เคลียร์ Tower of Adversity เร็วและแรงที่สุดในเมต้าปัจจุบัน ดาเมจทะลุหลอด",
    tags: ["อันดับ 1 เมต้า", "EX Tier", "Basic ATK Hypercarry", "ToA Queen"],
    members: [
      { id: "camellya", name: "Camellya", role: "Main DPS", element: "Havoc", weapon: "Sword", thumb: "assets/characters/resonator_camellya.png" },
      { id: "sanhua", name: "Sanhua", role: "Sub DPS", element: "Glacio", weapon: "Sword", thumb: "assets/characters/resonator_sanhua.png" },
      { id: "shorekeeper", name: "Shorekeeper", role: "Support", element: "Spectro", weapon: "Rectifier", thumb: "assets/characters/resonator_shorekeeper.png" }
    ],
    synergy: "Camellya เป็นตัวทำดาเมจที่ทุกการโจมตีในโหมด Blossom Swirl นับเป็น Basic Attack ทั้งหมด ซึ่ง Sanhua มอบ Outro Buff Basic Attack สูงถึง 38% พร้อมสะสม Concerto ไวใน 3 วินาที เสริมด้วย Shorekeeper กางโดม Stellar Realm บัฟ CRIT Rate 12.5% และ CRIT DMG 25% กลายเป็นทีมที่สปีดรันบอสเร็วที่สุดในเกม",
    rotation: [
      { step: 1, char: "Shorekeeper", desc: "Intro -> กาง Stellar Realm ฟูลฮีลและบัฟคริติคอล -> กด Echo Fallacy -> ส่ง Outro ให้ Sanhua" },
      { step: 2, char: "Sanhua", desc: "สกิล E ยกแท่งน้ำแข็ง -> ชาร์จเกจเสี้ยววินาทีระเบิดน้ำแข็ง -> ส่ง Outro Basic Attack +38% ให้ Camellya" },
      { step: 3, char: "Camellya", desc: "รับบัฟเต็มสูบ -> สกิล E เข้า Blossom Mode -> หมุนสับเถาวัลย์กลางเวหา -> ปิดด้วยอัลติระเบิดดอกไม้สีเลือด 300,000+" }
    ]
  },
  {
    rank: 2,
    tier: "EX",
    name: "Celestial Dragon Nuclear Burst",
    nameTh: "อันดับ 2: Jinhsi + Zhezhi + Shorekeeper (มังกรสุริยะนิวเคลียร์)",
    highlight: "ดาเมจต่อช็อต (Single-Hit Burst) รุนแรงที่สุดในเกม ลำแสงมังกร 400,000 - 600,000+ ดอกเดียวบอสละลาย",
    tags: ["อันดับ 2 เมต้า", "EX Tier", "Nuclear Burst", "Single Target God"],
    members: [
      { id: "jinhsi", name: "Jinhsi", role: "Main DPS", element: "Spectro", weapon: "Broadblade", thumb: "assets/characters/resonator_jinhsi.png" },
      { id: "zhezhi", name: "Zhezhi", role: "Sub DPS", element: "Glacio", weapon: "Rectifier", thumb: "assets/characters/resonator_zhezhi.png" },
      { id: "shorekeeper", name: "Shorekeeper", role: "Support", element: "Spectro", weapon: "Rectifier", thumb: "assets/characters/resonator_shorekeeper.png" }
    ],
    synergy: "Jinhsi ต้องเก็บเกจมังกร Incandescence 50 แต้มจากการโจมตีประสานต่างธาตุ ซึ่ง Zhezhi โจมตีประสานน้ำแข็งรวดเร็วและต่อเนื่องที่สุดในเกม พร้อมส่ง Outro บัฟ Resonance Skill DMG +25% ผสานกับ Shorekeeper ที่ช่วยค้ำประกันให้อัตราคริติคอลของลำแสงมังกรติด 100% เสมอ",
    rotation: [
      { step: 1, char: "Shorekeeper", desc: "กาง Stellar Realm สเตจ 1-2 แจกบัฟ CRIT และฮีลฟื้นฟู -> ส่งไม้ต่อให้ Zhezhi" },
      { step: 2, char: "Zhezhi", desc: "ตวัดพู่กันปล่อยนกกระเรียนน้ำแข็งโจมตีประสาน -> กางม่านหมึกอัลติ -> ส่ง Outro Skill DMG +25% ให้ Jinhsi" },
      { step: 3, char: "Jinhsi", desc: "เกจมังกรเต็ม 50 หลอด -> สกิลพุ่งทะยานฟ้า -> ยิงเลเซอร์ Illuminous Dragon Breath ทะลวงบอส ดาเมจนิวเคลียร์หลักแสน!" }
    ]
  },
  {
    rank: 3,
    tier: "EX",
    name: "Absolute Zero Glacio Sniper",
    nameTh: "อันดับ 3: Carlotta + Zhezhi + Shorekeeper (สไนเปอร์เยือกแข็งศูนย์สัมบูรณ์)",
    highlight: "ดาเมจเจาะเกราะน้ำแข็งระยะไกล ยิงปลอดภัย คล่องตัวสูง และระเบิดบอสได้ในพริบตา",
    tags: ["อันดับ 3 เมต้า", "EX Tier", "Glacio Sniper", "V2.0 Meta"],
    members: [
      { id: "carlotta", name: "Carlotta", role: "Main DPS", element: "Glacio", weapon: "Pistols", thumb: "assets/characters/resonator_carlotta.png" },
      { id: "zhezhi", name: "Zhezhi", role: "Sub DPS", element: "Glacio", weapon: "Rectifier", thumb: "assets/characters/resonator_zhezhi.png" },
      { id: "shorekeeper", name: "Shorekeeper", role: "Support", element: "Spectro", weapon: "Rectifier", thumb: "assets/characters/resonator_shorekeeper.png" }
    ],
    synergy: "Carlotta ตัวละครยุค 2.0 สไนเปอร์น้ำแข็งที่มีตัวคูณดาเมจต่อวินาทีสูงมาก รับบัฟ Glacio Deepen +20% และ Skill Deepen +25% ตรงสายจาก Zhezhi 100% พร้อมโดมคริติคอลของ Shorekeeper ทำให้ทุกนัดที่ลั่นไกกลายเป็นคริติคอลดาเมจเจาะเกราะบอสขาดกระจุย",
    rotation: [
      { step: 1, char: "Shorekeeper", desc: "เปิด Stellar Realm บัฟคริติคอลและฮีลทั้งทีม" },
      { step: 2, char: "Zhezhi", desc: "สาดหมึกพู่กันน้ำแข็งเคลือบสนามรบ -> ส่ง Outro บัฟธาตุน้ำแข็งให้ Carlotta" },
      { step: 3, char: "Carlotta", desc: "ล็อคเป้าชาร์จสไนเปอร์เยือกแข็ง ยิงทะลวงจุดอ่อนระยะปลอดภัย ตัวเลขเด้งรัวต่อเนื่อง" }
    ]
  },
  {
    rank: 4,
    tier: "S+",
    name: "Blazing Phoenix Dual Quickswap",
    nameTh: "อันดับ 4: Changli + Encore + Shorekeeper (เพลิงคู่วิหคเพลิง สลับไร้คูลดาวน์)",
    highlight: "ราชาแห่งระบบ Dual Quickswap สลับตัวฟันแคนเซิลอนิเมชัน DPS ต่อเนื่องสูงสุดในเกม",
    tags: ["อันดับ 4 เมต้า", "S+ Tier", "Dual Quickswap", "Fusion King"],
    members: [
      { id: "changli", name: "Changli", role: "Main / Quickswap", element: "Fusion", weapon: "Sword", thumb: "assets/characters/resonator_changli.png" },
      { id: "encore", name: "Encore", role: "Main / Quickswap", element: "Fusion", weapon: "Rectifier", thumb: "assets/characters/resonator_encore.png" },
      { id: "shorekeeper", name: "Shorekeeper", role: "Support", element: "Spectro", weapon: "Rectifier", thumb: "assets/characters/resonator_shorekeeper.png" }
    ],
    synergy: "Changli มอบ Outro Fusion Deepen 20% + Liberation 25% ซึ่งตรงกับท่าไม้ตาย Cosmos Rave ของ Encore ทุกประการ ทั้งคู่สามารถสลับตัวออกมาระหว่างที่อนิเมชันกำลังแสดงผลได้ ทำให้ดาเมจในสนามรบไม่ขาดช่วงแม้แต่วินาทีเดียว",
    rotation: [
      { step: 1, char: "Shorekeeper", desc: "กาง Stellar Realm บัฟคริติคอลทั้งทีม" },
      { step: 2, char: "Changli", desc: "ฟันขนนกเฟิ่งหวงสะสม True Sight -> ปล่อยอัลติวิหคเพลิง -> ส่ง Outro ให้ Encore" },
      { step: 3, char: "Encore", desc: "แปลงร่าง Cosmos Rave ทุบรัวๆ -> สลับตัวกลับ Changli ทันทีเพื่อแคนเซิลท่า ดาเมจสองเท่าพร้อมกัน" }
    ]
  },
  {
    rank: 5,
    tier: "S+",
    name: "Cybernetic Electro Liberation",
    nameTh: "อันดับ 5: Xiangli Yao + Yinlin + Shorekeeper (หมัดจักรกลสายฟ้า)",
    highlight: "ทีมสายฟ้าที่เก่งที่สุดในเกม แทนที่ Calcharo อย่างสมบูรณ์แบบ เล่นง่าย คอมโบเสถียร",
    tags: ["อันดับ 5 เมต้า", "S+ Tier", "Resonance Liberation", "Electro Definitive"],
    members: [
      { id: "xiangli_yao", name: "Xiangli Yao", role: "Main DPS", element: "Electro", weapon: "Gauntlets", thumb: "assets/characters/resonator_xiangli_yao.png" },
      { id: "yinlin", name: "Yinlin", role: "Sub DPS", element: "Electro", weapon: "Rectifier", thumb: "assets/characters/resonator_yinlin.png" },
      { id: "shorekeeper", name: "Shorekeeper", role: "Support", element: "Spectro", weapon: "Rectifier", thumb: "assets/characters/resonator_shorekeeper.png" }
    ],
    synergy: "Xiangli Yao ปลดปล่อยโหมดลูกบาศก์จักรกลที่ดาเมจหลักคือ Resonance Liberation ซึ่ง Yinlin มอบ Outro Electro Deepen +20% และ Liberation Deepen +25% เข้ากันได้แบบไร้รอยต่อ ลบจุดอ่อนความเสี่ยงโดนขัดจังหวะของ Calcharo ทิ้งทั้งหมด",
    rotation: [
      { step: 1, char: "Shorekeeper", desc: "กางโดม Stellar Realm แจกบัฟ CRIT Rate และ CRIT DMG" },
      { step: 2, char: "Yinlin", desc: "เรียกหุ่นเชิด Zapstring ฟาดสายฟ้ากักขังศัตรู -> ส่ง Outro ให้ Xiangli Yao" },
      { step: 3, char: "Xiangli Yao", desc: "กางมิติ Cogitation Matrix -> ทุบหมัดเลเซอร์ 3 จังหวะติดคริติคอลดอกละหลายหมื่นต่อเนื่อง" }
    ]
  },
  {
    rank: 6,
    tier: "S+",
    name: "Qingloong Wind Dragon Tempest",
    nameTh: "อันดับ 6: Jiyan + Mortefi + Shorekeeper (มังกรพายุเขียวกวาดล้าง)",
    highlight: "ที่สุดแห่งการเคลียร์มอนสเตอร์เป็นกลุ่ม (AoE King) มังกรดูดมอนสเตอร์ทั้งห้อง",
    tags: ["อันดับ 6 เมต้า", "S+ Tier", "AoE King", "Heavy Attack God"],
    members: [
      { id: "jiyan", name: "Jiyan", role: "Main DPS", element: "Aero", weapon: "Broadblade", thumb: "assets/characters/resonator_jiyan.png" },
      { id: "mortefi", name: "Mortefi", role: "Sub DPS", element: "Fusion", weapon: "Pistols", thumb: "assets/characters/resonator_mortefi.png" },
      { id: "shorekeeper", name: "Shorekeeper", role: "Support", element: "Spectro", weapon: "Rectifier", thumb: "assets/characters/resonator_shorekeeper.png" }
    ],
    synergy: "ท่าไม้ตาย Qingloong ของ Jiyan นับเป็น Heavy Attack 100% ซึ่ง Mortefi (โดยเฉพาะ C6) มอบบัฟ Heavy Attack Deepen ถึง 38% สูงที่สุดในเกม เมื่อบวกกับการบัฟคริติคอลของ Shorekeeper มอนสเตอร์ทั้งห้องจะโดนรวบและสับแหลกโดยไม่สามารถขยับตัวได้",
    rotation: [
      { step: 1, char: "Shorekeeper", desc: "เปิด Stellar Realm บัฟคริติคอลและฮีล" },
      { step: 2, char: "Mortefi", desc: "เป่าขลุ่ยอัญเชิญมังกรเพลิงอัลติประสาน -> ส่ง Outro Heavy Attack +38% ให้ Jiyan" },
      { step: 3, char: "Jiyan", desc: "อัญเชิญมังกรสายลม Qingloong ควงหอกพุ่งดูดศัตรูทั้งเวที ดาเมจเด้งทั่วทั้งจอ" }
    ]
  },
  {
    rank: 7,
    tier: "S+",
    name: "Solaris Resonance Spectro Cascade",
    nameTh: "อันดับ 7: Phoebe + Zani + Shorekeeper (ระฆังสุริยะลงทัณฑ์)",
    highlight: "ทีม Spectro ยุคใหม่ ผสานพลังหยุดเวลา ดีบัฟเกราะ และระเบิดเวทแสงวงกว้าง",
    tags: ["อันดับ 7 เมต้า", "S+ Tier", "Spectro Resonance", "V2.1 Meta"],
    members: [
      { id: "phoebe", name: "Phoebe", role: "Main DPS", element: "Spectro", weapon: "Rectifier", thumb: "assets/characters/resonator_phoebe.png" },
      { id: "zani", name: "Zani", role: "Sub DPS", element: "Spectro", weapon: "Gauntlets", thumb: "assets/characters/resonator_zani.png" },
      { id: "shorekeeper", name: "Shorekeeper", role: "Support", element: "Spectro", weapon: "Rectifier", thumb: "assets/characters/resonator_shorekeeper.png" }
    ],
    synergy: "ทีมธาตุแสง Spectro 3 ตัวละครที่ทรงพลังที่สุด Phoebe ทำหน้าที่ระเบิดดาเมจเวทแสงเป็นวงกว้าง โดยมี Zani คอยลดเกราะศัตรูและหยุดการเคลื่อนไหว เสริมด้วย Shorekeeper ทำให้เกจ Spectro Frazzle สะสมและระเบิดสร้างดาเมจอย่างรวดเร็ว",
    rotation: [
      { step: 1, char: "Shorekeeper", desc: "กางโดม Stellar Realm แจกบัฟคริติคอล Spectro" },
      { step: 2, char: "Zani", desc: "ชกคลื่นสุริยะหยุดจังหวะศัตรูและทำเครื่องหมายลดต้านทานแสง -> ส่ง Outro ให้ Phoebe" },
      { step: 3, char: "Phoebe", desc: "ร่ายเวทระฆังแสงสุริยะลงทัณฑ์ ระเบิดคลื่น Spectro ต่อเนื่องเป็นวงกว้าง" }
    ]
  },
  {
    rank: 8,
    tier: "S+",
    name: "Infernal Vanguard Dual Ignition",
    nameTh: "อันดับ 8: Brant + Changli + Shorekeeper (เพลิงประลัยกัลป์แนวหน้า)",
    highlight: "ทีมดาบเพลิงคู่ความเร็วสูง เผาผลาญเกจสั่นสะเทือนของบอสจนล้มลงในไม่กี่วินาที",
    tags: ["อันดับ 8 เมต้า", "S+ Tier", "Fusion Duelist", "V2.1 Meta"],
    members: [
      { id: "brant", name: "Brant", role: "Main DPS", element: "Fusion", weapon: "Sword", thumb: "assets/characters/resonator_brant.png" },
      { id: "changli", name: "Changli", role: "Sub DPS", element: "Fusion", weapon: "Sword", thumb: "assets/characters/resonator_changli.png" },
      { id: "shorekeeper", name: "Shorekeeper", role: "Support", element: "Spectro", weapon: "Rectifier", thumb: "assets/characters/resonator_shorekeeper.png" }
    ],
    synergy: "Brant ใช้เพลงดาบเพลิงประจัญบานที่ผสานกับ Outro Fusion Deepen 20% ของ Changli ได้อย่างลงตัว ทั้งคู่เน้นการเข้าปะทะอย่างรวดเร็ว มี I-Frame (จังหวะอมตะ) หลบหลีกสูง ทำให้สามารถสร้างดาเมจได้ไม่หยุดหย่อนแม้บอสจะโจมตีสวน",
    rotation: [
      { step: 1, char: "Shorekeeper", desc: "เปิดบัฟ Stellar Realm เพื่อรับประกันอัตราคริติคอล" },
      { step: 2, char: "Changli", desc: "ฟันดาบวิหคเพลิงทำคอมโบ -> ส่ง Outro บัฟ Fusion Deepen ให้ Brant" },
      { step: 3, char: "Brant", desc: "ควงดาบเพลิงพุ่งทะลวงแนวหน้า เผาผลาญเกจมอนสเตอร์จนล้มลงอย่างรวดเร็ว" }
    ]
  },
  {
    rank: 9,
    tier: "S+",
    name: "Black Shores Dark Matter Void",
    nameTh: "อันดับ 9: Roccia + Camellya + Shorekeeper (ความมืดแห่งแบล็คชอร์ส)",
    highlight: "การจับคู่สุดยอดนักสู้และซัพพอร์ตของ Black Shores ดูดรวบหลุมดำแล้วสับแหลก",
    tags: ["อันดับ 9 เมต้า", "S+ Tier", "Havoc Resonance", "V2.0 Meta"],
    members: [
      { id: "roccia", name: "Roccia", role: "Main / Sub DPS", element: "Havoc", weapon: "Gauntlets", thumb: "assets/characters/resonator_roccia.png" },
      { id: "camellya", name: "Camellya", role: "Main DPS", element: "Havoc", weapon: "Sword", thumb: "assets/characters/resonator_camellya.png" },
      { id: "shorekeeper", name: "Shorekeeper", role: "Support", element: "Spectro", weapon: "Rectifier", thumb: "assets/characters/resonator_shorekeeper.png" }
    ],
    synergy: "Roccia ทำหน้าที่กางอาณาเขตแรงโน้มถ่วงมืดและสร้างสภาวะ Void Trap ดึงดูดศัตรูเข้ามารวมกันที่จุดศูนย์กลาง จากนั้น Camellya สลับตัวเข้ามาหมุนสับเถาวัลย์ Blossom Swirl กวาดล้างศัตรูทั้งหมดในคราวเดียว",
    rotation: [
      { step: 1, char: "Shorekeeper", desc: "กางม่านดวงดาว Stellar Realm บัฟคริติคอล" },
      { step: 2, char: "Roccia", desc: "ปล่อยหมัดแรงโน้มถ่วง Void หลุมดำดูดศัตรูมารวมกัน -> ส่ง Outro ให้ Camellya" },
      { step: 3, char: "Camellya", desc: "พุ่งเข้าสู่ใจกลางหลุมดำ สับเถาวัลย์สีเลือดกวาดล้างกลุ่มศัตรูอย่างเด็ดขาด" }
    ]
  },
  {
    rank: 10,
    tier: "S",
    name: "F2P Dark Scythe Havoc King",
    nameTh: "อันดับ 10: Havoc Rover + Danjin + Shorekeeper (เคียวมฤตยู F2P ขวัญใจมหาชน)",
    highlight: "ทีมฟรี F2P ที่เก่งที่สุดในประวัติศาสตร์เกม ดาเมจเทียบเท่าตัว 5 ดาวลิมิเต็ด ปั้นง่ายเล่นสนุก",
    tags: ["อันดับ 10 เมต้า", "S Tier", "Best F2P Team", "Dark Scythe"],
    members: [
      { id: "rover_havoc", name: "Rover-Havoc", role: "Main DPS", element: "Havoc", weapon: "Sword", thumb: "assets/characters/resonator_rover_havoc.png" },
      { id: "danjin", name: "Danjin", role: "Sub DPS", element: "Havoc", weapon: "Sword", thumb: "assets/characters/resonator_danjin.png" },
      { id: "shorekeeper", name: "Shorekeeper", role: "Support", element: "Spectro", weapon: "Rectifier", thumb: "assets/characters/resonator_shorekeeper.png" }
    ],
    synergy: "ทีมที่ผู้เล่นสายฟรีทุกคนต้องมี Danjin มอบ Outro Havoc Deepen +23% ให้ Havoc Rover ปลดปล่อยพลัง Dark Surge สับเคียวมืดและทุบอัลติ Dead Trance ดาเมจทะลุหลักแสน สามารถเคลียร์ Tower of Adversity ชั้นสูงสุด 30 ดาวได้สบายๆ",
    rotation: [
      { step: 1, char: "Shorekeeper", desc: "กาง Stellar Realm มอบบัฟ CRIT Rate และ CRIT DMG (หรือใช้ Verina แทนได้)" },
      { step: 2, char: "Danjin", desc: "สับเลือดสะสมเกจ Chaos -> ฟันอัลติเลือดสาด -> ส่ง Outro Havoc Deepen +23% ให้ Rover" },
      { step: 3, char: "Rover-Havoc", desc: "เข้าสู่ร่างมืด Dark Surge ควงเคียวยมทูตสับ 5 ฮิต -> ปิดฉากด้วย Dead Trance ทุบพื้นแตก 200,000+" }
    ]
  }
];