

const Advantage = ({ title, description, icon }) => {
    return (
      <div className="advantage">
        <div className="advantage-icon">
          <img src={icon} alt={title} style={{ width: '50px', height: '50px' }} />
        </div>
        <h3 className="advantage-title">{title}</h3>
        <p className="advantage-description">{description}</p>
      </div>
    );
  };
  
  export default Advantage;