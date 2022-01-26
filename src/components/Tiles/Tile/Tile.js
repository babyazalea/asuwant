import { Component } from "react";

import styles from "./Tile.module.css";

class Tile extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <div className={styles.tile}>
        <span>{this.props.article.title}</span>
        <span>{this.props.article.description}</span>
      </div>
    );
  }
}

export default Tile;
