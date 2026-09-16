import React from 'react';
import { CONTACT_INFO } from '../data/content';
import { WhatsAppIcon } from './Icons';

export default function WhatsAppFloating() {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 99,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <a
        href={`https://api.whatsapp.com/send?phone=${CONTACT_INFO.whatsapp}&text=Hai%20Rajagamerz%2C%20Saya%20ingin%20tanya%20sewa%20Playstation`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          backgroundColor: '#16a34a',
          color: '#ffffff',
          padding: '12px 18px',
          borderRadius: '50px',
          boxShadow: '0 6px 20px rgba(22, 163, 74, 0.35)',
          textDecoration: 'none',
          fontWeight: 700,
          fontSize: '0.88rem',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          transition: 'all 0.2s ease',
        }}
        className="wa-floating-btn"
        aria-label="Chat WhatsApp RajaGamerz"
      >
        <WhatsAppIcon size={20} />
        <span className="wa-text">Chat WhatsApp</span>
      </a>

      <style>{`
        .wa-floating-btn:hover {
          background-color: #15803d;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(22, 163, 74, 0.45);
        }
        @media (max-width: 600px) {
          .wa-text {
            display: none;
          }
          .wa-floating-btn {
            padding: 13px;
            border-radius: 50%;
          }
        }
      `}</style>
    </div>
  );
}
