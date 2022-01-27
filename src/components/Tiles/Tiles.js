import { Component } from "react";

import Tile from "./Tile/Tile";

import styles from "./Tiles.module.css";

class Tiles extends Component {
  render() {
    return (
      <div className={styles.tiles}>
        {this.props.articles.map((article, index) => (
          <Tile key={index} article={article} />
        ))}
      </div>
    );
  }
}

export default Tiles;
