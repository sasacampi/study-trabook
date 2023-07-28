import React from "react";
import ReactDOM from "react-dom";

export default function LatestBlogCard(props) {
  return (
    <div className="updatecard">
      <img
        src={require(`../img/${props.coverImg}`)}
        className="updatecard--image"
        alt="Card Image"
      ></img>
      <div className="updatecard--container">
        <span className="updatecard--title">{props.newsletter}</span>
      </div>
      <div className="updatecard--body">
        <span className="updatecard--date">{props.date}</span>
      </div>
    </div>
  );
}
