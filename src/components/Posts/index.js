import React, { Component } from "react";
import PostCard from "../PostCard";

class Posts extends Component {
  render() {
    return (
      <div>
        <PostCard headline="YO" description="yooyoyoyoy" />
        <PostCard headline="Hello" description="some text" />
        <PostCard headline="YO" description="yooyoyoyoy" />
        <PostCard headline="Hello" description="some text" />
        <PostCard headline="tyuuututu" description="dsssddsds text" />
      </div>
    );
  }
}

export default Posts;
