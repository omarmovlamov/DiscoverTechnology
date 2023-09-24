import { Link } from "react-router-dom";
import "../styles/aboutPage.css";
function AboutPage() {
  return (
    <>
      <div className="aboutPage">
        <div className="a-img">
          <div className="a-card-container a-header">
            <div className="a-card">
              <div className="a-cardItem">
                <p>01</p>
                <h4>BIO-TECHNOLOGY</h4>
                <p>
                  This field focuses on the ability to edit the genetic code and
                  intervene in biological processes. Technologies such as
                  CRISPR-Cas9 enable major advances in genetic editing.
                </p>
                <Link to="/technews">Learn More</Link>
              </div>
            </div>
            <div className="a-card">
              <div className="a-cardItem">
                <p>02</p>
                <h4>BLOCKCHAIN</h4>
                <p>
                  It is a decentralized technology that provides secure data
                  storage and transfer; It is fundamental to cryptocurrencies
                  and has great potential in different sectors.
                </p>
                <Link to="/technews">Learn More</Link>
              </div>
            </div>
            <div className="a-card">
              <div className="a-cardItem">
                <p>03</p>
                <h4>AI</h4>
                <p>
                  Artificial intelligence is used to simulate human-like
                  thinking and problem-solving abilities; machine learning and
                  deep learning are important developments in this field.
                </p>
                <Link to="/technews">Learn More</Link>
              </div>
            </div>
            <div className="a-card">
              <div className="a-cardItem">
                <p>04</p>
                <h4>5G NETWORK</h4>
                <p>
                  5G is a faster, lower-latency and more connected wireless
                  communications technology. It supports new applications and
                  powers the internet of things.
                </p>
                <Link to="/technews">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="a-blue-bg">
          <div className="a-card-container a-bottom">
            <div className="a-card">
              <div className="a-cardItem">
                <p>01</p>
                <h4>BIO-TECHNOLOGY</h4>
                <p>
                  This field focuses on the ability to edit the genetic code and
                  intervene in biological processes. Technologies such as
                  CRISPR-Cas9 have enabled significant progress in genetic
                  editing
                </p>
                <Link to="/technews">Learn More</Link>
              </div>
            </div>
            <div className="a-card">
              <div className="a-cardItem">
                <p>02</p>
                <h4>BLOCKCHAIN</h4>
                <p>
                  It is a decentralized technology that provides secure data
                  storage and transfer; It is fundamental to cryptocurrencies
                  and has great potential in different sectors.
                </p>
                <Link to="/technews">Learn More</Link>
              </div>
            </div>
            <div className="a-card">
              <div className="a-cardItem">
                <p>03</p>
                <h4>AI</h4>
                <p>
                  Artificial intelligence is used to simulate human-like
                  thinking and problem-solving abilities; machine learning and
                  deep learning are important developments in this field.
                </p>
                <Link to="/technews">Learn More</Link>
              </div>
            </div>
            <div className="a-card">
              <div className="a-cardItem">
                <p>04</p>
                <h4>5G NETWORK</h4>
                <p>
                  5G is a faster, lower-latency and more connected wireless
                  communications technology. It supports new applications and
                  powers the internet of things.
                </p>
                <Link to="/technews">Learn More</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="a-white-bg">
          <div className="a-lightblue-box"></div>
          <div className="a-whiteText-box">
            <h3>Artificial Intelligence</h3>
            <p>
              <i>
                Artificial Intelligence (AI) refers to a branch of technology
                that attempts to simulate human-like thinking and learning
                abilities of computer systems. This field involves many
                different disciplines, such as mathematics, statistics, data
                science, algorithms, and computer science, to improve the
                abilities of machines to perform complex tasks.
              </i>
            </p>
            <Link to="/technews">
              <button>Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
