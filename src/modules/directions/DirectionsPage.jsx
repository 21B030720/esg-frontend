import React, { useState } from 'react';
import DirectionsList from './components/DirectionsList';
import DirectionDetails from './components/DirectionDetails';
import "./Directions.css"
import pic from "./Geolog1.png"
import Header from '@modules/header/Header';
import Footer from '@modules/footer/Footer';

const baseDirection = {
    image: pic,
    description: `
        Химическая интенсификация нефтеотдачи один из основных методов повышения нефтеотдачи, который снижает остаточную нефтенасыщенность за счет снижения межфазного натяжения вода-нефть (ПАВ/щелочной раствор) и увеличивает объемную эффективность вытеснения за счет снижения коэффициента подвижности вода-нефть (полимер).
    `
};

const directionNames = [
    "Business Training",
    "Chemical Developments",
    "IT/Digitalization",
    "Ecology and ESG",
    "Optimization and Energy Efficiency",
    "Geology and Seismology",
    "Hydrogen Energy",
    "Enhanced Oil Recovery",
    "Industrial Safety",
    "Technologies and Modeling",
    "Materials Science",
    "Corrosion Issues",
];

const fakeDirections = directionNames.map((name, index) => ({
    ...baseDirection,
    id: index + 1,
    name
}));

const DirectionsPage = () => {
  const [selectedDirection, setSelectedDirection] = useState(fakeDirections[0]);

  const handleDirectionSelect = (direction) => {
    setSelectedDirection(direction);
  };

  const handleNextDirection = () => {
    const currentIndex = fakeDirections.findIndex(dir => dir.id === selectedDirection.id);
    const nextIndex = (currentIndex + 1) % fakeDirections.length;
    setSelectedDirection(fakeDirections[nextIndex]);
  };

  const handlePreviousDirection = () => {
    const currentIndex = fakeDirections.findIndex(dir => dir.id === selectedDirection.id);
    const prevIndex = (currentIndex - 1 + fakeDirections.length) % fakeDirections.length;
    setSelectedDirection(fakeDirections[prevIndex]);
  };


  return (
    <div>
        <Header />
        <div className="directions-page">
        <DirectionsList directions={fakeDirections} onSelectDirection={handleDirectionSelect} />
        {selectedDirection && <DirectionDetails direction={selectedDirection} 
            onPreviousDirection={handlePreviousDirection}
            onNextDirection={handleNextDirection} />}
        
        </div>
        <Footer />
    </div>
  );
};

export default DirectionsPage;
