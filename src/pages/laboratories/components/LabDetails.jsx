import "../Labs.css";
import { useEffect } from 'react';
import leftArrow from '../leftArrow.png'; 
import rightArrow from '../rightArrow.png';
import { useTranslation } from "react-i18next";

const LabDetails = ({ lab, onPreviousLab, onNextLab }) => {

    const { t } = useTranslation();

    useEffect(() => {
        document.title = lab.name;
    }, [lab]);
    
    return (
        <div className="lab-details-container">
            <h2>{t(lab.name)}</h2>
            <div className='lab-slider'>
                <button className="arrow-button" onClick={onPreviousLab}>
                    <img className='arrow-image' src={leftArrow} alt="Previous Lab" />
                </button>
                <img className="labs-main-image" src={lab.image} alt={lab.name} />
                <button className="arrow-button" onClick={onNextLab}>
                    <img className='arrow-image' src={rightArrow} alt="Next Lab" />
                </button>
            </div>
            <p>{lab.description}</p>
        </div>
    );
};

export default LabDetails;