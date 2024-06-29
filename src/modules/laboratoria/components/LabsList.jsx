import "../Labs.css"

const LabsList = ({ labs, onSelectLab }) => {
  return (
    <div className="labs-list">
      <h2>Лаборатории:</h2>
      {labs.map((lab) => (
        <button 
          key={lab.id} 
          className="lab-button"
          onClick={() => onSelectLab(lab)}
        >
          {lab.name}
        </button>
      ))}
    </div>
  );
};

export default LabsList;