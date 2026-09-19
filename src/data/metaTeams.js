export const metaTeams = [
  {
    rank: 1,
    tier: "EX",
    name: "Celestial Dragon & Frost Brush Burst",
    nameTh: "ทีมมังกรสุริยะ & พู่กันน้ำแข็งสังหารเทพ",
    highlight: "ดาเมจระเบิดมังกรสูงสุดในเกม 400,000+ ดอกเดียวบอสละลาย",
    tags: ["EX Tier", "Burst DMG", "Dragon Gauge", "Single Target God"],
    members: [
      { id: "jinhsi", name: "Jinhsi", role: "Main DPS", element: "Spectro", weapon: "Broadblade", thumb: "assets/characters/resonator_jinhsi.png" },
      { id: "zhezhi", name: "Zhezhi", role: "Sub DPS", element: "Glacio", weapon: "Rectifier", thumb: "assets/characters/resonator_zhezhi.png" },
      { id: "shorekeeper", name: "Shorekeeper", role: "Support", element: "Spectro", weapon: "Rectifier", thumb: "assets/characters/resonator_shorekeeper.png" }
    ],
    synergy: "Jinhsi ต้องการการโจมตีประสานต่างธาตุเพื่อสะสมเกจมังกร 50 แต้ม Zhezhi โจมตีประสานน้ำแข็งรัวสุด + Outro บัฟสกิล 25% เสริมด้วย Shorekeeper บัฟ CRIT Rate 12.5% และ CRIT DMG 25% ดอกเดียวบอสละลาย",
    rotation: [
      { step: 1, char: "Shorekeeper", desc: "เปิด Intro -> กาง Stellar Realm ฟูลฮีล -> ใช้ Echo Fallacy of No Return -> ส่ง Outro Buff ให้ Zhezhi" },
      { step: 2, char: "Zhezhi", desc: "ฟาดพู่กันปล่อยนกกระเรียนน้ำแข็งโจมตีประสาน -> กางม่านหมึกอัลติ -> ส่ง Outro Skill DMG +25% ให้ Jinhsi" },
      { step: 3, char: "Jinhsi", desc: "รับบัฟเต็มพิกัด -> สกิล E พุ่งบินขึ้นฟ้า -> สาดเลเซอร์ Illuminous Dragon Breath ระเบิดเกจ 50 หลอด ดาเมจ 400,000+!" }
    ]
  },
  {
    rank: 2,
    tier: "EX",
    name: "Crimson Blossom Havoc Hypercarry",
    nameTh: "ทีมจักรพรรดินีดอกไม้เลือด คาเมลเลียสับแหลก",
    highlight: "จักรพรรดินีแห่ง Tower of Adversity เคลียร์ห้องบอสไวที่สุดในเกม",
    tags: ["EX Tier", "Basic Attack Hypercarry", "Fastest Concerto", "ToA Queen"],
    members: [
      { id: "camellya", name: "Camellya", role: "Main DPS", element: "Havoc", weapon: "Sword", thumb: "assets/characters/resonator_camellya.png" },
      { id: "sanhua", name: "Sanhua", role: "Sub DPS", element: "Glacio", weapon: "Sword", thumb: "assets/characters/resonator_sanhua.png" },
      { id: "shorekeeper", name: "Shorekeeper", role: "Support", element: "Spectro", weapon: "Rectifier", thumb: "assets/characters/resonator_shorekeeper.png" }
    ],
    synergy: "ท่าเถาวัลย์ Blossom Swirl ของ Camellya นับเป็น Basic Attack ทั้งหมด ซึ่ง Sanhua บัฟ Basic Attack ถึง 38% แถมทำ Concerto ไวสุดใน 3 วินาที เคลียร์ห้องบอสไวที่สุดในแพตช์ปัจจุบัน",
    rotation: [
      { step: 1, char: "Shorekeeper", desc: "เปิดโดม Stellar Realm บัฟคริติคอลและฮีล -> ส่งต่อให้ Sanhua" },
      { step: 2, char: "Sanhua", desc: "กดยกพื้นน้ำแข็ง -> ชาร์จเกจเสี้ยววินาทีระเบิดแท่งน้ำแข็ง -> ส่ง Outro บัฟ Basic Attack +38% ให้ Camellya" },
      { step: 3, char: "Camellya", desc: "เข้าสู่สถานะ Crimson Blossom -> หมุนฟันเถาวัลย์ระห่ำกลางอากาศ -> ปล่อยอัลติระเบิดดอกไม้สีเลือดบอสสลาย" }
    ]
  },
  {
    rank: 3,
    tier: "S+",
    name: "Blazing Phoenix Dual Quickswap",
    nameTh: "ทีมเพลิงคู่วิหคเพลิง สลับฟันไร้คูลดาวน์",
    highlight: "ดาเมจต่อวินาที (DPS) พุ่งทะลุเพดานด้วยเมคานิกส์ Quickswap ไร้รอยต่อ",
    tags: ["S+ Tier", "Dual Quickswap", "Fusion Resonance", "Zero Downtime"],
    members: [
      { id: "changli", name: "Changli", role: "Main / Quickswap", element: "Fusion", weapon: "Sword", thumb: "assets/characters/resonator_changli.png" },
      { id: "encore", name: "Encore", role: "Main / Quickswap", element: "Fusion", weapon: "Rectifier", thumb: "assets/characters/resonator_encore.png" },
      { id: "shorekeeper", name: "Shorekeeper", role: "Support", element: "Spectro", weapon: "Rectifier", thumb: "assets/characters/resonator_shorekeeper.png" }
    ],
    synergy: "Outro ของ Changli บัฟ Fusion 20% + Liberation 25% ให้ Encore เต็ม 100% กดยกเลิกอนิเมชันของกันและกัน สลับตัวรัวสกิลต่อเนื่อง ดาเมจต่อวินาที (DPS) พุ่งทะลุเพดาน",
    rotation: [
      { step: 1, char: "Shorekeeper", desc: "บัฟคริติคอลและฮีลทั้งทีมด้วย Stellar Realm" },
      { step: 2, char: "Changli", desc: "เก็บเกจขนนก True Sight -> ฟันนกฟีนิกซ์เปลวเพลิง -> ส่ง Outro บัฟ Fusion + Liberation ให้ Encore" },
      { step: 3, char: "Encore", desc: "แปลงร่าง Cosmos Rave ทุบรัวๆ -> สลับกลับ Changli ทันทีเพื่อแคนเซิลท่า ดาเมจไม่ขาดตอนแม้แต่วินาทีเดียว" }
    ]
  },
  {
    rank: 4,
    tier: "S+",
    name: "Qingloong Wind Dragon Tempest",
    nameTh: "ทีมมังกรพายุเขียว กวาดล้างทั้งเวที",
    highlight: "กวาดล้างมอนสเตอร์เป็นกลุ่มและบอสตัวใหญ่ด้วยพลัง Heavy Attack",
    tags: ["S+ Tier", "Heavy Attack God", "AoE Crowd Control", "Dragon Lance"],
    members: [
      { id: "jiyan", name: "Jiyan", role: "Main DPS", element: "Aero", weapon: "Broadblade", thumb: "assets/characters/resonator_jiyan.png" },
      { id: "mortefi", name: "Mortefi", role: "Sub DPS", element: "Fusion", weapon: "Pistols", thumb: "assets/characters/resonator_mortefi.png" },
      { id: "verina", name: "Verina", role: "Support", element: "Spectro", weapon: "Rectifier", thumb: "assets/characters/resonator_verina.png" }
    ],
    synergy: "ท่าไม้ตายมังกรเขียวของ Jiyan นับเป็น Heavy Attack 100% ซึ่ง Mortefi มอบบัฟ Heavy Attack สูงถึง 38% สูงที่สุดในเกม มอนสเตอร์ทั้งห้องโดนลมดูดและสับแหลก",
    rotation: [
      { step: 1, char: "Verina", desc: "สกิลกระโดดแจกบัฟ ATK 20% + All-DMG Deepen 15% พร้อมบัฟเกราะกุหลาบ" },
      { step: 2, char: "Mortefi", desc: "สกิลเป่ามังกรเพลิงอัลติประสาน -> ส่ง Outro Heavy Attack Deepen +38% ให้ Jiyan" },
      { step: 3, char: "Jiyan", desc: "ปลดปล่อย Qingloong Mode พุ่งควงหอกมังกรกระหน่ำดูดมอนสเตอร์ทั้งเวที ดาเมจเหลืองอร่ามทั้งจอ" }
    ]
  },
  {
    rank: 5,
    tier: "S+",
    name: "Cybernetic Electro Liberation",
    nameTh: "ทีมหมัดจักรกลสายฟ้า เลเซอร์ถล่มบอส",
    highlight: "คอมโบสายฟ้าล้วน บัฟ Resonance Liberation ตรงสาย หมัดคริหลักหมื่น",
    tags: ["S+ Tier", "Resonance Liberation", "Electro Puppetry", "Laser Burst"],
    members: [
      { id: "xiangli_yao", name: "Xiangli Yao", role: "Main DPS", element: "Electro", weapon: "Gauntlets", thumb: "assets/characters/resonator_xiangli_yao.png" },
      { id: "yinlin", name: "Yinlin", role: "Sub DPS", element: "Electro", weapon: "Rectifier", thumb: "assets/characters/resonator_yinlin.png" },
      { id: "shorekeeper", name: "Shorekeeper", role: "Support", element: "Spectro", weapon: "Rectifier", thumb: "assets/characters/resonator_shorekeeper.png" }
    ],
    synergy: "โหมด Cogitation Matrix ของ Xiangli Yao ได้รับผลจาก Outro ของ Yinlin ที่มอบบัฟ Electro 20% + Liberation 25% ตรงสายเต็มๆ หมัดเลเซอร์ติดคริหลักหมื่นทุกฮิต",
    rotation: [
      { step: 1, char: "Shorekeeper", desc: "กางม่าน Stellar Realm มอบบัฟ CRIT Rate 12.5% และ CRIT DMG 25%" },
      { step: 2, char: "Yinlin", desc: "เรียกหุ่นเชิด Zapstring ฟาดสายฟ้ากักขังศัตรู -> ส่ง Outro Electro + Liberation ให้ Xiangli Yao" },
      { step: 3, char: "Xiangli Yao", desc: "เปิดโดมคำนวณลูกเต๋าจักรกล -> ปล่อยอัลติหมัดเลเซอร์ทุบลงพื้นรัว 3 สเต็ปติดคริติคอลกระจาย" }
    ]
  },
  {
    rank: 6,
    tier: "S+",
    name: "Glacio Absolute Zero Precision",
    nameTh: "ทีมสไนเปอร์เยือกแข็งศูนย์สัมบูรณ์",
    highlight: "โจมตีระยะไกล เจาะเกราะเยือกแข็ง ปลอดภัยและรุนแรง",
    tags: ["S+ Tier", "Glacio Resonance", "Sniper Precision", "Safe Distance"],
    members: [
      { id: "carlotta", name: "Carlotta", role: "Main DPS", element: "Glacio", weapon: "Pistols", thumb: "assets/characters/resonator_carlotta.png" },
      { id: "zhezhi", name: "Zhezhi", role: "Sub DPS", element: "Glacio", weapon: "Rectifier", thumb: "assets/characters/resonator_zhezhi.png" },
      { id: "shorekeeper", name: "Shorekeeper", role: "Support", element: "Spectro", weapon: "Rectifier", thumb: "assets/characters/resonator_shorekeeper.png" }
    ],
    synergy: "Carlotta ยิงสไนเปอร์น้ำแข็งระยะไกลประสานงานกับ Zhezhi ที่มอบบัฟ Glacio 20% + Skill 25% และ Shorekeeper บัฟคริติคอล ทำให้กระสุนน้ำแข็งเจาะเกราะบอสได้อย่างแม่นยำและปลอดภัย",
    rotation: [
      { step: 1, char: "Shorekeeper", desc: "กางม่านบัฟพลังดาวและอัตราคริติคอล" },
      { step: 2, char: "Zhezhi", desc: "สาดพู่กันน้ำแข็งสร้างนกช่วยยิง + บัฟ Glacio และ Skill DMG" },
      { step: 3, char: "Carlotta", desc: "ล็อคเป้าชาร์จสไนเปอร์เยือกแข็งยิงเจาะหัวศัตรูจากระยะปลอดภัย ตัวเลขเด้งรัวๆ" }
    ]
  },
  {
    rank: 7,
    tier: "S",
    name: "F2P Dark Scythe Havoc King",
    nameTh: "ทีมเคียวมฤตยู F2P ขวัญใจมหาชน",
    highlight: "ทีมฟรีที่ดาเมจเทียบเท่าตัว 5 ดาวลิมิเต็ด ปั้นง่ายเล่นสนุกสะใจ",
    tags: ["S Tier", "F2P Friendly", "Dark Scythe", "Havoc Deepen +23%"],
    members: [
      { id: "rover_havoc", name: "Rover-Havoc", role: "Main DPS", element: "Havoc", weapon: "Sword", thumb: "assets/characters/resonator_rover_havoc.png" },
      { id: "danjin", name: "Danjin", role: "Sub DPS", element: "Havoc", weapon: "Sword", thumb: "assets/characters/resonator_danjin.png" },
      { id: "verina", role: "Support", name: "Verina", element: "Spectro", weapon: "Rectifier", thumb: "assets/characters/resonator_verina.png" }
    ],
    synergy: "Danjin มอบ Outro บัฟ Havoc Deepen 23% ให้ Havoc Rover ปลดปล่อยพลัง Dark Surge สับเคียวมืดและทุบอัลติ Dead Trance ดาเมจทะลุหลักแสน",
    rotation: [
      { step: 1, char: "Verina", desc: "สกิลและอัลติบัฟพลังโจมตีและฮีลอย่างรวดเร็ว" },
      { step: 2, char: "Danjin", desc: "สับเลือดตัวเองสะสมเกจ Chaos -> ฟันอัลติเลือดสาด -> ส่ง Outro Havoc +23% ให้ Rover" },
      { step: 3, char: "Rover-Havoc", desc: "เข้าสู่ร่างมืด Dark Surge ควงเคียวยมทูตสับต่อเนื่อง 5 ฮิต -> ปิดฉากด้วย Dead Trance ทุบพื้นแตก" }
    ]
  },
  {
    rank: 8,
    tier: "S",
    name: "Death Messenger Electro Assault",
    nameTh: "ทีมยมทูตสายฟ้า ฟันสะบั้นสุดโหด",
    highlight: "เกมเพลย์ฮาร์ดคอร์ ฟันคลื่นดาบต่อเนื่อง Death Messenger อลังการ",
    tags: ["S Tier", "Electro Slasher", "Phantom Etching", "High Skill Ceiling"],
    members: [
      { id: "calcharo", name: "Calcharo", role: "Main DPS", element: "Electro", weapon: "Broadblade", thumb: "assets/characters/resonator_calcharo.png" },
      { id: "yinlin", name: "Yinlin", role: "Sub DPS", element: "Electro", weapon: "Rectifier", thumb: "assets/characters/resonator_yinlin.png" },
      { id: "verina", name: "Verina", role: "Support", element: "Spectro", weapon: "Rectifier", thumb: "assets/characters/resonator_verina.png" }
    ],
    synergy: "Calcharo ในร่าง Phantom Etching รับบัฟ Electro 20% + Liberation 25% จาก Yinlin ฟันคลื่นดาบสายฟ้าและท่า Death Messenger ต่อเนื่องสะใจสายฮาร์ดคอร์",
    rotation: [
      { step: 1, char: "Verina", desc: "บัฟ ATK & ฮีลทีมเต็มพิกัด" },
      { step: 2, char: "Yinlin", desc: "ร่ายสายฟ้าทำเครื่องหมาย Sinister Dappling -> ส่ง Outro บัฟสายฟ้าให้ Calcharo" },
      { step: 3, char: "Calcharo", desc: "สวมร่างเงาปีศาจ ฟันชุดคอมโบ 3 รอบ -> รวบพลัง Death Messenger ฟาดคลื่นสายฟ้ายักษ์" }
    ]
  },
  {
    rank: 9,
    tier: "S",
    name: "Rapid Woolies Fusion Hypercarry",
    nameTh: "ทีมน้องแกะเพลิง ทุบแหลกไร้ความปรานี",
    highlight: "ทางเลือก F2P สุดคุ้มค่า เล่นง่าย คล่องตัว สกิลระเบิดทั้งจอ",
    tags: ["S Tier", "Budget Friendly", "Basic ATK Buff", "Puppet Frenzy"],
    members: [
      { id: "encore", name: "Encore", role: "Main DPS", element: "Fusion", weapon: "Rectifier", thumb: "assets/characters/resonator_encore.png" },
      { id: "sanhua", name: "Sanhua", role: "Sub DPS", element: "Glacio", weapon: "Sword", thumb: "assets/characters/resonator_sanhua.png" },
      { id: "verina", name: "Verina", role: "Support", element: "Spectro", weapon: "Rectifier", thumb: "assets/characters/resonator_verina.png" }
    ],
    synergy: "โหมด Cosmos Rave ของ Encore การโจมตีทั้งหมดนับเป็น Basic Attack การจับคู่กับ Sanhua (บัฟ Basic Attack +38%) ทำให้เป็นทีมที่ปั้นง่าย เล่นคล่อง และดาเมจสูง",
    rotation: [
      { step: 1, char: "Verina", desc: "กางบัฟ ATK 20% และบัฟกุหลาบเร่งเกจ" },
      { step: 2, char: "Sanhua", desc: "ชาร์จเกจเสี้ยวน้ำแข็ง 3 วินาที -> ส่ง Outro Basic Attack +38% ให้ Encore" },
      { step: 3, char: "Encore", desc: "ปลดปล่อยร่าง Cosmos Rave กระโดดขี่ตุ๊กตาแกะไฟทุบพื้นเป็นลาวาระเบิดรัวๆ" }
    ]
  },
  {
    rank: 10,
    tier: "S",
    name: "Dual Fusion Gatling Bullet Burst",
    nameTh: "ทีมปืนคู่เพลิงนรก กราดยิงกระสุน 30 นัด",
    highlight: "กระหน่ำยิงบอสเป้าหมายเดี่ยวหลอดเลือดละลายฮวบด้วย Boom Dance",
    tags: ["S Tier", "Gatling Fire", "Fusion Synergy", "Rapid Fire"],
    members: [
      { id: "chixia", name: "Chixia", role: "Main DPS", element: "Fusion", weapon: "Pistols", thumb: "assets/characters/resonator_chixia.png" },
      { id: "changli", name: "Changli", role: "Sub DPS", element: "Fusion", weapon: "Sword", thumb: "assets/characters/resonator_changli.png" },
      { id: "verina", name: "Verina", role: "Support", element: "Spectro", weapon: "Rectifier", thumb: "assets/characters/resonator_verina.png" }
    ],
    synergy: "Chixia ชาร์จกระสุน 30 นัด กราดยิงสกิล Boom Dance ทะลวงบอส พร้อมรับบัฟ Fusion Deepen 20% จาก Changli และบัฟพลังโจมตีจาก Verina หลอดเลือดบอสละลายฮวบ",
    rotation: [
      { step: 1, char: "Verina", desc: "บัฟพลังโจมตีและฮีลทั้งทีม" },
      { step: 2, char: "Changli", desc: "ฟันเฟิ่งหวงเปลวเพลิงสร้างเปลวไฟ -> ส่ง Outro Fusion +20% ให้ Chixia" },
      { step: 3, char: "Chixia", desc: "สาดกระสุนปืนคู่ Boom Dance 30 นัดรัวต่อเนื่อง -> จบด้วยกระสุนระเบิด Blazing Fireworks" }
    ]
  }
];
