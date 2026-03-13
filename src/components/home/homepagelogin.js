import { Component } from "react";

import Login from "../login/loginpage";

import Logout from "../logout/logoutpage";

import Message from "../message/messpage";

import "./homepagelogin.css";

class Home extends Component {
  state = {
    isLoggedIn: false,
  };

  onClickLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  onClickLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const { isLoggedIn } = this.state;

    return (
      <div className="app-container">
        <div className="card">
          <Message isLoggedIn={isLoggedIn} />

          {isLoggedIn ? (
            <Logout onClickLogout={this.onClickLogout} />
          ) : (
            <Login onClickLogin={this.onClickLogin} />
          )}
        </div>
      </div>
    );
  }
}

export default Home;
