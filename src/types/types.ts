export interface Country {
  name: string;
  "kor-name": string;
  code: string;
}

export interface Category {
  name: string;
  "kor-name": string;
}

export interface Article {
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
}
