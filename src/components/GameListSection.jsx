import React, { useState } from 'react';
import { GAMES_DATA } from '../data/content';
import { Search, Check, Plus, ChevronLeft, ChevronRight, Sparkles, MessageCircle } from 'lucide-react';

const GAMES_PER_PAGE = 20;

export default function GameListSection({ onSelectGame, selectedGameTitles = [] }) {
  const [platformFilter, setPlatformFilter] = useState('ALL'); // 'ALL' | 'PS5' | 'PS4'
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
  
  // If showAll is true, display all filtered games, otherwise limit to 20 per page
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
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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
          <div className="section-badge">
            Daftar Game Siap Main
          </div>
          <h2 className="section-title">
            Katalog Game <span>PS5 & PS4</span>
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
              gap: '16px',
              flexWrap: 'wrap',
              backgroundColor: '#ffffff',
              padding: '14px 20px',
              borderRadius: '14px',
              border: '1px solid #cbd5e1',
              boxShadow: 'var(--shadow-sm)',
              marginTop: '20px',
            }}
          >
            {/* Filter Tabs */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.84rem', color: '#64748b', marginRight: '4px', fontWeight: 600 }}>
                Filter Konsol:
              </span>
              {[
                { id: 'ALL', label: 'Semua Game' },
                { id: 'PS5', label: 'PlayStation 5' },
                { id: 'PS4', label: 'PlayStation 4' },
              ].map((p) => {
                const isActive = platformFilter === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => handleFilterChange(p.id)}
                    style={{
                      padding: '7px 16px',
                      borderRadius: '8px',
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      border: isActive ? '1px solid #2563eb' : '1px solid #cbd5e1',
                      backgroundColor: isActive ? '#2563eb' : '#ffffff',
                      color: isActive ? '#ffffff' : '#334155',
                      transition: 'all 0.2s ease',
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
                minWidth: '260px',
                flexGrow: 1,
                maxWidth: '380px',
              }}
            >
              <Search
                size={16}
                style={{ position: 'absolute', left: '12px', color: '#94a3b8', pointerEvents: 'none' }}
              />
              <input
                type="text"
                placeholder="Cari nama game atau genre..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                style={{
                  width: '100%',
                  padding: '9px 12px 9px 36px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #cbd5e1',
                  borderRadius: '8px',
                  color: '#0f172a',
                  fontSize: '0.88rem',
                  outline: 'none',
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
            gap: '10px',
            marginBottom: '18px',
            padding: '0 4px',
            fontSize: '0.85rem',
            color: '#64748b',
          }}
        >
          <span>
            {showAll ? (
              <>Menampilkan seluruh <strong>{totalGames}</strong> game PlayStation</>
            ) : (
              <>
                Menampilkan <strong>{totalGames > 0 ? startIndex + 1 : 0} - {Math.min(startIndex + GAMES_PER_PAGE, totalGames)}</strong> dari <strong>{totalGames}</strong> game PlayStation
              </>
            )}
          </span>
          {!showAll && totalPages > 1 && (
            <span>
              Halaman <strong>{validPage}</strong> dari <strong>{totalPages}</strong>
            </span>
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
            <p style={{ fontSize: '1.1rem', fontWeight: 600, color: '#334155', marginBottom: '8px' }}>
              Game tidak ditemukan
            </p>
            <p style={{ fontSize: '0.9rem', margin: 0 }}>
              Coba gunakan kata kunci pencarian lain atau ganti filter konsol di atas.
            </p>
          </div>
        ) : (
          <div
            className="game-cards-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: '22px',
            }}
          >
            {displayGames.map((game) => {
              const isSelected = selectedGameTitles.includes(game.title);
              return (
                <div
                  key={game.id}
                  className="clean-card"
                  style={{
                    overflow: 'hidden',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    borderColor: isSelected ? '#2563eb' : '#e2e8f0',
                    boxShadow: isSelected ? '0 4px 16px rgba(37, 99, 235, 0.15)' : 'var(--shadow-sm)',
                  }}
                  onClick={() => setActiveModalGame(game)}
                >
                  <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', overflow: 'hidden', backgroundColor: '#0b1324' }}>
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
                        top: '10px',
                        left: '10px',
                        backgroundColor: '#2563eb',
                        color: '#ffffff',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        padding: '3px 8px',
                        borderRadius: '6px',
                      }}
                    >
                      {game.platform}
                    </span>
                  </div>

                  <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '6px', flexGrow: 1 }}>
                    <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#0f172a', lineHeight: 1.3 }}>
                      {game.title}
                    </h4>
                    <p style={{ fontSize: '0.8rem', color: '#64748b', margin: 0 }}>
                      {game.genre} • {game.players}
                    </p>

                    <div style={{ marginTop: 'auto', paddingTop: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '0.78rem', color: '#2563eb', fontWeight: 600 }}>
                        {game.badge || 'Tersedia'}
                      </span>
                      {isSelected ? (
                        <span style={{ color: '#16a34a', fontSize: '0.8rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Check size={14} strokeWidth={3} /> Terpilih
                        </span>
                      ) : (
                        <span style={{ fontSize: '0.8rem', color: '#2563eb', fontWeight: 600 }}>
                          Detail Game
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Actions & Pagination Row (No outer enclosing box; Previous & Next on the right!) */}
        <div
          style={{
            marginTop: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            width: '100%',
          }}
        >
          {/* Tombol Lihat Semua Game di sebelah kiri */}
          <div>
            {!showAll ? (
              <button
                onClick={handleToggleShowAll}
                className="btn-primary"
                style={{
                  padding: '11px 24px',
                  fontSize: '0.9rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(37, 99, 235, 0.25)',
                }}
              >
                <span>Lihat Semua Game</span>
              </button>
            ) : (
              <button
                onClick={handleToggleShowAll}
                className="btn-secondary"
                style={{
                  padding: '11px 24px',
                  fontSize: '0.9rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  borderRadius: '10px',
                  cursor: 'pointer',
                }}
              >
                <span>Tampilkan 20 Game per Halaman</span>
              </button>
            )}
          </div>

          {/* Navigasi Paginasi di sebelah kanan (Tanpa kotak luar pembungkus!) */}
          {!showAll && totalPages > 1 && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '8px',
                marginLeft: 'auto',
              }}
            >
              {/* Previous Button */}
              <button
                onClick={() => goToPage(validPage - 1)}
                disabled={validPage === 1}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '8px 14px',
                  borderRadius: '8px',
                  border: '1px solid #cbd5e1',
                  backgroundColor: validPage === 1 ? '#f1f5f9' : '#ffffff',
                  color: validPage === 1 ? '#94a3b8' : '#1e293b',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: validPage === 1 ? 'not-allowed' : 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                <ChevronLeft size={16} />
                <span>Sebelumnya</span>
              </button>

              {/* Numbered Page Buttons */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                const isActive = pageNum === validPage;
                return (
                  <button
                    key={pageNum}
                    onClick={() => goToPage(pageNum)}
                    style={{
                      minWidth: '38px',
                      height: '38px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '0 10px',
                      borderRadius: '8px',
                      border: isActive ? '1px solid #2563eb' : '1px solid #cbd5e1',
                      backgroundColor: isActive ? '#2563eb' : '#ffffff',
                      color: isActive ? '#ffffff' : '#1e293b',
                      fontSize: '0.85rem',
                      fontWeight: isActive ? 700 : 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {pageNum}
                  </button>
                );
              })}

              {/* Next Button */}
              <button
                onClick={() => goToPage(validPage + 1)}
                disabled={validPage === totalPages}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '8px 14px',
                  borderRadius: '8px',
                  border: '1px solid #cbd5e1',
                  backgroundColor: validPage === totalPages ? '#f1f5f9' : '#ffffff',
                  color: validPage === totalPages ? '#94a3b8' : '#1e293b',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: validPage === totalPages ? 'not-allowed' : 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                <span>Selanjutnya</span>
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>

        {/* Modal Detail Game */}
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
              padding: '20px',
            }}
            onClick={() => setActiveModalGame(null)}
          >
            <div
              className="clean-card"
              style={{
                width: '100%',
                maxWidth: '600px',
                padding: '28px',
                backgroundColor: '#ffffff',
                border: '1px solid #cbd5e1',
                boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.25)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr', gap: '22px', alignItems: 'start' }}>
                <div style={{ width: '150px', aspectRatio: '4/3', borderRadius: '12px', overflow: 'hidden', backgroundColor: '#0f172a' }}>
                  <img
                    src={activeModalGame.image}
                    alt={activeModalGame.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = activeModalGame.backdrop;
                    }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <span style={{ backgroundColor: '#2563eb', color: '#ffffff', fontSize: '0.72rem', fontWeight: 700, padding: '3px 8px', borderRadius: '6px' }}>
                      {activeModalGame.platform}
                    </span>
                    <span style={{ backgroundColor: '#eff6ff', color: '#2563eb', fontSize: '0.72rem', fontWeight: 600, padding: '3px 8px', borderRadius: '6px' }}>
                      {activeModalGame.genre}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.35rem', lineHeight: 1.25, color: '#0f172a', margin: '4px 0' }}>
                    {activeModalGame.title}
                  </h3>

                  <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.5 }}>
                    {activeModalGame.desc}
                  </p>

                  <div style={{ display: 'flex', gap: '10px', marginTop: '14px' }}>
                    <button
                      onClick={() => {
                        if (!selectedGameTitles.includes(activeModalGame.title) && selectedGameTitles.length >= 2) {
                          alert('Maksimal pilihan game adalah 2 game per unit konsol! Hapus salah satu game terlebih dahulu di form pemesanan jika ingin mengganti judul.');
                          return;
                        }
                        if (onSelectGame) {
                          onSelectGame(activeModalGame.title);
                        }
                        setActiveModalGame(null);
                        const orderEl = document.getElementById('form-pemesanan');
                        if (orderEl) orderEl.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="btn-primary"
                      style={{ flexGrow: 1, padding: '10px', fontSize: '0.88rem' }}
                    >
                      <Plus size={16} />
                      <span>
                        {selectedGameTitles.includes(activeModalGame.title)
                          ? 'Sudah Masuk di Form'
                          : 'Pilih Game untuk Disewa'}
                      </span>
                    </button>

                    <button
                      onClick={() => setActiveModalGame(null)}
                      className="btn-secondary"
                      style={{ padding: '10px 18px', fontSize: '0.88rem' }}
                    >
                      Tutup
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
