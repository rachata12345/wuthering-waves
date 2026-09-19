export const metaTeams = [
  {
    rank: 1,
    tier: "T0 Apex",
    name: "Aemeath Tune Rupture Premier",
    nameTh: "อันดับ 1: Aemeath (เอมิธ) + Lynae (ไลนี) + Mornye (มอร์นี)",
    highlight: "ทีมที่ดีที่สุดและตรงสายที่สุดของ Aemeath (Prydwen T0 Apex) เมต้า Tune Rupture ระเบิดดาเมจเดี่ยวสูงสุด",
    tags: ["อันดับ 1", "T0 Apex", "Aemeath BiS", "Tune Rupture"],
    members: [
      { id: "aemeath", name: "Aemeath", role: "Main DPS", element: "Fusion", weapon: "Sword", thumb: "assets/characters/resonator_aemeath.png" },
      { id: "lynae", name: "Lynae", role: "Sub DPS", element: "Spectro", weapon: "Pistols", thumb: "assets/characters/resonator_lynae.png" },
      { id: "mornye", name: "Mornye", role: "Support / Buffer", element: "Fusion", weapon: "Broadblade", thumb: "assets/characters/resonator_mornye.png" }
    ],
    synergy: "ทีม Best-in-Slot (BiS) ตรงสาย 100% ของ Aemeath ตามเมต้า Prydwen ล่าสุด โดย Aemeath สาย Tune Rupture ต้องการการแปะ Tune Effects ต่อเนื่อง ซึ่ง Lynae ยิงปืนคู่แปะ Tune ได้แม่นยำที่สุด และ Mornye มอบบัฟ Tune Amplification + ทุบเกราะ ทำให้เพลงดาบระบำเพลิงของเอมิธระเบิดดาเมจได้เต็มเพดานคำนวณ",
    rotation: [
      { step: 1, char: "Mornye", desc: "ฟาดดาบใหญ่เพลิงทำลายเกราะศัตรู -> ส่งบัฟ Tune Amplification" },
      { step: 2, char: "Lynae", desc: "ยิงปืนคู่สาดกระสุนแสงแปะ Tune Effects เต็มพิกัด -> ส่ง Outro ให้ Aemeath" },
      { step: 3, char: "Aemeath", desc: "เอมิธเข้าสู่โหมด Tune Rupture ควงดาบเพลิงสับบอสระเบิดด้วยตัวเลขดาเมจนิวเคลียร์!" }
    ]
  },
  {
    rank: 2,
    tier: "T0 Apex",
    name: "Hiyuki Glacio Chafe Sovereign",
    nameTh: "อันดับ 2: Hiyuki (ฮิยูกิ) + Lucilla (ลูซิลลา) + Suisui (สุ่ยสุ่ย)",
    highlight: "ทีม Best-in-Slot ของ Hiyuki ตรงสาย Glacio Chafe แช่แข็งและฟันหยุดเวลา Time-stop ต่อเนื่อง",
    tags: ["อันดับ 2", "T0 Apex", "Hiyuki BiS", "Glacio Chafe"],
    members: [
      { id: "hiyuki", name: "Hiyuki", role: "Main DPS", element: "Glacio", weapon: "Sword", thumb: "assets/characters/resonator_hiyuki.png" },
      { id: "lucilla", name: "Lucilla", role: "Sub DPS", element: "Glacio", weapon: "Rectifier", thumb: "assets/characters/resonator_lucilla.png" },
      { id: "suisui", name: "Suisui", role: "Support", element: "Glacio", weapon: "Rectifier", thumb: "assets/characters/resonator_suisui.png" }
    ],
    synergy: "ตี้ทางการที่เก่งที่สุดของฮิยูกิ Lucilla คือพาร์ทเนอร์อันดับ 1 ของ Hiyuki ที่ซินเนอร์จี้ในโหมด Glacio Chafe ได้สมบูรณ์แบบที่สุด ส่วน Suisui คือซัพพอร์ตสาย Negative Status ที่บัฟการดูดกลืนแต้ม Dedication ของฮิยูกิ ทำให้สามารถใช้ท่าชาร์จฟันหยุดเวลา (Time-stop Heavy Attack) สับบอสละลายได้แบบไม่มีใครเทียบ",
    rotation: [
      { step: 1, char: "Suisui", desc: "กางม่านหิมะสุ่ยสุ่ย แจกบัฟ Negative Status และฟื้นฟูทีม" },
      { step: 2, char: "Lucilla", desc: "ร่ายเวทพายุเยือกแข็งแปะ Glacio Chafe รัวๆ -> ส่ง Outro ให้ Hiyuki" },
      { step: 3, char: "Hiyuki", desc: "ฮิยูกิ Intro เข้ามาเก็บ Dedication สแต็คเต็ม -> ฟันหยุดเวลา Time-stop ตัดมิติเยือกแข็ง ดาเมจทะลุหลอด!" }
    ]
  },
  {
    rank: 3,
    tier: "T0 Apex",
    name: "Yangyang: Xuanling Havoc Bane",
    nameTh: "อันดับ 3: Yangyang: Xuanling (หยางหยาง เสวียนหลิง) + Chisa (ชิสะ) + Suisui (สุ่ยสุ่ย)",
    highlight: "ตี้เมต้าอันดับ 1 ของหยางหยางร่างเสวียนหลิง สาย Havoc Bane พายุทมิฬดูดกลืนทุกสิ่ง",
    tags: ["อันดับ 3", "T0 Apex", "Xuanling BiS", "Havoc Bane"],
    members: [
      { id: "yangyang_xuanling", name: "Yangyang: Xuanling", role: "Main DPS", element: "Havoc", weapon: "Sword", thumb: "assets/characters/resonator_yangyang_xuanling.png" },
      { id: "chisa", name: "Chisa", role: "Sub DPS", element: "Havoc", weapon: "Broadblade", thumb: "assets/characters/resonator_chisa.png" },
      { id: "suisui", name: "Suisui", role: "Support", element: "Glacio", weapon: "Rectifier", thumb: "assets/characters/resonator_suisui.png" }
    ],
    synergy: "นี่คือทีมพรีเมียมอันดับ 1 ของ Yangyang: Xuanling ตามไกด์ Prydwen โดยหยางหยางร่างนี้เน้นดาเมจ Havoc Bane และ Heavy Attack ซึ่ง Chisa เป็นตัวต่อสถานะ Havoc Bane ค้างไว้ได้ 100% และ Suisui บัฟความเสียหายดีบัฟสถานะ ทำให้หยางหยางเสวียนหลิงควงดาบพายุทมิฬกวาดล้างศัตรูทั้งสนามรบ",
    rotation: [
      { step: 1, char: "Suisui", desc: "ร่ายสกิลบัฟ Negative Status ทั้งทีมและเร่งเกจ Concerto" },
      { step: 2, char: "Chisa", desc: "ฟาดดาบใหญ่แปะสถานะ Havoc Bane ค้างไว้ -> ส่ง Outro ให้หยางหยางเสวียนหลิง" },
      { step: 3, char: "Yangyang: Xuanling", desc: "หยางหยางเสวียนหลิงเปิดพายุทมิฬ ดูดรวบมอนสเตอร์แล้วฟัน Heavy Attack ซ้ำดาเมจตัวเลขหลักล้าน!" }
    ]
  },
  {
    rank: 4,
    tier: "T0",
    name: "Triple Sovereign Negative Status Burst",
    nameTh: "อันดับ 4: Aemeath (เอมิธ) + Hiyuki (ฮิยูกิ) + Yangyang: Xuanling (หยางหยาง)",
    highlight: "ทีมรวม 3 จอมทัพเทพยุคใหม่ (เอมิธ + ฮิยูกิ + หยางหยาง) ตี้ Triple DPS สลับฟันแคนเซิลคอมโบ",
    tags: ["อันดับ 4", "T0 Dream Team", "Triple DPS", "Status Combo"],
    members: [
      { id: "aemeath", name: "Aemeath", role: "Main / Quickswap", element: "Fusion", weapon: "Sword", thumb: "assets/characters/resonator_aemeath.png" },
      { id: "hiyuki", name: "Hiyuki", role: "Main / Quickswap", element: "Glacio", weapon: "Sword", thumb: "assets/characters/resonator_hiyuki.png" },
      { id: "yangyang_xuanling", name: "Yangyang: Xuanling", role: "Main / Quickswap", element: "Havoc", weapon: "Sword", thumb: "assets/characters/resonator_yangyang_xuanling.png" }
    ],
    synergy: "ตี้ในฝันที่รวบรวม 3 ตัวละครดาบสั้นที่เก่งที่สุดในประวัติศาสตร์เกม! ทั้ง 3 ตัวเล่นอยู่ในเมต้า Negative Status / Rupture เหมือนกัน หยางหยางเสวียนหลิงเปิดพายุดูดรวบศัตรู -> ฮิยูกิสลับเข้ามาฟันแช่แข็งหยุดเวลา -> เอมิธสลับเข้ามาสับระบำเพลิงผลาญซ้ำ ซ้อนทับ 3 ธาตุ (Havoc + Glacio + Fusion) บอสไม่มีจังหวะได้ขยับแม้แต่ก้าวเดียว!",
    rotation: [
      { step: 1, char: "Yangyang: Xuanling", desc: "หยางหยางเสวียนหลิงเปิดอัลติพายุทมิฬ ดูดรวบศัตรูทั้งห้องมารวมที่จุดเดียว" },
      { step: 2, char: "Hiyuki", desc: "สลับฮิยูกิเข้ามาทันที ฟันหยุดเวลา Time-stop แช่แข็งกลุ่มศัตรูทั้งหมด" },
      { step: 3, char: "Aemeath", desc: "สลับเอมิธเข้ามาปิดฉาก สับระบำเพลิงผลาญระเบิดใส่กลุ่มศัตรูที่ถูกแช่แข็ง ดาเมจทับซ้อนตายเรียบ!" }
    ]
  },
  {
    rank: 5,
    tier: "T0",
    name: "Qingxiao Celestial Wind Sovereign",
    nameTh: "อันดับ 5: Qingxiao (ชิงเซียว) + Sigrika (ซิกริกา) + Shorekeeper",
    highlight: "ทีมกระบี่สายลมเหินเวหา v3.6 ฝนกระบี่หมื่นเล่มทะลวงบอส ศัตรูลอยเคว้งไม่ตกพื้น",
    tags: ["อันดับ 5", "T0", "Qingxiao BiS", "Aero Sovereign"],
    members: [
      { id: "qingxiao", name: "Qingxiao", role: "Main DPS", element: "Aero", weapon: "Sword", thumb: "assets/characters/resonator_qingxiao.png" },
      { id: "sigrika", name: "Sigrika", role: "Sub DPS", element: "Aero", weapon: "Gauntlets", thumb: "assets/characters/resonator_sigrika.png" },
      { id: "shorekeeper", name: "Shorekeeper", role: "Support", element: "Spectro", weapon: "Rectifier", thumb: "assets/characters/resonator_shorekeeper.png" }
    ],
    synergy: "Qingxiao ปรมาจารย์กระบี่สายลมควบคุมกระบี่บินนับหมื่นเล่ม โจมตีประสานกับหมัดพายุของ Sigrika ที่เร่งเกจ Concerto และมอบบัฟ Aero Deepen สูงสุด ผสานกับโดมคริติคอลของ Shorekeeper",
    rotation: [
      { step: 1, char: "Shorekeeper", desc: "เปิด Stellar Realm บัฟคริติคอลและฮีล" },
      { step: 2, char: "Sigrika", desc: "ปล่อยหมัดสายลมซิกริกา รวบศัตรูขึ้นฟ้า -> ส่ง Outro ให้ Qingxiao" },
      { step: 3, char: "Qingxiao", desc: "ชิงเซียวเหินเวหา อัญเชิญหมื่นกระบี่สายลมสาดถล่มเป็นสายฝนลงมาบอสสลาย" }
    ]
  },
  {
    rank: 6,
    tier: "T0",
    name: "Jingran Solar Flare Broadblade",
    nameTh: "อันดับ 6: Jingran (จิงหราน) + Denia (เดเนีย) + Mornye (มอร์นี)",
    highlight: "ทีมดาบใหญ่เพลิงสุริยคราส v3.6 ผ่ามิติเพลิงคลื่นยักษ์ ดาเมจต่อช็อตสูงที่สุด",
    tags: ["อันดับ 6", "T0", "Jingran BiS", "Solar Flare"],
    members: [
      { id: "jingran", name: "Jingran", role: "Main DPS", element: "Fusion", weapon: "Broadblade", thumb: "assets/characters/resonator_jingran.png" },
      { id: "denia", name: "Denia", role: "Sub DPS", element: "Fusion", weapon: "Rectifier", thumb: "assets/characters/resonator_denia.png" },
      { id: "mornye", name: "Mornye", role: "Support", element: "Fusion", weapon: "Broadblade", thumb: "assets/characters/resonator_mornye.png" }
    ],
    synergy: "ทีม Mono Fusion สายดาบใหญ่ทำลายล้าง Jingran ผสานกับ Denia ที่ร่ายอาณาเขตลาวา และ Mornye ที่ช่วยเปิดเกราะศัตรู เป็นทีมธาตุไฟสายบดขยี้ที่ฟันฮิตเดียวบอสเลือดหายเกือบหมดหลอด",
    rotation: [
      { step: 1, char: "Mornye", desc: "ทุบเปิดเกราะและมอบบัฟธาตุไฟ" },
      { step: 2, char: "Denia", desc: "ร่ายอาณาเขตเพลิงลาวา -> ส่ง Outro ให้ Jingran" },
      { step: 3, char: "Jingran", desc: "จิงหรานฟาดดาบใหญ่สุริยคราส ผ่าครึ่งสนามรบด้วยคลื่นเพลิงยักษ์" }
    ]
  },
  {
    rank: 7,
    tier: "T0",
    name: "Cyberpunk Edgerunners Cyberspace Protocol",
    nameTh: "อันดับ 7: Lucy (ลูซี่) + Rebecca (รีเบคกา) + Mornye (มอร์นี)",
    highlight: "ทีมไซเบอร์พังก์สมบูรณ์แบบ Lucy & Rebecca ผสานพลังซัพพอร์ตของ Mornye หลบการแย่งชอร์คีปเปอร์ใน ToA",
    tags: ["อันดับ 7", "T0", "Cyberpunk Duo", "Lucy & Rebecca BiS"],
    members: [
      { id: "lucy", name: "Lucy", role: "Main DPS", element: "Spectro", weapon: "Pistols", thumb: "assets/characters/resonator_lucy.png" },
      { id: "rebecca", name: "Rebecca", role: "Sub DPS / Buffer", element: "Electro", weapon: "Pistols", thumb: "assets/characters/resonator_rebecca.png" },
      { id: "mornye", name: "Mornye", role: "Support / Sustain", element: "Fusion", weapon: "Broadblade", thumb: "assets/characters/resonator_mornye.png" }
    ],
    synergy: "ตี้ที่ถูกต้องและสมบูรณ์ที่สุดของ Lucy! ในการลง Tower of Adversity ต้องแบ่ง 3 ทีม ทำให้ Shorekeeper โดนจองไปกับทีมอื่น ตัวที่สามที่เป็นคำตอบที่ถูกต้องที่สุดคือ Mornye (มอร์นี) ผู้มอบบัฟต้านทานการขัดจังหวะ ฮีลฟื้นฟูทีม และบัฟ Off-Tune Level ช่วยให้คู่หูไซเบอร์พังก์ Lucy & Rebecca กราดยิงและแฮกเจาะเกราะได้อย่างต่อเนื่องไร้กังวล!",
    rotation: [
      { step: 1, char: "Mornye", desc: "กางอาณาเขตสังเกตการณ์ มอบบัฟต้านทานการขัดจังหวะ ฮีลทีม และเปิดเกราะ" },
      { step: 2, char: "Rebecca", desc: "รีเบคกาสาดกระสุนปืนกล พร้อมแจกบัฟ Edgerunner Bonds (All DMG & Heavy Attack) -> ส่งต่อให้ Lucy" },
      { step: 3, char: "Lucy", desc: "ลูซี่เชื่อมต่อ Cyberspace ใช้ RAM ปลดปล่อย Quick-Hack ยิงกระสุน Spectral Trigger เจาะเกราะบอสจนละลาย!" }
    ]
  },
  {
    rank: 8,
    tier: "T0.5",
    name: "Lucilla Absolute Glacio Storm",
    nameTh: "อันดับ 8: Lucilla (ลูซิลลา) + Hiyuki (ฮิยูกิ) + Shorekeeper",
    highlight: "ทีมพายุเยือกแข็งลูซิลลา & ฮิยูกิ ม่านหิมะศูนย์สัมบูรณ์ ปลอดภัยและหนาแน่น",
    tags: ["อันดับ 8", "T0.5", "Glacio Frost", "v3.4 Meta"],
    members: [
      { id: "lucilla", name: "Lucilla", role: "Main DPS", element: "Glacio", weapon: "Rectifier", thumb: "assets/characters/resonator_lucilla.png" },
      { id: "hiyuki", name: "Hiyuki", role: "Sub DPS", element: "Glacio", weapon: "Sword", thumb: "assets/characters/resonator_hiyuki.png" },
      { id: "shorekeeper", name: "Shorekeeper", role: "Support", element: "Spectro", weapon: "Rectifier", thumb: "assets/characters/resonator_shorekeeper.png" }
    ],
    synergy: "Lucilla กางอาณาเขตพายุหิมะน้ำแข็งเวทมนตร์วงกว้าง โดยมี Hiyuki ช่วยชักดาบตัดมิติน้ำแข็งซ้ำเติมจุดอ่อน ทำให้เกิดการแช่แข็งแบบไม่สิ้นสุด",
    rotation: [
      { step: 1, char: "Shorekeeper", desc: "เปิด Stellar Realm บัฟคริติคอล" },
      { step: 2, char: "Hiyuki", desc: "ฮิยูกิฟันดาบน้ำแข็งแช่แข็งศัตรู -> ส่ง Outro ให้ Lucilla" },
      { step: 3, char: "Lucilla", desc: "ลูซิลลาร่ายพายุหิมะกลืนกินสนามรบ ระเบิดผลึกน้ำแข็งสร้างดาเมจกระจาย" }
    ]
  },
  {
    rank: 9,
    tier: "T0.5",
    name: "Suoming Electro God Lightning",
    nameTh: "อันดับ 9: Suoming (สั่วหมิง) + Hsin (ซิน) + Rover-Electro",
    highlight: "ทีมสายฟ้าไร้เทียมทานยุคใหม่ สั่วหมิงควงดาบอัสนีบาต ประสานเวทสายฟ้าซิน",
    tags: ["อันดับ 9", "T0.5", "Suoming BiS", "Electro Storm"],
    members: [
      { id: "suoming", name: "Suoming", role: "Main DPS", element: "Electro", weapon: "Sword", thumb: "assets/characters/resonator_suoming.png" },
      { id: "hsin", name: "Hsin", role: "Sub DPS", element: "Electro", weapon: "Rectifier", thumb: "assets/characters/resonator_hsin.png" },
      { id: "rover_electro", name: "Rover-Electro", role: "Support", element: "Electro", weapon: "Sword", thumb: "assets/characters/resonator_rover_electro.png" }
    ],
    synergy: "Suoming และ Hsin คู่หูสายฟ้ายุคใหม่ ฟันดาบสะสมประจุไฟฟ้าความถี่สูง ผสานกับ Rover-Electro เกิดเป็น Resonance สายฟ้า 3 ตัวละครที่ช็อตศัตรูต่อเนื่องทั้งเวที",
    rotation: [
      { step: 1, char: "Rover-Electro", desc: "เปิดสนามแม่เหล็กไฟฟ้า บัฟประจุอัสนีบาตทั้งทีม" },
      { step: 2, char: "Hsin", desc: "ซินร่ายอาณาเขตไฟฟ้าผ่าทำลายเกจสั่นสะเทือน -> ส่ง Outro ให้สั่วหมิง" },
      { step: 3, char: "Suoming", desc: "สั่วหมิงพุ่งฟันดาบอัสนีบาตไร้เงา สายฟ้าฟาดผ่าบอสต่อเนื่องนับสิบครั้ง" }
    ]
  },
  {
    rank: 10,
    tier: "T0.5",
    name: "Camellya Blood Vine Queen",
    nameTh: "อันดับ 10: Camellya (คาเมลเลีย) + Sanhua (ซานหัว) + Shorekeeper",
    highlight: "ตำนานราชินีดอกไม้โลหิต สปีดรัน Tower of Adversity ตลอดกาล",
    tags: ["อันดับ 10", "T0.5", "Camellya BiS", "ToA Legend"],
    members: [
      { id: "camellya", name: "Camellya", role: "Main DPS", element: "Havoc", weapon: "Sword", thumb: "assets/characters/resonator_camellya.png" },
      { id: "sanhua", name: "Sanhua", role: "Sub DPS", element: "Glacio", weapon: "Sword", thumb: "assets/characters/resonator_sanhua.png" },
      { id: "shorekeeper", name: "Shorekeeper", role: "Support", element: "Spectro", weapon: "Rectifier", thumb: "assets/characters/resonator_shorekeeper.png" }
    ],
    synergy: "ทีมคลาสสิกไร้กาลเวลา Sanhua มอบ Basic Attack +38% ใน 3 วินาที ให้ Camellya สับเถาวัลย์ Blossom Swirl กวาดล้างห้องบอสได้อย่างรวดเร็ว",
    rotation: [
      { step: 1, char: "Shorekeeper", desc: "กาง Stellar Realm บัฟคริติคอลและฮีล" },
      { step: 2, char: "Sanhua", desc: "สับเกจน้ำแข็งระเบิด 3 วิ -> ส่ง Outro Basic Attack ให้ Camellya" },
      { step: 3, char: "Camellya", desc: "คาเมลเลียเข้า Blossom Mode หมุนสับเถาวัลย์กวาดล้างทั้งห้อง" }
    ]
  }
];