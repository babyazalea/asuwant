import { Fragment, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";

import Layout from "./components/UI/Layout";
import Loading from "./components/UI/Loading";
import ErrorPage from "./components/Error/ErrorPage";
import Options from "./components/Options/Options";
import Credits from "./components/Credits/Credits";
import Tiles from "./components/Tiles/Tiles";

import "./App.css";

function App() {
  // state = {
  //   isLoading: false,
  //   errorCode: null,
  //   chosenCountry: null,
  //   chosenCategory: null,
  //   articles: [],
  // };
  const [isLoading, setIsLoading] = useState(false);
  const [errorCode, setErrorCode] = useState(null);
  const [chosenCountry, setChosenCountry] = useState(null);
  const [chosenCategory, setChosenCategory] = useState(null);
  const [articles, setArticles] = useState([]);

  const confirmedOptions = (country, category) => {
    // start loading
    setIsLoading(true);

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
          setArticles(res.data.articles);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        setErrorCode(
          error.response ? error.response.data.code : "Error Occurred"
        );
      });
  };

  const resetApp = () => {
    setIsLoading(false);
    setErrorCode(null);
    setChosenCountry(null);
    setChosenCategory(null);
    setArticles([]);
  };

  const routes = (
    <Routes>
      <Route
        path="/"
        element={
          errorCode !== null ? (
            <Navigate to="/error" />
          ) : chosenCountry && chosenCategory ? (
            <Fragment>
              {isLoading ? (
                <Loading />
              ) : (
                <Fragment>
                  {errorCode == null && <Tiles articles={articles} />}
                </Fragment>
              )}
            </Fragment>
          ) : (
            <Options confirmedOptions={confirmedOptions} />
          )
        }
      ></Route>
      <Route path="/credits" element={<Credits />} />
      <Route
        path="/error"
        element={<ErrorPage errorCode={errorCode} resetApp={resetApp} />}
      />
    </Routes>
  );

  return (
    <div className="App">
      <Layout
        isError={errorCode !== null}
        isLoading={isLoading}
        chosenCountry={chosenCountry}
        chosenCategory={chosenCategory}
        resetApp={resetApp}
      >
        {routes}
      </Layout>
    </div>
  );
}

export default App;
