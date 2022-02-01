import { Component } from "react";

import styles from "./Main.module.css";

class Main extends Component {
  mainClassName = () => {
    if (this.props.isLoading) {
      return `${styles.main} ${styles.loading}`;
    } else if (this.props.choiceIsOver) {
      return `${styles.main} ${styles.news}`;
    } else {
      return styles.main;
    }
  };

  render() {
    return <main className={this.mainClassName()}>{this.props.children}</main>;
  }
}

export default Main;
