import React, { Component } from "react";
import Posts from "../Posts";
import UserList from "../UserList";
import Header from "../Header";
import PostModal from "../PostModal";
import "./index.css";

class Home extends Component {
  constructor(props) {
    super(props);
    props.validateToken();

    this.state = {
      isModalOpen: false
    };
  }

  onModalOpen = () => this.setState({ isModalOpen: true });

  onModalClose = () => this.setState({ isModalOpen: false });

  // componentWillMount() {
  //   this.props.validateToken();
  // }

  // componentWillReceiveProps(nextProps) {
  //   const { loginReducer } = nextProps;
  //   if (loginReducer.isLogged) {
  //     return;
  //   }
  //   this.props.history.push("/login");
  // }

  static getDerivedStateFromProps(props) {
    const { loginReducer } = props;

    if (Object.keys(loginReducer).length && !loginReducer.isLogged) {
      props.history.push("/login");
    }
    return null;
  }

  render() {
    const { isModalOpen } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Header onModalOpen={this.onModalOpen} />
          </div>
          <div className="col-md-8">
            <Posts />
          </div>
          <div className="col-md-4">
            <UserList />
          </div>
        </div>
        {isModalOpen && <PostModal onModalClose={this.onModalClose} />}
      </div>
    );
  }
}

export default Home;
