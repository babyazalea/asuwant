import styles from "./Tile.module.css";

function Tile(props) {
  return (
    <div className={styles.tile}>
      <span className={styles["article-title"]}>{props.article.title}</span>
      <a href={props.article.url}>기사 링크로 이동</a>
    </div>
  );
}

export default Tile;
