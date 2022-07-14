import React, { Fragment, ReactNode } from "react";

import Header from "./Header";
import Main from "./Main";

type Props = {
  isError: boolean;
  isLoading: boolean;
  resetApp: () => void;
  children: ReactNode;
};

function Layout({ isError, isLoading, resetApp, children }: Props) {
  return (
    <Fragment>
      <Header isError={isError} isLoading={isLoading} resetApp={resetApp} />
      <Main isError={isError} isLoading={isLoading}>
        {children}
      </Main>
    </Fragment>
  );
}

export default Layout;
