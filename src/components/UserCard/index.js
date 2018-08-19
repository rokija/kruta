import React from "react";
import logo from "../../media/image-placeholder.svg";
import "./index.css";

const UserCard = () => (
  <div className="user-wrapper">
    <div className="row">
      <div className="col-md-2">
        <img className="user-image" src={logo} />
      </div>
      <div className="col-md-10">
        <div className="user-heading">Name</div>
        <div className="user-description">Desc</div>
      </div>
    </div>
  </div>
);

export default UserCard;
