import React from "react";

import Loading from "../UI/Loading";
import Tiles from "./Tiles/Tiles";
import Options from "./Options/Options";

import { Article } from "../../types/types";

type Props = {
  isLoading: boolean;
  confirmedOptions: () => void;
  articles: Article[];
};

function News({ isLoading, confirmedOptions, articles }: Props) {
  let news = <Options confirmedOptions={confirmedOptions} />;

  if (isLoading) {
    news = <Loading />;
  }

  if (articles && articles.length > 0) {
    news = <Tiles articles={articles} />;
  }

  if (articles && articles.length === 0) {
    news = (
      <div>
        <p>뉴스가 없습니다.</p>
      </div>
    );
  }

  return news;
}

export default News;