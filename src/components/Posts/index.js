import React, { Component } from "react";
import PostCard from "../PostCard";

class Posts extends Component {
  render() {
    const { posts } = this.props;

    if (!posts || !posts.list) {
      return null;
    }

    return (
      <div>
        {posts.list.map(post => (
          <PostCard key={post._id} {...post} />
        ))}
      </div>
    );
  }
}

export default Posts;
