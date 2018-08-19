import React, { Component } from "react";

class Register extends Component {
  render() {
    return (
      <div className="container">
        <div className="w-50 mt-5 mx-auto">
          <h2 className="text-center">Register for Instagram app</h2>
          <form>
            <div className="form-group row">
              <label
                for="registerUserNameInput"
                className="col-12 col-form-label"
              >
                UserName
              </label>
              <div className="col-12">
                <input
                  type="username"
                  className="form-control"
                  placeholder="Username"
                  id="registerUserNameInput"
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="registerEmailInput" className="col-12 col-form-label">
                Email
              </label>
              <div className="col-12">
                <input
                  type="email"
                  className="form-control"
                  placeholder="email"
                  id="registerEmailInput"
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                for="registerPasswordInput"
                className="col-12 col-form-label"
              >
                Password
              </label>
              <div className="col-12">
                <input
                  type="password"
                  className="form-control"
                  placeholder="password"
                  id="registerPasswordInput"
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-12">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
