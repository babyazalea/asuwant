import { Component } from "react";

import styles from "./Tile.module.css";

class Tile extends Component {
  render() {
    return (
      <div className={styles.tile}>
        <span>{this.props.article.title}</span>
        <a href={this.props.article.url}>기사 링크로 이동</a>
      </div>
    );
  }
}

export default Tile;
