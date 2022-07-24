import React, { ReactNode } from "react";

import styles from "./Main.module.css";
import { useNewsStore } from "../../store/newsStore";

type Props = {
  isError: boolean;
  isLoading: boolean;
  isCredits: boolean;
  children: ReactNode;
};

function Main({ isLoading, isError, isCredits, children }: Props) {
  const { selectedCountry, selectedCategory } = useNewsStore();

  let mainClassName = styles.main;

  if (!isLoading && !isError && selectedCountry && selectedCategory) {
    mainClassName = `${styles.main} ${styles.news}`;
  }

  if (!isLoading && !isError && !selectedCountry && !selectedCategory) {
    mainClassName = `${styles.main} ${styles.options}`;
  }

  if (isLoading) {
    mainClassName = `${styles.main} ${styles.loading}`;
  }

  if (!isLoading && isError) {
    mainClassName = `${styles.main} ${styles.error}`;
  }

  if (isCredits) {
    mainClassName = `${styles.main} ${styles.credits}`;
  }

  return <main className={mainClassName}>{children}</main>;
}

export default Main;
