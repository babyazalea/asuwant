import React from "react";
import styles from "./Tile.module.css";

type Props = {
  article: {
    title: string;
    url: string;
  };
};

function Tile({ article }: Props) {
  return (
    <div className={styles.tile}>
      <span className={styles["article-title"]}>{article.title}</span>
      <a href={article.url}>기사 링크로 이동</a>
    </div>
  );
}

export default Tile;
