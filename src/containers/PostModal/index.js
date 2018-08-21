import { connect } from "react-redux";
import PostModal from "../../components/PostModal";
import { submitPost } from "../../actions/posts";

export default connect(
  state => ({ posts: state.posts }),
  { submitPost }
)(PostModal);
