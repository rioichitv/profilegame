import React from 'react';
import { Truck, ShieldCheck, Gamepad2, Trophy, Check, MapPin, Zap, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section
      className="hero-section"
      style={{
        position: 'relative',
        paddingTop: '120px',
        paddingBottom: '60px',
        backgroundColor: '#ffffff',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* 2-Column Hero: Desktop */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.15fr 1fr',
            gap: '48px',
            alignItems: 'center',
            marginBottom: '40px',
          }}
          className="hero-grid-kuropedia"
        >
          {/* Left Column: Headlines & Benefits */}
          <div>
            {/* Main Hero Headline */}
            <h1
              className="hero-title"
              style={{
                fontSize: 'clamp(2.2rem, 4.2vw, 3.4rem)',
                lineHeight: 1.18,
                marginBottom: '18px',
                fontWeight: 800,
                color: '#0f172a',
              }}
            >
              Sewa PS5 &amp; PS4 Harian <br />
              <span style={{ color: '#2563eb' }}>Lengkap Antar-Jemput &amp; Pasang</span>
            </h1>

            {/* Subtitle */}
            <p
              className="hero-subtitle"
              style={{
                fontSize: '1.02rem',
                color: '#475569',
                lineHeight: 1.6,
                marginBottom: '24px',
              }}
            >
              Pilihan konsol PlayStation generasi terbaru dengan varian warna resmi (Glacier White, Midnight Black, Volcanic Red, Cobalt Blue). Siap antar ke rumah atau booking main langsung di tempat!
            </p>

            {/* Benefit Checklists */}
            <div className="hero-checklist" style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '30px' }}>
              {[
                'Sewa Antar ke Rumah atau Main Langsung di Tempat (Game Lounge)',
                'Ready Stock Unit: 8 Unit PS5 & 12 Unit PS4 Siap Kirim Hari Ini',
                'Unit Konsol & Stik DualSense Wireless Original Sony 100% Terawat',
                'Katalog 80+ Game Siap Main (FC 25, Spider-Man 2, GTA V, Tekken 8)',
                'Gratis Antar, Pasang ke TV, dan Dijemput Se-Jabodetabek',
              ].map((text, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb', flexShrink: 0, marginTop: '1px' }}>
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span style={{ fontSize: '0.92rem', color: '#334155', fontWeight: 600, lineHeight: 1.4 }}>{text}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                flexWrap: 'wrap',
              }}
            >
              <a href="#form-pemesanan" className="btn-primary hero-btn-main" style={{ padding: '13px 26px', fontSize: '0.96rem', borderRadius: '10px' }}>
                <Gamepad2 size={18} />
                <span>Pesan Konsol &amp; Warna</span>
              </a>
            </div>
          </div>

          {/* Right Column: Device Mockups */}
          <div>
            <div className="hero-mockup-wrap">
              {/* Floating Pill Badges */}
              <div className="hero-floating-pill pill-float-1">
                <ShieldCheck size={16} style={{ color: '#2563eb' }} />
                <span>Unit Original Resmi</span>
              </div>
              <div className="hero-floating-pill pill-float-2">
                <Gamepad2 size={16} style={{ color: '#2563eb' }} />
                <span>100+ Game Terpopuler</span>
              </div>
              <div className="hero-floating-pill pill-float-3">
                <MapPin size={16} style={{ color: '#2563eb' }} />
                <span>Bisa Main di Tempat</span>
              </div>
              <div className="hero-floating-pill pill-float-4">
                <Truck size={16} style={{ color: '#2563eb' }} />
                <span>Siap Antar Pasang</span>
              </div>

              {/* Laptop Mockup */}
              <div className="laptop-frame">
                <div className="laptop-camera-bar">
                  <div className="laptop-dot" />
                </div>
                <div className="laptop-screen">
                  <img
                    src="/ps5-colors-banner.jpg"
                    alt="PlayStation 5 DualSense New Colors"
                    loading="eager"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://rajagamerz.wordpress.com/wp-content/uploads/2021/10/playstation-5-dualsense-new-colors.jpg';
                    }}
                  />
                </div>
              </div>
              <div className="laptop-base">
                <div className="laptop-notch" />
              </div>

              {/* Smartphone Mockup */}
              <div className="phone-mockup">
                <div className="phone-island" />
                <div className="phone-screen">
                  <img
                    src="/consoles/ps5-glacier-white.jpg"
                    alt="PlayStation 5 Unit"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== MOBILE HERO BANNER ===== */}
        {/* Shown only on mobile (< 960px), sits BELOW the text headline */}
        <div className="hero-mobile-banner">
          <div className="hero-mobile-banner-inner">
            <img
              src="/hero-banner-mobile.jpg"
              alt="PlayStation 5 dan DualSense Warna Lengkap"
              className="hero-mobile-banner-img"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/ps5-colors-banner.jpg';
              }}
            />
            <div className="hero-mobile-banner-overlay" />
            <div className="hero-mobile-banner-content">
              <div className="hero-mobile-badge-row">
                <span className="hero-mobile-badge-pill"><Zap size={12} />PS5 &amp; PS4 Original</span>
                <span className="hero-mobile-badge-pill"><Star size={12} />Antar Pasang ke TV</span>
              </div>
              <div className="hero-mobile-price-tags">
                <div className="hero-mobile-price-tag">
                  <span className="hero-mobile-price-label">Sewa PS5</span>
                  <span className="hero-mobile-price-value">Rp 15rb/jam</span>
                </div>
                <div className="hero-mobile-price-tag">
                  <span className="hero-mobile-price-label">Sewa PS4</span>
                  <span className="hero-mobile-price-value">Rp 10rb/jam</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px',
            marginTop: '10px',
          }}
        >
          {[
            { icon: <Truck size={22} />, title: 'Antar & Pasang', desc: 'Diantar ke lokasi, dipasangkan ke TV, dan dijemput kembali saat selesai.' },
            { icon: <ShieldCheck size={22} />, title: 'Unit Original', desc: 'Konsol dan stik wireless original Sony terawat, bersih, dan akun ter-update.' },
            { icon: <Gamepad2 size={22} />, title: 'Pilihan Game', desc: 'Katalog game terpopuler: FC 25, Spider-Man 2, GTA V, Tekken 8, dan eFootball.' },
            { icon: <Trophy size={22} />, title: 'Event & Turnamen', desc: 'Tersedia paket multi-unit konsol, TV LED 32-50 inci, dan standing bracket.' },
          ].map((item, i) => (
            <div key={i} className="clean-card" style={{ padding: '24px 20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb', flexShrink: 0 }}>
                {item.icon}
              </div>
              <div>
                <h4 style={{ fontSize: '1.02rem', marginBottom: '3px', color: '#0f172a' }}>{item.title}</h4>
                <p style={{ fontSize: '0.84rem', color: '#64748b', margin: 0 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
