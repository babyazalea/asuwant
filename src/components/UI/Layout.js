import { Component, Fragment } from "react";

import Header from "./Header";
import Main from "./Main";

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Main isLoading={this.props.isLoading}>{this.props.children}</Main>
      </Fragment>
    );
  }
}

export default Layout;
