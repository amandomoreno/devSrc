import React, { Component } from "react";
import { Link } from "react-router-dom";
import authService from "../../services/authService";
import "./Login.css";

class LoginPage extends Component {
  state = {
    email: "",
    pw: "",
    message: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    const { history, handleSignupOrLogin } = this.props;
    e.preventDefault();
    try {
      await authService.login(this.state);
      handleSignupOrLogin();
      history.push("/");
    } catch (err) {
      this.updateMessage(err.message);
    }
  };

  updateMessage = (msg) => {
    this.setState({ message: msg });
  };

  render() {
    const { email, pw } = this.state;
    return (
      <main id="Login" className="row">
        <div>
          <h3>Log In</h3>
        </div>
        <form
          className="col s12"
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <input
            className="active"
            type="text"
            autoComplete="off"
            id="email"
            value={email}
            name="email"
            onChange={this.handleChange}
          />
          <label className="card-text" htmlFor="email">
            Email
          </label>
          <input
            className="active"
            type="password"
            autoComplete="off"
            id="password"
            value={pw}
            name="pw"
            onChange={this.handleChange}
          />
          <label className="card-text" htmlFor="password">
            Password
          </label>
          <button
            type="submit"
            className="btn"
          >
            Log In
          </button>
          &nbsp;&nbsp;&nbsp;
          <Link className="btn red lighten-2" to="/">
            Cancel
          </Link>
        </form>
        <p>{this.state.message}</p>
      </main>
    );
  }
}

export default LoginPage;