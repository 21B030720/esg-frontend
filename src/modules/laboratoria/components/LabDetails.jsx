import "../Labs.css";
import { useEffect } from 'react';
import leftArrow from '../leftArrow.png'; 
import rightArrow from '../rightArrow.png';

const LabDetails = ({ lab, onPreviousLab, onNextLab }) => {
    useEffect(() => {
        document.title = lab.name;
    }, [lab]);
    
    return (
        <div className="lab-details-container">
            <h2>{lab.name}</h2>
            <div className='lab-slider'>
                <button className="arrow-button" onClick={onPreviousLab}>
                    <img className='arrow-image' src={leftArrow} alt="Previous Lab" />
                </button>
                <img src={lab.image} alt={lab.name} />
                <button className="arrow-button" onClick={onNextLab}>
                    <img className='arrow-image' src={rightArrow} alt="Next Lab" />
                </button>
            </div>
            <p>{lab.description}</p>
        </div>
    );
};

export default LabDetails;