// Data Resmi RajaGamerz Rental PS
// Diolah dari https://rajagamerz.wordpress.com/

export const CONTACT_INFO = {
  name: "RajaGamerz",
  phone: "087777484789",
  whatsapp: "6287777484789",
  instagram: "@RAJAGAMERZ",
  facebook: "RajaGamerz",
  tagline: "Rental PlayStation 5 & 4 Harian Terbaik - Antar Pasang Jemput",
  address: "Jabodetabek & Sekitarnya",
  operatingHours: "Setiap Hari 13.00 - 02.00 WIB",
  establishedYear: 2016
};

export const CONSOLES = [
  {
    id: "ps5",
    name: "PlayStation 5",
    subtitle: "Next-Gen Gaming Ultra Fast SSD & 4K 120FPS",
    basePrice: 150000,
    priceLabel: "Mulai Rp 150.000 / hari",
    stock: 8,
    stockLabel: "8 Unit Siap Rental",
    description: "Nikmati sensasi gaming generasi terbaru dengan grafis ultra tajam ray tracing, 4K resolution, dan haptic feedback controller DualSense yang imersif.",
    features: [
      "1x Konsol PlayStation 5 (Ultra High-Speed SSD)",
      "2x Stik DualSense Wireless Original",
      "Kabel Lengkap (Power, HDMI 2.1, Kabel Type-C)",
      "Bebas Pilih 2 Game PS5 Terpopuler",
      "Gratis Antar, Pasang & Jemput ke Rumah",
      "Semua Game Updated & Siap Main"
    ],
    addOns: {
      controller: { name: "DualSense Wireless Controller", price: 75000, unit: "hari" },
      game: { name: "Extra Game PS5", price: 50000, unit: "game" }
    },
    colors: [
      {
        id: "glacier-white",
        name: "Glacier White",
        hex: "#E5E7EB",
        badge: "Original Classic",
        image: "/consoles/ps5-glacier-white.jpg",
        description: "Warna ikonik putih-hitam original PlayStation 5 dengan DualSense senada."
      },
      {
        id: "midnight-black",
        name: "Midnight Black",
        hex: "#1E293B",
        badge: "Stealth Edition",
        image: "/consoles/ps5-midnight-black.jpg",
        description: "Edisi hitam matte yang elegan, futuristik, dan sangat maskulin."
      },
      {
        id: "cobalt-blue",
        name: "Cobalt Metallic Blue",
        hex: "#2563EB",
        badge: "Deep Blue Edition",
        image: "/consoles/ps5-cobalt-blue.jpg",
        description: "Balutan warna biru metalik berkilau khas RajaGamerz aesthetic."
      },
      {
        id: "volcanic-red",
        name: "Volcanic Red",
        hex: "#DC2626",
        badge: "Deep Earth Collection",
        image: "/consoles/ps5-volcanic-red.jpg",
        description: "Edisi merah membara Volcanic Red dari Deep Earth Collection — paling bold dan menawan."
      }
    ]
  },
  {
    id: "ps4",
    name: "PlayStation 4",
    subtitle: "Konsol Favorit Seru Pilihan Puluhan Game",
    basePrice: 90000,
    priceLabel: "Mulai Rp 90.000 / hari",
    stock: 12,
    stockLabel: "12 Unit Siap Rental",
    description: "Konsol legendaris dengan ratusan katalog game terbaik, sangat cocok untuk mabar seru bareng teman atau keluarga di rumah.",
    features: [
      "1x Konsol PlayStation 4 (Slim / Pro)",
      "2x Stik DualShock 4 Wireless Original",
      "Kabel Lengkap (Power, HDMI, Kabel Charger)",
      "Bebas Pilih 3 Game PS4 Favorit",
      "Gratis Antar, Pasang & Jemput ke Rumah",
      "Unit Dingin, Stabil, Siap Mabar 24 Jam"
    ],
    addOns: {
      controller: { name: "DualShock 4 Wireless Controller", price: 40000, unit: "hari" },
      game: { name: "Extra Game PS4", price: 25000, unit: "game" }
    },
    colors: [
      {
        id: "jet-black",
        name: "Jet Black",
        hex: "#0F172A",
        badge: "Original Standard",
        image: "/consoles/ps4-jet-black.jpg",
        description: "Warna hitam doff klasik PlayStation 4 yang kokoh dan awet."
      },
      {
        id: "glacier-white",
        name: "Glacier White",
        hex: "#F8FAFC",
        badge: "Pristine White",
        image: "/consoles/ps4-glacier-white.jpg",
        description: "Warna putih bersih yang bersih, mewah, dan menawan di ruang keluarga."
      }
    ]
  }


];

export const TV_PACKAGES = [
  {
    id: "tv-32",
    size: "32 Inch",
    name: "LED TV 32\"",
    resolution: "HD Ready / Full HD",
    price: 250000,
    unit: "hari",
    description: "Cocok untuk kamar, ruang santai, atau area gaming personal.",
    includes: ["Kabel HDMI Gold Plated", "Kabel Power", "Remote TV", "Setting Pemasangan"]
  },
  {
    id: "tv-43",
    size: "43 Inch",
    name: "LED TV 43\"",
    resolution: "Full HD / 4K UHD",
    price: 500000,
    unit: "hari",
    popular: true,
    description: "Ukuran ideal paling disukai untuk mabar PS5 & PS4 di ruang tamu atau kantor.",
    includes: ["Kabel HDMI Ultra High Speed", "Kabel Power", "Remote TV", "Setup & Kalibrasi Gambar"]
  },
  {
    id: "tv-50",
    size: "50 Inch",
    name: "LED TV 50\"",
    resolution: "4K Ultra HD Big Screen",
    price: 750000,
    unit: "hari",
    description: "Sensasi bioskop gaming layar lebar untuk turnamen, gathering, atau pesta seru.",
    includes: ["Layar Ekstra Lebar 4K", "HDMI 2.1 Ready", "Audio Powerful", "Setup Profesional"]
  },
  {
    id: "bracket",
    size: "Universal",
    name: "Standing Bracket Heavy Duty",
    resolution: "Cocok TV 32\" - 65\"",
    price: 150000,
    unit: "hari",
    description: "Tiang standing bracket kokoh beroda, mudah dipindahkan untuk acara pameran & turnamen.",
    includes: ["Roda Pengunci", "Tatakan Konsol PS", "Ketinggian Adjustable", "Pemasangan Aman"]
  }
];

export const RENTAL_TERMS = [
  {
    number: "01",
    title: "E-KTP Asli Wajib",
    highlight: "DITAHAN",
    detail: "Identitas asli (E-KTP) penyewa wajib ditahan selama masa masa sewa unit konsol berlangsung.",
    icon: "IdCard"
  },
  {
    number: "02",
    title: "STNK Asli Wajib",
    highlight: "AKTIF (Maks. 5 Tahun)",
    detail: "STNK asli kendaraan atas nama sendiri atau keluarga serumah, dalam masa berlaku aktif atau maksimal tahun perakitan 5 tahun terakhir.",
    icon: "FileCheck"
  },
  {
    number: "03",
    title: "Follow Akun Instagram",
    highlight: "@RAJAGAMERZ",
    detail: "Penyewa wajib mempunyai akun Instagram aktif dan telah mem-follow akun resmi RajaGamerz.",
    icon: "Instagram"
  },
  {
    number: "04",
    title: "Pelunasan Pembayaran",
    highlight: "Lunas di Awal",
    detail: "Membayar lunas seluruh biaya sewa pada saat serah terima unit di lokasi sebelum konsol digunakan.",
    icon: "CreditCard"
  },
  {
    number: "05",
    title: "Tanggung Jawab Unit",
    highlight: "Jaminan Keamanan",
    detail: "Bersedia bertanggung jawab penuh apabila terjadi kerusakan, kehilangan komponen, atau kelalaian selama unit berada di tangan penyewa.",
    icon: "ShieldAlert"
  }
];

export const FAQS = [
  {
    q: "Apakah biaya sewa sudah termasuk ongkos antar dan jemput?",
    a: "Ya! Untuk area jangkauan kami, tim teknisi RajaGamerz akan mengantarkan, memasangkan unit konsol ke TV Anda hingga siap main, dan menjemput kembali saat durasi sewa selesai."
  },
  {
    q: "Bagaimana jika saya tidak punya STNK?",
    a: "Persyaratan E-KTP dan STNK asli merupakan SOP keamanan wajib kami. Jika ada kondisi khusus, silakan konsultasikan langsung dengan admin melalui WhatsApp kami."
  },
  {
    q: "Apakah bisa menyewa untuk acara turnamen esports atau gathering kantor?",
    a: "Sangat bisa! Kami melayani penyewaan untuk turnamen, festival kampus, gathering perusahaan, ulang tahun, dan pameran lengkap dengan unit banyak, TV LED, serta standing bracket."
  },
  {
    q: "Apakah game di dalam konsol sudah ter-update?",
    a: "Semua game di konsol kami selalu diperbarui (updated patch & squad eFootball/FC 24) sehingga Anda langsung bisa mabar tanpa perlu pusing download update lagi."
  }
];

export const GAMES_DATA = [
  // ================= PS5 GAMES =================
  {
    id: "ps5-fc25",
    title: "EA Sports FC 25",
    platform: "PS5",
    genre: "Sports",
    players: "1 - 4 Pemain",
    badge: "Terbaru 2025",
    image: "/games/ps5-fc25.jpg",
    backdrop: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=800&auto=format&fit=crop",
    desc: "Seri sepak bola teranyar dengan sistem taktik FC IQ baru, Rush 5v5 seru, dan squad transfer musim 2024/2025 paling up-to-date."
  },
  {
    id: "ps5-fc24",
    title: "EA Sports FC 24",
    platform: "PS5",
    genre: "Sports",
    players: "1 - 4 Pemain",
    badge: "Most Popular",
    image: "/games/ps5-fc24.jpg",
    backdrop: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=800&auto=format&fit=crop",
    desc: "Era baru sepak bola dunia dengan teknologi HyperMotionV, PlayStyles, dan grafis visual yang luar biasa realistis di PS5."
  },
  {
    id: "ps5-wukong",
    title: "Black Myth: Wukong",
    platform: "PS5",
    genre: "Action RPG",
    players: "1 Pemain",
    badge: "Sensasi Global",
    image: "/games/ps5-wukong.jpg",
    backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
    desc: "Kisah epik The Destined One bertarung menguasai ilmu tongkat sakti dan 72 transformasi mitologi Sun Wukong bergrafis Unreal Engine 5."
  },
  {
    id: "ps5-spiderman2",
    title: "Marvel's Spider-Man 2",
    platform: "PS5",
    genre: "Action",
    players: "1 Pemain",
    badge: "PS5 Exclusive",
    image: "/games/ps5-spiderman2.jpg",
    backdrop: "https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=800&auto=format&fit=crop",
    desc: "Bermain ganda sebagai Peter Parker & Miles Morales dengan Symbiote power melawan Kraven dan Venom di kota New York yang luas."
  },
  {
    id: "ps5-tekken8",
    title: "Tekken 8",
    platform: "PS5",
    genre: "Fighting",
    players: "1 - 2 Pemain",
    badge: "Next-Gen Tarung",
    image: "/games/ps5-tekken8.jpg",
    backdrop: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
    desc: "Pertarungan dahsyat generasi baru dengan mekanik Heat System inovatif, visual efek pukulan memukau, dan roster Jin vs Kazuya."
  },
  {
    id: "ps5-mk1",
    title: "Mortal Kombat 1 (MK1)",
    platform: "PS5",
    genre: "Fighting",
    players: "1 - 2 Pemain",
    badge: "Brutal Next-Gen",
    image: "/games/ps5-mk1.jpg",
    backdrop: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
    desc: "Alam semesta Mortal Kombat yang terlahir kembali oleh Dewa Api Liu Kang dengan sistem Kameo Fighters dan Fatalities spektakuler."
  },
  {
    id: "ps5-sf6",
    title: "Street Fighter 6",
    platform: "PS5",
    genre: "Fighting",
    players: "1 - 2 Pemain",
    badge: "Esports Hit",
    image: "/games/ps5-sf6.jpg",
    backdrop: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
    desc: "Evolusi seri Street Fighter dengan Drive Gauge System, kontrol Modern & Klasik, dan mode mabar lokal paling kompetitif."
  },
  {
    id: "ps5-gowragnarok",
    title: "God of War Ragnarok",
    platform: "PS5",
    genre: "Adventure",
    players: "1 Pemain",
    badge: "Masterpiece",
    image: "/games/ps5-gowragnarok.jpg",
    backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
    desc: "Petualangan Kratos dan Atreus melintasi Sembilan Alam mitologi Nordik menghadapi takdir Ragnarok yang legendaris."
  },
  {
    id: "ps5-gta5",
    title: "Grand Theft Auto V Next-Gen",
    platform: "PS5",
    genre: "Open World",
    players: "1 - 30 Pemain",
    badge: "Top Choice",
    image: "/games/ps5-gta5.jpg",
    backdrop: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    desc: "Jelajahi Los Santos dalam visual 4K 60FPS dengan loading kilat berkat kehebatan SSD PlayStation 5."
  },
  {
    id: "ps5-pes21",
    title: "eFootball PES 21 Season Update 24/25",
    platform: "PS5",
    genre: "Sports",
    players: "1 - 4 Pemain",
    badge: "Updated Squad",
    image: "/games/ps5-pes21.jpg",
    backdrop: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=800&auto=format&fit=crop",
    desc: "Gameplay sepak bola klasik terfavorit yang telah dilengkapi update jersey dan transfer musim 2024-2025 terbaru."
  },
  {
    id: "ps5-eldenring",
    title: "Elden Ring: Shadow of the Erdtree",
    platform: "PS5",
    genre: "Action RPG",
    players: "1 Pemain",
    badge: "Game of The Year",
    image: "/games/ps5-eldenring.jpg",
    backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
    desc: "Eksplorasi dunia Lands Between dan Land of Shadow yang misterius penuh tantangan boss spektakuler karya FromSoftware."
  },
  {
    id: "ps5-gt7",
    title: "Gran Turismo 7",
    platform: "PS5",
    genre: "Racing",
    players: "1 - 2 Pemain",
    badge: "Real Driving Sim",
    image: "/games/ps5-gt7.jpg",
    backdrop: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=800&auto=format&fit=crop",
    desc: "Simulasi balap mobil nomor satu dunia dengan ratusan mobil mewah berlisensi dan sirkuit ikonik berpresisi tinggi."
  },
  {
    id: "ps5-ittakestwo",
    title: "It Takes Two",
    platform: "PS5",
    genre: "Co-op Adventure",
    players: "2 Pemain (Wajib Berdua)",
    badge: "Mabar Berdua Terbaik",
    image: "/games/ps5-ittakestwo.jpg",
    backdrop: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop",
    desc: "Pemenang Game of the Year khusus 2 pemain dengan teka-teki inovatif, cerita mengharukan, dan variasi gameplay tanpa batas."
  },
  {
    id: "ps5-helldivers2",
    title: "Helldivers 2",
    platform: "PS5",
    genre: "Shooter Co-op",
    players: "1 - 4 Pemain",
    badge: "Squad Chaos",
    image: "/games/ps5-helldivers2.jpg",
    backdrop: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    desc: "Pertahankan Super Earth bersama skuad tentara galaksi dalam perang melawan serbuan serangga alien dan pasukan robot mematikan."
  },
  {
    id: "ps5-ff7rebirth",
    title: "Final Fantasy VII Rebirth",
    platform: "PS5",
    genre: "RPG",
    players: "1 Pemain",
    badge: "Epic RPG",
    image: "/games/ps5-ff7rebirth.jpg",
    backdrop: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    desc: "Perjalanan Cloud Strife dan kawan-kawan menjelajahi planet di luar batas kota Midgar dalam skala dunia terbuka luas."
  },
  {
    id: "ps5-re4remake",
    title: "Resident Evil 4 Remake",
    platform: "PS5",
    genre: "Action Horror",
    players: "1 Pemain",
    badge: "Survival Classic",
    image: "/games/ps5-re4remake.jpg",
    backdrop: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop",
    desc: "Misi Leon S. Kennedy menyelamatkan putri presiden dari desa sekte Los Illuminados di Spanyol dengan gameplay modern menegangkan."
  },
  {
    id: "ps5-re8",
    title: "Resident Evil Village",
    platform: "PS5",
    genre: "Horror",
    players: "1 Pemain",
    badge: "Gothic Horror",
    image: "/games/ps5-re8.jpg",
    backdrop: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop",
    desc: "Kelangsungan hidup Ethan Winters di desa misterius bersalju yang dikuasai Lady Dimitrescu dan monster mengerikan."
  },
  {
    id: "ps5-nba2k25",
    title: "NBA 2K25",
    platform: "PS5",
    genre: "Sports",
    players: "1 - 4 Pemain",
    badge: "Hoops King",
    image: "/games/ps5-nba2k25.jpg",
    backdrop: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop",
    desc: "Simulasi bola basket nomor 1 dengan teknologi ProPLAY yang menerjemahkan gerakan asli bintang NBA langsung ke gameplay."
  },
  {
    id: "ps5-ghostoftsushima",
    title: "Ghost of Tsushima Director's Cut",
    platform: "PS5",
    genre: "Action",
    players: "1 Pemain",
    badge: "Samurai Art",
    image: "/games/ps5-ghostoftsushima.jpg",
    backdrop: "https://images.unsplash.com/photo-1528164344705-475426879c0d?q=80&w=800&auto=format&fit=crop",
    desc: "Kisah Jin Sakai menyelamatkan Pulau Tsushima dari invasi bangsa Mongol dengan pedang katana dan taktik 'The Ghost'."
  },
  {
    id: "ps5-horizonfw",
    title: "Horizon Forbidden West",
    platform: "PS5",
    genre: "Action Adventure",
    players: "1 Pemain",
    badge: "Visual Spektakuler",
    image: "/games/ps5-horizonfw.jpg",
    backdrop: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop",
    desc: "Jelajahi daratan barat terlarang bersama Aloy untuk mengungkap rahasia ancaman kepunahan biosfer bumi masa depan."
  },
  {
    id: "ps5-wwe2k24",
    title: "WWE 2K24",
    platform: "PS5",
    genre: "Sports Fighting",
    players: "1 - 4 Pemain",
    badge: "SmackDown Seru",
    image: "/games/ps5-wwe2k24.jpg",
    backdrop: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
    desc: "Gulat seru 4 stik merayakan 40 tahun WrestleMania dengan match types baru: Ambulance Match, Casket Match, dan Special Guest Referee."
  },
  {
    id: "ps5-sparkingzero",
    title: "Dragon Ball: Sparking! ZERO",
    platform: "PS5",
    genre: "Anime Fighting",
    players: "1 - 2 Pemain",
    badge: "Budokai Tenkaichi",
    image: "/games/ps5-sparkingzero.jpg",
    backdrop: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    desc: "Kebangkitan seri legendaris Budokai Tenkaichi dengan roster 180+ karakter, arena destruktif 3D, dan pertarungan energi Dahsyat."
  },
  {
    id: "ps5-motogp24",
    title: "MotoGP 24",
    platform: "PS5",
    genre: "Racing",
    players: "1 - 2 Pemain",
    badge: "Official Game",
    image: "/games/ps5-motogp24.jpg",
    backdrop: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=800&auto=format&fit=crop",
    desc: "Balapan motor kelas dunia resmi dengan rider transfer market dan cuaca dinamis adaptif di sirkuit balap dunia."
  },
  {
    id: "ps5-codmw3",
    title: "Call of Duty: Modern Warfare 3",
    platform: "PS5",
    genre: "Action FPS",
    players: "1 - 2 Pemain",
    badge: "FPS Hits",
    image: "/games/ps5-codmw3.jpg",
    backdrop: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    desc: "Aksi militer intens Task Force 141 melawan Makarov dengan mode multiplayer cepat dan peta legendaris."
  },

  // ================= PS4 GAMES =================
  {
    id: "ps4-efootball24",
    title: "eFootball 2024 / PES 2021",
    platform: "PS4",
    genre: "Sports",
    players: "1 - 4 Pemain",
    badge: "Mabar Wajib",
    image: "/games/ps4-efootball24.jpg",
    backdrop: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=800&auto=format&fit=crop",
    desc: "Game sepak bola paling wajib dan paling sering dimainkan di seluruh rental PS dengan gameplay responsif dan squad updated."
  },
  {
    id: "ps4-fifa23",
    title: "FIFA 23",
    platform: "PS4",
    genre: "Sports",
    players: "1 - 4 Pemain",
    badge: "Favorit Mabar",
    image: "/games/ps4-fifa23.jpg",
    backdrop: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=800&auto=format&fit=crop",
    desc: "Simulasi sepak bola EA Sports dengan turnamen Piala Dunia resmi, club mode, dan gameplay kompetitif hingga 4 stik."
  },
  {
    id: "ps4-narutostorm4",
    title: "Naruto Shippuden: Ultimate Ninja Storm 4",
    platform: "PS4",

    genre: "Anime Fighting",
    players: "1 - 2 Pemain",
    badge: "Top Rental Anime",
    image: "/games/ps4-narutostorm4.jpg",
    backdrop: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
    desc: "Game fighting anime nomor 1 di rental PS! Jurus pamungkas Ougi legendaris shinobi Konoha dalam Perang Dunia Ninja ke-4."
  },
  {
    id: "ps4-ctr",
    title: "Crash Team Racing Nitro-Fueled (CTR)",
    platform: "PS4",
    genre: "Racing",
    players: "1 - 4 Pemain",
    badge: "Co-op 4 Stik",
    image: "/games/ps4-ctr.jpg",
    backdrop: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop",
    desc: "Balapan gokart nostalgia paling seru dan kocak untuk mabar 4 stik bersama teman maupun keluarga dengan senjata jebakan seru."
  },
  {
    id: "ps4-gtav",
    title: "Grand Theft Auto V (PS4)",
    platform: "PS4",
    genre: "Open World",
    players: "1 Pemain",
    badge: "All-Time Best",
    image: "/games/ps4-gtav.jpg",
    backdrop: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    desc: "Petualangan kriminal bebas di kota Los Santos bersama Michael, Trevor, dan Franklin lengkap dengan ratusan cheat seru."
  },
  {
    id: "ps4-gtasa",
    title: "GTA San Andreas Definitive Edition",
    platform: "PS4",
    genre: "Open World",
    players: "1 Pemain",
    badge: "Nostalgia Emas",
    image: "/games/ps4-gtasa.jpg",
    backdrop: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    desc: "Kisah legendaris CJ di Grove Street kembali dengan grafis HD dan kontrol modern yang membawa kenangan rental zaman PS2."
  },
  {
    id: "ps4-awayout",
    title: "A Way Out",
    platform: "PS4",
    genre: "Co-op Action",
    players: "2 Pemain (Wajib Berdua)",
    badge: "Co-op Escape",
    image: "/games/ps4-awayout.jpg",
    backdrop: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop",
    desc: "Game petualangan split-screen khusus 2 pemain yang menceritakan dua narapidana, Leo dan Vincent, bekerja sama kabur dari penjara."
  },
  {
    id: "ps4-gow",
    title: "God of War (PS4)",
    platform: "PS4",
    genre: "Adventure",
    players: "1 Pemain",
    badge: "GOTY",
    image: "/games/ps4-gow.jpg",
    backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
    desc: "Awal baru perjalanan Kratos di alam Skandinavia dengan kapak Leviathan dan ikatan ayah-anak bersama Atreus."
  },
  {
    id: "ps4-tlou2",
    title: "The Last of Us Part II",
    platform: "PS4",
    genre: "Action",
    players: "1 Pemain",
    badge: "Must Play",
    image: "/games/ps4-tlou2.jpg",
    backdrop: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop",
    desc: "Kisah emosional pembalasan dendam Ellie di Seattle paska kehancuran peradaban manusia yang penuh ketegangan."
  },
  {
    id: "ps4-rdr2",
    title: "Red Dead Redemption 2",
    platform: "PS4",
    genre: "Open World",
    players: "1 Pemain",
    badge: "Masterpiece",
    image: "/games/ps4-rdr2.jpg",
    backdrop: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
    desc: "Mahakarya Rockstar Games tentang koboi Arthur Morgan dan geng Van der Linde di era senja Wild West Amerika."
  },
  {
    id: "ps4-mk11",
    title: "Mortal Kombat 11",
    platform: "PS4",
    genre: "Fighting",
    players: "1 - 2 Pemain",
    badge: "Brutal Action",
    image: "/games/ps4-mk11.jpg",
    backdrop: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
    desc: "Turnamen tarung legendaris dengan Fatalities sadis dan pilihan karakter ikonik seperti Scorpion dan Sub-Zero."
  },
  {
    id: "ps4-nfsheat",
    title: "Need for Speed Heat",
    platform: "PS4",
    genre: "Racing",
    players: "1 Pemain",
    badge: "Street Racing",
    image: "/games/ps4-nfsheat.jpg",
    backdrop: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=800&auto=format&fit=crop",
    desc: "Balapan liar jalanan malam hari di Palm City menghindari kejaran mobil polisi korup dengan modifikasi mobil tanpa batas."
  },
  {
    id: "ps4-overcooked",
    title: "Overcooked! All You Can Eat",
    platform: "PS4",
    genre: "Party Co-op",
    players: "1 - 4 Pemain",
    badge: "Paling Rusuh & Seru",
    image: "/games/ps4-overcooked.jpg",
    backdrop: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop",
    desc: "Game masak memasak paling kacau dan menguji kekompakan hingga 4 stik dalam dapur berpindah yang penuh rintangan tak terduga."
  },
  {
    id: "ps4-detroit",
    title: "Detroit: Become Human",
    platform: "PS4",
    genre: "Adventure",
    players: "1 Pemain",
    badge: "Story Rich",
    image: "/games/ps4-detroit.jpg",
    backdrop: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
    desc: "Drama interaktif futuristik dengan ratusan cabang pilihan cerita yang menentukan nasib tiga android sadar."
  },
  {
    id: "ps4-acodyssey",
    title: "Assassin's Creed Odyssey",
    platform: "PS4",
    genre: "RPG",
    players: "1 Pemain",
    badge: "Ancient Greece",
    image: "/games/ps4-acodyssey.jpg",
    backdrop: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop",
    desc: "Jelajahi keindahan Yunani kuno di masa perang Peloponnesus sebagai ksatria Spartan berdarah legenda."
  },
  {
    id: "ps4-uncharted4",
    title: "Uncharted 4: A Thief's End",
    platform: "PS4",
    genre: "Adventure",
    players: "1 Pemain",
    badge: "Legendary",
    image: "/games/ps4-uncharted4.jpg",
    backdrop: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop",
    desc: "Petualangan terakhir Nathan Drake berburu harta karun bajak laut Libertalia yang hilang di Madagaskar."
  },
  {
    id: "ps4-horizon",
    title: "Horizon Zero Dawn",
    platform: "PS4",
    genre: "Action",
    players: "1 Pemain",
    badge: "Sci-Fi Wild",
    image: "/games/ps4-horizon.jpg",
    backdrop: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop",
    desc: "Kisah Aloy berburu mesin dinosaurus purba di alam liar masa depan bumi paska kepunahan peradaban manusia."
  },
  {
    id: "ps4-farcry5",
    title: "Far Cry 5",
    platform: "PS4",
    genre: "Action",
    players: "1 - 2 Pemain",
    badge: "Chaos & Action",
    image: "/games/ps4-farcry5.jpg",
    backdrop: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    desc: "Bebaskan wilayah Hope County dari cengkeraman sekte fanatik berbahaya pimpinan Joseph Seed."
  },
  {
    id: "ps4-witcher3",
    title: "The Witcher 3: Wild Hunt",
    platform: "PS4",
    genre: "RPG",
    players: "1 Pemain",
    badge: "Top RPG",
    image: "/games/ps4-witcher3.jpg",
    backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
    desc: "Perjalanan pemburu monster Geralt of Rivia mencari Ciri, anak nubuat yang diburu oleh kekuatan Wild Hunt."
  },
  {
    id: "ps4-minecraft",
    title: "Minecraft PlayStation 4 Edition",
    platform: "PS4",
    genre: "Sandbox / Family",
    players: "1 - 4 Pemain",
    badge: "Keluarga & Anak",
    image: "/games/ps4-minecraft.jpg",
    backdrop: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop",
    desc: "Membangun kreasi dunia blok tanpa batas atau bertahan hidup dari serangan zombie bersama teman dalam split-screen 4 pemain."
  },
  {
    id: "ps4-sekiro",
    title: "Sekiro: Shadows Die Twice",
    platform: "PS4",
    genre: "Action Samurai",
    players: "1 Pemain",
    badge: "Hardcore GOTY",
    image: "/games/ps4-sekiro.jpg",
    backdrop: "https://images.unsplash.com/photo-1528164344705-475426879c0d?q=80&w=800&auto=format&fit=crop",
    desc: "Pertarungan pedang parry presisi tinggi sebagai shinobi 'Serigala Berlengan Satu' di era Sengoku Jepang yang kejam."
  },
  {
    id: "ps4-ufc4",
    title: "EA Sports UFC 4",
    platform: "PS4",
    genre: "Sports Fighting",
    players: "1 - 2 Pemain",
    badge: "MMA Octagon",
    image: "/games/ps4-ufc4.jpg",
    backdrop: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
    desc: "Pertarungan seni bela diri campuran (MMA) resmi dalam arena Octagon dengan grappling realistis dan knockout menegangkan."
  },
  {
  id: "ps5-cyberpunk",
  title: "Cyberpunk 2077: Phantom Liberty",
  platform: "PS5",
  genre: "Action RPG",
  players: "1 Pemain",
  badge: "Next-Gen 60FPS",
  image: "/games/ps5-cyberpunk.jpg",
  backdrop: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
  desc: "Jelajahi megacity Night City yang penuh intrik spionase distrik Dogtown bersama V dan Solomon Reed."
},
  {
  id: "ps5-hogwarts",
  title: "Hogwarts Legacy",
  platform: "PS5",
  genre: "Action RPG",
  players: "1 Pemain",
  badge: "Dunia Sihir",
  image: "/games/ps5-hogwarts.jpg",
  backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
  desc: "Rasakan kehidupan murid sihir di sekolah sihir Hogwarts abad ke-18 dengan sihir kuno dan duel memukau."
},
  {
  id: "ps5-bg3",
  title: "Baldur's Gate 3",
  platform: "PS5",
  genre: "RPG",
  players: "1 - 2 Pemain",
  badge: "GOTY 2023",
  image: "/games/ps5-bg3.jpg",
  backdrop: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop",
  desc: "Karya RPG legendaris pemenang ratusan Game of The Year dengan kebebasan cerita dan taktik turn-based D&D."
},
  {
  id: "ps5-ratchet",
  title: "Ratchet & Clank: Rift Apart",
  platform: "PS5",
  genre: "Action Adventure",
  players: "1 Pemain",
  badge: "Visual Spektakuler",
  image: "/games/ps5-ratchet.jpg",
  backdrop: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
  desc: "Melompati antar-dimensi secara instan tanpa loading berkat kecepatan SSD PlayStation 5 bersama Ratchet & Rivet."
},
  {
  id: "ps5-tlou1",
  title: "The Last of Us Part I (Remake)",
  platform: "PS5",
  genre: "Action Adventure",
  players: "1 Pemain",
  badge: "Mahakarya PS5",
  image: "/games/ps5-tlou1.jpg",
  backdrop: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop",
  desc: "Kisah awal Joel dan Ellie dibangun kembali secara total untuk PS5 dengan visual grafis ultra-realistis."
},
  {
  id: "ps5-silenthill2",
  title: "Silent Hill 2 Remake",
  platform: "PS5",
  genre: "Psychological Horror",
  players: "1 Pemain",
  badge: "Horor Legendaris",
  image: "/games/ps5-silenthill2.jpg",
  backdrop: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop",
  desc: "Penyelidikan James Sunderland di kota berselimut kabut Silent Hill berbekal grafis Unreal Engine 5 mencekam."
},
  {
  id: "ps5-deadspace",
  title: "Dead Space Remake",
  platform: "PS5",
  genre: "Sci-Fi Horror",
  players: "1 Pemain",
  badge: "Horor Angkasa",
  image: "/games/ps5-deadspace.jpg",
  backdrop: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop",
  desc: "Isaac Clarke bertahan hidup dari teror monster Necromorph di dalam pesawat tambang USG Ishimura."
},
  {
  id: "ps5-jedisurvivor",
  title: "Star Wars Jedi: Survivor",
  platform: "PS5",
  genre: "Action Adventure",
  players: "1 Pemain",
  badge: "Lightsaber Action",
  image: "/games/ps5-jedisurvivor.jpg",
  backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
  desc: "Lanjutan perjalanan Cal Kestis melawan kekaisaran Galactic Empire dengan berbagai teknik Lightsaber baru."
},
  {
  id: "ps5-armoredcore6",
  title: "Armored Core VI: Fires of Rubicon",
  platform: "PS5",
  genre: "Mecha Action",
  players: "1 Pemain",
  badge: "FromSoftware Hits",
  image: "/games/ps5-armoredcore6.jpg",
  backdrop: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
  desc: "Pertempuran robot raksasa mecha berkecepatan tinggi dengan kustomisasi part tanpa batas di planet Rubicon 3."
},
  {
  id: "ps5-dragonsdogma2",
  title: "Dragon's Dogma 2",
  platform: "PS5",
  genre: "Action RPG",
  players: "1 Pemain",
  badge: "Open World Epik",
  image: "/games/ps5-dragonsdogma2.jpg",
  backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
  desc: "Dunia fantasi luas penuh monster mitologi bersama pendamping AI Pawn yang setia dan cerdas."
},
  {
  id: "ps5-p3reload",
  title: "Persona 3 Reload",
  platform: "PS5",
  genre: "JRPG",
  players: "1 Pemain",
  badge: "Stylish JRPG",
  image: "/games/ps5-p3reload.jpg",
  backdrop: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
  desc: "Remake modern mahakarya RPG Atlus mengungkap misteri Dark Hour dan menara Tartarus dengan gaya visual modis."
},
  {
  id: "ps5-diablo4",
  title: "Diablo IV",
  platform: "PS5",
  genre: "Action RPG",
  players: "1 - 2 Pemain",
  badge: "Dark Fantasy",
  image: "/games/ps5-diablo4.jpg",
  backdrop: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
  desc: "Perang abadi di dunia Sanctuary membasmi iblis Lilith dengan loot melimpah dan mode co-op lokal 2 stik."
},
  {
  id: "ps5-liesofp",
  title: "Lies of P",
  platform: "PS5",
  genre: "Action Soulslike",
  players: "1 Pemain",
  badge: "Hardcore Hits",
  image: "/games/ps5-liesofp.jpg",
  backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
  desc: "Adaptasi gelap dongeng Pinokio di kota runtuh Krat berhadapan dengan boneka pembunuh mekanis mematikan."
},
  {
  id: "ps5-deathstranding",
  title: "Death Stranding Director's Cut",
  platform: "PS5",
  genre: "Action Adventure",
  players: "1 Pemain",
  badge: "Kojima Masterpiece",
  image: "/games/ps5-deathstranding.jpg",
  backdrop: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
  desc: "Misi Sam Bridges menyatukan kembali peradaban Amerika yang hancur dengan fitur DualSense haptic feedback imersif."
},
  {
  id: "ps5-stray",
  title: "Stray",
  platform: "PS5",
  genre: "Adventure",
  players: "1 Pemain",
  badge: "Kucing Lucu",
  image: "/games/ps5-stray.jpg",
  backdrop: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop",
  desc: "Petualangan kucing liar tersesat di kota cyber cyberpunk yang dihuni para robot ramah dan makhluk misterius."
},
  {
  id: "ps5-sifu",
  title: "Sifu",
  platform: "PS5",
  genre: "Kung-Fu Action",
  players: "1 Pemain",
  badge: "Martial Arts",
  image: "/games/ps5-sifu.jpg",
  backdrop: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
  desc: "Aksi beladiri kung-fu Pak Mei balas dendam dengan mekanik penuaan usia unik setiap kali karakter kalah."
},
  {
  id: "ps5-kena",
  title: "Kena: Bridge of Spirits",
  platform: "PS5",
  genre: "Action Adventure",
  players: "1 Pemain",
  badge: "Animasi Pixar",
  image: "/games/ps5-kena.jpg",
  backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
  desc: "Pemandu roh Kena mengumpulkan makhluk mungil Rot memulihkan desa suci yang tercemar energi kutukan."
},
  {
  id: "ps5-returnal",
  title: "Returnal",
  platform: "PS5",
  genre: "Roguelike Shooter",
  players: "1 Pemain",
  badge: "PS5 Exclusive",
  image: "/games/ps5-returnal.jpg",
  backdrop: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
  desc: "Selene terjebak dalam lingkaran waktu di planet alien berbahaya dengan aksi tembak-menembak peluru kilat."
},
  {
  id: "ps5-ghostrunner2",
  title: "Ghostrunner 2",
  platform: "PS5",
  genre: "Cyberpunk Action",
  players: "1 Pemain",
  badge: "Kecepatan Refleks",
  image: "/games/ps5-ghostrunner2.jpg",
  backdrop: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
  desc: "Aksi ninja siber berpedang katana melibas musuh dalam sekali tebas dengan aksi sepeda motor akrobatik di padang pasir."
},
  {
  id: "ps5-lordsofthefallen",
  title: "Lords of the Fallen",
  platform: "PS5",
  genre: "Action RPG",
  players: "1 Pemain",
  badge: "Dark Fantasy",
  image: "/games/ps5-lordsofthefallen.jpg",
  backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
  desc: "Menjelajahi dua dunia paralel: dunia Axiom orang hidup dan alam Umbral orang mati bergrafis Unreal Engine 5."
},
  {
  id: "ps4-mhw",
  title: "Monster Hunter: World",
  platform: "PS4",
  genre: "Action RPG",
  players: "1 - 4 Pemain",
  badge: "Capcom Bestseller",
  image: "/games/ps4-mhw.jpg",
  backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
  desc: "Berburu naga purba dan monster raksasa di alam liar dinamis berbekal 14 varian senjata unik."
},
  {
  id: "ps4-p5royal",
  title: "Persona 5 Royal",
  platform: "PS4",
  genre: "JRPG",
  players: "1 Pemain",
  badge: "Masterpiece RPG",
  image: "/games/ps4-p5royal.jpg",
  backdrop: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
  desc: "Kisah Phantom Thieves mencuri hati para koruptor di Tokyo dengan soundtrack jazz memikat dan visual anime menawan."
},
  {
  id: "ps4-batmanak",
  title: "Batman: Arkham Knight",
  platform: "PS4",
  genre: "Action Superhero",
  players: "1 Pemain",
  badge: "Puncak Arkham",
  image: "/games/ps4-batmanak.jpg",
  backdrop: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
  desc: "Lindungi kota Gotham dari Scarecrow dan Arkham Knight mengendarai Batmobile canggih legendaris."
},
  {
  id: "ps4-darksouls3",
  title: "Dark Souls III",
  platform: "PS4",
  genre: "Action RPG",
  players: "1 Pemain",
  badge: "Mahakarya Souls",
  image: "/games/ps4-darksouls3.jpg",
  backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
  desc: "Perjalanan The Ashen One melewati kerajaan Lothric menghadapi Lords of Cinder demi menyalakan kembali api pertama."
},
  {
  id: "ps4-dmc5",
  title: "Devil May Cry 5",
  platform: "PS4",
  genre: "Hack and Slash",
  players: "1 Pemain",
  badge: "SSStylish Action",
  image: "/games/ps4-dmc5.jpg",
  backdrop: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
  desc: "Aksi combo kombo tebasan pedang dan senjata api super stylish bersama Dante, Nero, dan V."
},
  {
  id: "ps4-crash4",
  title: "Crash Bandicoot 4: It's About Time",
  platform: "PS4",
  genre: "Platformer",
  players: "1 - 4 Pemain",
  badge: "Petualangan Seru",
  image: "/games/ps4-crash4.jpg",
  backdrop: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop",
  desc: "Kembalinya Crash dan Coco mengarungi ruang dan waktu menggunakan Quantum Masks dengan stage penuh kejutan."
},
  {
  id: "ps4-acvalhalla",
  title: "Assassin's Creed Valhalla",
  platform: "PS4",
  genre: "Open World RPG",
  players: "1 Pemain",
  badge: "Viking Epik",
  image: "/games/ps4-acvalhalla.jpg",
  backdrop: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop",
  desc: "Pimpin klan Viking Eivor menaklukkan daratan Inggris kuno abad kegelapan dan membangun permukiman makmur."
},
  {
  id: "ps4-re2remake",
  title: "Resident Evil 2 Remake",
  platform: "PS4",
  genre: "Survival Horror",
  players: "1 Pemain",
  badge: "GOTY Nominee",
  image: "/games/ps4-re2remake.jpg",
  backdrop: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop",
  desc: "Leon Kennedy dan Claire Redfield menyelamatkan diri dari kepungan zombie di kantor polisi R.P.D Raccoon City."
},
  {
  id: "ps4-re3remake",
  title: "Resident Evil 3 Remake",
  platform: "PS4",
  genre: "Survival Horror",
  players: "1 Pemain",
  badge: "Nemesis Terror",
  image: "/games/ps4-re3remake.jpg",
  backdrop: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop",
  desc: "Pelarian dramatis Jill Valentine dari kejaran monster senjata biologis pemusnah Nemesis di jalanan Raccoon City."
},
  {
  id: "ps4-farcry6",
  title: "Far Cry 6",
  platform: "PS4",
  genre: "Action FPS",
  players: "1 - 2 Pemain",
  badge: "Revolusi Tropis",
  image: "/games/ps4-farcry6.jpg",
  backdrop: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
  desc: "Pemberontakan gerilya di pulau tropis Yara menggulingkan kekuasaan tiran diktator Anton Castillo."
},
  {
  id: "ps4-nfspayback",
  title: "Need for Speed Payback",
  platform: "PS4",
  genre: "Racing",
  players: "1 Pemain",
  badge: "Balap Liar Heist",
  image: "/games/ps4-nfspayback.jpg",
  backdrop: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=800&auto=format&fit=crop",
  desc: "Aksi balapan penuh dendam ala film Fast & Furious di lembah Fortune Valley melawan kartel The House."
},
  {
  id: "ps4-watchdogslegion",
  title: "Watch Dogs: Legion",
  platform: "PS4",
  genre: "Open World",
  players: "1 Pemain",
  badge: "Hack Siapa Saja",
  image: "/games/ps4-watchdogslegion.jpg",
  backdrop: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
  desc: "Bangun perlawanan hacker DedSec di kota London futuristik dengan merekrut warga sipil mana pun menjadi agen."
},
  {
  id: "ps4-ghostrecon",
  title: "Tom Clancy's Ghost Recon Wildlands",
  platform: "PS4",
  genre: "Tactical Shooter",
  players: "1 - 4 Pemain",
  badge: "Operasi Khusus",
  image: "/games/ps4-ghostrecon.jpg",
  backdrop: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
  desc: "Tim pasukan khusus Ghost membongkar kartel narkoba Santa Blanca di pedalaman Bolivia secara taktis."
},
  {
  id: "ps4-cuphead",
  title: "Cuphead: Don't Deal With The Devil",
  platform: "PS4",
  genre: "Run and Gun",
  players: "1 - 2 Pemain",
  badge: "Kartun 1930-an",
  image: "/games/ps4-cuphead.jpg",
  backdrop: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop",
  desc: "Game bos-fight intens 2 stik dengan gaya animasi gambar tangan kartun klasik era 1930-an dan musik jazz orisinal."
},
  {
  id: "ps4-littlenightmares2",
  title: "Little Nightmares II",
  platform: "PS4",
  genre: "Puzzle Horror",
  players: "1 Pemain",
  badge: "Horor Artistik",
  image: "/games/ps4-littlenightmares2.jpg",
  backdrop: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop",
  desc: "Bantu Mono dan Six mengungkap rahasia kelam Menara Sinyal yang membelokkan dunia dalam teka-teki misterius."
},
  {
  id: "ps4-hollowknight",
  title: "Hollow Knight",
  platform: "PS4",
  genre: "Metroidvania",
  players: "1 Pemain",
  badge: "Mahakarya Indie",
  image: "/games/ps4-hollowknight.jpg",
  backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
  desc: "Eksplorasi kerajaan serangga bawah tanah Hallownest yang runtuh berbekal jarum pedang dan kemampuan sihir kuno."
},
  {
  id: "ps4-subnautica",
  title: "Subnautica",
  platform: "PS4",
  genre: "Survival Adventure",
  players: "1 Pemain",
  badge: "Laut Alien",
  image: "/games/ps4-subnautica.jpg",
  backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
  desc: "Bertahan hidup di kedalaman samudra planet alien dengan membangun pangkalan selam dan kapal selam penjelajah."
},
  {
  id: "ps4-terraria",
  title: "Terraria",
  platform: "PS4",
  genre: "Sandbox Adventure",
  players: "1 - 4 Pemain",
  badge: "Kreativitas 2D",
  image: "/games/ps4-terraria.jpg",
  backdrop: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop",
  desc: "Menggali, bertarung, membangun dan menjelajah dunia acak 2D bersama teman dengan ribuan senjata dan boss raksasa."
},
  {
  id: "ps4-fallguys",
  title: "Fall Guys",
  platform: "PS4",
  genre: "Party Multiplayer",
  players: "1 - 4 Pemain",
  badge: "Seru & Rusuh",
  image: "/games/ps4-fallguys.jpg",
  backdrop: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop",
  desc: "Balapan rintangan gila bersama puluhan pemain memperebutkan mahkota emas dalam arena warna-warni yang mengocok perut."
},
  {
  id: "ps4-apex",
  title: "Apex Legends",
  platform: "PS4",
  genre: "Battle Royale",
  players: "1 - 3 Pemain",
  badge: "Hero Shooter",
  image: "/games/ps4-apex.jpg",
  backdrop: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
  desc: "Pertempuran battle royale regu skuad legendaris dengan karakter beragam kemampuan spesial di Frontier."
}
];