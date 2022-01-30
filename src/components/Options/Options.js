import { Component } from "react";

import countriesData from "../../assets/countries.json";
import categoriesData from "../../assets/categoies.json";

import styles from "./Options.module.css";

class Options extends Component {
  state = {
    selectedCountry: null,
    selectedCategory: null,
  };

  getFlagEmoji(countryCode) {
    const codePoints = countryCode
      .toUpperCase()
      .split("")
      .map((char) => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
  }

  selectedCountryHandler = (countryCode) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        selectedCountry: countryCode,
      };
    });
  };

  selectedCategoryHandler = (category) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        selectedCategory: category,
      };
    });
  };

  resetCountry = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        selectedCountry: null,
      };
    });
  };

  resetCategory = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        selectedCategory: null,
      };
    });
  };

  testConfirm = () => {
    console.log(this.state);
  };

  countryButtons = (selectedCountry) => {
    if (selectedCountry) {
      const foundCountry = countriesData.countries.find(
        (country) => country.code === selectedCountry.code
      );

      return (
        <button onClick={() => this.resetCountry()}>
          <span>{this.getFlagEmoji(foundCountry.code)}</span>
          <span>{foundCountry["kor-name"]}</span>
        </button>
      );
    } else {
      return countriesData.countries.map((country) => (
        <button
          key={country.name}
          onClick={() => this.selectedCountryHandler(country)}
        >
          <span>{this.getFlagEmoji(country.code)}</span>
          <span>{country["kor-name"]}</span>
        </button>
      ));
    }
  };

  categoryButtons = (selectedCategory) => {
    if (selectedCategory) {
      const foundCategory = categoriesData.categories.find(
        (category) => category.name === selectedCategory.name
      );

      return (
        <button onClick={() => this.resetCategory()}>
          {foundCategory["kor-name"]}
        </button>
      );
    } else {
      return categoriesData.categories.map((category) => (
        <button
          key={category.name}
          onClick={() => this.selectedCategoryHandler(category)}
        >
          {category["kor-name"]}
        </button>
      ));
    }
  };

  render() {
    return (
      <div className={styles.options}>
        <div className={styles["country-buttons"]}>
          {this.countryButtons(this.state.selectedCountry)}
        </div>
        <hr className={styles.hr} />
        <div className={styles["category-buttons"]}>
          {this.categoryButtons(this.state.selectedCategory)}
        </div>
        <hr className={styles.hr} />
        <div className={styles["confirm-button"]}>
          <button
            disabled={
              this.state.selectedCountry === null ||
              this.state.selectedCategory === null
                ? true
                : false
            }
            onClick={this.testConfirm}
            className={
              this.state.selectedCountry !== null &&
              this.state.selectedCategory !== null &&
              styles.active
            }
          >
            {this.state.selectedCountry === null ||
            this.state.selectedCategory === null
              ? "국가와 분류를 선택해주세요"
              : `${this.state.selectedCountry["kor-name"]}의 ${this.state.selectedCategory["kor-name"]} 뉴스 골라서 보기`}
          </button>
        </div>
      </div>
    );
  }
}

export default Options;