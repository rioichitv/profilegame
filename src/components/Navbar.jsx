import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.25s ease',
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.96)' : '#ffffff',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #e2e8f0',
        boxShadow: scrolled ? '0 4px 20px -2px rgba(15, 23, 42, 0.06)' : 'none',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '74px' }}>
        {/* Brand Logo & Title */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <div
            style={{
              position: 'relative',
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              overflow: 'hidden',
              border: '1px solid #cbd5e1',
              backgroundColor: '#f8fafc',
            }}
          >
            <img
              src="/logo.png"
              alt="RajaGamerz Logo"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://rajagamerz.wordpress.com/wp-content/uploads/2018/01/cropped-img_20170807_180837_547.jpg';
              }}
            />
          </div>
          <div>
            <span style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', fontFamily: 'Outfit' }}>
              RAJA<span style={{ color: '#2563eb' }}>GAMERZ</span>
            </span>
            <p style={{ fontSize: '0.74rem', color: '#64748b', letterSpacing: '0.02em', margin: 0 }}>
              Sewa PS5 & PS4
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '24px' }} className="desktop-nav">
          <a href="#pilih-ps" className="nav-link">Pilihan Konsol</a>
          <a href="#katalog-game" className="nav-link">Katalog Game</a>
          <a href="#paket-harga" className="nav-link">Paket & Lounge</a>
          <a href="#lokasi-peta" className="nav-link">Lokasi & Peta</a>
          <a href="#syarat-sewa" className="nav-link">Syarat Sewa</a>
          <a href="#form-pemesanan" className="nav-link" style={{ color: '#2563eb', fontWeight: 700 }}>Form Booking</a>
        </nav>

        {/* CTA Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <a
            href="#form-pemesanan"
            className="btn-primary desktop-cta"
            style={{ padding: '10px 20px', fontSize: '0.88rem', borderRadius: '8px' }}
          >
            Sewa Sekarang
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              backgroundColor: '#f8fafc',
              border: '1px solid #cbd5e1',
              color: '#0f172a',
              padding: '8px',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'none',
            }}
            className="mobile-toggle"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: '#ffffff',
            borderBottom: '1px solid #e2e8f0',
            padding: '18px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
          }}
        >
          <a href="#pilih-ps" onClick={() => setMobileMenuOpen(false)} className="nav-link-mobile">Pilihan Konsol & Warna</a>
          <a href="#katalog-game" onClick={() => setMobileMenuOpen(false)} className="nav-link-mobile">Katalog Game</a>
          <a href="#paket-harga" onClick={() => setMobileMenuOpen(false)} className="nav-link-mobile">Paket Sewa & Lounge PS</a>
          <a href="#lokasi-peta" onClick={() => setMobileMenuOpen(false)} className="nav-link-mobile">Peta & Lokasi Lounge</a>
          <a href="#syarat-sewa" onClick={() => setMobileMenuOpen(false)} className="nav-link-mobile">Syarat Penyewaan</a>
          <a href="#form-pemesanan" onClick={() => setMobileMenuOpen(false)} className="nav-link-mobile" style={{ color: '#2563eb' }}>Form Pemesanan</a>

          {/* Sewa Sekarang CTA Button inside Mobile Menu */}
          <div style={{ paddingTop: '8px', borderTop: '1px solid #f1f5f9' }}>
            <a
              href="#form-pemesanan"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary"
              style={{
                width: '100%',
                padding: '12px 20px',
                fontSize: '0.94rem',
                borderRadius: '8px',
                textAlign: 'center',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              Sewa Sekarang
            </a>
          </div>
        </div>
      )}

      <style>{`
        .nav-link {
          color: #475569;
          text-decoration: none;
          font-size: 0.92rem;
          font-weight: 500;
          transition: all 0.2s ease;
        }
        .nav-link:hover {
          color: #2563eb;
        }
        .nav-link-mobile {
          color: #0f172a;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 600;
          padding: 8px 0;
          border-bottom: 1px solid #f1f5f9;
        }
        @media (max-width: 860px) {
          .desktop-nav {
            display: none !important;
          }
          .desktop-cta {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
