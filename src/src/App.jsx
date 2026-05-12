# 🚀 RiceWise Quick Deploy — ได้ Link ใน 5 นาที

**เป้าหมาย:** ได้ public URL เปิดใน LINE ได้ → แชร์ให้เกษตรกร 80 คน

---

## 🎯 ทางเร็วที่สุด: StackBlitz (1 นาที!) ⭐ แนะนำ

**StackBlitz** = IDE ออนไลน์ที่ deploy ทันทีโดยไม่ต้องสมัครอะไร

### ขั้นตอน (1 นาที):

**1.** เปิด link นี้ในเบราว์เซอร์:
```
https://stackblitz.com/fork/vitejs-vite-react
```

**2.** จะเห็นโปรเจกต์ Vite + React พร้อมใช้งาน — รอ load ~10 วินาที

**3.** แทนที่ไฟล์ `src/App.jsx` ด้วยโค้ดจาก artifact `ricewise-app`:
   - กดที่ไฟล์ `src/App.jsx` ทางซ้าย
   - ลบโค้ดเดิมทั้งหมด
   - กลับมาที่ chat นี้ → กดที่ artifact "RiceWise" → กดปุ่ม **"Copy"** ที่มุมบนขวา
   - วางใน StackBlitz

**4.** เพิ่ม dependency `lucide-react`:
   - กดที่ `package.json` 
   - ในส่วน `"dependencies"` เพิ่มบรรทัด: `"lucide-react": "^0.383.0",`

**5.** กดปุ่ม **"Connect Repository"** หรือ **"Share"** ที่มุมบนขวา
   - เลือก **"Open in new tab"** → ได้ link เช่น `https://stackblitz.com/edit/xxxxxxxx`

**6.** หรือกด **"Deploy"** → เลือก **Netlify** → 1-click deploy → ได้ public URL!

⏱️ **ใช้เวลารวม: 1-2 นาที**

---

## 🥈 ทางที่ 2: Vercel Drag-and-Drop (5 นาที)

ไม่ต้องใช้ GitHub! ลากไฟล์อย่างเดียว

### ขั้นตอน:

**1.** Download โฟลเดอร์ project ทั้งหมด (ดู section "📁 ไฟล์ทั้งหมด" ด้านล่าง)

**2.** Build บนเครื่องคุณ (ถ้ามี Node.js):
```bash
cd ricewise
npm install
npm run build
```
จะได้โฟลเดอร์ `dist/`

**3.** ไปที่ https://vercel.com/new
   - กด **"Deploy without Git"** หรือลากโฟลเดอร์ `dist/` ใส่

**4.** ได้ URL ทันที!

---

## 🥉 ทางที่ 3: GitHub + Vercel (15 นาที, แต่ permanent)

ดู artifact `ricewise-deploy-guide` ใน chat นี้ — Part A ครับ

---

# 📁 ไฟล์ทั้งหมด (Copy-Paste Ready)

ตรงนี้คือไฟล์ทั้ง 10 ที่ต้องใช้ — สำหรับวิธีไหนก็ใช้ได้

## ⬇️ `package.json`
```json
{
  "name": "ricewise",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "lucide-react": "^0.383.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.4",
    "vite": "^5.3.1"
  }
}
```

## ⬇️ `vite.config.js`
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
})
```

## ⬇️ `tailwind.config.js`
```javascript
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: { extend: {} },
  plugins: [],
}
```

## ⬇️ `postcss.config.js`
```javascript
export default {
  plugins: { tailwindcss: {}, autoprefixer: {} },
}
```

## ⬇️ `index.html`
```html
<!doctype html>
<html lang="th">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E🌾%3C/text%3E%3C/svg%3E" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#10b981" />
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@400;500;700;800&display=swap" rel="stylesheet">
    <meta property="og:title" content="RiceWise 🌾 ลดการเผาฟางข้าว" />
    <meta property="og:description" content="เรียนรู้เพื่อสุขภาพและสิ่งแวดล้อม" />
    <title>🌾 RiceWise</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

## ⬇️ `src/main.jsx`
```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode><App /></React.StrictMode>
)
```

## ⬇️ `src/index.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

* { font-family: 'Noto Sans Thai', system-ui, sans-serif; }
html, body { margin: 0; padding: 0; background: #f9fafb; }
input, button, select, textarea { font-size: 16px; }
```

## ⬇️ `src/App.jsx`
**👉 Copy โค้ดทั้งหมดจาก artifact ชื่อ "RiceWise - แอปลดการเผาฟางข้าว" ในเชต**

---

# 📱 หลังได้ URL แล้ว — แชร์ผ่าน LINE

## วิธีที่ 1: แชร์ URL ตรงๆ (ง่ายสุด)

1. Copy URL จาก Vercel/StackBlitz (เช่น `https://ricewise.vercel.app`)
2. เปิด LINE chat
3. วาง URL → ส่ง
4. LINE จะแสดง **preview card สวยๆ** อัตโนมัติ (เพราะมี Open Graph tags ในไฟล์ `index.html`)

## วิธีที่ 2: ทำ QR Code (สำหรับพิมพ์แจก)

1. ไปที่ https://www.qrcode-monkey.com
2. ใส่ URL ของแอป
3. เพิ่มโลโก้ 🌾 (อัปโหลด emoji image)
4. Download → พิมพ์ติดที่ อบต. / ศูนย์เรียนรู้

## วิธีที่ 3: LINE LIFF (เปิดในแอป LINE)

ดู Part C ของ `ricewise-deploy-guide` — ใช้เวลาเพิ่ม 10 นาที แต่ดูเป็นมืออาชีพ

---

# 🆘 ติดตรงไหน?

ส่งให้ผมได้ทันที:
- **Screenshot error**
- **URL ที่ได้** (ให้ผมช่วยเทสต์)
- **ขั้นตอนที่ติด** (ระบุเลขข้อ)

ผมจะช่วยแก้ทุกขั้น 🌾
