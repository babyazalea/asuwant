import styles from "./Tile.module.css";

function Tile() {
  return (
    <div className={styles.tile}>
      <span className={styles["article-title"]}>
        {this.props.article.title}
      </span>
      <a href={this.props.article.url}>기사 링크로 이동</a>
    </div>
  );
}

export default Tile;
