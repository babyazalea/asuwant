import { Component } from "react";

import countriesData from "../../assets/countries.json";
import categoriesData from "../../assets/categoies.json";

import styles from "./Options.module.css";

class Options extends Component {
  getFlagEmoji(countryCode) {
    const codePoints = countryCode
      .toUpperCase()
      .split("")
      .map((char) => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
  }

  render() {
    return (
      <div className={styles.options}>
        <div className={styles["country-buttons"]}>
          {countriesData.countries.map((country) => (
            <button
              key={country.name}
              onClick={() => this.props.selectCountry(country.name)}
            >
              <span>{country["kor-name"]}</span>
              <span>{this.getFlagEmoji(country.code)}</span>
            </button>
          ))}
        </div>
        <div className={styles["category-buttons"]}>
          {categoriesData.categories.map((category) => (
            <button
              key={category.name}
              onClick={() => this.props.selectCategory(category.name)}
            >
              {category["kor-name"]}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default Options;
