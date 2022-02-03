import Loading from "../UI/Loading";
import Tiles from "./Tiles/Tiles";
import Options from "./Options/Options";

function News(props) {
  let news = <Options confirmedOptions={props.confirmedOptions} />;

  if (props.isLoading) {
    news = <Loading />;
  }

  if (props.articles.length > 0) {
    news = <Tiles articles={props.articles} />;
  }

  return news;
}
export default News;
