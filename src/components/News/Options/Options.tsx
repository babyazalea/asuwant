import React from "react";
import { useNewsStore } from "../../../store/newsStore";

import countriesData from "../../../assets/countries.json";
import categoriesData from "../../../assets/categoies.json";

import styles from "./Options.module.css";

import { Country, Category } from "../../../types/types";

type Props = {
  confirmedOptions: (country: Country, category: Category) => void;
};

function Options({ confirmedOptions }: Props) {
  const {
    selectedCountry,
    setSelectedCountry,
    selectedCategory,
    setSelectedCategory,
  } = useNewsStore();

  const getFlagEmoji = (countryCode: string) => {
    const codePoints = countryCode
      .toUpperCase()
      .split("")
      .map((char) => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  };

  const selectedCountryHandler = (countryCode: Country) => {
    setSelectedCountry(countryCode);
  };

  const selectedCategoryHandler = (category: Category) => {
    setSelectedCategory(category);
  };

  const resetCountry = () => {
    setSelectedCountry(null);
  };

  const resetCategory = () => {
    setSelectedCategory(null);
  };

  const countryButtons = (selectedCountry: Country) => {
    if (selectedCountry) {
      const foundCountry = countriesData.countries.find(
        (country) => country.code === selectedCountry.code
      );

      return (
        <button
          className={styles["selected-button"]}
          onClick={() => resetCountry()}
        >
          <span>{getFlagEmoji(foundCountry!.code)}</span>
          <span>{foundCountry!["kor-name"]}</span>
        </button>
      );
    } else {
      return countriesData.countries.map((country) => (
        <button
          key={country.name}
          onClick={() => selectedCountryHandler(country)}
        >
          <span>{getFlagEmoji(country.code)}</span>
          <span>{country["kor-name"]}</span>
        </button>
      ));
    }
  };

  const categoryButtons = (selectedCategory: Category) => {
    if (selectedCategory) {
      const foundCategory = categoriesData.categories.find(
        (category) => category.name === selectedCategory.name
      );

      return (
        <button
          className={styles["selected-button"]}
          onClick={() => resetCategory()}
        >
          {foundCategory!["kor-name"]}
        </button>
      );
    } else {
      return categoriesData.categories.map((category) => (
        <button
          key={category.name}
          onClick={() => selectedCategoryHandler(category)}
        >
          {category["kor-name"]}
        </button>
      ));
    }
  };

  const confirmButtonText =
    selectedCountry === null || selectedCategory === null
      ? "국가와 분류를 선택해주세요"
      : `${selectedCountry["kor-name"]}의 ${selectedCategory["kor-name"]} 뉴스 골라서 보기`;

  return (
    <div className={styles.options}>
      <div
        className={
          selectedCountry
            ? `${styles["country-buttons"]} ${styles.selected}`
            : styles["country-buttons"]
        }
      >
        {countryButtons(selectedCountry!)}
      </div>
      <hr className={styles.hr} />
      <div
        className={
          selectedCategory
            ? `${styles["category-buttons"]} ${styles.selected}`
            : styles["category-buttons"]
        }
      >
        {categoryButtons(selectedCategory!)}
      </div>
      <hr className={styles.hr} />
      <div className={styles["confirm-button"]}>
        <button
          disabled={
            selectedCountry === null || selectedCategory === null ? true : false
          }
          onClick={() => confirmedOptions(selectedCountry!, selectedCategory!)}
          className={
            selectedCountry !== null && selectedCategory !== null
              ? styles.active
              : ""
          }
        >
          {confirmButtonText}
        </button>
      </div>
    </div>
  );
}

export default Options;
