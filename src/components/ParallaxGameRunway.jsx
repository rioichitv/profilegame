import React from 'react';
import { GAMES_DATA } from '../data/content';

export default function ParallaxGameRunway() {
  // Split games into 3 columns
  const col1 = [];
  const col2 = [];
  const col3 = [];
  GAMES_DATA.forEach((g, idx) => {
    if (idx % 3 === 0) col1.push(g);
    else if (idx % 3 === 1) col2.push(g);
    else col3.push(g);
  });

  // Duplicate arrays for infinite seamless loop
  const infiniteCol1 = [...col1, ...col1];
  const infiniteCol2 = [...col2, ...col2];
  const infiniteCol3 = [...col3, ...col3];

  return (
    <section
      style={{
        padding: '30px 0 70px',
        backgroundColor: '#ffffff', // Background putih langsung gabung background body
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        {/* Clean Visual Header */}
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div className="section-badge">Showcase Game</div>
          <h2 className="section-title">
            Sensasi Bermain Game <span>Next-Gen PS5 & PS4</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto', maxWidth: '620px' }}>
            Ratusan pilihan judul game terbaik dengan performa maksimal siap menemani keseruan Anda.
          </p>
        </div>

        {/* Seamless 3D Moving Stream (Unclickable & Constantly Running) */}
        <div className="kuropedia-stage-seamless">
          {/* Fades directly to white */}
          <div className="kuropedia-fade-top-white" />
          <div className="kuropedia-fade-bottom-white" />

          {/* Perspective Plane */}
          <div className="kuropedia-perspective-plane-seamless">
            {/* Column 1: Left Moves Downward Continuously */}
            <div className="kuropedia-col-seamless">
              <div className="kuropedia-scroll-down">
                {infiniteCol1.map((game, i) => (
                  <div key={`stream1-${game.id}-${i}`} className="kuropedia-card-seamless">
                    <img
                      src={game.image}
                      alt={game.title}
                      className="kuropedia-card-seamless-img"
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = game.backdrop;
                      }}
                    />
                    <div className="kuropedia-card-seamless-content">
                      <div className="kuropedia-card-seamless-title">{game.title}</div>
                      <div className="kuropedia-card-seamless-meta">
                        <span>{game.platform}</span>
                        <span>{game.genre}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Center Moves Downward Continuously */}
            <div className="kuropedia-col-seamless">
              <div className="kuropedia-scroll-center">
                {infiniteCol2.map((game, i) => (
                  <div key={`stream2-${game.id}-${i}`} className="kuropedia-card-seamless">
                    <img
                      src={game.image}
                      alt={game.title}
                      className="kuropedia-card-seamless-img"
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = game.backdrop;
                      }}
                    />
                    <div className="kuropedia-card-seamless-content">
                      <div className="kuropedia-card-seamless-title">{game.title}</div>
                      <div className="kuropedia-card-seamless-meta">
                        <span>{game.platform}</span>
                        <span>{game.genre}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3: Right Moves Upward Continuously */}
            <div className="kuropedia-col-seamless">
              <div className="kuropedia-scroll-up">
                {infiniteCol3.map((game, i) => (
                  <div key={`stream3-${game.id}-${i}`} className="kuropedia-card-seamless">
                    <img
                      src={game.image}
                      alt={game.title}
                      className="kuropedia-card-seamless-img"
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = game.backdrop;
                      }}
                    />
                    <div className="kuropedia-card-seamless-content">
                      <div className="kuropedia-card-seamless-title">{game.title}</div>
                      <div className="kuropedia-card-seamless-meta">
                        <span>{game.platform}</span>
                        <span>{game.genre}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
