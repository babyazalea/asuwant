import { Component } from "react";

import styles from "./Header.module.css";

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className="logo">PIONEER</div>
          <div className="options">
            <span>...options</span>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
