import React from "react";
import logo from "../../media/image-placeholder.svg";

const PostCard = ({ headline, description }) => (
  <div>
    <img src={logo} style={{ width: "100%" }} />
    <h1>{headline}</h1>
    <span>{description}</span>
  </div>
);

export default PostCard;
