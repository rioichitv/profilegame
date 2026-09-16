import React, { useState } from 'react';
import { CONSOLES } from '../data/content';
import { Check, Gamepad2, ShieldCheck, Cpu } from 'lucide-react';

export default function ConsoleColorShowcase({ onSelectConsoleAndColor }) {
  const [activeConsoleId, setActiveConsoleId] = useState('ps5');
  const [selectedColors, setSelectedColors] = useState({
    ps5: 'glacier-white',
    ps4: 'jet-black',
  });

  const activeConsole = CONSOLES.find((c) => c.id === activeConsoleId) || CONSOLES[0];
  const activeColorId = selectedColors[activeConsoleId] || activeConsole.colors[0].id;
  const activeColor = activeConsole.colors.find((col) => col.id === activeColorId) || activeConsole.colors[0];

  const handleColorChange = (consoleId, colorId) => {
    setSelectedColors((prev) => ({ ...prev, [consoleId]: colorId }));
  };

  const handleApplyToBooking = () => {
    if (onSelectConsoleAndColor) {
      onSelectConsoleAndColor(activeConsoleId, activeColorId);
    }
    const orderSection = document.getElementById('form-pemesanan');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pilih-ps" style={{ padding: '80px 0', backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '45px' }}>
          <div className="section-badge">
            Pilihan Konsol & Warna
          </div>
          <h2 className="section-title">
            Pilih Konsol & <span>Varian Warna Asli</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Unit PlayStation 5 dan PlayStation 4 dalam varian warna resmi. Setiap unit terawat dan melalui pengecekan berkala.
          </p>

          {/* Console Switcher Tab */}
          <div
            style={{
              display: 'inline-flex',
              padding: '4px',
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              border: '1px solid #cbd5e1',
              marginTop: '20px',
              gap: '6px',
            }}
          >
            {CONSOLES.map((consoleItem) => {
              const isActive = consoleItem.id === activeConsoleId;
              return (
                <button
                  key={consoleItem.id}
                  onClick={() => setActiveConsoleId(consoleItem.id)}
                  style={{
                    padding: '10px 24px',
                    borderRadius: '8px',
                    fontSize: '0.94rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    border: 'none',
                    transition: 'all 0.2s ease',
                    backgroundColor: isActive ? '#2563eb' : 'transparent',
                    color: isActive ? '#ffffff' : '#64748b',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <Gamepad2 size={18} />
                  <span>{consoleItem.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Console Showcase Box */}
        <div
          className="clean-card console-showcase-card"
          style={{
            padding: '38px',
            display: 'grid',
            gridTemplateColumns: '1fr 1.15fr',
            gap: '40px',
            alignItems: 'center',
            overflow: 'hidden',
            width: '100%',
            maxWidth: '100%',
            boxSizing: 'border-box',
          }}
        >
          {/* Left: Real Console Photo Preview */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', minWidth: 0, maxWidth: '100%' }}>
            <div
              className="console-photo-floating"
              style={{
                width: '100%',
                maxWidth: '420px',
                aspectRatio: '1/1',
                borderRadius: '16px',
                overflow: 'hidden',
                backgroundColor: '#070b14',
                border: `2px solid ${activeColor.hex}`,
                boxShadow: `0 14px 34px -4px ${activeColor.hex}55`,
                position: 'relative',
              }}
            >
              <img
                key={activeColor.image}
                src={activeColor.image}
                alt={`${activeConsole.name} - ${activeColor.name}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'opacity 0.3s ease',
                }}
              />

              {/* Photo Indicator */}
              <div
                style={{
                  position: 'absolute',
                  top: '14px',
                  left: '14px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #cbd5e1',
                  borderRadius: '6px',
                  padding: '4px 10px',
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  color: '#0f172a',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                }}
              >
                <ShieldCheck size={13} style={{ color: activeColor.id === 'volcanic-red' ? '#dc2626' : '#2563eb' }} />
                <span>Foto Asli Unit</span>
              </div>

              {/* Color Edition Pill */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '14px',
                  right: '14px',
                  backgroundColor: activeColor.hex,
                  borderRadius: '6px',
                  padding: '5px 12px',
                  fontSize: '0.76rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  letterSpacing: '0.03em',
                }}
              >
                {activeColor.badge}
              </div>
            </div>

            <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '10px', textAlign: 'center' }}>
              Foto asli studio unit resmi yang akan diantarkan ke alamat penyewa.
            </p>
          </div>

          {/* Right: Console Specs, Color Selector Swatches, and Inclusions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', minWidth: 0, maxWidth: '100%' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', marginBottom: '8px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.82rem', color: '#2563eb', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  {activeConsole.subtitle}
                </span>
                <span
                  style={{
                    fontSize: '0.92rem',
                    fontWeight: 800,
                    color: '#2563eb',
                    backgroundColor: '#eff6ff',
                    padding: '4px 12px',
                    borderRadius: '6px',
                    border: '1px solid #bfdbfe',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {activeConsole.priceLabel}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px', flexWrap: 'wrap' }}>
                <h3 style={{ fontSize: 'clamp(1.5rem, 4vw, 1.9rem)', margin: 0, color: '#0f172a' }}>{activeConsole.name}</h3>
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
                  Stok: {activeConsole.stock} Unit Ready
                </span>
              </div>
              <p style={{ fontSize: '0.90rem', color: '#475569', lineHeight: 1.6 }}>
                {activeConsole.description}
              </p>
            </div>

            {/* COLOR SELECTOR SWATCHES */}
            <div
              className="color-swatches-box"
              style={{
                backgroundColor: '#f8fafc',
                padding: '16px 18px',
                borderRadius: '12px',
                border: '1px solid #e2e8f0',
                width: '100%',
                maxWidth: '100%',
                boxSizing: 'border-box',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
                <label style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0f172a' }}>
                  Pilih Varian Warna Konsol:
                </label>
                <span style={{ fontSize: '0.84rem', color: '#2563eb', fontWeight: 600 }}>
                  {activeColor.name}
                </span>
              </div>

              <div className="color-swatches-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', width: '100%' }}>
                {activeConsole.colors.map((color) => {
                  const isSelected = color.id === activeColorId;
                  return (
                    <button
                      key={color.id}
                      type="button"
                      onClick={() => handleColorChange(activeConsoleId, color.id)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '8px 10px',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        border: isSelected ? '2px solid #2563eb' : '1px solid #cbd5e1',
                        backgroundColor: isSelected ? '#ffffff' : '#f8fafc',
                        boxShadow: isSelected ? '0 2px 8px rgba(37, 99, 235, 0.15)' : 'none',
                        width: '100%',
                        minWidth: 0,
                        boxSizing: 'border-box',
                      }}
                    >
                      <span
                        style={{
                          width: '16px',
                          height: '16px',
                          borderRadius: '50%',
                          backgroundColor: color.hex,
                          border: '1px solid #94a3b8',
                          display: 'inline-block',
                          flexShrink: 0,
                        }}
                      />
                      <span style={{ fontSize: '0.80rem', fontWeight: isSelected ? 700 : 500, color: isSelected ? '#2563eb' : '#334155', textAlign: 'left', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', minWidth: 0, flex: 1 }}>
                        {color.name}
                      </span>
                    </button>
                  );
                })}
              </div>

              <p style={{ fontSize: '0.82rem', color: '#64748b', margin: '10px 0 0' }}>
                {activeColor.description}
              </p>
            </div>

            {/* Included in this Rental Package */}
            <div style={{ width: '100%', minWidth: 0 }}>
              <p style={{ fontSize: '0.86rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                Paket Sewa Sudah Termasuk:
              </p>
              <div className="console-features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '8px', width: '100%' }}>
                {activeConsole.features.map((feat, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: '#475569', minWidth: 0 }}>
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
                    <span style={{ wordBreak: 'break-word', minWidth: 0 }}>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Button to Apply this Console & Color to Booking Form */}
            <div style={{ paddingTop: '6px', width: '100%' }}>
              <button
                onClick={handleApplyToBooking}
                className="btn-primary"
                style={{ width: '100%', maxWidth: '100%', padding: '13px', fontSize: '0.94rem', borderRadius: '10px', justifyContent: 'center', boxSizing: 'border-box' }}
              >
                <span>Pilih {activeConsole.name} ({activeColor.name}) di Form</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #pilih-ps .clean-card {
            grid-template-columns: 1fr !important;
            padding: 20px 14px !important;
          }
        }
        @media (max-width: 600px) {
          #pilih-ps .console-features-grid {
            grid-template-columns: 1fr !important;
          }
          #pilih-ps .color-swatches-box {
            padding: 12px 10px !important;
          }
          #pilih-ps .color-swatches-grid {
            gap: 6px !important;
          }
          #pilih-ps .color-swatches-grid button {
            padding: 7px 6px !important;
          }
        }
      `}</style>
    </section>
  );
}
