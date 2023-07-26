import React from "react";
import ReactDOM from "react-dom";
import Tree from "../img/tree.png";

export default function TravelPackage() {
  return (
    <div className="centered-text">
      <div className="container">
        <div className="container-title">
          <h1>
            Best <span>vacation plan</span>
          </h1>
          <p>
            Plan your perfect vacation with our travel agency. Choose among
            hundreds of all-inclusive offers!{" "}
          </p>
        </div>
        <div className="container-title-img">
          <img
            src={Tree}
            className="vacation--plans--tree"
            alt="Tree Img"
          ></img>
        </div>
      </div>
    </div>
  );
}
