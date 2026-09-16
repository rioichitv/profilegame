import React from 'react';
import { MapPin, Navigation, ExternalLink, Clock, ShieldCheck, Tv, Coffee } from 'lucide-react';

export default function LocationMap() {
  const directionsUrl = 'https://www.google.com/maps/dir/?api=1&destination=Rental+Sewa+PS5+PS4+RajaGamerz,+Jl.+Bangka+Raya+Gg.+H.+Nawar+No.23,+RT.3/RW.1,+Pela+Mampang,+Kec.+Mampang+Prpt.,+Kota+Jakarta+Selatan,+Daerah+Khusus+Ibukota+Jakarta+12720';
  const mapsUrl = 'https://maps.google.com/?cid=12162924138450560197';
  const embedMapUrl = 'https://maps.google.com/maps?q=Rental+Sewa+PS5+PS4+RajaGamerz,+Jl.+Bangka+Raya+Gg.+H.+Nawar+No.23,+RT.3/RW.1,+Pela+Mampang,+Jakarta+Selatan&t=&z=17&ie=UTF8&iwloc=&output=embed';

  return (
    <section id="lokasi-peta" style={{ padding: '80px 0', backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="section-badge">
            Lokasi & Game Lounge
          </div>
          <h2 className="section-title">
            Peta Lokasi <span>RajaGamerz & Game Station</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto', maxWidth: '680px' }}>
            Kunjungi Game Lounge kami untuk mabar langsung di sofa VIP ber-AC, atau gunakan titik lokasi kami untuk estimasi pengantaran sewa se-Jabodetabek.
          </p>
        </div>

        {/* 2-Column Grid: Location Info & Interactive Map */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.05fr 1.25fr',
            gap: '32px',
            alignItems: 'stretch',
          }}
          className="location-grid"
        >
          {/* Left Column: Venue & Address Details */}
          <div
            className="clean-card"
            style={{
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#ffffff',
              height: '100%',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  backgroundColor: '#eff6ff',
                  border: '1px solid #bfdbfe',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#2563eb',
                  flexShrink: 0,
                }}
              >
                <MapPin size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', color: '#0f172a', margin: 0, lineHeight: 1.25 }}>
                  Rental Sewa PS5 PS4 RajaGamerz
                </h3>
                <span style={{ fontSize: '0.8rem', color: '#64748b' }}>
                  Gg. H. Nawar No.23, Bangka Raya, Mampang Prapatan
                </span>
              </div>
            </div>

            {/* Address Box */}
            <div
              style={{
                backgroundColor: '#f8fafc',
                padding: '16px 18px',
                borderRadius: '12px',
                border: '1px solid #e2e8f0',
                marginBottom: '20px',
              }}
            >
              <p style={{ fontSize: '0.88rem', color: '#334155', lineHeight: 1.55, margin: 0, fontWeight: 500 }}>
                <strong>Alamat Resmi:</strong> Jl. Bangka Raya Gg. H. Nawar No.23, RT.3/RW.1, Pela Mampang, Kec. Mampang Prpt., Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12720
              </p>
              <p style={{ fontSize: '0.82rem', color: '#64748b', margin: '6px 0 0' }}>
                📍 Patokan: Masuk Gang H. Nawar (Jl. Bangka Raya), Pela Mampang, Mampang Prapatan, Jakarta Selatan.
              </p>
            </div>

            {/* Hours & Service Highlights */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Clock size={17} style={{ color: '#2563eb', flexShrink: 0 }} />
                <span style={{ fontSize: '0.86rem', color: '#334155' }}>
                  <strong>Jam Operasional:</strong> Setiap Hari 13.00 - 02.00 WIB
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <ShieldCheck size={17} style={{ color: '#2563eb', flexShrink: 0 }} />
                <span style={{ fontSize: '0.86rem', color: '#334155' }}>
                  <strong>Area Antar-Jemput:</strong> Jakarta, Bogor, Depok, Tangerang, Bekasi (Jabodetabek)
                </span>
              </div>
            </div>

            {/* Facilities Chips */}
            <div style={{ marginBottom: '26px' }}>
              <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600, display: 'block', marginBottom: '8px' }}>
                Fasilitas Venue Game Lounge:
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                <span style={{ backgroundColor: '#eff6ff', color: '#1d4ed8', border: '1px solid #bfdbfe', borderRadius: '6px', padding: '4px 9px', fontSize: '0.76rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <Tv size={13} /> TV 50" 4K HDR
                </span>
                <span style={{ backgroundColor: '#eff6ff', color: '#1d4ed8', border: '1px solid #bfdbfe', borderRadius: '6px', padding: '4px 9px', fontSize: '0.76rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '5px' }}>
                  Ruangan AC Dingin
                </span>
                <span style={{ backgroundColor: '#eff6ff', color: '#1d4ed8', border: '1px solid #bfdbfe', borderRadius: '6px', padding: '4px 9px', fontSize: '0.76rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <Coffee size={13} /> Snack & Minuman
                </span>
              </div>
            </div>

            {/* Action Buttons: Direct Google Maps & Route Navigation */}
            <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '10px' }}>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{
                    padding: '11px 16px',
                    fontSize: '0.88rem',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '7px',
                  }}
                >
                  <Navigation size={16} />
                  <span>Petunjuk Arah / Rute</span>
                </a>

                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{
                    padding: '11px 14px',
                    fontSize: '0.88rem',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '7px',
                  }}
                >
                  <ExternalLink size={15} />
                  <span>Buka di Maps</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Embed Frame */}
          <div
            className="clean-card"
            style={{
              padding: '10px',
              backgroundColor: '#ffffff',
              display: 'flex',
              flexDirection: 'column',
              minHeight: '460px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Embedded Google Maps iFrame */}
            <iframe
              title="Peta Lokasi Rental Sewa PS5 PS4 RajaGamerz Bangka Raya Jakarta Selatan"
              src={embedMapUrl}
              style={{
                width: '100%',
                height: '100%',
                minHeight: '440px',
                border: 0,
                borderRadius: '12px',
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Floating Info Pill on Map */}
            <div
              style={{
                position: 'absolute',
                bottom: '24px',
                left: '24px',
                backgroundColor: 'rgba(15, 23, 42, 0.92)',
                color: '#ffffff',
                padding: '8px 14px',
                borderRadius: '8px',
                fontSize: '0.78rem',
                fontWeight: 600,
                backdropFilter: 'blur(6px)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
                zIndex: 5,
              }}
            >
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
              <span>Rental Sewa PS5 PS4 RajaGamerz • Gg. H. Nawar No.23</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .location-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
