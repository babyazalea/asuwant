import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

import styles from "./Credits.module.css";
import Layout from "../UI/Layout";

function Credits() {
  return (
    <Layout isError={false} isLoading={false} isCredits={true} resetApp={null}>
      <div className={styles.credits}>
        <div className={styles["credits-wrapper"]}>
          <div>
            <p>
              뉴스 데이터의 출처는 <a href="https://newsapi.org/">News API</a>,
              로딩 페이지 일러스트레이션은{" "}
              <a href="https://sophieharristaylor.com/">Sophie Harris Taylor</a>
              의 사진에서 영감을 받았습니다.
            </p>
            <p>
              <a
                href="https://github.com/tyange/asuwant-frontend"
                className={styles["github-link"]}
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </p>
            <p className={styles.copyright}>
              <span>
                <FontAwesomeIcon icon={faCopyright} />
                <a href="https://github.com/tyange">tyange</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Credits;
