import { Link } from "react-router-dom";
import stories from "../db.json";

import iconRead from "../assets/icons8-leer-32.png";
import iconShare from "../assets/icons8-share-32.png";
import iconHeart from "../assets/icons8-heart-32.png";
import { Helmet } from "react-helmet";


const Home = () => {
  return (
    <>
      <Helmet>
        <title>Storify - Historias únicas</title>
      </Helmet>
      {stories.map((item) => {
        return (
          <div className="story-data" key={item.ifid}>
            <div className="story-img" style={{ backgroundImage: `url(${item.cover})` }}></div>
            <div className="story-desc">
              <h1>{item.title}</h1>
              <p className="story-desc">{item.synopsis}</p>
              <div className="actions">
                <Link to={`/story/${item.route}`}><img src={iconRead} alt='read' /></Link>
                <button><img src={iconShare} alt='share' /></button>
                <button><img src={iconHeart} alt='set as favourite' /></button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Home;
