import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ConsoleColorShowcase from './components/ConsoleColorShowcase';
import ParallaxGameRunway from './components/ParallaxGameRunway';
import GameListSection from './components/GameListSection';
import PricingPackages from './components/PricingPackages';
import RentalTerms from './components/RentalTerms';
import BookingForm from './components/BookingForm';
import LocationMap from './components/LocationMap';
import Footer from './components/Footer';
import WhatsAppFloating from './components/WhatsAppFloating';

export default function App() {
  const [selectedConsole, setSelectedConsole] = useState('ps5');
  const [selectedColor, setSelectedColor] = useState('glacier-white');
  const [selectedGames, setSelectedGames] = useState([]);

  const handleSelectConsoleAndColor = (consoleId, colorId) => {
    setSelectedConsole(consoleId);
    setSelectedColor(colorId);
  };

  const handleSelectGame = (gameTitle) => {
    if (!selectedGames.includes(gameTitle)) {
      if (selectedGames.length >= 2) {
        alert('Maksimal pilihan game adalah 2 game per konsol.');
        return;
      }
      setSelectedGames((prev) => [...prev, gameTitle]);
    }
  };

  const handleSelectPackage = (type, packageId) => {
    if (type === 'console') {
      setSelectedConsole(packageId);
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* 1. Interactive Console & Color Selection (with Real Photos) */}
      <ConsoleColorShowcase onSelectConsoleAndColor={handleSelectConsoleAndColor} />

      {/* 2. Visual 3D Auto-Moving Parallax Stream (Pure Cool Visual, Non-Stop Running) */}
      <ParallaxGameRunway />

      {/* 3. Dedicated Interactive Game List (Search, Filter, Detail Modal & Selection) */}
      <GameListSection
        onSelectGame={handleSelectGame}
        selectedGameTitles={selectedGames}
      />

      {/* 3. Pricing Packages & LED TV */}
      <PricingPackages onSelectPackage={handleSelectPackage} />

      {/* 4. Rental Requirements & SOP */}
      <RentalTerms />

      {/* 5. Complete Booking Form with Console Colors and Real Photos */}
      <BookingForm
        initialConsole={selectedConsole}
        initialColor={selectedColor}
        initialGames={selectedGames}
      />

      {/* 6. Google Maps Location & Directions (Interactive Map) */}
      <LocationMap />

      {/* Footer */}
      <Footer />

      {/* WhatsApp Floating Action Button */}
      <WhatsAppFloating />
    </div>
  );
}
