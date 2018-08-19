import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onLogin = e => {
    const { email, password } = this.state;
    e.preventDefault();
    this.props.login(email, password).then(() => {
      if (this.props.loginReducer.isLogged) {
        this.props.history.push("/");
      }
    });
  };

  render() {
    return (
      <div className="container">
        <div className="w-50 mt-5 mx-auto">
          <h2 className="text-center">Login Instagram app</h2>
          <form>
            <div className="form-group row">
              <label className="col-12 col-form-label">Email</label>
              <div className="col-12">
                <input
                  onChange={this.onChange}
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="email"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-12 col-form-label">Password</label>
              <div className="col-12">
                <input
                  onChange={this.onChange}
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="password"
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-12">
                <button
                  onClick={this.onLogin}
                  type="submit"
                  className="btn btn-primary"
                >
                  Sign in
                </button>
              </div>
            </div>
            <Link
              className="btn btn-link mt-1 col-12 text-muted text-center"
              to="/register"
            >
              New User? Register here
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
