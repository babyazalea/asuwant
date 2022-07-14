import create from "zustand";

import { Country, Category, Article } from "../types/types";

interface NewsTypes {
  selectedCountry: Country | null;
  setSelectedCountry: (country: Country | null) => void;
  selectedCategory: Category | null;
  setSelectedCategory: (category: Category | null) => void;
  articles: Article[] | null;
  setArticles: (articles: Article[]) => void;
}

export const useNewsStore = create<NewsTypes>((set) => ({
  selectedCountry: null,
  setSelectedCountry: (country) => {
    set(() => ({ selectedCountry: country }));
  },
  selectedCategory: null,
  setSelectedCategory: (category) => {
    set(() => ({
      selectedCategory: category,
    }));
  },
  articles: null,
  setArticles: (articles) => {
    set(() => ({
      articles,
    }));
  },
}));
