import { Component, Fragment } from "react";

import Header from "./Header";
import Main from "./Main";

// import styles from "./Layout.module.css";

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Main isNews={this.props.news}>{this.props.children}</Main>
      </Fragment>
    );
  }
}

export default Layout;
