import React, { Fragment, ReactNode } from "react";

import Header from "./Header";
import Main from "./Main";

import { Country, Category } from "../../types/types";

type Props = {
  isError: boolean;
  isLoading: boolean;
  chosenCategory: Category;
  chosenCountry: Country;
  resetApp: () => void;
  children: ReactNode;
};

function Layout({
  isError,
  isLoading,
  chosenCategory,
  chosenCountry,
  resetApp,
  children,
}: Props) {
  return (
    <Fragment>
      <Header
        isError={isError}
        isLoading={isLoading}
        chosenCountry={chosenCountry}
        chosenCategory={chosenCategory}
        resetApp={resetApp}
      />
      <Main
        isError={isError}
        isLoading={isLoading}
        choiceIsOver={chosenCountry && chosenCategory ? true : false}
      >
        {children}
      </Main>
    </Fragment>
  );
}

export default Layout;
