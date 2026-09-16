import React, { useState } from 'react';
import { RENTAL_TERMS, FAQS } from '../data/content';
import { ShieldCheck, ChevronDown, CheckCircle2, HelpCircle } from 'lucide-react';

export default function RentalTerms() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [checkedTerms, setCheckedTerms] = useState({});

  const toggleCheck = (id) => {
    setCheckedTerms((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const allChecked = RENTAL_TERMS.every((t) => checkedTerms[t.number]);

  return (
    <section id="syarat-sewa" style={{ padding: '80px 0', backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '45px' }}>
          <div className="section-badge">
            Ketentuan & SOP Resmi
          </div>
          <h2 className="section-title">
            Syarat Penyewaan <span>RajaGamerz</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Pastikan dokumen dan persyaratan di bawah ini telah disiapkan sebelum proses pemesanan unit konsol.
          </p>
        </div>

        {/* 5 RENTAL REQUIREMENTS CARDS */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px',
            marginBottom: '36px',
          }}
        >
          {RENTAL_TERMS.map((term) => {
            const isChecked = !!checkedTerms[term.number];
            return (
              <div
                key={term.number}
                className="clean-card"
                style={{
                  padding: '24px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  backgroundColor: isChecked ? '#eff6ff' : '#ffffff',
                  borderColor: isChecked ? '#2563eb' : '#e2e8f0',
                  cursor: 'pointer',
                }}
                onClick={() => toggleCheck(term.number)}
              >
                {/* Number Badge & Checkbox */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <span
                    style={{
                      fontFamily: 'Outfit',
                      fontSize: '1.35rem',
                      fontWeight: 800,
                      color: isChecked ? '#2563eb' : '#94a3b8',
                    }}
                  >
                    {term.number}
                  </span>

                  <div
                    style={{
                      width: '22px',
                      height: '22px',
                      borderRadius: '6px',
                      border: isChecked ? '2px solid #2563eb' : '1.5px solid #cbd5e1',
                      backgroundColor: isChecked ? '#2563eb' : '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {isChecked && <CheckCircle2 size={15} strokeWidth={3} />}
                  </div>
                </div>

                <div style={{ marginBottom: '8px' }}>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '2px 8px',
                      borderRadius: '4px',
                      backgroundColor: isChecked ? '#bfdbfe' : '#f1f5f9',
                      color: isChecked ? '#1d4ed8' : '#334155',
                    }}
                  >
                    {term.highlight}
                  </span>
                </div>

                <h4 style={{ fontSize: '1.02rem', marginBottom: '6px', color: '#0f172a' }}>
                  {term.title}
                </h4>

                <p style={{ fontSize: '0.84rem', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                  {term.detail}
                </p>
              </div>
            );
          })}
        </div>

        {/* Status Checklist Banner */}
        <div
          style={{
            backgroundColor: allChecked ? '#f0fdf4' : '#ffffff',
            border: allChecked ? '1px solid #86efac' : '1px solid #cbd5e1',
            borderRadius: '12px',
            padding: '16px 22px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            flexWrap: 'wrap',
            marginBottom: '50px',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                backgroundColor: allChecked ? '#dcfce7' : '#eff6ff',
                color: allChecked ? '#16a34a' : '#2563eb',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <CheckCircle2 size={17} />
            </div>
            <div>
              <h5 style={{ fontSize: '0.92rem', margin: 0, color: allChecked ? '#16a34a' : '#0f172a' }}>
                {allChecked
                  ? 'Semua 5 Dokumen Persyaratan Dikonfirmasi Siap.'
                  : 'Klik kartu di atas untuk mencentang kesiapan syarat sewa Anda.'}
              </h5>
              <p style={{ fontSize: '0.8rem', color: '#64748b', margin: 0 }}>
                KTP dan STNK asli diserahkan kepada petugas kami saat unit tiba di lokasi.
              </p>
            </div>
          </div>

          <a
            href="#form-pemesanan"
            className="btn-primary"
            style={{ padding: '8px 18px', fontSize: '0.86rem', borderRadius: '8px' }}
          >
            Lanjut ke Form Booking
          </a>
        </div>

        {/* FAQ ACCORDION */}
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <div className="section-badge">
              Informasi Umum
            </div>
            <h3 style={{ fontSize: '1.7rem', color: '#0f172a' }}>Frequently Asked Questions</h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="clean-card"
                  style={{
                    overflow: 'hidden',
                    borderColor: isOpen ? '#2563eb' : '#e2e8f0',
                  }}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                    style={{
                      width: '100%',
                      padding: '18px 22px',
                      backgroundColor: '#ffffff',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '16px',
                      cursor: 'pointer',
                      textAlign: 'left',
                      color: isOpen ? '#2563eb' : '#0f172a',
                    }}
                  >
                    <span style={{ fontSize: '0.96rem', fontWeight: 600 }}>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease',
                        flexShrink: 0,
                        color: isOpen ? '#2563eb' : '#64748b',
                      }}
                    />
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: '0 22px 18px',
                        color: '#475569',
                        fontSize: '0.9rem',
                        lineHeight: 1.6,
                        borderTop: '1px solid #f1f5f9',
                        paddingTop: '12px',
                      }}
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
