import { Fragment, useEffect } from "react";

import Header from "./Header";
import Main from "./Main";

function Layout(props) {
  return (
    <Fragment>
      <Header
        isError={props.isError}
        isLoading={props.isLoading}
        chosenCountry={props.chosenCountry}
        chosenCategory={props.chosenCategory}
        resetApp={props.resetApp}
      />
      <Main
        isError={props.isError}
        isLoading={props.isLoading}
        choiceIsOver={props.chosenCountry && props.chosenCategory}
      >
        {props.children}
      </Main>
    </Fragment>
  );
}

export default Layout;
