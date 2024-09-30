import React from 'react';
import "../Directions.css"
import { useTranslation } from 'react-i18next';

const DirectionsList = ({ directions, onSelectDirection }) => {
  const { t } = useTranslation();

  return (
    <div className="directions-list">
      <h2>{t('directions')}:</h2>
      {directions.map((direction) => (
        <button 
          key={direction.id} 
          className="direction-button"
          onClick={() => onSelectDirection(direction)}
        >
          {t(direction.name)}
        </button>
      ))}
    </div>
  );
};

export default DirectionsList;
