import React, { useState } from 'react';
import { GAMES_DATA } from '../data/content';
import { Search, Check, Plus, ChevronLeft, ChevronRight, X } from 'lucide-react';

const GAMES_PER_PAGE = 20;

export default function GameListSection({ onSelectGame, selectedGameTitles = [] }) {
  const [platformFilter, setPlatformFilter] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalGame, setActiveModalGame] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [showAll, setShowAll] = useState(false);

  const filteredGames = GAMES_DATA.filter((game) => {
    const matchPlatform = platformFilter === 'ALL' || game.platform === platformFilter;
    const matchSearch =
      game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.genre.toLowerCase().includes(searchQuery.toLowerCase());
    return matchPlatform && matchSearch;
  });

  const totalGames = filteredGames.length;
  const totalPages = Math.ceil(totalGames / GAMES_PER_PAGE) || 1;
  const validPage = Math.min(currentPage, totalPages);
  const startIndex = (validPage - 1) * GAMES_PER_PAGE;
  const displayGames = showAll ? filteredGames : filteredGames.slice(startIndex, startIndex + GAMES_PER_PAGE);

  const handleFilterChange = (pId) => {
    setPlatformFilter(pId);
    setCurrentPage(1);
    setShowAll(false);
  };

  const handleSearchChange = (val) => {
    setSearchQuery(val);
    setCurrentPage(1);
    setShowAll(false);
  };

  const scrollToCatalog = () => {
    const el = document.getElementById('katalog-game');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      scrollToCatalog();
    }
  };

  const handleToggleShowAll = () => {
    setShowAll(!showAll);
    if (showAll) {
      setCurrentPage(1);
      scrollToCatalog();
    }
  };

  return (
    <section id="katalog-game" style={{ padding: '80px 0', backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div className="section-badge">Daftar Game Siap Main</div>
          <h2 className="section-title">
            Katalog Game <span>PS5 &amp; PS4</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Pilih game PlayStation favorit Anda. Game yang Anda pilih akan langsung terpasang dan siap dimainkan saat konsol tiba di lokasi Anda.
          </p>

          {/* Search & Filter Bar */}
          <div
            className="game-filter-bar"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
              flexWrap: 'wrap',
              backgroundColor: '#ffffff',
              padding: '12px 16px',
              borderRadius: '14px',
              border: '1px solid #cbd5e1',
              boxShadow: 'var(--shadow-sm)',
              marginTop: '20px',
            }}
          >
            {/* Filter Tabs */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 600, whiteSpace: 'nowrap' }}>
                Filter:
              </span>
              {[
                { id: 'ALL', label: 'Semua' },
                { id: 'PS5', label: 'PS5' },
                { id: 'PS4', label: 'PS4' },
              ].map((p) => {
                const isActive = platformFilter === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => handleFilterChange(p.id)}
                    style={{
                      padding: '6px 14px',
                      borderRadius: '8px',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      border: isActive ? '1px solid #2563eb' : '1px solid #cbd5e1',
                      backgroundColor: isActive ? '#2563eb' : '#ffffff',
                      color: isActive ? '#ffffff' : '#334155',
                      transition: 'all 0.2s ease',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {p.label}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                flex: '1 1 200px',
                minWidth: 0,
                maxWidth: '380px',
              }}
            >
              <Search
                size={15}
                style={{ position: 'absolute', left: '10px', color: '#94a3b8', pointerEvents: 'none', flexShrink: 0 }}
              />
              <input
                type="text"
                placeholder="Cari game atau genre..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 10px 8px 32px',
                  backgroundColor: '#f8fafc',
                  border: '1px solid #cbd5e1',
                  borderRadius: '8px',
                  color: '#0f172a',
                  fontSize: '0.85rem',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>
          </div>
        </div>

        {/* Counter Info */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '16px',
            padding: '0 2px',
            fontSize: '0.82rem',
            color: '#64748b',
          }}
        >
          <span>
            {showAll ? (
              <>Menampilkan <strong>{totalGames}</strong> game</>
            ) : (
              <>
                <strong>{totalGames > 0 ? startIndex + 1 : 0}–{Math.min(startIndex + GAMES_PER_PAGE, totalGames)}</strong> dari <strong>{totalGames}</strong> game
              </>
            )}
          </span>
          {!showAll && totalPages > 1 && (
            <span>Hal. <strong>{validPage}</strong> / <strong>{totalPages}</strong></span>
          )}
        </div>

        {/* Game Cards Grid */}
        {displayGames.length === 0 ? (
          <div
            style={{
              textAlign: 'center',
              padding: '60px 20px',
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              color: '#64748b',
            }}
          >
            <p style={{ fontSize: '1rem', fontWeight: 600, color: '#334155', marginBottom: '8px' }}>
              Game tidak ditemukan
            </p>
            <p style={{ fontSize: '0.88rem', margin: 0 }}>
              Coba gunakan kata kunci lain atau ganti filter konsol.
            </p>
          </div>
        ) : (
          <div
            className="game-cards-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: '16px',
            }}
          >
            {displayGames.map((game) => {
              const isSelected = selectedGameTitles.includes(game.title);
              return (
                <div
                  key={game.id}
                  className="clean-card game-card-item"
                  style={{
                    overflow: 'hidden',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    borderColor: isSelected ? '#2563eb' : '#e2e8f0',
                    boxShadow: isSelected
                      ? '0 4px 16px rgba(37, 99, 235, 0.15)'
                      : 'var(--shadow-sm)',
                  }}
                  onClick={() => setActiveModalGame(game)}
                >
                  {/* Game Cover Image */}
                  <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', overflow: 'hidden', backgroundColor: '#0b1324', flexShrink: 0 }}>
                    <img
                      src={game.image}
                      alt={game.title}
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = game.backdrop;
                      }}
                    />
                    <span
                      style={{
                        position: 'absolute',
                        top: '8px',
                        left: '8px',
                        backgroundColor: '#2563eb',
                        color: '#ffffff',
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        padding: '2px 7px',
                        borderRadius: '5px',
                        letterSpacing: '0.02em',
                      }}
                    >
                      {game.platform}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: '4px', flexGrow: 1 }}>
                    {/* Title - 2 lines max */}
                    <h4
                      style={{
                        fontSize: '0.88rem',
                        fontWeight: 700,
                        color: '#0f172a',
                        lineHeight: 1.3,
                        margin: 0,
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                      }}
                    >
                      {game.title}
                    </h4>

                    {/* Genre + Players - 1 line, truncate */}
                    <p
                      style={{
                        fontSize: '0.74rem',
                        color: '#64748b',
                        margin: 0,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {game.genre} • {game.players}
                    </p>

                    {/* Footer row: badge left, action right — always pinned to bottom */}
                    <div
                      style={{
                        marginTop: 'auto',
                        paddingTop: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '6px',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '0.7rem',
                          color: '#2563eb',
                          fontWeight: 600,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          flex: 1,
                          minWidth: 0,
                        }}
                      >
                        {game.badge || 'Tersedia'}
                      </span>

                      {isSelected ? (
                        <span
                          style={{
                            color: '#16a34a',
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '3px',
                            flexShrink: 0,
                            whiteSpace: 'nowrap',
                          }}
                        >
                          <Check size={12} strokeWidth={3} /> Terpilih
                        </span>
                      ) : (
                        <span
                          style={{
                            fontSize: '0.72rem',
                            color: '#2563eb',
                            fontWeight: 600,
                            flexShrink: 0,
                            whiteSpace: 'nowrap',
                          }}
                        >
                          Detail →
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom: Show All + Pagination */}
        <div
          style={{
            marginTop: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            width: '100%',
          }}
        >
          {/* Toggle Show All */}
          <div>
            {!showAll ? (
              <button
                onClick={handleToggleShowAll}
                className="btn-primary"
                style={{ padding: '10px 20px', fontSize: '0.88rem', borderRadius: '10px' }}
              >
                <span>Lihat Semua Game</span>
              </button>
            ) : (
              <button
                onClick={handleToggleShowAll}
                className="btn-secondary"
                style={{ padding: '10px 20px', fontSize: '0.88rem', borderRadius: '10px' }}
              >
                <span>Tampilkan 20 per Halaman</span>
              </button>
            )}
          </div>

          {/* Pagination */}
          {!showAll && totalPages > 1 && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '6px',
              }}
            >
              <button
                onClick={() => goToPage(validPage - 1)}
                disabled={validPage === 1}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '7px 12px',
                  borderRadius: '8px',
                  border: '1px solid #cbd5e1',
                  backgroundColor: validPage === 1 ? '#f1f5f9' : '#ffffff',
                  color: validPage === 1 ? '#94a3b8' : '#1e293b',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  cursor: validPage === 1 ? 'not-allowed' : 'pointer',
                }}
              >
                <ChevronLeft size={15} />
                <span>Prev</span>
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                const isActive = pageNum === validPage;
                return (
                  <button
                    key={pageNum}
                    onClick={() => goToPage(pageNum)}
                    style={{
                      minWidth: '34px',
                      height: '34px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '0 8px',
                      borderRadius: '8px',
                      border: isActive ? '1px solid #2563eb' : '1px solid #cbd5e1',
                      backgroundColor: isActive ? '#2563eb' : '#ffffff',
                      color: isActive ? '#ffffff' : '#1e293b',
                      fontSize: '0.82rem',
                      fontWeight: isActive ? 700 : 600,
                      cursor: 'pointer',
                    }}
                  >
                    {pageNum}
                  </button>
                );
              })}

              <button
                onClick={() => goToPage(validPage + 1)}
                disabled={validPage === totalPages}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '7px 12px',
                  borderRadius: '8px',
                  border: '1px solid #cbd5e1',
                  backgroundColor: validPage === totalPages ? '#f1f5f9' : '#ffffff',
                  color: validPage === totalPages ? '#94a3b8' : '#1e293b',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  cursor: validPage === totalPages ? 'not-allowed' : 'pointer',
                }}
              >
                <span>Next</span>
                <ChevronRight size={15} />
              </button>
            </div>
          )}
        </div>

        {/* ===== MODAL DETAIL GAME (FULLY RESPONSIVE) ===== */}
        {activeModalGame && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(15, 23, 42, 0.75)',
              backdropFilter: 'blur(8px)',
              zIndex: 200,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px',
              boxSizing: 'border-box',
            }}
            onClick={() => setActiveModalGame(null)}
          >
            <div
              className="clean-card game-modal-card"
              style={{
                width: '100%',
                maxWidth: '520px',
                maxHeight: '90vh',
                overflowY: 'auto',
                backgroundColor: '#ffffff',
                border: '1px solid #cbd5e1',
                boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.3)',
                borderRadius: '20px',
                position: 'relative',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setActiveModalGame(null)}
                style={{
                  position: 'absolute',
                  top: '14px',
                  right: '14px',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  border: '1px solid #e2e8f0',
                  backgroundColor: '#f8fafc',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 10,
                  color: '#475569',
                  flexShrink: 0,
                }}
              >
                <X size={16} />
              </button>

              {/* Modal Content */}
              <div style={{ padding: '24px' }}>
                {/* Top: Image + Title side by side (mobile: stacked) */}
                <div className="game-modal-top">
                  {/* Image */}
                  <div
                    style={{
                      borderRadius: '12px',
                      overflow: 'hidden',
                      backgroundColor: '#0f172a',
                      flexShrink: 0,
                    }}
                    className="game-modal-img-wrap"
                  >
                    <img
                      src={activeModalGame.image}
                      alt={activeModalGame.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = activeModalGame.backdrop;
                      }}
                    />
                  </div>

                  {/* Info */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: 0 }}>
                    {/* Badges */}
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                      <span
                        style={{
                          backgroundColor: '#2563eb',
                          color: '#ffffff',
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          padding: '3px 8px',
                          borderRadius: '6px',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {activeModalGame.platform}
                      </span>
                      <span
                        style={{
                          backgroundColor: '#eff6ff',
                          color: '#2563eb',
                          fontSize: '0.7rem',
                          fontWeight: 600,
                          padding: '3px 8px',
                          borderRadius: '6px',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {activeModalGame.genre}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontSize: 'clamp(1.1rem, 4vw, 1.3rem)',
                        lineHeight: 1.25,
                        color: '#0f172a',
                        margin: 0,
                        wordBreak: 'break-word',
                      }}
                    >
                      {activeModalGame.title}
                    </h3>

                    <p style={{ fontSize: '0.8rem', color: '#64748b', margin: 0 }}>
                      {activeModalGame.players}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p
                  style={{
                    fontSize: '0.88rem',
                    color: '#475569',
                    lineHeight: 1.6,
                    margin: '16px 0 0',
                    wordBreak: 'break-word',
                  }}
                >
                  {activeModalGame.desc}
                </p>

                {/* Action Buttons */}
                <div
                  style={{
                    display: 'flex',
                    gap: '10px',
                    marginTop: '20px',
                    flexWrap: 'wrap',
                  }}
                >
                  <button
                    onClick={() => {
                      if (
                        !selectedGameTitles.includes(activeModalGame.title) &&
                        selectedGameTitles.length >= 2
                      ) {
                        alert(
                          'Maksimal 2 game per unit konsol! Hapus salah satu game di form pemesanan terlebih dahulu.'
                        );
                        return;
                      }
                      if (onSelectGame) onSelectGame(activeModalGame.title);
                      setActiveModalGame(null);
                      const orderEl = document.getElementById('form-pemesanan');
                      if (orderEl) orderEl.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="btn-primary"
                    style={{
                      flex: '1 1 auto',
                      minWidth: '140px',
                      padding: '11px 16px',
                      fontSize: '0.88rem',
                      borderRadius: '10px',
                      justifyContent: 'center',
                    }}
                  >
                    <Plus size={16} />
                    <span>
                      {selectedGameTitles.includes(activeModalGame.title)
                        ? 'Sudah Masuk di Form'
                        : 'Pilih Game Ini'}
                    </span>
                  </button>

                  <button
                    onClick={() => setActiveModalGame(null)}
                    className="btn-secondary"
                    style={{
                      flex: '0 0 auto',
                      padding: '11px 20px',
                      fontSize: '0.88rem',
                      borderRadius: '10px',
                      justifyContent: 'center',
                    }}
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Responsive styles for game section */}
      <style>{`
        /* Game cards: 2 columns on mobile */
        @media (max-width: 640px) {
          .game-cards-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 10px !important;
          }
          .game-card-item > div:last-child {
            padding: 10px 8px !important;
          }
        }

        /* Game cards: 1 column on very small screens */
        @media (max-width: 340px) {
          .game-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }

        /* Modal top section: side-by-side on desktop, stacked on mobile */
        .game-modal-top {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }
        .game-modal-img-wrap {
          width: 130px;
          aspect-ratio: 4/3;
        }

        @media (max-width: 480px) {
          .game-modal-top {
            flex-direction: column;
            align-items: stretch;
            gap: 12px;
          }
          .game-modal-img-wrap {
            width: 100% !important;
            aspect-ratio: 16/9 !important;
            border-radius: 10px !important;
          }
          .game-modal-card {
            border-radius: 16px !important;
          }
        }

        /* Filter bar responsive */
        @media (max-width: 520px) {
          .game-filter-bar {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 10px !important;
          }
          .game-filter-bar > div:last-child {
            max-width: 100% !important;
            min-width: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
