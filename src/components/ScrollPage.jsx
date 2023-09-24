import { useState, useEffect } from "react";
import "../styles/scrollPage.css";
const techs = [
  {
    title: "Quantum Computers",
    description:
      "Quantum computers are a technology that is predicted to have much higher computing capacity than traditional computers. Quantum computers can quickly solve complex mathematical problems and have great potential in breaking encryption techniques.",
  },
  {
    title: "Space Exploration and Space Colonies",
    description:
      "Space exploration is making great progress, such as sending manned and unmanned missions to Mars and other planets. Exploring resources in space is an important step for the establishment of space colonies in the future.",
  },
];

const ScrollPage = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((prevCount) => (prevCount + 1) % techs.length);
  };

  const decrease = () => {
    setCount((prevCount) => (prevCount - 1 + techs.length) % techs.length);
  };

  useEffect(() => {
    const intervalId = setInterval(increase, 10000);

    return () => clearInterval(intervalId);
  }, []);

  const technologyScroll = techs[count];

  return (
    <div className="scrollPage">
      <div className="scrollPage-title">
        <h3>Technology Of The Future</h3>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <div className="sp-blue-bg"></div>
        <div className="sp-img-bg"></div>
      </div>
      <div className="scrollPage-item">
        <button onClick={decrease}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <div className="scrollPage-items">
          <div className="scrollPage-content">
            <h2>{technologyScroll.title}</h2>
            <p>{technologyScroll.description}</p>
          </div>
        </div>
        <button onClick={increase}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default ScrollPage;
