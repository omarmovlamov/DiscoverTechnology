import "../styles/benefits.css";

function Benefits() {
  return (
    <div className="benefits-main">
      <div className="benefits-left-side">
        <div className="benefits-img">
          <img
            src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/911b1a591b4e596296b50eef/sa-min.jpg"
            alt="benefits-img"
          />
        </div>
      </div>
      <div className="benefits-right-side">
        <div className="benefits-card">
          <div className="benefits-icon">
            <i className="fa-solid fa-bitcoin-sign"></i>
          </div>
          <div className="benefits-text">
            <h4>BLOCKCHAIN</h4>
          </div>
        </div>
        <div className="benefits-card">
          <div className="benefits-icon">
            <i className="fa-solid fa-microchip"></i>
          </div>
          <div className="benefits-text">
            <h4>AI PRODUCTS</h4>
          </div>
        </div>
        <div className="benefits-card">
          <div className="benefits-icon">
            <i className="fa-solid fa-wifi"></i>
          </div>
          <div className="benefits-text">
            <h4>5G NETWORK</h4>
          </div>
        </div>
        <div className="benefits-card">
          <div className="benefits-icon">
            <i className="fa-solid fa-biohazard"></i>
          </div>
          <div className="benefits-text">
            <h4>bio-technology</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
