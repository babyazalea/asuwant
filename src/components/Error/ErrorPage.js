import { Component, Fragment } from "react";
import { NavLink, withRouter } from "react-router-dom";

import styles from "./ErrorPage.module.css";

class ErrorPage extends Component {
  state = {
    rateLimited: false,
  };

  componentDidMount() {
    if (this.props.errorCode === "rateLimited") {
      this.setState({
        rateLimited: true,
      });
    }

    if (this.props.errorCode === null) {
      this.props.history.push("/");
    }
  }

  errorMessage = () => {
    if (this.state.rateLimited) {
      return (
        <Fragment>
          <h1>News API 사용량이 제한되었습니다.</h1>
          <p>
            asuwant는 News API의 Free Tier를 사용하고 있어, 하루 사용량이
            100회의 요청으로 제한되어 있습니다. 일정한 시간이 지난 후(최소 하루)
            다시 시도해주세요.
          </p>
        </Fragment>
      );
    }

    return (
      <Fragment>
        <h1>알 수 없는 오류가 발생했습니다.</h1>
        <p>다시 시도해주세요.</p>
      </Fragment>
    );
  };

  render() {
    return (
      <div className={styles.error}>
        {this.errorMessage()}
        <NavLink to="/" onClick={() => this.props.resetApp()}>
          다시 하기
        </NavLink>
      </div>
    );
  }
}

export default withRouter(ErrorPage);
