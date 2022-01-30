import { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

import styles from "./Header.module.css";

class Header extends Component {
  getFlagEmoji(countryCode) {
    const codePoints = countryCode
      .toUpperCase()
      .split("")
      .map((char) => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
  }

  render() {
    return (
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles["nav-left"]}>
            <div className={styles.logo}>asuwant</div>
            <div className={styles.credits}>
              <span className={styles["credits-text-lg"]}>credits</span>
              <span className={styles["credits-text-sm"]}>
                <FontAwesomeIcon icon={faQuestionCircle} />
              </span>
            </div>
          </div>
          {this.props.chosenCountry && this.props.chosenCategory && (
            <div className={styles["nav-right"]}>
              <div className={styles.options}>
                <span className={styles["options-text-lg"]}>{`${
                  this.props.chosenCountry["kor-name"]
                }의 ${this.props.chosenCategory["kor-name"]} 뉴스${
                  this.props.isLoading ? " 불러오는 중..." : "를 보고 있습니다."
                }`}</span>
                {!this.props.isLoading && (
                  <span className={styles["options-text-sm"]}>
                    <span>
                      {this.getFlagEmoji(this.props.chosenCountry["code"])}
                    </span>
                    <span>{this.props.chosenCategory["kor-name"]}</span>
                  </span>
                )}
              </div>
              {!this.props.isLoading && (
                <button
                  className={styles["reset-button"]}
                  onClick={() => this.props.resetApp()}
                >
                  <FontAwesomeIcon icon={faRedo} />
                  <span className={styles["reset-button-text"]}>
                    국가 & 카테고리 재설정
                  </span>
                </button>
              )}
            </div>
          )}
        </nav>
      </header>
    );
  }
}

export default Header;
