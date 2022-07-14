import axios from "axios";
import { Article } from "../types/types";

export const fetchNews = (config: {
  params: {
    countryCode: string;
    categoryName: string;
  };
}): Promise<Article[]> => {
  console.log("fetching");

  const url = process.env.REACT_APP_BACKEND_URL;

  return axios.get(url!, config).then((res) => {
    return res.data.articles;
  });
};
