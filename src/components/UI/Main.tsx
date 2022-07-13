import React, { ReactNode } from "react";

import styles from "./Main.module.css";

type Props = {
  isError: boolean;
  isLoading: boolean;
  choiceIsOver: boolean;
  children: ReactNode;
};

function Main({ isLoading, isError, choiceIsOver, children }: Props) {
  let mainClassName = styles.main;

  if (!isLoading && !isError && choiceIsOver) {
    mainClassName = `${styles.main} ${styles.news}`;
  }

  if (!isLoading && !isError && !choiceIsOver) {
    mainClassName = `${styles.main} ${styles.options}`;
  }

  return <main className={mainClassName}>{children}</main>;
}

export default Main;
