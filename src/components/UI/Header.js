import { Fragment } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRedo,
  faQuestionCircle,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Header.module.css";

function Header(props) {
  const getFlagEmoji = (countryCode) => {
    const codePoints = countryCode
      .toUpperCase()
      .split("")
      .map((char) => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
  };

  let navRight;

  if (props.chosenCountry && props.chosenCategory) {
    navRight = (
      <div className={styles["nav-right"]}>
        <div className={styles.options}>
          <span className={styles["options-text-lg"]}>
            <span>
              {props.chosenCountry["kor-name"]}의{" "}
              {props.chosenCategory["kor-name"]} 뉴스
              {props.isLoading ? " 불러오는 중..." : "를 보고 있습니다."}
            </span>
          </span>
          <span className={styles["options-text-sm"]}>
            {props.isLoading ? (
              <span>
                <FontAwesomeIcon icon={faSpinner} pulse />
              </span>
            ) : (
              <Fragment>
                <span>{getFlagEmoji(props.chosenCountry["code"])}</span>
                <span>{props.chosenCategory["kor-name"]}</span>
              </Fragment>
            )}
          </span>
        </div>
        {!props.isLoading && (
          <button
            className={styles["reset-button"]}
            onClick={() => props.resetApp()}
          >
            <FontAwesomeIcon icon={faRedo} />
            <span className={styles["reset-button-text"]}>
              국가 & 카테고리 재설정
            </span>
          </button>
        )}
      </div>
    );
  }

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles["nav-left"]}>
          <div className={styles.logo}>
            <Link to="/">asuwant</Link>
          </div>
          <div className={styles.credits}>
            <Link to="/credits">
              <span className={styles["credits-text-lg"]}>credits</span>
              <span className={styles["credits-text-sm"]}>
                <FontAwesomeIcon icon={faQuestionCircle} />
              </span>
            </Link>
          </div>
        </div>
        {!props.isError && navRight}
      </nav>
    </header>
  );
}

export default Header;
