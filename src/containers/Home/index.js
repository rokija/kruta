import { connect } from "react-redux";
import Home from "../../components/Home";
import { validateToken } from "../../actions/user";
import { getPosts } from "../../actions/posts";

export default connect(
  state => ({
    loginReducer: state.loginReducer,
    posts: state.posts
  }),
  { validateToken, getPosts }
)(Home);
