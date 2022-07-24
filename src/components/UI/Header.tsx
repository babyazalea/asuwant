import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useNewsStore } from "../../store/newsStore";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo, faSpinner } from "@fortawesome/free-solid-svg-icons";

import styles from "./Header.module.css";

type Props = {
  isError: boolean;
  isLoading: boolean;
  resetApp: null | (() => void);
};

function Header({ isError, isLoading, resetApp }: Props) {
  const { selectedCountry, selectedCategory } = useNewsStore();

  const getFlagEmoji = (countryCode: string) => {
    const codePoints = countryCode
      .toUpperCase()
      .split("")
      .map((char) => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  };

  let navRight;

  if (selectedCountry && selectedCategory) {
    navRight = (
      <div className={styles["nav-right"]}>
        <div className={styles.options}>
          <span className={styles["options-text-lg"]}>
            <span>
              {selectedCountry["kor-name"]}의 {selectedCategory["kor-name"]}{" "}
              뉴스
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
                <span>{getFlagEmoji(selectedCountry["code"])}</span>
                <span>{selectedCategory["kor-name"]}</span>
              </Fragment>
            )}
          </span>
        </div>
        {!isLoading && (
          <button
            className={styles["reset-button"]}
            onClick={() => resetApp!()}
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

  const navigate = useNavigate();

  const creditsClickHandler = () => {
    if (resetApp !== null) {
      resetApp();
    }
    navigate("/credits", { replace: true });
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles["nav-left"]}>
          <div className={styles.logo}>
            <Link to="/">asuwant</Link>
          </div>
          <div className={styles.credits} onClick={creditsClickHandler}>
            <span className={styles["credits-text-lg"]}>credits</span>
          </div>
        </div>
        {!isError && navRight}
      </nav>
    </header>
  );
}

export default Header;
