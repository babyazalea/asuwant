import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Tile from "./Tile/Tile";

import styles from "./Tiles.module.css";

function Tiles(props) {
  const navigate = useNavigate();

  useEffect(() => {
    if (props.articles.length === 0) {
      navigate("/");
    }
  }, [navigate, props.articles.length]);

  return (
    <div className={styles.tiles}>
      {props.articles.map((article, index) => (
        <Tile key={index} article={article} />
      ))}
    </div>
  );
}

export default Tiles;
