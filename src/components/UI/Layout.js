import { Component, Fragment } from "react";

import Header from "./Header";
import Main from "./Main";

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Header
          isError={this.props.isError}
          isLoading={this.props.isLoading}
          chosenCountry={this.props.chosenCountry}
          chosenCategory={this.props.chosenCategory}
          resetApp={this.props.resetApp}
        />
        <Main
          isError={this.props.isError}
          isLoading={this.props.isLoading}
          choiceIsOver={this.props.chosenCountry && this.props.chosenCategory}
        >
          {this.props.children}
        </Main>
      </Fragment>
    );
  }
}

export default Layout;
