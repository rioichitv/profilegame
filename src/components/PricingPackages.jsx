import React, { useState } from 'react';
import { CONSOLES, TV_PACKAGES, LOUNGE_PACKAGES } from '../data/content';
import { Check, Tv, Gamepad2, Trophy, MapPin, Sparkles } from 'lucide-react';

export default function PricingPackages({ onSelectPackage }) {
  const [activeTab, setActiveTab] = useState('ps5'); // 'ps5' | 'ps4' | 'lounge' | 'tv' | 'event'

  const handleSelectPackage = (type, packageData) => {
    if (onSelectPackage) {
      onSelectPackage(type, packageData);
    }
    const orderSection = document.getElementById('form-pemesanan');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="paket-harga" style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '45px' }}>
          <div className="section-badge">
            Paket & Tarif Resmi
          </div>
          <h2 className="section-title">
            Daftar Paket Sewa <span>PS4, PS5 & Main di Tempat</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Pilih opsi rental antar ke rumah atau booking ruangan VIP Game Lounge untuk main langsung di tempat dengan fasilitas lengkap.
          </p>

          {/* Tab Selector */}
          <div
            className="pricing-tabs-wrap"
            style={{
              display: 'inline-flex',
              padding: '4px',
              backgroundColor: '#f8fafc',
              borderRadius: '12px',
              border: '1px solid #cbd5e1',
              marginTop: '16px',
              gap: '6px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {[
              { id: 'ps5', label: 'Sewa PS5 Harian', icon: Gamepad2 },
              { id: 'ps4', label: 'Sewa PS4 Harian', icon: Gamepad2 },
              { id: 'lounge', label: 'Main di Tempat (Lounge)', icon: MapPin },
              { id: 'tv', label: 'Sewa LED TV & Bracket', icon: Tv },
              { id: 'event', label: 'Paket Event / Turnamen', icon: Trophy },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    if (tab.id === 'lounge') {
                      window.dispatchEvent(new CustomEvent('selectBookingMode', { detail: 'lounge' }));
                    }
                  }}
                  style={{
                    padding: '10px 18px',
                    borderRadius: '8px',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    border: 'none',
                    transition: 'all 0.2s ease',
                    backgroundColor: isActive ? '#2563eb' : 'transparent',
                    color: isActive ? '#ffffff' : '#64748b',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                  }}
                >
                  <Icon size={16} style={{ flexShrink: 0 }} />
                  <span style={{ textAlign: 'left', lineHeight: 1.25 }}>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* TAB 1 & 2: PS5 & PS4 DETAILS */}
        {(activeTab === 'ps5' || activeTab === 'ps4') && (
          <div>
            {CONSOLES.filter((c) => c.id === activeTab).map((consoleItem) => (
              <div
                key={consoleItem.id}
                className="clean-card pricing-console-card"
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', flexWrap: 'wrap' }}>
                    <span className="section-badge" style={{ margin: 0 }}>
                      Paket Harian
                    </span>
                    <span style={{ fontSize: '0.84rem', color: '#64748b', fontWeight: 600 }}>
                      Khusus Sewa Pribadi
                    </span>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        backgroundColor: '#f0fdf4',
                        border: '1px solid #bbf7d0',
                        color: '#15803d',
                        padding: '2px 10px',
                        borderRadius: '20px',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                      }}
                    >
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#22c55e', display: 'inline-block' }} />
                      Stok: {consoleItem.stock} Unit Ready
                    </span>
                  </div>

                  <h3 style={{ fontSize: '2.1rem', marginBottom: '10px', color: '#0f172a' }}>
                    Paket Rental {consoleItem.name}
                  </h3>
                  <p style={{ fontSize: '0.96rem', color: '#475569', lineHeight: 1.6, marginBottom: '22px' }}>
                    {consoleItem.description}
                  </p>

                  <h4 style={{ fontSize: '1rem', marginBottom: '12px', color: '#0f172a' }}>
                    Kelengkapan Paket Standar:
                  </h4>
                  <div className="pricing-console-features">
                    {consoleItem.features.map((feat, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#334155' }}>
                        <div
                          style={{
                            width: '18px',
                            height: '18px',
                            borderRadius: '50%',
                            backgroundColor: '#eff6ff',
                            color: '#2563eb',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Add-on Pricing from WordPress */}
                  <div
                    style={{
                      backgroundColor: '#f8fafc',
                      padding: '16px 20px',
                      borderRadius: '12px',
                      border: '1px solid #e2e8f0',
                      marginBottom: '26px',
                    }}
                  >
                    <h5 style={{ fontSize: '0.85rem', color: '#2563eb', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.04em' }}>
                      Pilihan Add-on / Tambahan:
                    </h5>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.86rem', color: '#475569' }}>
                      <li>• {consoleItem.addOns.controller.name}: <strong>Rp {consoleItem.addOns.controller.price.toLocaleString('id-ID')}</strong> / {consoleItem.addOns.controller.unit}</li>
                      <li>• {consoleItem.addOns.game.name}: <strong>Rp {consoleItem.addOns.game.price.toLocaleString('id-ID')}</strong> / {consoleItem.addOns.game.unit}</li>
                      <li>• Tambahan LED TV 32 / 43 / 50 inci & Standing Bracket (Lihat Tab TV)</li>
                    </ul>
                  </div>

                  <button
                    onClick={() => handleSelectPackage('console', consoleItem.id)}
                    className="btn-primary"
                    style={{ padding: '13px 26px', fontSize: '0.96rem', borderRadius: '10px' }}
                  >
                    <span>Pilih Paket {consoleItem.name} di Form</span>
                  </button>
                </div>

                {/* Right: Console Picture & Delivery Badge */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className="pricing-console-media">
                  <div
                    style={{
                      width: '100%',
                      aspectRatio: '1/1',
                      maxWidth: '360px',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      border: '1px solid #cbd5e1',
                      backgroundColor: '#070b14',
                    }}
                  >
                    <img
                      src={consoleItem.colors[0].image}
                      alt={consoleItem.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>

                  <div
                    style={{
                      marginTop: '14px',
                      textAlign: 'center',
                      backgroundColor: '#eff6ff',
                      border: '1px solid #bfdbfe',
                      borderRadius: '8px',
                      padding: '8px 18px',
                    }}
                  >
                    <span style={{ fontSize: '0.84rem', color: '#2563eb', fontWeight: 600 }}>
                      Diantar, Dipasang, dan Dijemput Kembali
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: MAIN DI TEMPAT (PS LOUNGE) */}
        {activeTab === 'lounge' && (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '28px' }}>
              <p style={{ color: '#475569', fontSize: '0.96rem', maxWidth: '700px', margin: '0 auto 16px' }}>
                Main game langsung di Game Station RajaGamerz! Ruangan ber-AC dingin, sofa VIP empuk, TV 50 inch 4K, bebas ganti game, dan koneksi internet super cepat.
              </p>
              <button
                type="button"
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('selectBookingMode', { detail: 'lounge' }));
                  const orderSection = document.getElementById('form-pemesanan');
                  if (orderSection) {
                    orderSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="btn-primary"
                style={{
                  padding: '10px 22px',
                  fontSize: '0.9rem',
                  borderRadius: '8px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                }}
              >
                <MapPin size={16} />
                <span>Buka Form Booking Main di Tempat Sekarang</span>
              </button>
            </div>

            <div
              className="packages-grid-4"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '24px',
                paddingTop: '14px',
                alignItems: 'stretch',
              }}
            >
              {LOUNGE_PACKAGES.map((pkg) => (
                <div
                  key={pkg.id}
                  className="clean-card"
                  style={{
                    padding: '28px 22px',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    height: '100%',
                    borderColor: pkg.badge ? '#2563eb' : '#e2e8f0',
                    boxShadow: pkg.badge ? '0 10px 25px -5px rgba(37, 99, 235, 0.15)' : 'var(--shadow-sm)',
                  }}
                >
                  {pkg.badge && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '-12px',
                        right: '20px',
                        backgroundColor: '#2563eb',
                        color: '#ffffff',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        padding: '3px 10px',
                        borderRadius: '12px',
                        zIndex: 2,
                      }}
                    >
                      {pkg.badge}
                    </div>
                  )}

                  {/* Title Box - Fixed Height to Align Across Cards */}
                  <div style={{ minHeight: '52px', display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                    <h3 style={{ fontSize: '1.22rem', color: '#0f172a', margin: 0, lineHeight: 1.3 }}>
                      {pkg.title}
                    </h3>
                  </div>

                  {/* Price Box - Fixed Height to Align Across Cards */}
                  <div style={{ minHeight: '64px', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginBottom: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                      <span style={{ fontSize: '1.85rem', fontWeight: 800, color: '#2563eb', fontFamily: 'Outfit' }}>
                        {pkg.price}
                      </span>
                      <span style={{ fontSize: '0.82rem', color: '#64748b' }}>{pkg.rate}</span>
                    </div>
                  </div>

                  {/* Features Box - Flex Grow to push Button to Exact Bottom */}
                  <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '16px', marginBottom: '22px', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {pkg.features.map((feat, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.84rem', color: '#334155', lineHeight: 1.4 }}>
                        <Check size={14} style={{ color: '#2563eb', flexShrink: 0, marginTop: '2px' }} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Button - Always at the exact bottom baseline */}
                  <button
                    onClick={() => {
                      const orderSection = document.getElementById('form-pemesanan');
                      if (orderSection) {
                        orderSection.scrollIntoView({ behavior: 'smooth' });
                      }
                      window.dispatchEvent(new CustomEvent('selectBookingMode', { detail: 'lounge' }));
                    }}
                    className={pkg.badge ? 'btn-primary' : 'btn-secondary'}
                    style={{ marginTop: 'auto', width: '100%', padding: '11px', fontSize: '0.88rem', borderRadius: '8px' }}
                  >
                    <span>Booking Slot Main Ini</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: SEWA TV LED & BRACKET */}
        {activeTab === 'tv' && (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <p style={{ color: '#64748b', fontSize: '0.94rem' }}>
                Penyewaan TV LED layar lebar mulai 32 hingga 50 inci serta standing bracket untuk mabar pribadi, turnamen, kompetisi, gathering, dan event.
              </p>
            </div>

            <div
              className="packages-grid-4"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '24px',
                paddingTop: '14px',
                alignItems: 'stretch',
              }}
            >
              {TV_PACKAGES.map((tv) => (
                <div
                  key={tv.id}
                  className="clean-card"
                  style={{
                    padding: '28px 22px',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    height: '100%',
                    borderColor: tv.popular ? '#2563eb' : '#e2e8f0',
                    boxShadow: tv.popular ? '0 10px 25px -5px rgba(37, 99, 235, 0.15)' : 'var(--shadow-sm)',
                  }}
                >
                  {tv.popular && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '-12px',
                        right: '20px',
                        backgroundColor: '#2563eb',
                        color: '#ffffff',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        padding: '3px 10px',
                        borderRadius: '12px',
                        zIndex: 2,
                      }}
                    >
                      Paling Populer
                    </div>
                  )}

                  {/* Top Category Icon & Size */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', height: '24px' }}>
                    <Tv size={18} style={{ color: '#2563eb' }} />
                    <span style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 600 }}>
                      {tv.size}
                    </span>
                  </div>

                  {/* Title Box - Fixed Height to Align Across Cards */}
                  <div style={{ minHeight: '52px', display: 'flex', alignItems: 'center', marginBottom: '6px' }}>
                    <h3 style={{ fontSize: '1.25rem', color: '#0f172a', margin: 0, lineHeight: 1.3 }}>
                      {tv.name}
                    </h3>
                  </div>

                  {/* Price Box - Fixed Height to Align Across Cards */}
                  <div style={{ minHeight: '44px', display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '10px' }}>
                    <span style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', fontFamily: 'Outfit' }}>
                      Rp {tv.price.toLocaleString('id-ID')}
                    </span>
                    <span style={{ fontSize: '0.82rem', color: '#64748b' }}> / {tv.unit}</span>
                  </div>

                  {/* Description Box - Fixed Height to Align Across Cards */}
                  <div style={{ minHeight: '62px', display: 'flex', alignItems: 'flex-start', marginBottom: '16px' }}>
                    <p style={{ fontSize: '0.84rem', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                      {tv.description}
                    </p>
                  </div>

                  {/* Features Box - Flex Grow to push Button to Exact Bottom */}
                  <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '14px', marginBottom: '22px', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <p style={{ fontSize: '0.8rem', color: '#0f172a', fontWeight: 700, marginBottom: '4px' }}>
                      Termasuk:
                    </p>
                    {tv.includes.map((inc, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: '#64748b' }}>
                        <Check size={13} style={{ color: '#2563eb', flexShrink: 0 }} />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>

                  {/* Button - Always at the exact bottom baseline */}
                  <button
                    onClick={() => handleSelectPackage('tv', tv.id)}
                    className={tv.popular ? 'btn-primary' : 'btn-secondary'}
                    style={{ marginTop: 'auto', width: '100%', padding: '11px', fontSize: '0.88rem', borderRadius: '8px' }}
                  >
                    <span>Pilih {tv.name} di Form</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: EVENT & TOURNAMENT */}
        {activeTab === 'event' && (
          <div
            className="clean-card event-card"
            style={{
              padding: '38px',
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr',
              gap: '40px',
              alignItems: 'center',
            }}
          >
            <div>
              <div className="section-badge" style={{ marginBottom: '12px' }}>
                Turnamen & Gathering
              </div>
              <h3 style={{ fontSize: '2rem', marginBottom: '12px', color: '#0f172a' }}>
                Paket Khusus Event & Kompetisi Esports
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.6, marginBottom: '18px' }}>
                RajaGamerz melayani kebutuhan sewa konsol untuk turnamen komunitas (FC 24, Tekken, eFootball), gathering perusahaan, pameran, dan festival kampus.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                {[
                  'Bebas request jumlah unit PS5 / PS4 (mulai 2 hingga puluhan unit)',
                  'Sewa LED TV 32 - 50 inci lengkap dengan Standing Bracket beroda',
                  'Teknisi standby di lokasi untuk memastikan kegiatan berjalan lancar',
                  'Kabel roll dan kelengkapan instalasi listrik rapi dan aman',
                  'Invoice dan kuitansi resmi tersedia',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#334155' }}>
                    <div style={{ width: '18px', height: '18px', borderRadius: '50%', backgroundColor: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://api.whatsapp.com/send?phone=6287777484789&text=Hai%20Rajagamerz%2C%20Saya%20ingin%20konsultasi%20paket%20sewa%20PS%20untuk%20Event%20%2F%20Turnamen"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ padding: '13px 26px', fontSize: '0.96rem', borderRadius: '10px' }}
              >
                <span>Konsultasi Paket Event via WhatsApp</span>
              </a>
            </div>

            <div style={{ backgroundColor: '#f8fafc', padding: '26px', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
              <h4 style={{ fontSize: '1.15rem', marginBottom: '10px', color: '#0f172a' }}>
                Kebutuhan Custom Event?
              </h4>
              <p style={{ fontSize: '0.86rem', color: '#64748b', lineHeight: 1.6, marginBottom: '18px' }}>
                Tersedia penawaran khusus untuk penyewaan multi-unit dan durasi sewa lebih dari 3 hari.
              </p>
              <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '14px' }}>
                <p style={{ fontSize: '0.84rem', color: '#2563eb', fontWeight: 600, margin: 0 }}>
                  WhatsApp Resmi: 087777484789
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .pricing-console-card {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 40px;
          align-items: center;
          padding: 38px;
        }
        .pricing-console-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-bottom: 24px;
        }
        @media (max-width: 900px) {
          .pricing-console-card {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
            padding: 24px 18px !important;
          }
          .pricing-console-features {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
          }
          .pricing-console-media {
            width: 100% !important;
            max-width: 300px !important;
            margin: 0 auto !important;
          }
        }
        .packages-grid-4 {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 20px;
          align-items: stretch;
        }
        @media (max-width: 1100px) {
          .packages-grid-4 {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 20px !important;
          }
        }
        @media (max-width: 640px) {
          .packages-grid-4 {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .packages-grid-4 .clean-card {
            padding: 20px 16px !important;
          }
        }
        @media (max-width: 900px) {
          #paket-harga .event-card {
            grid-template-columns: 1fr !important;
            padding: 22px !important;
          }
        }
      `}</style>
    </section>
  );
}
