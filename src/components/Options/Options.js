import { useState } from "react";

import countriesData from "../../assets/countries.json";
import categoriesData from "../../assets/categoies.json";

import styles from "./Options.module.css";

function Options(props) {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const getFlagEmoji = (countryCode) => {
    const codePoints = countryCode
      .toUpperCase()
      .split("")
      .map((char) => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
  };

  const selectedCountryHandler = (countryCode) => {
    setSelectedCountry(countryCode);
  };

  const selectedCategoryHandler = (category) => {
    setSelectedCategory(category);
  };

  const resetCountry = () => {
    setSelectedCountry(null);
  };

  const resetCategory = () => {
    setSelectedCategory(null);
  };

  const countryButtons = (selectedCountry) => {
    if (selectedCountry) {
      const foundCountry = countriesData.countries.find(
        (country) => country.code === selectedCountry.code
      );

      return (
        <button
          className={styles["selected-button"]}
          onClick={() => resetCountry()}
        >
          <span>{getFlagEmoji(foundCountry.code)}</span>
          <span>{foundCountry["kor-name"]}</span>
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

  const categoryButtons = (selectedCategory) => {
    if (selectedCategory) {
      const foundCategory = categoriesData.categories.find(
        (category) => category.name === selectedCategory.name
      );

      return (
        <button
          className={styles["selected-button"]}
          onClick={() => resetCategory()}
        >
          {foundCategory["kor-name"]}
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
        {countryButtons(selectedCountry)}
      </div>
      <hr className={styles.hr} />
      <div
        className={
          selectedCategory
            ? `${styles["category-buttons"]} ${styles.selected}`
            : styles["category-buttons"]
        }
      >
        {categoryButtons(selectedCategory)}
      </div>
      <hr className={styles.hr} />
      <div className={styles["confirm-button"]}>
        <button
          disabled={
            selectedCountry === null || selectedCategory === null ? true : false
          }
          onClick={() =>
            props.confirmedOptions(selectedCountry, selectedCategory)
          }
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
