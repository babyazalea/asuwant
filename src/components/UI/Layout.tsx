import React, { Fragment, ReactNode } from "react";

import Header from "./Header";
import Main from "./Main";

type Props = {
  isError: boolean;
  isLoading: boolean;
  isCredits: boolean;
  resetApp: null | (() => void);
  children: ReactNode;
};

function Layout({ isError, isLoading, isCredits,resetApp, children }: Props) {
  return (
    <Fragment>
      <Header isError={isError} isLoading={isLoading} resetApp={resetApp} />
      <Main isError={isError} isLoading={isLoading} isCredits={isCredits}>
        {children}
      </Main>
    </Fragment>
  );
}

export default Layout;
