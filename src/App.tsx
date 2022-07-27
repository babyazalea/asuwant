import React from "react";
import { useNewsStore } from "./store/newsStore";
import { fetchNews } from "./api/newsApi";
import { useQuery } from "react-query";

import Layout from "./components/UI/Layout";
import Loading from "./components/UI/Loading";
import News from "./components/News/News";
import ErrorPage from "./components/Error/ErrorPage";

import { Article } from "./types/types";
import "./App.css";

function App() {
  const {
    selectedCountry,
    setSelectedCountry,
    selectedCategory,
    setSelectedCategory,
  } = useNewsStore();

  const { data, isLoading, isFetching, isError, error, refetch, remove } =
    useQuery<Article[], Error>(
      ["news"],
      async () => {
        const config = {
          params: {
            countryCode: selectedCountry!.code,
            categoryName: selectedCategory!.name,
          },
        };

        try {
          const res = await fetchNews(config);
          const data = await res.data;

          return data.articles;
        } catch (err: any) {
          const errRes = await err.response;

          const errData = await errRes.data;

          throw new Error(errData.code);
        }
      },
      { enabled: false }
    );

  const confirmedOptions = () => {
    refetch();
  };

  const resetApp = () => {
    setSelectedCountry(null);
    setSelectedCategory(null);
    remove();
  };

  return (
    <div className="App">
      <Layout
        isError={isError}
        isLoading={isLoading && isFetching}
        isCredits={false}
        resetApp={resetApp}
      >
        {isLoading && isFetching && <Loading />}
        {!isFetching && !isError && (
          <News confirmedOptions={confirmedOptions} articles={data!} />
        )}
        {!isLoading && isError && (
          <ErrorPage error={error?.message} resetApp={resetApp} />
        )}
      </Layout>
    </div>
  );
}

export default App;
