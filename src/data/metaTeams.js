export const metaTeams = [
  {
    rank: 1,
    tier: "SSS+",
    name: "Aemeath Solar Blaze Hypercarry",
    nameTh: "อันดับ 1: Aemeath (เอมิธ) + Mornye (มอร์นี) + Shorekeeper",
    highlight: "ทีมอันดับ 1 เมต้าใหม่ล่าสุด v3.x เพลิงผลาญระดับมหาจักรพรรดินี ดาเมจต่อวินาทีสูงที่สุดในยุคใหม่",
    tags: ["อันดับ 1 เมต้าใหม่", "SSS+ Tier", "Aemeath Hypercarry", "v3.1 Meta"],
    members: [
      { id: "aemeath", name: "Aemeath", role: "Main DPS", element: "Fusion", weapon: "Sword", thumb: "assets/characters/resonator_aemeath.png" },
      { id: "mornye", name: "Mornye", role: "Sub DPS", element: "Fusion", weapon: "Broadblade", thumb: "assets/characters/resonator_mornye.png" },
      { id: "shorekeeper", name: "Shorekeeper", role: "Support", element: "Spectro", weapon: "Rectifier", thumb: "assets/characters/resonator_shorekeeper.png" }
    ],
    synergy: "Aemeath (เอมิธ) คือดาบเพลิงยุคใหม่ v3.1 ที่มีสเกลสกิลเพลิงทำลายล้างสูงสุด เมื่อจับคู่กับ Mornye (มอร์นี) ดาบใหญ่เพลิงที่ช่วยเปิดเกราะและส่งต่อ Outro Fusion Amplification ผสานกับโดมคริติคอลของ Shorekeeper ทำให้เพลงดาบของเอมิธผลาญเลือดบอสหมดหลอดในพริบตา",
    rotation: [
      { step: 1, char: "Shorekeeper", desc: "เปิด Stellar Realm บัฟ CRIT Rate 12.5% และ CRIT DMG 25% พร้อมฮีล" },
      { step: 2, char: "Mornye", desc: "ฟาดดาบใหญ่เพลิงทำลายเกราะศัตรู -> ส่ง Outro Fusion DMG Deepen ให้ Aemeath" },
      { step: 3, char: "Aemeath", desc: "ควงดาบเพลิงเอมิธ ปลดปล่อยระบำเพลิงสุริยะ สับบอสละลายด้วยตัวเลขดาเมจหลักแสนทุกฮิต!" }
    ]
  },
  {
    rank: 2,
    tier: "SSS+",
    name: "Hiyuki Glacio Frost Sovereign",
    nameTh: "อันดับ 2: Hiyuki (ฮิยูกิ) + Suisui (สุ่ยสุ่ย) + Shorekeeper",
    highlight: "ทีมนักดาบเยือกแข็งฮิยูกิ v3.3 ตัดผ่านมิติ แช่แข็งบอสถาวรพร้อมคริติคอลทะลุหลอด",
    tags: ["อันดับ 2 เมต้าใหม่", "SSS+ Tier", "Hiyuki Frost", "v3.3 Meta"],
    members: [
      { id: "hiyuki", name: "Hiyuki", role: "Main DPS", element: "Glacio", weapon: "Sword", thumb: "assets/characters/resonator_hiyuki.png" },
      { id: "suisui", name: "Suisui", role: "Sub DPS", element: "Glacio", weapon: "Rectifier", thumb: "assets/characters/resonator_suisui.png" },
      { id: "shorekeeper", name: "Shorekeeper", role: "Support", element: "Spectro", weapon: "Rectifier", thumb: "assets/characters/resonator_shorekeeper.png" }
    ],
    synergy: "Hiyuki (ฮิยูกิ) ตัวทำดาเมจสายดาบน้ำแข็งยุค v3.3 ที่มีอัตราเจาะเกราะเยือกแข็งสูงสุดในเกม ได้รับการสนับสนุนจาก Suisui (สุ่ยสุ่ย v3.5) ที่สร้างสนามพลังน้ำแข็งประสานและบัฟดาเมจ Glacio เสริมด้วย Shorekeeper ทำให้การฟันของฮิยูกิติดคริติคอล 100% ตลอดการต่อสู้",
    rotation: [
      { step: 1, char: "Shorekeeper", desc: "กางม่านดวงดาว Stellar Realm ฟูลฮีลและแจกบัฟคริติคอล" },
      { step: 2, char: "Suisui", desc: "ร่ายเวทม่านหิมะสุ่ยสุ่ย แช่แข็งลดความเร็วศัตรู -> ส่ง Outro Glacio Deepen ให้ Hiyuki" },
      { step: 3, char: "Hiyuki", desc: "ฮิยูกิชักดาบตัดมิติเยือกแข็ง ระเบิดเกล็ดหิมะสังหาร บอสโดนแช่แข็งและสลายตัวทันที" }
    ]
  },
  {
    rank: 3,
    tier: "SSS+",
    name: "Yangyang: Xuanling Havoc Avatar",
    nameTh: "อันดับ 3: Yangyang: Xuanling (หยางหยาง เสวียนหลิง) + Chisa + Shorekeeper",
    highlight: "หยางหยางร่าง 5 ดาวเสวียนหลิง v3.5 พลังมืดมฤตยู ดาบเคียวมืดกวาดล้างทั้งสนามรบ",
    tags: ["อันดับ 3 เมต้าใหม่", "SSS+ Tier", "Yangyang Xuanling", "v3.5 Meta"],
    members: [
      { id: "yangyang_xuanling", name: "Yangyang: Xuanling", role: "Main DPS", element: "Havoc", weapon: "Sword", thumb: "assets/characters/resonator_yangyang_xuanling.png" },
      { id: "chisa", name: "Chisa", role: "Sub DPS", element: "Havoc", weapon: "Broadblade", thumb: "assets/characters/resonator_chisa.png" },
      { id: "shorekeeper", name: "Shorekeeper", role: "Support", element: "Spectro", weapon: "Rectifier", thumb: "assets/characters/resonator_shorekeeper.png" }
    ],
    synergy: "Yangyang: Xuanling (หยางหยาง: เสวียนหลิง) ร่าง 5 ดาวธาตุมืด Havoc ยุค v3.5 ทรงพลังระดับปรากฏการณ์ ด้วยเพลงดาบพายุทมิฬ ดูดรวบและสับมอนสเตอร์ทุกตัว ผสานกับ Chisa (ชิสะ v2.8) ที่ช่วยบดขยี้เกราะด้วยดาบใหญ่ และ Shorekeeper ที่ค้ำประกันอัตราคริติคอล",
    rotation: [
      { step: 1, char: "Shorekeeper", desc: "กาง Stellar Realm บัฟคริติคอลและความเร็ว" },
      { step: 2, char: "Chisa", desc: "ฟาดดาบใหญ่ชิสะระเบิดเกราะมืด -> ส่ง Outro Havoc Resonance ให้หยางหยางเสวียนหลิง" },
      { step: 3, char: "Yangyang: Xuanling", desc: "ปลดปล่อยร่างเสวียนหลิง พายุทมิฬกลืนตะวัน ฟันดาบมืดกวาดล้างทั้งเวทีดาเมจหลักล้าน!" }
    ]
  },
  {
    rank: 4,
    tier: "SSS",
    name: "Qingxiao Celestial Wind Sovereign",
    nameTh: "อันดับ 4: Qingxiao (ชิงเซียว) + Sigrika (ซิกริกา) + Shorekeeper",
    highlight: "ทีมกระบี่สายลมเหินเวหา v3.6 เพลงกระบี่หมื่นเล่มทะลวงบอส ดาเมจ Aero ต่อเนื่องสูงสุด",
    tags: ["อันดับ 4 เมต้าใหม่", "SSS Tier", "Qingxiao Aero", "v3.6 Meta"],
    members: [
      { id: "qingxiao", name: "Qingxiao", role: "Main DPS", element: "Aero", weapon: "Sword", thumb: "assets/characters/resonator_qingxiao.png" },
      { id: "sigrika", name: "Sigrika", role: "Sub DPS", element: "Aero", weapon: "Gauntlets", thumb: "assets/characters/resonator_sigrika.png" },
      { id: "shorekeeper", name: "Shorekeeper", role: "Support", element: "Spectro", weapon: "Rectifier", thumb: "assets/characters/resonator_shorekeeper.png" }
    ],
    synergy: "Qingxiao (ชิงเซียว v3.6) ปรมาจารย์กระบี่สายลมที่สามารถควบคุมกระบี่บินนับพันเล่ม โจมตีประสานกับหมัดพายุของ Sigrika (ซิกริกา v3.2) ที่เร่งเกจ Concerto และมอบบัฟ Aero Deepen สูงสุด ทำให้ศัตรูไม่สามารถตกลงสู่พื้นได้เลย",
    rotation: [
      { step: 1, char: "Shorekeeper", desc: "เปิด Stellar Realm บัฟคริติคอล" },
      { step: 2, char: "Sigrika", desc: "ปล่อยหมัดสายลมซิกริกา รวบศัตรูขึ้นฟ้า -> ส่ง Outro ให้ Qingxiao" },
      { step: 3, char: "Qingxiao", desc: "ชิงเซียวเหินเวหา อัญเชิญหมื่นกระบี่สายลมสาดถล่มเป็นสายฝนลงมาบอสสลาย" }
    ]
  },
  {
    rank: 5,
    tier: "SSS",
    name: "Jingran Solar Flare Broadblade",
    nameTh: "อันดับ 5: Jingran (จิงหราน) + Denia (เดเนีย) + Shorekeeper",
    highlight: "ทีมดาบใหญ่เพลิงสุริยคราส v3.6 ฟันผ่ามิติเพลิงคลื่นยักษ์ ดาเมจช็อตเดียวบอสหาย",
    tags: ["อันดับ 5 เมต้าใหม่", "SSS Tier", "Jingran Fusion", "v3.6 Meta"],
    members: [
      { id: "jingran", name: "Jingran", role: "Main DPS", element: "Fusion", weapon: "Broadblade", thumb: "assets/characters/resonator_jingran.png" },
      { id: "denia", name: "Denia", role: "Sub DPS", element: "Fusion", weapon: "Rectifier", thumb: "assets/characters/resonator_denia.png" },
      { id: "shorekeeper", name: "Shorekeeper", role: "Support", element: "Spectro", weapon: "Rectifier", thumb: "assets/characters/resonator_shorekeeper.png" }
    ],
    synergy: "Jingran (จิงหราน v3.6) ดาบใหญ่เพลิงพลังสุริยะ ผสานกับ Denia (เดเนีย v3.3) สื่อเวทเพลิงที่ช่วยร่ายอาณาเขตลาวาเผาผลาญเกจของศัตรูอย่างต่อเนื่อง เป็นทีมธาตุไฟสายบดขยี้ที่ดาเมจต่อช็อตสูงมาก",
    rotation: [
      { step: 1, char: "Shorekeeper", desc: "กางโดม Stellar Realm บัฟคริติคอล" },
      { step: 2, char: "Denia", desc: "เดเนียร่ายเวทอาณาเขตเพลิงกักขังบอส -> ส่ง Outro บัฟไฟให้ Jingran" },
      { step: 3, char: "Jingran", desc: "จิงหรานเงื้อดาบใหญ่สุริยคราส ฟาดคลื่นลาวาผ่าครึ่งสนามรบ ดาเมจทะลุหลอด" }
    ]
  },
  {
    rank: 6,
    tier: "SS+",
    name: "Suoming Electro God Lightning",
    nameTh: "อันดับ 6: Suoming (สั่วหมิง) + Hsin (ซิน) + Rover-Electro",
    highlight: "ทีมสายฟ้าไร้เทียมทานยุคใหม่ สั่วหมิงควงดาบอัสนีบาต ประสานเวทสายฟ้าซิน",
    tags: ["อันดับ 6 เมต้าใหม่", "SS+ Tier", "Suoming Electro", "TBA Meta"],
    members: [
      { id: "suoming", name: "Suoming", role: "Main DPS", element: "Electro", weapon: "Sword", thumb: "assets/characters/resonator_suoming.png" },
      { id: "hsin", name: "Hsin", role: "Sub DPS", element: "Electro", weapon: "Rectifier", thumb: "assets/characters/resonator_hsin.png" },
      { id: "rover_electro", name: "Rover-Electro", role: "Support", element: "Electro", weapon: "Sword", thumb: "assets/characters/resonator_rover_electro.png" }
    ],
    synergy: "Suoming (สั่วหมิง) และ Hsin (ซิน) คู่หูสายฟ้ายุคใหม่ ฟันดาบสะสมประจุไฟฟ้าความถี่สูง ผสานกับ Rover-Electro (ผู้เดินทางไฟฟ้า v3.5) เกิดเป็น Resonance สายฟ้า 3 ตัวละครที่ช็อตศัตรูต่อเนื่องทั้งเวที",
    rotation: [
      { step: 1, char: "Rover-Electro", desc: "เปิดสนามแม่เหล็กไฟฟ้า บัฟประจุอัสนีบาตทั้งทีม" },
      { step: 2, char: "Hsin", desc: "ซินร่ายอาณาเขตไฟฟ้าผ่าทำลายเกจสั่นสะเทือน -> ส่ง Outro ให้สั่วหมิง" },
      { step: 3, char: "Suoming", desc: "สั่วหมิงพุ่งฟันดาบอัสนีบาตไร้เงา สายฟ้าฟาดผ่าบอสต่อเนื่องนับสิบครั้ง" }
    ]
  },
  {
    rank: 7,
    tier: "SS+",
    name: "Lucy Divine Spectro Pistols",
    nameTh: "อันดับ 7: Lucy (ลูซี่) + Lynae (ไลนี) + Luuk Herssen",
    highlight: "ทีมปืนคู่และสนับมือแสงศักดิ์สิทธิ์ ยิงกราดกระสุนแสงรัวทะลุเกราะทุกประเภท",
    tags: ["อันดับ 7 เมต้าใหม่", "SS+ Tier", "Lucy Pistols", "v3.4 Meta"],
    members: [
      { id: "lucy", name: "Lucy", role: "Main DPS", element: "Spectro", weapon: "Pistols", thumb: "assets/characters/resonator_lucy.png" },
      { id: "lynae", name: "Lynae", role: "Sub DPS", element: "Spectro", weapon: "Pistols", thumb: "assets/characters/resonator_lynae.png" },
      { id: "luuk_herssen", name: "Luuk Herssen", role: "Support", element: "Spectro", weapon: "Gauntlets", thumb: "assets/characters/resonator_luuk_herssen.png" }
    ],
    synergy: "Lucy (ลูซี่ v3.4) ปืนคู่ธาตุแสงผสานกับ Lynae (ไลนี v3.0) สาดกระสุนแสงประสานแบบ Gun-Kata โดยมี Luuk Herssen (ลุค เฮอร์เซน v3.1) คอยชกหยุดจังหวะและกางเกราะป้องกัน เป็นทีมแสงที่ยิงต่อเนื่องและคล่องตัวสูง",
    rotation: [
      { step: 1, char: "Luuk Herssen", desc: "ชกคลื่นสุริยะกางบาเรียป้องกันและแจกบัฟ Spectro" },
      { step: 2, char: "Lynae", desc: "ไลนีกราดยิงกระสุนแสงหยุดจังหวะบอส -> ส่ง Outro ให้ Lucy" },
      { step: 3, char: "Lucy", desc: "ลูซี่ลั่นไกปืนคู่แสงศักดิ์สิทธิ์ ระดมยิงเจาะเกราะบอสด้วยกระสุนคริติคอลรัวๆ" }
    ]
  },
  {
    rank: 8,
    tier: "SS+",
    name: "Lucilla Absolute Glacio Storm",
    nameTh: "อันดับ 8: Lucilla (ลูซิลลา) + Hiyuki (ฮิยูกิ) + Shorekeeper",
    highlight: "ทีมพายุเยือกแข็งลูซิลลา & ฮิยูกิ ม่านหิมะศูนย์สัมบูรณ์ ปลอดภัยและหนาแน่น",
    tags: ["อันดับ 8 เมต้าใหม่", "SS+ Tier", "Glacio Frost", "v3.4 Meta"],
    members: [
      { id: "lucilla", name: "Lucilla", role: "Main DPS", element: "Glacio", weapon: "Rectifier", thumb: "assets/characters/resonator_lucilla.png" },
      { id: "hiyuki", name: "Hiyuki", role: "Sub DPS", element: "Glacio", weapon: "Sword", thumb: "assets/characters/resonator_hiyuki.png" },
      { id: "shorekeeper", name: "Shorekeeper", role: "Support", element: "Spectro", weapon: "Rectifier", thumb: "assets/characters/resonator_shorekeeper.png" }
    ],
    synergy: "Lucilla (ลูซิลลา v3.4) กางอาณาเขตพายุหิมะน้ำแข็งเวทมนตร์วงกว้าง โดยมี Hiyuki (ฮิยูกิ v3.3) ช่วยชักดาบตัดมิติน้ำแข็งซ้ำเติมจุดอ่อน ทำให้เกิดการแช่แข็งแบบไม่สิ้นสุด",
    rotation: [
      { step: 1, char: "Shorekeeper", desc: "เปิด Stellar Realm บัฟคริติคอล" },
      { step: 2, char: "Hiyuki", desc: "ฮิยูกิฟันดาบน้ำแข็งแช่แข็งศัตรู -> ส่ง Outro ให้ Lucilla" },
      { step: 3, char: "Lucilla", desc: "ลูซิลลาร่ายพายุหิมะกลืนกินสนามรบ ระเบิดผลึกน้ำแข็งสร้างดาเมจกระจาย" }
    ]
  },
  {
    rank: 9,
    tier: "SS",
    name: "Rebecca Cybernetic Gunslinger",
    nameTh: "อันดับ 9: Rebecca (รีเบคกา) + Buling (ปู้หลิง) + Shorekeeper",
    highlight: "ทีมปืนคู่สายฟ้าความเร็วสูง รีเบคกาสาดกระสุนอัสนีบาต ปู้หลิงช่วยชาร์จประจุ",
    tags: ["อันดับ 9 เมต้าใหม่", "SS Tier", "Rebecca Electro", "v3.4 Meta"],
    members: [
      { id: "rebecca", name: "Rebecca", role: "Main DPS", element: "Electro", weapon: "Pistols", thumb: "assets/characters/resonator_rebecca.png" },
      { id: "buling", name: "Buling", role: "Sub DPS", element: "Electro", weapon: "Rectifier", thumb: "assets/characters/resonator_buling.png" },
      { id: "shorekeeper", name: "Shorekeeper", role: "Support", element: "Spectro", weapon: "Rectifier", thumb: "assets/characters/resonator_shorekeeper.png" }
    ],
    synergy: "Rebecca (รีเบคกา v3.4) ปืนคู่สายฟ้าสุดเท่ คล่องตัวสูง เคลื่อนที่ยิงรวดเร็ว Buling (ปู้หลิง v2.8) ร่ายกระแสไฟฟ้าบัฟพลังงานและรีชาร์จสกิล ทำให้รีเบคกาสามารถกดสกิลยิงกระสุนอัสนีบาตได้ต่อเนื่องไร้สะดุด",
    rotation: [
      { step: 1, char: "Shorekeeper", desc: "กางม่าน Stellar Realm บัฟคริติคอล" },
      { step: 2, char: "Buling", desc: "ปู้หลิงปล่อยกระแสไฟฟ้าชาร์จประจุ -> ส่ง Outro ให้ Rebecca" },
      { step: 3, char: "Rebecca", desc: "รีเบคกาสไลด์ตัวสาดกระสุนสายฟ้ารอบทิศทาง ดาเมจคริติคอลระเบิดรัวๆ" }
    ]
  },
  {
    rank: 10,
    tier: "SS",
    name: "Camellya Blood Vine Queen",
    nameTh: "อันดับ 10: Camellya (คาเมลเลีย) + Yangyang: Xuanling + Shorekeeper",
    highlight: "ทีมดูโอ้มหาอำนาจธาตุมืด Havoc คาเมลเลีย & หยางหยางเสวียนหลิง สับสะบั้นทุกสิ่ง",
    tags: ["อันดับ 10 เมต้าใหม่", "SS Tier", "Havoc Dual Power", "v3.5 Meta"],
    members: [
      { id: "camellya", name: "Camellya", role: "Main DPS", element: "Havoc", weapon: "Sword", thumb: "assets/characters/resonator_camellya.png" },
      { id: "yangyang_xuanling", name: "Yangyang: Xuanling", role: "Sub DPS", element: "Havoc", weapon: "Sword", thumb: "assets/characters/resonator_yangyang_xuanling.png" },
      { id: "shorekeeper", name: "Shorekeeper", role: "Support", element: "Spectro", weapon: "Rectifier", thumb: "assets/characters/resonator_shorekeeper.png" }
    ],
    synergy: "การจับคู่ระหว่างสองสุดยอดตัวละครธาตุมืด Yangyang: Xuanling (หยางหยาง เสวียนหลิง v3.5) ช่วยรวบศัตรูและแจกบัฟ Havoc จากนั้น Camellya เข้ามาหมุนสับเถาวัลย์ Blossom Swirl กวาดล้างทั้งห้อง เป็นทีมธาตุมืดที่แรงและเล่นมันส์ที่สุด",
    rotation: [
      { step: 1, char: "Shorekeeper", desc: "กางโดม Stellar Realm บัฟคริติคอล" },
      { step: 2, char: "Yangyang: Xuanling", desc: "หยางหยางเสวียนหลิงฟันพายุดูดมอนสเตอร์ -> ส่ง Outro ให้ Camellya" },
      { step: 3, char: "Camellya", desc: "คาเมลเลียเข้า Blossom Mode หมุนสับเถาวัลย์สีเลือดกวาดล้างศัตรูทั้งห้อง" }
    ]
  }
];