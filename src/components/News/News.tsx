import React from "react";

import Loading from "../UI/Loading";
import Tiles from "./Tiles/Tiles";
import Options from "./Options/Options";

import { Category, Country, Article } from "../../types/types";

type Props = {
  isLoading: boolean;
  chosenCountry: Country;
  chosenCategory: Category;
  confirmedOptions: (country: Country, category: Category) => void;
  articles: Article[];
};

function News({ isLoading, confirmedOptions, articles }: Props) {
  let news = <Options confirmedOptions={confirmedOptions} />;

  if (isLoading) {
    news = <Loading />;
  }

  if (articles.length > 0) {
    news = <Tiles articles={articles} />;
  }

  return news;
}

export default News;
