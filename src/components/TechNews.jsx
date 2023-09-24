import { useState, useEffect } from "react";
import ParticlesBackground from "./Particles";
import "../styles/techNews.css";
import axios from "axios";
import { Link } from "react-router-dom";

function TechNews() {
  const [newsData, setNewsData] = useState([]);
  const apiKey = "YourApiKey";

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`
        );
        setNewsData(response.data.articles);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="techNews">
      <ParticlesBackground />
      <div className="techNews-title">
        <h2>Stay informed about the latest Technology updates now</h2>
        <a href="#news">
          <button>Start Reading Now</button>
        </a>
      </div>
      <div className="newsCard " id="news">
        {newsData.map((article, index) => (
          <div key={index} className="newsCard-item">
            <div className="inner-circle"></div>
            <img src={article.urlToImage} alt="NewsImage" />
            <h3>{article.title.slice(0, -12)}</h3>
            <p>{article.description}</p>
            <div className="newsCard-item-content">
              <p>
                {article.content.slice(0, -13)}
                <a href={article.url}>
                  <span>read more</span>
                </a>
              </p>
            </div>
            <div className="newsCard-item-bottom ">
              <p>
                <span>Author</span> : {article.author}
              </p>
              <p>
                <span>Release Date</span> : {article.publishedAt.slice(0, -10)}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="backHome">
        <Link to="/">
          <i className="fa-solid fa-house"></i>
        </Link>
      </div>
    </div>
  );
}

export default TechNews;
