import { useState } from "react";
import "../styles/footer.css";

function Footer() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="footer-main">
      <div className="footer-contactCard">
        <h3>Discover new technologies</h3>
        <div className="e-b">
          <input
            placeholder="Enter a valid email address"
            type="email"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <button
            onClick={() => {
              setInputValue("");
            }}
          >
            send
          </button>
        </div>
        <div className="footerCard-bottom">
          <h3>follow us</h3>
          <div className="footer-socials">
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p> &copy; Omar Movlamov All rigths reserved</p>
      </div>
    </div>
  );
}

export default Footer;
