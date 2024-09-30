import React from 'react';
import "../Directions.css"
import { useEffect } from 'react';
import leftArrow from '../leftArrow.png'; 
import rightArrow from '../rightArrow.png';

const DirectionDetails = ({ direction, onPreviousDirection, onNextDirection }) => {
    useEffect(() => {
        document.title = direction.name;
      }, [direction]);
    
    return (
        <div className="direction-details-container">
            <h2>{direction.name}</h2>
            <div className='direction-slider'>
                <button className="arrow-button" onClick={onPreviousDirection}>
                    <img className='arrow-image' src={leftArrow} alt="Previous Direction" />
                </button>
                <img src={direction.image} alt={direction.name} />
                <button className="arrow-button" onClick={onNextDirection}>
                    <img className='arrow-image' src={rightArrow} alt="Next Direction" />
                </button>
            </div>
            <p>{direction.description}</p>
        </div>
    );
};

export default DirectionDetails;
