import React from 'react';
import { CONTACT_INFO } from '../data/content';
import { Phone, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { InstagramIcon, WhatsAppIcon } from './Icons';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#f8fafc',
        borderTop: '1px solid #e2e8f0',
        padding: '65px 0 35px',
        position: 'relative',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '36px',
            marginBottom: '45px',
          }}
        >
          {/* Brand & About */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  border: '1px solid #cbd5e1',
                  backgroundColor: '#ffffff',
                }}
              >
                <img
                  src="/logo.png"
                  alt="RajaGamerz"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://rajagamerz.wordpress.com/wp-content/uploads/2018/01/cropped-img_20170807_180837_547.jpg';
                  }}
                />
              </div>
              <span style={{ fontSize: '1.35rem', fontWeight: 800, fontFamily: 'Outfit', color: '#0f172a' }}>
                RAJA<span style={{ color: '#2563eb' }}>GAMERZ</span>
              </span>
            </div>

            <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6, marginBottom: '18px' }}>
              Penyedia jasa rental konsol PlayStation 5, PlayStation 4, serta TV LED dan standing bracket sejak 2016. Sistem antar, pasang, dan jemput langsung ke lokasi Anda.
            </p>

            <div style={{ display: 'flex', gap: '10px' }}>
              <a
                href="https://www.instagram.com/rajagamerz/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #cbd5e1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#2563eb',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                aria-label="Instagram RajaGamerz"
              >
                <InstagramIcon size={17} />
              </a>
              <a
                href={`https://api.whatsapp.com/send?phone=${CONTACT_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #cbd5e1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#16a34a',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                aria-label="WhatsApp RajaGamerz"
              >
                <WhatsAppIcon size={17} />
              </a>
            </div>
          </div>

          {/* Navigasi */}
          <div>
            <h4 style={{ fontSize: '1rem', marginBottom: '16px', color: '#0f172a' }}>
              Navigasi Halaman
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '9px', fontSize: '0.88rem' }}>
              <li><a href="#pilih-ps" style={{ color: '#475569', textDecoration: 'none' }}>Pilihan Konsol & Warna</a></li>
              <li><a href="#katalog-game" style={{ color: '#475569', textDecoration: 'none' }}>Katalog Game</a></li>
              <li><a href="#paket-harga" style={{ color: '#475569', textDecoration: 'none' }}>Paket Sewa & Main di Tempat</a></li>
              <li><a href="#lokasi-peta" style={{ color: '#475569', textDecoration: 'none' }}>Peta & Lokasi Lounge</a></li>
              <li><a href="#syarat-sewa" style={{ color: '#475569', textDecoration: 'none' }}>Syarat Penyewaan</a></li>
              <li><a href="#form-pemesanan" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 600 }}>Form Pemesanan</a></li>
            </ul>
          </div>

          {/* Layanan */}
          <div>
            <h4 style={{ fontSize: '1rem', marginBottom: '16px', color: '#0f172a' }}>
              Standar Layanan
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '9px', fontSize: '0.86rem', color: '#334155' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={16} style={{ color: '#2563eb' }} />
                <span>Unit & Stik Wireless Original Sony</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={16} style={{ color: '#2563eb' }} />
                <span>Gratis Antar, Pasang, dan Jemput</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={16} style={{ color: '#2563eb' }} />
                <span>Bisa Main Langsung di Game Lounge</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={16} style={{ color: '#2563eb' }} />
                <span>Game Updated Patch & Roster Terbaru</span>
              </li>
            </ul>
          </div>

          {/* Kontak Resmi: Direct Action Buttons */}
          <div>
            <h4 style={{ fontSize: '1rem', marginBottom: '16px', color: '#0f172a' }}>
              Kontak Resmi
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.86rem', color: '#475569' }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <a
                  href={`https://api.whatsapp.com/send?phone=${CONTACT_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{
                    padding: '10px 18px',
                    fontSize: '0.88rem',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    backgroundColor: '#16a34a',
                    border: '1px solid #15803d',
                  }}
                >
                  <WhatsAppIcon size={16} />
                  <span>WhatsApp</span>
                </a>

                <a
                  href="https://www.instagram.com/rajagamerz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{
                    padding: '10px 18px',
                    fontSize: '0.88rem',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    color: '#2563eb',
                    borderColor: '#bfdbfe',
                  }}
                >
                  <InstagramIcon size={16} />
                  <span>Instagram</span>
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '6px' }}>
                <Clock size={15} style={{ color: '#2563eb' }} />
                <span>{CONTACT_INFO.operatingHours}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <MapPin size={15} style={{ color: '#2563eb', flexShrink: 0, marginTop: '2px' }} />
                <span>Area Layanan: Jabodetabek (Jakarta, Bogor, Depok, Tangerang, Bekasi)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright without Sumber data */}
        <div
          style={{
            borderTop: '1px solid #e2e8f0',
            paddingTop: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            fontSize: '0.82rem',
            color: '#64748b',
          }}
        >
          <p style={{ margin: 0 }}>
            © {new Date().getFullYear()} RajaGamerz Rental PS. Hak Cipta Dilindungi.
          </p>
          <p style={{ margin: 0, color: '#94a3b8' }}>
            Rental PlayStation Resmi Terpercaya Sejak 2016
          </p>
        </div>
      </div>
    </footer>
  );
}
