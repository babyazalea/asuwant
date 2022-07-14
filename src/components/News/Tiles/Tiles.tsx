import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Tile from "./Tile/Tile";

import styles from "./Tiles.module.css";

import { Article } from "../../../types/types";

type Props = {
  articles: Article[];
};

function Tiles({ articles }: Props) {
  return (
    <div className={styles.tiles}>
      {articles.map((article, index) => (
        <Tile key={index} article={article} />
      ))}
    </div>
  );
}

export default Tiles;
