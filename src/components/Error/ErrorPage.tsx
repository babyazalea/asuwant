import React from "react";

import { Fragment, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import styles from "./ErrorPage.module.css";

type Props = {
  error: string;
  resetApp: () => void;
};

function ErrorPage({ error, resetApp }: Props) {
  const [errorCode, setErrorCode] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (error !== null) {
      setErrorCode(error);
      return;
    }

    navigate("/");
  }, [navigate, errorCode]);

  const errorMessage =
    errorCode === "rateLimited" ? (
      <Fragment>
        <h1>News API 사용량이 제한되었습니다.</h1>
        <p>
          asuwant는 News API의 Free Tier를 사용하고 있어, 하루 사용량이 100회의
          요청으로 제한되어 있습니다. 일정한 시간이 지난 후(최소 하루) 다시
          시도해주세요.
        </p>
      </Fragment>
    ) : (
      <Fragment>
        <h1>알 수 없는 오류가 발생했습니다.</h1>
        <p>다시 시도해주세요.</p>
      </Fragment>
    );

  return (
    <div className={styles.error}>
      {errorMessage}
      <NavLink to="/" onClick={() => resetApp()}>
        다시 하기
      </NavLink>
    </div>
  );
}

export default ErrorPage;
