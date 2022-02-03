import { Component, Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";

import Layout from "./components/UI/Layout";
import Loading from "./components/UI/Loading";
import ErrorPage from "./components/Error/ErrorPage";
import Options from "./components/Options/Options";
import Credits from "./components/Credits/Credits";
import Tiles from "./components/Tiles/Tiles";

import "./App.css";

class App extends Component {
  state = {
    isLoading: false,
    errorCode: null,
    chosenCountry: null,
    chosenCategory: null,
    articles: [],
  };

  confirmedOptions = (country, category) => {
    // start loading
    this.setState((prevState) => {
      return {
        ...prevState,
        isLoading: true,
        chosenCountry: country,
        chosenCategory: category,
      };
    });

    const url = process.env.REACT_APP_BACKEND_URL;

    const params = {
      params: {
        countryCode: country.code,
        categoryName: category.name,
      },
    };

    // api call
    axios
      .get(url, params)
      .then((res) => {
        if (res.status === 200) {
          this.setState((prevState) => {
            return {
              ...prevState,
              articles: res.data.articles,
              isLoading: false,
            };
          });
        }
      })
      .catch((error) => {
        this.setState((prevState) => {
          return {
            ...prevState,
            isLoading: false,
            errorCode: error.response
              ? error.response.data.code
              : "Error Occurred",
          };
        });
      });
  };

  resetApp = () => {
    this.setState(() => {
      return {
        isLoading: false,
        errorCode: null,
        chosenCountry: null,
        chosenCategory: null,
        articles: [],
      };
    });
  };

  routes = () => (
    <Switch>
      <Route path="/" exact>
        {this.state.errorCode !== null ? (
          <Redirect to="/error" />
        ) : this.state.chosenCountry && this.state.chosenCategory ? (
          <Fragment>
            {this.state.isLoading ? (
              <Loading />
            ) : (
              <Fragment>
                {this.state.errorCode == null && (
                  <Tiles articles={this.state.articles} />
                )}
              </Fragment>
            )}
          </Fragment>
        ) : (
          <Options confirmedOptions={this.confirmedOptions} />
        )}
      </Route>
      <Route path="/credits">
        <Credits />
      </Route>
      <Route path="/error">
        <ErrorPage errorCode={this.state.errorCode} resetApp={this.resetApp} />
      </Route>
    </Switch>
  );

  componentDidUpdate() {
    if (this.state.errorCode !== null) {
    }
  }

  render() {
    return (
      <div className="App">
        <Layout
          isError={this.state.errorCode !== null}
          isLoading={this.state.isLoading}
          chosenCountry={this.state.chosenCountry}
          chosenCategory={this.state.chosenCategory}
          resetApp={this.resetApp}
        >
          {this.routes()}
        </Layout>
      </div>
    );
  }
}

export default App;
