import { Component } from "react";
// import axios from "axios";

import Tile from "./Tile/Tile";

import styles from "./Tiles.module.css";

class Tiles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [
        {
          source: {
            id: "bbc-news",
            name: "BBC News",
          },
          author: "BBC News",
          title: "test article1",
          description: "test description1",
          url: "http://www.bbc.co.uk/news/uk-politics-60135309",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_news/4C5E/production/_123005591_gettyimages-1366804875.jpg",
          publishedAt: "2022-01-26T03:52:22.8398284Z",
          content: "test content",
        },
        {
          source: {
            id: "bbc-news",
            name: "BBC News",
          },
          author: "BBC News",
          title: "test article2",
          description: "test description2",
          url: "http://www.bbc.co.uk/news/uk-politics-60135309",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_news/4C5E/production/_123005591_gettyimages-1366804875.jpg",
          publishedAt: "2022-01-26T03:52:22.8398284Z",
          content: "test content",
        },
        {
          source: {
            id: "bbc-news",
            name: "BBC News",
          },
          author: "BBC News",
          title: "test article3",
          description: "test description3",
          url: "http://www.bbc.co.uk/news/uk-politics-60135309",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_news/4C5E/production/_123005591_gettyimages-1366804875.jpg",
          publishedAt: "2022-01-26T03:52:22.8398284Z",
          content: "test content",
        },
        {
          source: {
            id: "bbc-news",
            name: "BBC News",
          },
          author: "BBC News",
          title: "test article4",
          description: "test description4",
          url: "http://www.bbc.co.uk/news/uk-politics-60135309",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_news/4C5E/production/_123005591_gettyimages-1366804875.jpg",
          publishedAt: "2022-01-26T03:52:22.8398284Z",
          content: "test content",
        },
        {
          source: {
            id: "bbc-news",
            name: "BBC News",
          },
          author: "BBC News",
          title: "test article5",
          description: "test description5",
          url: "http://www.bbc.co.uk/news/uk-politics-60135309",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_news/4C5E/production/_123005591_gettyimages-1366804875.jpg",
          publishedAt: "2022-01-26T03:52:22.8398284Z",
          content: "test content",
        },
      ],
    };
  }

  componentDidMount() {
    // api call
    // axios
    //   .get("http://localhost:3001/api/news")
    //   .then((res) => {
    //     this.setState({
    //       articles: res.data.articles,
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }

  render() {
    return (
      <div className={styles.tiles}>
        {this.state.articles.map((article, index) => (
          <Tile key={index} article={article} />
        ))}
      </div>
    );
  }
}

export default Tiles;
