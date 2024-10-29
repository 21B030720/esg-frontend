import { useTranslation } from "react-i18next";
import "../Labs.css"

const LabsList = ({ labs, onSelectLab }) => {

  const { t } = useTranslation();

  return (
    <div className="labs-list">
      <h2>{t("Laboratories")}:</h2>
      {labs.map((lab) => (
        <button 
          key={lab.id} 
          className="lab-button"
          onClick={() => onSelectLab(lab)}
        >
          {t(lab.title)}
        </button>
      ))}
    </div>
  );
};

export default LabsList;