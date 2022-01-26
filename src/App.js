import { Component } from "react";

import Layout from "./components/UI/Layout";
import Tiles from "./components/Tiles/Tiles";

import "./App.css";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sayHi: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/api")
      .then((res) => {
        this.setState({
          sayHi: res.data.message,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <Layout news>
          <Tiles />
          <span>{this.state.sayHi}</span>
        </Layout>
      </div>
    );
  }
}

export default App;
