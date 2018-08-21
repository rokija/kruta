import React, { Component } from "react";

class Register extends Component {
  state = {
    email: "",
    username: "",
    password: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  handleRegister = e => {
    const { email, password, username } = this.state;
    e.preventDefault();
    this.props.register(email, username, password).then(() => {
      if (this.props.registerReducer.isRegistered) {
        this.props.history.push("/login");
      }
    });
  };

  render() {
    return (
      <div className="container">
        <div className="w-50 mt-5 mx-auto">
          <h2 className="text-center">Register for Instagram app</h2>
          <form>
            <div className="form-group row">
              <label className="col-12 col-form-label">UserName</label>
              <div className="col-12">
                <input
                  type="username"
                  name="username"
                  className="form-control"
                  placeholder="Username"
                  onChange={this.onChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-12 col-form-label">Email</label>
              <div className="col-12">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="email"
                  onChange={this.onChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-12 col-form-label">Password</label>
              <div className="col-12">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="password"
                  onChange={this.onChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-12">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={this.handleRegister}
                >
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
