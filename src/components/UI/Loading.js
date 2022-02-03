import styles from "./Loading.module.css";
import expandingCircle from "../../assets/the_expanding_circle.png";

function Loading() {
  return (
    <div className={styles.loading}>
      <img
        src={expandingCircle}
        className={styles["expanding-circle"]}
        alt="확장하는 원"
      />
    </div>
  );
}

export default Loading;
