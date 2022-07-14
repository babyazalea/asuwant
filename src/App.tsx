import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useNewsStore } from "./store/newsStore";
import axios from "axios";

import Layout from "./components/UI/Layout";
import News from "./components/News/News";
import Credits from "./components/Credits/Credits";
import ErrorPage from "./components/Error/ErrorPage";

import { Country, Category, Article } from "./types/types";

import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorCode, setErrorCode] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (errorCode) {
      navigate("/error");
    }
  }, [navigate, errorCode]);

  const {
    selectedCountry,
    setSelectedCountry,
    selectedCategory,
    setSelectedCategory,
    articles,
    setArticles,
  } = useNewsStore();

  const confirmedOptions = () => {
    // start loading
    setIsLoading(true);

    const url = process.env.REACT_APP_BACKEND_URL;

    const params = {
      params: {
        countryCode: selectedCountry?.code,
        categoryName: selectedCategory?.name,
      },
    };

    // api call
    axios
      .get(url!, params)
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
    setSelectedCountry(null);
    setSelectedCategory(null);
    setArticles([]);
  };

  const routes = (
    <Routes>
      <Route
        path="/"
        element={
          errorCode === null && (
            <News
              isLoading={isLoading}
              chosenCountry={selectedCountry!}
              chosenCategory={selectedCategory!}
              articles={articles!}
              confirmedOptions={confirmedOptions}
            />
          )
        }
      />
      <Route path="/credits" element={<Credits />} />
      {errorCode !== null && (
        <Route
          path="/error"
          element={<ErrorPage error={errorCode} resetApp={resetApp} />}
        />
      )}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );

  return (
    <div className="App">
      <Layout
        isError={errorCode !== null}
        isLoading={isLoading}
        chosenCountry={selectedCountry!}
        chosenCategory={selectedCategory!}
        resetApp={resetApp}
      >
        {routes}
      </Layout>
    </div>
  );
}

export default App;
