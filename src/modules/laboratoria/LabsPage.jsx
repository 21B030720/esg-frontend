import React, { useState } from 'react';
import LabsList from './components/LabsList';
import LabDetails from './components/LabDetails';
import "./Labs.css";
import pic from "./Geolog1.png";
import Header from '@modules/header/Header';
import Footer from '@modules/footer/Footer';

const baseLab = {
    image: pic,
    description: `
        Химическая интенсификация нефтеотдачи один из основных методов повышения нефтеотдачи, который снижает остаточную нефтенасыщенность за счет снижения межфазного натяжения вода-нефть (ПАВ/щелочной раствор) и увеличивает объемную эффективность вытеснения за счет снижения коэффициента подвижности вода-нефть (полимер).
    `
};

const labNames = [
    'Бизнес обучение',
    'Химические разработки',
    'ИТ/Цифровизация',
    'Экология и ESG',
    'Оптимизация и энергоэффективность',
    'Геология и сейсмология',
    'Водородная энергетика',
    'Повышение нефтеотдачи',
    'Промышленная безопасность',
    'Технологии и моделирование',
    'Материаловедение',
    'Проблемы каррозии'
];

const fakeLabs = labNames.map((name, index) => ({
    ...baseLab,
    id: index + 1,
    name
}));

const LabsPage = () => {
  const [selectedLab, setSelectedLab] = useState(fakeLabs[0]);

  const handleLabSelect = (lab) => {
    setSelectedLab(lab);
  };

  const handleNextLab = () => {
    const currentIndex = fakeLabs.findIndex(lab => lab.id === selectedLab.id);
    const nextIndex = (currentIndex + 1) % fakeLabs.length;
    setSelectedLab(fakeLabs[nextIndex]);
  };

  const handlePreviousLab = () => {
    const currentIndex = fakeLabs.findIndex(lab => lab.id === selectedLab.id);
    const prevIndex = (currentIndex - 1 + fakeLabs.length) % fakeLabs.length;
    setSelectedLab(fakeLabs[prevIndex]);
  };

  return (
    <div>
        <Header />
        <div className="labs-page">
            <LabsList labs={fakeLabs} onSelectLab={handleLabSelect} />
            {selectedLab && <LabDetails lab={selectedLab} 
                onPreviousLab={handlePreviousLab}
                onNextLab={handleNextLab} />}
        </div>
        <Footer />
    </div>
  );
};

export default LabsPage;