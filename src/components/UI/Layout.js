import { Component, Fragment } from "react";
import Header from "./Header";
import Main from "./Main";

// import styles from "./Layout.module.css";

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Main>
          <h1>this is main</h1>
        </Main>
      </Fragment>
    );
  }
}

export default Layout;
