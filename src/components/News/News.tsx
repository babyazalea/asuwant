import React from "react";
import { useNewsStore } from "../../store/newsStore";

import Loading from "../UI/Loading";
import Tiles from "./Tiles/Tiles";
import Options from "./Options/Options";

type Props = {
  isLoading: boolean;
  confirmedOptions: () => void;
};

function News({ isLoading, confirmedOptions }: Props) {
  const { articles } = useNewsStore();

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
