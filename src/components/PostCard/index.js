import React from "react";
import logo from "../../media/image-placeholder.svg";

const PostCard = ({ title, createdAt, media }) => (
  <div>
    <img src={media.path} style={{ width: "100%" }} />
    <h1>{title}</h1>
    <span>{createdAt}</span>
  </div>
);

export default PostCard;
