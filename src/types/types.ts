export type Country = {
  name: string;
  "kor-name": string;
  code: string;
};

export type Category = {
  name: string;
  "kor-name": string;
};

export type Article = {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};
