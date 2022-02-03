import Tile from "./Tile/Tile";

import styles from "./Tiles.module.css";

function Tiles() {
  return (
    <div className={styles.tiles}>
      {this.props.articles.map((article, index) => (
        <Tile key={index} article={article} />
      ))}
    </div>
  );
}

export default Tiles;
