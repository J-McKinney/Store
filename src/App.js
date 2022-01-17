import React, { Component } from "react";

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    user: "",
    rememberMe: false,
  };

  // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);

  componentDidMount() {
    // Local Storage
    const rememberMe = localStorage.getItem("rememberMe") === "true";
    const user = rememberMe ? localStorage.getItem("user") : "";
    // Local Storage
    this.setState({ user, rememberMe });
  }

  handleChange = (event) => {
    const input = event.target;
    const value = input.type === "checkbox" ? input.checked : input.value;
    this.setState({ [input.name]: value });
  };

  handleFormSubmit = () => {
    const { user, rememberMe } = this.state;
    // Local Storage
    localStorage.setItem("rememberMe", rememberMe);
    localStorage.setItem("user", rememberMe ? user : "");
    // Local Storage

    // Session Storage
    sessionStorage.setItem("rememberMe", rememberMe);
    sessionStorage.setItem("user", rememberMe ? user : "");
    // Session Storage
  };

  render() {
    return (
      <>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <form onSubmit={this.handleFormSubmit}>
              <label>
                User:{" "}
                <input
                  name="user"
                  value={this.state.user}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                <input
                  name="rememberMe"
                  checked={this.state.rememberMe}
                  onChange={this.handleChange}
                  type="checkbox"
                />{" "}
                Remember me
              </label>
              <button type="submit">Sign In</button>
            </form>
          </header>
        </div>
      </>
    );
  }
}

export default App;
