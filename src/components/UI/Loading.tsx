import React from "react";

import expandingCircle from "../../assets/the_expanding_circle.png";

import styles from "./Loading.module.css";

function Loading() {
  return (
    <div className={styles["loading-wrapper"]}>
      <div className={styles.loading}>
        <img
          src={expandingCircle}
          className={styles["expanding-circle"]}
          alt="확장하는 원"
        />
      </div>
    </div>
  );
}

export default Loading;
