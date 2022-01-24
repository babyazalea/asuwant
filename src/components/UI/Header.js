import { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <div className="logo">PIONEER</div>
          <div className="slider">
            <input type="range" />
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
