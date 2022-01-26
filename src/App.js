import { Component } from "react";

import Layout from "./components/UI/Layout";
import Tiles from "./components/Tiles/Tiles";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout news>
          <Tiles />
        </Layout>
      </div>
    );
  }
}

export default App;
