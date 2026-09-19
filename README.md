# ✦ Wuthering Waves Guide & Encyclopedia (60 Resonators) - React Edition

![Wuthering Waves Banner](https://wutheringwaves.kurogames.com/static/web/images/share.jpg)

เว็บแอปพลิเคชันสารานุกรมและคู่มือการเล่นเกม **Wuthering Waves** (Solaris-3) พัฒนาด้วย **React 18 + Vite** รวมข้อมูลตัวละครครบทุกตัวตั้งแต่เวอร์ชัน 1.0 ถึง 3.6 และตัวละครล่าสุด รวมทั้งสิ้น 60 Resonators พร้อมคู่มือจัด 10 อันดับทีมที่เก่งที่สุดในปัจจุบัน (Tower of Adversity Meta Guide)

---

## 🌟 ฟีเจอร์หลัก (Key Features)

- **📚 สารานุกรมครบทุกตัวละคร (60 Resonators)**:
  - ระดับ 5 ดาว (48 ตัวละคร) และ 4 ดาว (12 ตัวละคร)
  - ป้ายกำกับเวอร์ชัน (Version Badge: `v1.0` - `v3.6` และ `TBA`)
  - ระบบกรองตามธาตุทั้ง 6 ธาตุ (Spectro, Fusion, Electro, Aero, Glacio, Havoc)
  - ระบบกรองตามระดับดาว (5★ / 4★)
  - ช่องค้นหาอัจฉริยะแบบเรียลไทม์ (Real-time Search) ค้นหาชื่อไทย/อังกฤษ และอาวุธ
- **🏆 10 อันดับทีมที่เก่งที่สุด (Top 10 Strongest Meta Teams)**:
  - จัดอันดับตามความเก่งใน Tower of Adversity (Tier EX, S+, S)
  - วิเคราะห์เจาะลึกเหตุผลความเก่ง (Synergy Breakdown)
  - แผนผังลำดับคอมโบ Concerto Rotation 1-2-3
- **🔊 Web Audio API Synthesizer**: สังเคราะห์เสียงเอฟเฟกต์ Sci-Fi Synth ในตัวเครื่อง ไม่ต้องพึ่งพาไฟล์เสียงภายนอก
- **⚡ Performance Mode (60+ FPS)**: ปุ่มสลับโหมดลื่นไหลสูงสุด ปรับลดการทำงานของ Canvas และการ์ดจอ สำหรับอุปกรณ์สเปกเริ่มต้น
- **🎁 Free Redeem Codes**: ระบบคัดลอกโค้ดแลกรับของรางวัลและ Astrite ฟรีในคลิกเดียว

---

## 📁 โครงสร้างโปรเจกต์ (Project Structure)

```
├── public/                 # Static Assets (รูปภาพพอร์ตเทรตตัวละคร)
├── src/
│   ├── components/         # React Components แยกเป็นโมดูลาร์
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── ParticleCanvas.jsx
│   │   ├── AboutSolaris.jsx
│   │   ├── ResonatorShowcase.jsx
│   │   ├── RosterEncyclopedia.jsx
│   │   ├── ResonatorCard.jsx
│   │   ├── MetaTeams.jsx
│   │   ├── MetaTeamCard.jsx
│   │   ├── GameFeatures.jsx
│   │   ├── RedeemCodes.jsx
│   │   ├── ToastNotification.jsx
│   │   └── Footer.jsx
│   ├── data/               # ฐานข้อมูลตัวละคร 60 ตัว และทีมเมต้า
│   │   ├── resonators.js
│   │   ├── metaTeams.js
│   │   └── redeemCodes.js
│   ├── hooks/              # Custom React Hooks
│   │   ├── useSoundEffects.js
│   │   └── usePerformanceMode.js
│   ├── App.jsx             # Main Application Root
│   ├── main.jsx            # Entry Point
│   └── index.css           # Global Solaris Design System
├── index.html              # Vite HTML Template
├── wuthering_waves_react.html # Standalone React 18 (เปิดดูได้ทันที)
├── package.json
└── vite.config.js
```

---

## 🚀 การติดตั้งและรันในเครื่อง (Local Development)

```bash
# 1. ติดตั้ง Dependencies
npm install

# 2. รัน Dev Server
npm run dev
```

เปิดดูได้ที่ `http://localhost:3000`

---

## 🌐 การ Deploy ขึ้น Vercel

1. Push โค้ดนี้ขึ้น GitHub
2. ไปที่ [Vercel](https://vercel.com) แล้วกด **Add New Project**
3. เลือก Repository นี้ Vercel จะตรวจพบ **Vite** ให้อัตโนมัติ
4. กด **Deploy** เว็บจะออนไลน์ทันที!

---

## ⚖️ ลิขสิทธิ์ (Disclaimer)
Wuthering Waves และภาพประกอบทั้งหมดเป็นลิขสิทธิ์ของ **KURO GAMES** เว็บไซต์นี้จัดทำขึ้นเพื่อเป็นสารานุกรมและคู่มือสำหรับผู้เล่น
