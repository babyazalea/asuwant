import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRedo,
  faQuestionCircle,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

import { Country, Category } from "../../types/types";

import styles from "./Header.module.css";

type Props = {
  isError: boolean;
  isLoading: boolean;
  chosenCountry: Country;
  chosenCategory: Category;
  resetApp: () => void;
};

function Header({
  isError,
  isLoading,
  chosenCategory,
  chosenCountry,
  resetApp,
}: Props) {
  const getFlagEmoji = (countryCode: string) => {
    const codePoints = countryCode
      .toUpperCase()
      .split("")
      .map((char) => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  };

  let navRight;

  if (chosenCountry && chosenCategory) {
    navRight = (
      <div className={styles["nav-right"]}>
        <div className={styles.options}>
          <span className={styles["options-text-lg"]}>
            <span>
              {chosenCountry["kor-name"]}의 {chosenCategory["kor-name"]} 뉴스
              {isLoading ? " 불러오는 중..." : "를 보고 있습니다."}
            </span>
          </span>
          <span className={styles["options-text-sm"]}>
            {isLoading ? (
              <span>
                <FontAwesomeIcon icon={faSpinner} pulse />
              </span>
            ) : (
              <Fragment>
                <span>{getFlagEmoji(chosenCountry["code"])}</span>
                <span>{chosenCategory["kor-name"]}</span>
              </Fragment>
            )}
          </span>
        </div>
        {!isLoading && (
          <button className={styles["reset-button"]} onClick={() => resetApp()}>
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
        {!isError && navRight}
      </nav>
    </header>
  );
}

export default Header;
