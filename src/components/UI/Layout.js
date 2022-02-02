import { Component, Fragment } from "react";

import Header from "./Header";
import Main from "./Main";

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Header
          isLoading={this.props.isLoading}
          chosenCountry={this.props.chosenCountry}
          chosenCategory={this.props.chosenCategory}
          resetApp={this.props.resetApp}
        />
        <Main
          choiceIsOver={this.props.chosenCountry && this.props.chosenCategory}
          isLoading={this.props.isLoading}
        >
          {this.props.children}
        </Main>
      </Fragment>
    );
  }
}

export default Layout;