import { Link } from "react-router-dom";
import AboutPage from "./AboutPage";
import Banner from "./Banner";
import BasicTech from "./BasicTech";
import Benefits from "./Benefits";
import Footer from "./Footer";
import FutureTech from "./FutureTech";
import ScrollPage from "./ScrollPage";

function HomePages() {
  return (
    <div>
      <div className="backHome">
        <Link to="/technews">
          <i className="fa-regular fa-newspaper"></i>
        </Link>
      </div>
      <Banner />
      <Benefits />
      <FutureTech />
      <AboutPage />
      <BasicTech />
      <ScrollPage />
      <Footer />
    </div>
  );
}

export default HomePages;
