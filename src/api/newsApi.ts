import axios, { AxiosPromise } from "axios";
import { Article } from "../types/types";

export const fetchNews = (config: {
  params: {
    countryCode: string;
    categoryName: string;
  };
}): Promise<AxiosPromise> => {
  const url = `https://newsapi.org/v2/top-headlines?country=${config.params.countryCode}&category=${config.params.categoryName}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;

  return axios.get(url!, config);
};
