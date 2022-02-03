import { useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

import Layout from "./components/UI/Layout";
import News from "./components/News/News";
import Credits from "./components/Credits/Credits";
import ErrorPage from "./components/Error/ErrorPage";

import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorCode, setErrorCode] = useState(null);
  const [chosenCountry, setChosenCountry] = useState(null);
  const [chosenCategory, setChosenCategory] = useState(null);
  const [articles, setArticles] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (errorCode) {
      navigate("/error");
    }
  }, [navigate, errorCode]);

  const confirmedOptions = (country, category) => {
    setChosenCountry(country);
    setChosenCategory(category);

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
          errorCode === null && (
            <News
              isLoading={isLoading}
              chosenCountry={chosenCountry}
              chosenCategory={chosenCategory}
              articles={articles}
              confirmedOptions={confirmedOptions}
            />
          )
        }
      />
      <Route path="/credits" element={<Credits />} />
      {errorCode !== null && (
        <Route
          path="/error"
          element={<ErrorPage errorCode={errorCode} resetApp={resetApp} />}
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
