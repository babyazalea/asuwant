import { Component, Fragment } from "react";
import axios from "axios";

import Layout from "./components/UI/Layout";
import Loading from "./components/UI/Loading";
import Tiles from "./components/Tiles/Tiles";
import Options from "./components/Options/Options";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Credits from "./components/Credits/Credits";

class App extends Component {
  state = {
    isLoading: false,
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

    // api call
    axios
      .get(url, {
        params: {
          countryCode: country.code,
          categoryName: category.name,
        },
      })
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
      .catch((err) => {
        console.log(err);
      });
  };

  resetApp = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        isLoading: false,
        chosenCountry: null,
        chosenCategory: null,
      };
    });
  };

  routes = () => (
    <Routes>
      <Route
        path="/"
        element={
          this.state.chosenCountry && this.state.chosenCategory ? (
            <Fragment>
              {this.state.isLoading ? (
                <Loading />
              ) : (
                <Tiles articles={this.state.articles} />
              )}
            </Fragment>
          ) : (
            <Options confirmedOptions={this.confirmedOptions} />
          )
        }
      />
      <Route path="/credits" element={<Credits />} />
    </Routes>
  );

  render() {
    return (
      <div className="App">
        <Layout
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
