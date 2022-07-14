import React, { useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useNewsStore } from "./store/newsStore";
import { fetchNews } from "./api/newsApi";
import { useQuery } from "react-query";

import Layout from "./components/UI/Layout";
import News from "./components/News/News";
import Credits from "./components/Credits/Credits";
import ErrorPage from "./components/Error/ErrorPage";

import "./App.css";
import { Article } from "./types/types";

function App() {
  const navigate = useNavigate();

  const {
    selectedCountry,
    setSelectedCountry,
    selectedCategory,
    setSelectedCategory,
  } = useNewsStore();

  const { data, isLoading, isFetching, isError, error, refetch, remove } =
    useQuery<Article[], Error>(
      ["news"],
      () => {
        const config = {
          params: {
            countryCode: selectedCountry!.code,
            categoryName: selectedCategory!.name,
          },
        };

        return fetchNews(config!);
      },
      { enabled: false }
    );

  useEffect(() => {
    if (error) {
      navigate("/error");
    }
  }, [navigate, error]);

  const confirmedOptions = () => {
    refetch();
  };

  const resetApp = () => {
    setSelectedCountry(null);
    setSelectedCategory(null);
    remove();
  };

  const routes = (
    <Routes>
      <Route
        path="/"
        element={
          !isError && (
            <News
              isLoading={isLoading && isFetching}
              confirmedOptions={confirmedOptions}
              articles={data!}
            />
          )
        }
      />
      <Route path="/credits" element={<Credits />} />
      {isError && (
        <Route
          path="/error"
          element={<ErrorPage error={error?.message} resetApp={resetApp} />}
        />
      )}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );

  return (
    <div className="App">
      <Layout
        isError={isError}
        isLoading={isLoading && isFetching}
        resetApp={resetApp}
      >
        {routes}
      </Layout>
    </div>
  );
}

export default App;
