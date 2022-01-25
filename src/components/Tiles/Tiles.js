import { Component } from "react";
import Tile from "./Tile";

import styles from "./Tiles.module.css";

class Tiles extends Component {
  render() {
    return (
      <div className={styles.tiles}>
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
      </div>
    );
  }
}

export default Tiles;
