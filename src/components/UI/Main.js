import { Component } from "react";

import styles from "./Main.module.css";

class Main extends Component {
  mainClassName = () => {
    if (this.props.isLoading) {
      return `${styles.main} ${styles.loading}`;
    }

    if (this.props.choiceIsOver) {
      return `${styles.main} ${styles.news}`;
    }

    return styles.main;
  };

  render() {
    return <main className={this.mainClassName()}>{this.props.children}</main>;
  }
}

export default Main;
