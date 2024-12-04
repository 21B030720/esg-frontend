import { useTranslation } from "react-i18next";
import "../Labs.css"

const LabsListWithoutPayload = ({ labs, onSelectLab }) => {

  const { t } = useTranslation();
  console.log(labs)

  return (
    <div className="labs-list">
      <h2>{t("Laboratories")}:</h2>
      {labs.map((lab) => (
        <button 
          key={lab.id} 
          className="lab-button"
          onClick={() => onSelectLab(lab)}
        >
          {t(lab.name)}
        </button>
      ))}
    </div>
  );
};

export default LabsListWithoutPayload;