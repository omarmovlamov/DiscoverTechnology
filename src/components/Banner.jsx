import ParticlesBackground from "./Particles";
import "../styles/banner.css";
import { Link } from "react-router-dom";
function Banner() {
  return (
    <div className="banner-main">
      <ParticlesBackground />
      <div className="banner-text">
        <h2>Discover new technologies with us</h2>
        <div className="banner-links">
          <Link to="/technews">about us</Link>
          <Link to="/technews">news</Link>
          <Link to="/technews">reviews</Link>
          <Link to="/technews">articles</Link>
          <Link to="/technews">future</Link>
        </div>
        <Link to="/technews">
          <button>Learn more</button>
        </Link>
      </div>
    </div>
  );
}

export default Banner;
