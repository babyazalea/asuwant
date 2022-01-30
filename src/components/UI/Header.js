import { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo } from "@fortawesome/free-solid-svg-icons";

import styles from "./Header.module.css";

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles["nav-left"]}>
            <div className={styles.logo}>asuwant</div>
            <div className={styles.credits}>_credits</div>
          </div>
          {this.props.chosenCountry && this.props.chosenCategory && (
            <div className={styles["nav-right"]}>
              {!this.props.isLoading && (
                <button
                  className={styles["redo-button"]}
                  onClick={() => this.props.resetApp()}
                >
                  <FontAwesomeIcon icon={faRedo} /> 국가 & 카테고리 재설정
                </button>
              )}
              <div className={styles.options}>
                <span>{`${this.props.chosenCountry["kor-name"]}의 ${
                  this.props.chosenCategory["kor-name"]
                } 뉴스${
                  this.props.isLoading ? " 불러오는 중..." : "를 보고 있습니다."
                }`}</span>
              </div>
            </div>
          )}
        </nav>
      </header>
    );
  }
}

export default Header;
