import React, { useState, useEffect } from 'react';
import { CONSOLES, TV_PACKAGES, GAMES_DATA, CONTACT_INFO } from '../data/content';
import { Send, Check, X, Calendar, Clock, MapPin, ShieldCheck, Gamepad2, Sparkles, User, MessageCircle } from 'lucide-react';

export default function BookingForm({ initialConsole = 'ps5', initialColor = 'glacier-white', initialGames = [] }) {
  const [bookingMode, setBookingMode] = useState('delivery'); // 'delivery' | 'lounge'
  const [consoleType, setConsoleType] = useState(initialConsole);
  const [colorId, setColorId] = useState(initialColor);
  const [durationDays, setDurationDays] = useState(1);
  const [loungeDuration, setLoungeDuration] = useState('3jam'); // '1jam' | '2jam' | '3jam' | '5jam' | 'begadang'
  const [unitCount, setUnitCount] = useState(1);
  const [tvAddon, setTvAddon] = useState('none');
  const [standingBracket, setStandingBracket] = useState(false);
  const [extraControllers, setExtraControllers] = useState(0);
  const [selectedGames, setSelectedGames] = useState(initialGames.length > 0 ? initialGames.slice(0, 2) : []);

  // Date and Time fields (Tanggal Bulan Tahun)
  const todayStr = new Date().toISOString().split('T')[0];
  const [bookingDate, setBookingDate] = useState(todayStr);
  const [bookingTime, setBookingTime] = useState('14:00');

  // Customer Details
  const [customerName, setCustomerName] = useState('');
  const [deliveryLocation, setDeliveryLocation] = useState('');
  const [playerCount, setPlayerCount] = useState('2 Orang');
  const [rentalPurpose, setRentalPurpose] = useState('Pribadi');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    setConsoleType(initialConsole);
  }, [initialConsole]);

  useEffect(() => {
    setColorId(initialColor);
  }, [initialColor]);

  useEffect(() => {
    if (initialGames.length > 0) {
      setSelectedGames(initialGames.slice(0, 2));
    }
  }, [initialGames]);

  // Listen to external triggers (e.g. from PricingPackages)
  useEffect(() => {
    const handleLoungeTrigger = (e) => {
      if (e.detail === 'lounge') {
        setBookingMode('lounge');
      }
    };
    window.addEventListener('selectBookingMode', handleLoungeTrigger);
    return () => window.removeEventListener('selectBookingMode', handleLoungeTrigger);
  }, []);

  const currentConsole = CONSOLES.find((c) => c.id === consoleType) || CONSOLES[0];
  const isPs5 = consoleType === 'ps5';

  useEffect(() => {
    const hasColor = currentConsole.colors.some((c) => c.id === colorId);
    if (!hasColor) {
      setColorId(currentConsole.colors[0].id);
    }
  }, [consoleType, currentConsole]);

  const currentColor = currentConsole.colors.find((c) => c.id === colorId) || currentConsole.colors[0];

  // Price calculations
  let estimatedTotal = 0;
  let loungeDurationLabel = '';

  if (bookingMode === 'delivery') {
    const baseConsolePrice = currentConsole.basePrice * unitCount * durationDays;
    const extraControllerPrice = extraControllers * currentConsole.addOns.controller.price * durationDays * unitCount;
    let tvPrice = 0;
    if (tvAddon === 'tv-32') tvPrice = 250000 * durationDays;
    if (tvAddon === 'tv-43') tvPrice = 500000 * durationDays;
    if (tvAddon === 'tv-50') tvPrice = 750000 * durationDays;
    const bracketPrice = standingBracket ? 150000 * durationDays : 0;
    estimatedTotal = baseConsolePrice + extraControllerPrice + tvPrice + bracketPrice;
  } else {
    // Lounge / Main di Tempat Pricing
    let baseLounge = 0;
    if (loungeDuration === '1jam') {
      baseLounge = isPs5 ? 15000 : 10000;
      loungeDurationLabel = isPs5 ? '1 Jam Mabar PS5 (Rp 15.000)' : '1 Jam Mabar PS4 (Rp 10.000)';
    } else if (loungeDuration === '2jam') {
      baseLounge = isPs5 ? 30000 : 20000;
      loungeDurationLabel = isPs5 ? '2 Jam Mabar PS5 (Rp 30.000)' : '2 Jam Mabar PS4 (Rp 20.000)';
    } else if (loungeDuration === '3jam') {
      baseLounge = isPs5 ? 40000 : 25000;
      loungeDurationLabel = isPs5 ? 'Paket Hemat 3 Jam PS5 (Rp 40.000)' : 'Paket Hemat 3 Jam PS4 (Rp 25.000)';
    } else if (loungeDuration === '5jam') {
      baseLounge = isPs5 ? 65000 : 45000;
      loungeDurationLabel = isPs5 ? 'Paket Puas 5 Jam PS5 (Rp 65.000)' : 'Paket Puas 5 Jam PS4 (Rp 45.000)';
    } else if (loungeDuration === 'begadang') {
      baseLounge = isPs5 ? 95000 : 65000;
      loungeDurationLabel = isPs5 ? 'Paket Begadang PS5 (Rp 95.000)' : 'Paket Begadang PS4 (Rp 65.000)';
    }
    const extraStick = extraControllers * 15000;
    estimatedTotal = (baseLounge * unitCount) + extraStick;
  }

  // Handle Game Selection - STRICT LIMIT OF 2 GAMES
  const handleToggleGame = (gameTitle) => {
    if (selectedGames.includes(gameTitle)) {
      setSelectedGames(selectedGames.filter((t) => t !== gameTitle));
    } else {
      if (selectedGames.length >= 2) {
        alert('Maksimal pilihan game adalah 2 judul game per konsol. Hapus salah satu game terlebih dahulu untuk memilih game lain.');
        return;
      }
      setSelectedGames([...selectedGames, gameTitle]);
    }
  };

  const handleGenerateWhatsApp = (e) => {
    e.preventDefault();

    // Format date string to Indonesian DD-MM-YYYY
    let formattedDate = bookingDate;
    if (bookingDate) {
      const parts = bookingDate.split('-');
      if (parts.length === 3) {
        formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`; // DD/MM/YYYY
      }
    }

    let message = '';

    if (bookingMode === 'lounge') {
      message = `Halo Admin RajaGamerz, Saya ingin booking MAIN DI TEMPAT (Game Lounge):

Nama Pemesan : ${customerName || '-'}
Konsol       : ${currentConsole.name} (${currentColor.name})
Jumlah Unit  : ${unitCount} Unit (${playerCount})
Durasi Main  : ${loungeDurationLabel}
Tanggal Main : ${formattedDate}
Jam Datang   : ${bookingTime} WIB
Game Pilihan : ${selectedGames.length > 0 ? selectedGames.join(', ') : 'Pilih di Lokasi'}
Extra Stik   : ${extraControllers > 0 ? `+${extraControllers} Stik Original` : 'Standar 2 Stik'}
Estimasi Biaya: Rp ${estimatedTotal.toLocaleString('id-ID')}
${notes ? `Catatan: ${notes}\n` : ''}
Mohon konfirmasi ketersediaan sofa VIP / bilik konsol. Terima Kasih!`;
    } else {
      const tvText =
        tvAddon === 'none'
          ? 'Tidak Pakai TV'
          : `${TV_PACKAGES.find((t) => t.id === tvAddon)?.name || ''} ${standingBracket ? '+ Standing Bracket' : ''}`;

      const controllerText =
        extraControllers > 0
          ? `+${extraControllers} Stik Original (Total ${2 + extraControllers} Stik)`
          : 'Standar 2 Stik';

      message = `Hai Rajagamerz, Saya ingin pesan sewa PlayStation ANTAR KE RUMAH:

Nama   : ${customerName || '-'}
Lokasi : ${deliveryLocation || '-'}
PS     : ${currentConsole.name} (Warna: ${currentColor.name})
Game (Maks 2) : ${selectedGames.length > 0 ? selectedGames.join(', ') : 'Rekomendasi Terbaik'}
Tanggal Pengiriman : ${formattedDate}
Jam Pengiriman     : ${bookingTime} WIB

Untuk Event/Pribadi : ${rentalPurpose}
Jumlah Unit / Durasi : ${unitCount} Unit (${durationDays} Hari)
TV Tambahan : ${tvText}
Extra Stik  : ${controllerText}
Estimasi Total Biaya: Rp ${estimatedTotal.toLocaleString('id-ID')}
${notes ? `Catatan Khusus: ${notes}\n` : ''}
Persyaratan KTP dan STNK siap. Terima Kasih`;
    }

    const encoded = encodeURIComponent(message);
    const waUrl = `https://api.whatsapp.com/send?phone=${CONTACT_INFO.whatsapp}&text=${encoded}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section id="form-pemesanan" style={{ padding: '85px 0', backgroundColor: '#ffffff' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="section-badge">
            Formulir Pemesanan Resmi
          </div>
          <h2 className="section-title">
            Booking Sewa Konsol & <span>Main di Tempat</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto', maxWidth: '650px' }}>
            Pilih layanan sewa antar ke rumah atau reservasi bilik VIP untuk main langsung di Game Lounge RajaGamerz.
          </p>

          {/* Booking Type Switcher */}
          <div
            className="booking-type-switcher"
            style={{
              display: 'inline-flex',
              padding: '5px',
              backgroundColor: '#f8fafc',
              borderRadius: '12px',
              border: '1.5px solid #cbd5e1',
              marginTop: '22px',
              gap: '6px',
              maxWidth: '100%',
            }}
          >
            <button
              type="button"
              onClick={() => setBookingMode('delivery')}
              style={{
                padding: '11px 22px',
                borderRadius: '8px',
                fontSize: '0.92rem',
                fontWeight: 700,
                cursor: 'pointer',
                border: 'none',
                backgroundColor: bookingMode === 'delivery' ? '#2563eb' : 'transparent',
                color: bookingMode === 'delivery' ? '#ffffff' : '#64748b',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span>Sewa Antar ke Rumah</span>
            </button>

            <button
              type="button"
              onClick={() => setBookingMode('lounge')}
              style={{
                padding: '11px 22px',
                borderRadius: '8px',
                fontSize: '0.92rem',
                fontWeight: 700,
                cursor: 'pointer',
                border: 'none',
                backgroundColor: bookingMode === 'lounge' ? '#2563eb' : 'transparent',
                color: bookingMode === 'lounge' ? '#ffffff' : '#64748b',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span>Main di Tempat (Game Lounge)</span>
            </button>
          </div>
        </div>

        <div
          className="clean-card booking-form-card"
          style={{
            padding: '38px',
            backgroundColor: '#ffffff',
            border: '1px solid #cbd5e1',
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          <form onSubmit={handleGenerateWhatsApp}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: '38px', width: '100%' }} className="booking-grid">
              {/* LEFT COLUMN: CONSOLE SELECTION & REAL PHOTO PREVIEW */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', width: '100%', minWidth: 0 }}>
                {/* 1. Pilih Tipe Konsol */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                    1. Pilih Konsol PlayStation:
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    {CONSOLES.map((c) => {
                      const isSelected = consoleType === c.id;
                      return (
                        <button
                          key={c.id}
                          type="button"
                          onClick={() => setConsoleType(c.id)}
                          style={{
                            padding: '12px 14px',
                            borderRadius: '10px',
                            border: isSelected ? '2px solid #2563eb' : '1px solid #cbd5e1',
                            backgroundColor: isSelected ? '#eff6ff' : '#ffffff',
                            cursor: 'pointer',
                            textAlign: 'left',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '3px',
                            transition: 'all 0.2s ease',
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <span style={{ fontSize: '1rem', fontWeight: 800, color: isSelected ? '#2563eb' : '#0f172a', fontFamily: 'Outfit' }}>
                              {c.name}
                            </span>
                            {isSelected && <Check size={16} style={{ color: '#2563eb' }} />}
                          </div>
                          <span style={{ fontSize: '0.78rem', color: '#64748b' }}>
                            {bookingMode === 'lounge' ? (c.id === 'ps5' ? 'Rp 15.000 / jam' : 'Rp 10.000 / jam') : c.priceLabel}
                          </span>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '2px' }}>
                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#16a34a', display: 'inline-block' }} />
                            <span style={{ fontSize: '0.72rem', color: '#16a34a', fontWeight: 700 }}>
                              Stok: {c.stock} Unit Ready
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Pilih Warna Konsol (Foto Asli) */}
                <div
                  style={{
                    backgroundColor: '#f8fafc',
                    padding: '18px 20px',
                    borderRadius: '14px',
                    border: '1px solid #e2e8f0',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <label style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0f172a' }}>
                      2. Varian Warna Asli Resmi:
                    </label>
                    <span style={{ fontSize: '0.78rem', color: '#2563eb', fontWeight: 600 }}>
                      {currentColor.name}
                    </span>
                  </div>

                  {/* Swatches - 2 column grid on mobile */}
                  <div className="color-swatches-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '14px' }}>
                    {currentConsole.colors.map((col) => {
                      const isColorActive = colorId === col.id;
                      return (
                        <button
                          key={col.id}
                          type="button"
                          onClick={() => setColorId(col.id)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '8px 14px',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            border: isColorActive ? '2px solid #2563eb' : '1px solid #cbd5e1',
                            backgroundColor: isColorActive ? '#ffffff' : '#f1f5f9',
                            boxShadow: isColorActive ? '0 2px 8px rgba(37, 99, 235, 0.15)' : 'none',
                            width: '100%',
                          }}
                        >
                          <span
                            style={{
                              width: '14px',
                              height: '14px',
                              borderRadius: '50%',
                              backgroundColor: col.hex,
                              border: '1px solid #94a3b8',
                              display: 'inline-block',
                              flexShrink: 0,
                            }}
                          />
                          <span style={{ fontSize: '0.8rem', fontWeight: 600, color: isColorActive ? '#2563eb' : '#334155', textAlign: 'left', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {col.name}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Photo Preview Container with Subtle Floating Animation */}
                  <div
                    className="console-photo-floating"
                    style={{
                      width: '100%',
                      aspectRatio: '16/11',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      position: 'relative',
                      border: `2px solid ${currentColor.hex}`,
                      backgroundColor: '#070b14',
                    }}
                  >
                    <img
                      key={currentColor.image}
                      src={currentColor.image}
                      alt={`${currentConsole.name} ${currentColor.name}`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/consoles/ps5-glacier-white.jpg';
                      }}
                    />
                    {/* Color badge top-right */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '8px',
                        right: '8px',
                        backgroundColor: currentColor.hex,
                        padding: '3px 10px',
                        borderRadius: '6px',
                        fontSize: '0.70rem',
                        fontWeight: 700,
                        color: '#ffffff',
                        letterSpacing: '0.03em',
                      }}
                    >
                      {currentColor.name}
                    </div>
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '8px',
                        left: '8px',
                        backgroundColor: '#ffffff',
                        padding: '3px 10px',
                        borderRadius: '6px',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        color: '#0f172a',
                        border: '1px solid #cbd5e1',
                      }}
                    >
                      Foto Asli: {currentConsole.name} - {currentColor.name}
                    </div>
                  </div>
                </div>

                {/* 3. Durasi Sewa vs Durasi Main di Tempat */}
                {bookingMode === 'delivery' ? (
                  <div className="form-row-2col" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '14px', width: '100%' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>
                        Durasi Sewa:
                      </label>
                      <select
                        value={durationDays}
                        onChange={(e) => setDurationDays(Number(e.target.value))}
                        style={{
                          width: '100%',
                          padding: '10px 12px',
                          backgroundColor: '#ffffff',
                          border: '1px solid #cbd5e1',
                          borderRadius: '8px',
                          color: '#0f172a',
                          fontSize: '0.88rem',
                          outline: 'none',
                        }}
                      >
                        <option value={1}>1 Hari (Standar)</option>
                        <option value={2}>2 Hari</option>
                        <option value={3}>3 Hari (Weekend)</option>
                        <option value={7}>7 Hari (1 Minggu)</option>
                      </select>
                    </div>

                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                        <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f172a' }}>
                          Jumlah Unit:
                        </label>
                        <span style={{ fontSize: '0.72rem', color: '#16a34a', fontWeight: 700 }}>
                          Stok: {currentConsole.stock} Unit
                        </span>
                      </div>
                      <input
                        type="number"
                        min={1}
                        max={currentConsole.stock || 10}
                        value={unitCount}
                        onChange={(e) => setUnitCount(Math.min(currentConsole.stock || 10, Math.max(1, Number(e.target.value))))}
                        style={{
                          width: '100%',
                          padding: '10px 12px',
                          backgroundColor: '#ffffff',
                          border: '1px solid #cbd5e1',
                          borderRadius: '8px',
                          color: '#0f172a',
                          fontSize: '0.88rem',
                          outline: 'none',
                          boxSizing: 'border-box',
                        }}
                      />
                    </div>
                  </div>
                ) : (
                  /* Main di Tempat (Lounge) Duration & Unit */
                  <div className="form-row-2col" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '14px', width: '100%' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>
                        Paket Main di Tempat:
                      </label>
                      <select
                        value={loungeDuration}
                        onChange={(e) => setLoungeDuration(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '10px 12px',
                          backgroundColor: '#ffffff',
                          border: '1px solid #cbd5e1',
                          borderRadius: '8px',
                          color: '#0f172a',
                          fontSize: '0.88rem',
                          outline: 'none',
                        }}
                      >
                        <option value="1jam">1 Jam Mabar ({isPs5 ? 'PS5: Rp 15.000' : 'PS4: Rp 10.000'})</option>
                        <option value="2jam">2 Jam Mabar ({isPs5 ? 'PS5: Rp 30.000' : 'PS4: Rp 20.000'})</option>
                        <option value="3jam">Paket Hemat 3 Jam ({isPs5 ? 'PS5: Rp 40.000' : 'PS4: Rp 25.000'})</option>
                        <option value="5jam">Paket Puas 5 Jam ({isPs5 ? 'PS5: Rp 65.000' : 'PS4: Rp 45.000'})</option>
                        <option value="begadang">Paket Begadang 8 Jam ({isPs5 ? 'PS5: Rp 95.000' : 'PS4: Rp 65.000'})</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>
                        Bilik / Sofa:
                      </label>
                      <input
                        type="number"
                        min={1}
                        max={5}
                        value={unitCount}
                        onChange={(e) => setUnitCount(Math.max(1, Number(e.target.value)))}
                        style={{
                          width: '100%',
                          padding: '10px 12px',
                          backgroundColor: '#ffffff',
                          border: '1px solid #cbd5e1',
                          borderRadius: '8px',
                          color: '#0f172a',
                          fontSize: '0.88rem',
                          outline: 'none',
                          boxSizing: 'border-box',
                        }}
                      />
                    </div>
                  </div>
                )}

                {/* 4. Delivery Add-ons (TV LED) or Lounge Venue Info */}
                {bookingMode === 'delivery' ? (
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>
                      Sewa TV LED & Bracket:
                    </label>
                    <select
                      value={tvAddon}
                      onChange={(e) => setTvAddon(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        backgroundColor: '#ffffff',
                        border: '1px solid #cbd5e1',
                        borderRadius: '8px',
                        color: '#0f172a',
                        fontSize: '0.88rem',
                        outline: 'none',
                        marginBottom: '8px',
                      }}
                    >
                      <option value="none">Tanpa TV (Sudah ada TV di Lokasi)</option>
                      <option value="tv-32">LED TV 32" (+ Rp 250.000/hari)</option>
                      <option value="tv-43">LED TV 43" (+ Rp 500.000/hari)</option>
                      <option value="tv-50">LED TV 50" (+ Rp 750.000/hari)</option>
                    </select>

                    <label
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        cursor: 'pointer',
                        fontSize: '0.84rem',
                        color: '#475569',
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={standingBracket}
                        onChange={(e) => setStandingBracket(e.target.checked)}
                        style={{ width: '16px', height: '16px', accentColor: '#2563eb' }}
                      />
                      <span>Tambah Standing Bracket Beroda (+ Rp 150.000/hari)</span>
                    </label>
                  </div>
                ) : (
                  <div style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '14px 16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1d4ed8', fontWeight: 700, fontSize: '0.88rem', marginBottom: '4px' }}>
                      <MapPin size={16} />
                      <span>Fasilitas Game Lounge RajaGamerz:</span>
                    </div>
                    <p style={{ fontSize: '0.8rem', color: '#334155', margin: 0, lineHeight: 1.5 }}>
                      Ruangan VIP full AC, TV 50" 4K HDR, sofa kulit empuk, Free Wi-Fi kencang, dan bebas ganti game PS5/PS4 sepuasnya tanpa biaya tambahan.
                    </p>
                  </div>
                )}

                {/* 5. Extra Stik Controller */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>
                    Stik Tambahan:
                  </label>
                  <div className="controller-buttons-row" style={{ display: 'flex', gap: '8px', width: '100%' }}>
                    {[
                      { count: 0, label: 'Standar (2 Stik)' },
                      { count: 1, label: '+1 Stik (3 Stik)' },
                      { count: 2, label: '+2 Stik (4 Stik)' },
                    ].map((st) => (
                      <button
                        key={st.count}
                        type="button"
                        onClick={() => setExtraControllers(st.count)}
                        style={{
                          flex: 1,
                          padding: '8px 10px',
                          borderRadius: '8px',
                          fontSize: '0.78rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          border: extraControllers === st.count ? '1.5px solid #2563eb' : '1px solid #cbd5e1',
                          backgroundColor: extraControllers === st.count ? '#eff6ff' : '#ffffff',
                          color: extraControllers === st.count ? '#2563eb' : '#475569',
                          minWidth: 0,
                          boxSizing: 'border-box',
                        }}
                      >
                        {st.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: GAME SELECTION & CUSTOMER INFO & ESTIMATE */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', minWidth: 0 }}>
                {/* Game Selection Tag Picker (LIMIT 2 GAMES) */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <label style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0f172a' }}>
                      Pilihan Game Konsol:
                    </label>
                    <span style={{ fontSize: '0.78rem', color: selectedGames.length >= 2 ? '#dc2626' : '#2563eb', fontWeight: 700 }}>
                      Maksimal 2 Game ({selectedGames.length}/2)
                    </span>
                  </div>

                  {/* Selected Games Tags */}
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '10px', minHeight: '32px' }}>
                    {selectedGames.map((g) => (
                      <span
                        key={g}
                        style={{
                          backgroundColor: '#eff6ff',
                          border: '1px solid #bfdbfe',
                          color: '#1d4ed8',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          padding: '3px 8px',
                          borderRadius: '16px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                        }}
                      >
                        <span>{g}</span>
                        <X
                          size={12}
                          style={{ cursor: 'pointer', color: '#64748b' }}
                          onClick={() => handleToggleGame(g)}
                        />
                      </span>
                    ))}
                    {selectedGames.length === 0 && (
                      <span style={{ fontSize: '0.8rem', color: '#94a3b8', fontStyle: 'italic', padding: '4px 0' }}>
                        Belum ada game yang dipilih (Klik tombol game di bawah, maks 2)
                      </span>
                    )}
                  </div>

                  {/* Quick Pick Popular Games */}
                  <div
                    style={{
                      maxHeight: '130px',
                      overflowY: 'auto',
                      padding: '8px',
                      backgroundColor: '#f8fafc',
                      borderRadius: '8px',
                      border: '1px solid #e2e8f0',
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '5px',
                    }}
                  >
                    {GAMES_DATA.filter((g) => g.platform === (consoleType === 'ps5' ? 'PS5' : 'PS4')).map((game) => {
                      const isPicked = selectedGames.includes(game.title);
                      const isLimitReached = selectedGames.length >= 2 && !isPicked;
                      return (
                        <button
                          key={game.id}
                          type="button"
                          disabled={isLimitReached}
                          onClick={() => handleToggleGame(game.title)}
                          style={{
                            padding: '4px 8px',
                            borderRadius: '6px',
                            fontSize: '0.74rem',
                            cursor: isLimitReached ? 'not-allowed' : 'pointer',
                            opacity: isLimitReached ? 0.45 : 1,
                            border: isPicked ? '1px solid #2563eb' : '1px solid #cbd5e1',
                            backgroundColor: isPicked ? '#2563eb' : '#ffffff',
                            color: isPicked ? '#ffffff' : '#475569',
                          }}
                          title={isLimitReached ? 'Maksimal 2 game sudah dipilih' : ''}
                        >
                          {isPicked ? '✓ ' : '+ '}
                          {game.title}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Customer Information Inputs */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: '#334155', marginBottom: '5px' }}>
                      Nama Lengkap: *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Budi Pratama"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        backgroundColor: '#ffffff',
                        border: '1px solid #cbd5e1',
                        borderRadius: '8px',
                        color: '#0f172a',
                        fontSize: '0.88rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  {bookingMode === 'delivery' ? (
                    <div>
                      <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: '#334155', marginBottom: '5px' }}>
                        Alamat Lengkap Pengantaran: *
                      </label>
                      <textarea
                        required
                        rows={2}
                        placeholder="Contoh: Jl. Tebet Timur No. 12, Jakarta Selatan"
                        value={deliveryLocation}
                        onChange={(e) => setDeliveryLocation(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '10px 12px',
                          backgroundColor: '#ffffff',
                          border: '1px solid #cbd5e1',
                          borderRadius: '8px',
                          color: '#0f172a',
                          fontSize: '0.88rem',
                          outline: 'none',
                          resize: 'none',
                        }}
                      />
                    </div>
                  ) : (
                    <div>
                      <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: '#334155', marginBottom: '5px' }}>
                        Jumlah Orang / Teman Mabar:
                      </label>
                      <select
                        value={playerCount}
                        onChange={(e) => setPlayerCount(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '10px 12px',
                          backgroundColor: '#ffffff',
                          border: '1px solid #cbd5e1',
                          borderRadius: '8px',
                          color: '#0f172a',
                          fontSize: '0.88rem',
                          outline: 'none',
                        }}
                      >
                        <option value="1 Orang">1 Orang (Solo)</option>
                        <option value="2 Orang">2 Orang (Duel)</option>
                        <option value="3-4 Orang">3 - 4 Orang (Squad Mabar)</option>
                      </select>
                    </div>
                  )}

                  {/* Tanggal Bulan Tahun & Waktu Jam (sesuai arahan user) */}
                  <div className="form-row-2col" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '12px', width: '100%' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#334155', marginBottom: '5px' }}>
                        {bookingMode === 'delivery' ? 'Tanggal Pengiriman (Tgl/Bln/Thn):' : 'Tanggal Main di Tempat:'} *
                      </label>
                      <input
                        type="date"
                        required
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '9px 12px',
                          backgroundColor: '#ffffff',
                          border: '1px solid #cbd5e1',
                          borderRadius: '8px',
                          color: '#0f172a',
                          fontSize: '0.86rem',
                          outline: 'none',
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#334155', marginBottom: '5px' }}>
                        {bookingMode === 'delivery' ? 'Jam Antar:' : 'Jam Kedatangan:'} *
                      </label>
                      <input
                        type="time"
                        required
                        value={bookingTime}
                        onChange={(e) => setBookingTime(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '9px 12px',
                          backgroundColor: '#ffffff',
                          border: '1px solid #cbd5e1',
                          borderRadius: '8px',
                          color: '#0f172a',
                          fontSize: '0.86rem',
                          outline: 'none',
                        }}
                      />
                    </div>
                  </div>

                  {bookingMode === 'delivery' && (
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#334155', marginBottom: '5px' }}>
                        Peruntukan Sewa:
                      </label>
                      <select
                        value={rentalPurpose}
                        onChange={(e) => setRentalPurpose(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '9px 12px',
                          backgroundColor: '#ffffff',
                          border: '1px solid #cbd5e1',
                          borderRadius: '8px',
                          color: '#0f172a',
                          fontSize: '0.84rem',
                          outline: 'none',
                        }}
                      >
                        <option value="Pribadi">Pribadi / Rumah</option>
                        <option value="Event Turnamen">Turnamen / Kompetisi</option>
                        <option value="Gathering Kantor">Gathering Kantor</option>
                      </select>
                    </div>
                  )}
                </div>

                {/* ESTIMATION & WHATSAPP SUBMIT BOX */}
                <div
                  style={{
                    backgroundColor: '#f8fafc',
                    padding: '18px 20px',
                    borderRadius: '12px',
                    border: '1px solid #cbd5e1',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.9rem', color: '#64748b' }}>
                      Estimasi Biaya ({bookingMode === 'delivery' ? `${durationDays} Hari` : loungeDurationLabel}):
                    </span>
                    <span style={{ fontSize: '1.45rem', fontWeight: 800, color: '#2563eb', fontFamily: 'Outfit' }}>
                      Rp {estimatedTotal.toLocaleString('id-ID')}
                    </span>
                  </div>

                  <p style={{ fontSize: '0.74rem', color: '#64748b', margin: 0, lineHeight: 1.4 }}>
                    {bookingMode === 'delivery'
                      ? '✓ Sudah termasuk antar, pasang, dan jemput ke lokasi Anda di Jabodetabek.'
                      : '✓ Sudah termasuk ruangan VIP ber-AC, TV 50 inch, sofa empuk, dan free Wi-Fi.'}
                  </p>

                  <button
                    type="submit"
                    className="btn-primary"
                    style={{
                      width: '100%',
                      padding: '13px',
                      fontSize: '0.96rem',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      cursor: 'pointer',
                    }}
                  >
                    <Send size={16} />
                    <span>
                      {bookingMode === 'delivery'
                        ? 'Kirim Pesanan ke WhatsApp RajaGamerz'
                        : 'Booking Main di Tempat via WhatsApp'}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
