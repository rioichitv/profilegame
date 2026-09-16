# RajaGamerz - Sewa PS5 & PS4 Harian Jabodetabek

Website resmi rental dan penyewaan konsol **PlayStation 5 (PS5)** dan **PlayStation 4 (PS4)** terlengkap di wilayah Jabodetabek. Dilengkapi layanan antar-jemput ke rumah + pasang ke TV, katalog 80+ game original siap main, dan opsi main langsung di Game Lounge.

🌐 **Live Demo:** [https://alps-bangka.vercel.app](https://alps-bangka.vercel.app)  
📦 **Repository:** [https://github.com/rioichitv/profilegame.git](https://github.com/rioichitv/profilegame.git)

---

## 🎮 Fitur Utama

1. **Pilihan Konsol & Varian Warna Resmi**
   - **PlayStation 5**: Glacier White, Midnight Black, Cosmic/Volcanic Red, Cobalt Metallic Blue.
   - **PlayStation 4**: Jet Black, Glacier White.
   - Display ketersediaan stok unit real-time (8 Unit PS5 & 12 Unit PS4).

2. **Katalog 80+ Game Populer Siap Main**
   - Game terpopuler: *EA Sports FC 25, Marvel's Spider-Man 2, GTA V, Tekken 8, God of War Ragnarök, eFootball 2025, Hogwarts Legacy, Black Myth: Wukong, NBA 2K25, Mortal Kombat 1*, dll.
   - Filter cepat berdasarkan kategori: Semua, Olahraga & Bola, Petualangan & Aksi, Balapan & Fighting, Multiplayer & Mabar.
   - Pencarian instan berdasarkan judul game.
   - Modal detail game lengkap dengan deskripsi, info multiplayer/co-op, dan tombol pilih game.

3. **Paket Rental Fleksibel**
   - **Paket Harian Antar-Jemput**: Unit diantar ke rumah, dipasangkan ke TV, dan dijemput kembali saat selesai sewa.
   - **Paket Game Lounge**: Rental per jam untuk main langsung di venue/lounge ber-AC dengan sofa gaming dan TV 4K.
   - **Paket Event & Turnamen**: Penyewaan multi-unit konsol, TV LED 32-50 inci, standing bracket, dan teknisi standby untuk gathering kantor, pameran, atau turnamen komunitas.

4. **Form Pemesanan & Kalkulator Biaya Otomatis**
   - Pilihan tipe rental: *Antar ke Rumah* atau *Main di Tempat (Game Lounge)*.
   - Pilihan konsol, warna cover/stik, durasi sewa, jumlah stik DualSense tambahan, dan checklist game favorit.
   - Validasi stok unit real-time agar pelanggan tidak memesan melebihi kuota harian.
   - Tombol **Kirim Pesanan via WhatsApp** yang otomatis memformat pesan order lengkap ke nomor Customer Service (`087777484789`).

5. **Lokasi & Rute Game Lounge**
   - Integrasi navigasi langsung ke Google Maps dan Apple Maps.
   - Info fasilitas: AC dingin, parkir luas, Wi-Fi high speed, sofa empuk, snack & minuman.

6. **Desain Modern & Responsif (Mobile-First)**
   - Tampilan bersih bertema *Luxury White & Modern PlayStation Blue*.
   - Banner visual konsol PS5 & controller DualSense warna-warni yang jernih di mode HP (phone view).
   - Fast loading & optimal di seluruh ukuran layar smartphone, tablet, maupun desktop.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: Vanilla CSS (CSS Variables, Flexbox, CSS Grid, Glassmorphism, Micro-animations)
- **Icons**: [lucide-react](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 🚀 Cara Menjalankan Project Secara Lokal

### Prasyarat
- [Node.js](https://nodejs.org/) versi 18 atau lebih baru
- npm atau yarn

### Langkah Instalasi

1. **Clone repositori:**
   ```bash
   git clone https://github.com/rioichitv/profilegame.git
   cd profilegame
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Jalankan development server:**
   ```bash
   npm run dev
   ```
   Aplikasi akan berjalan di `http://localhost:5173`.

4. **Build untuk produksi:**
   ```bash
   npm run build
   ```
   Hasil build tersimpan di folder `dist/` dan siap di-deploy ke Vercel, Netlify, atau web server lainnya.

---

## 📁 Struktur Folder

```
rajagamerz/
├── public/
│   ├── consoles/             # Foto unit PS5 & PS4 varian warna
│   ├── games/                # Poster & cover 80+ game PlayStation
│   ├── hero-banner-mobile.jpg# Banner resolusi tinggi showcase PS5 di HP
│   ├── ps5-colors-banner.jpg # Banner DualSense warna-warni
│   ├── logo.png              # Logo resmi RajaGamerz
│   └── favicon.svg           # Icon favicon browser
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Navigation bar & menu mobile
│   │   ├── Hero.jsx          # Hero headline & showcase konsol
│   │   ├── ConsoleColorShowcase.jsx # Switcher varian warna konsol
│   │   ├── PricingPackages.jsx      # Tabel paket rental harian & lounge
│   │   ├── GameListSection.jsx      # Katalog 80+ game & modal detail
│   │   ├── BookingForm.jsx          # Form booking & WhatsApp generator
│   │   ├── LocationMap.jsx          # Peta & info Game Lounge
│   │   └── Footer.jsx               # Footer informasi & kontak
│   ├── data/
│   │   └── content.js        # Data konsol, stok unit, harga, & katalog game
│   ├── App.jsx               # Komponen utama & state management
│   ├── main.jsx              # Entry point React
│   └── index.css             # Desain sistem & responsive media queries
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 📞 Kontak & Reservasi

- **WhatsApp CS**: [0877-7748-4789](https://wa.me/6287777484789)
- **Jam Operasional**: Setiap Hari 08:00 - 23:00 WIB
- **Area Layanan Antar-Jemput**: Seluruh wilayah Jabodetabek (Jakarta, Bogor, Depok, Tangerang, Bekasi)

---

&copy; 2025 RajaGamerz. All rights reserved.
