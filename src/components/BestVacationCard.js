import React from "react";
import ReactDOM from "react-dom";
import Star from "../img/star.png";
import Nav from "../img/Navigation.svg";

export default function BestVacationCard(props) {
  return (
    <div className="best--vacation--plans">
      <div className="bvp--container">
        <button class="card-button">Book Now</button>
        <img
          src={require(`../img/${props.coverImg}`)}
          className="bvp--img"
          alt="Card Image"
        ></img>

        <div className="bvp--card--location">
          <span className="card--location--city">{props.city},</span>
          <span className="card--location--country">{props.country}</span>
          <span className="card--price">${props.price}</span>
        </div>
        <div className="bvp--card--info">
          <img src={Nav} className="img--tripcard--icon" alt="Navigation"></img>
          <span className="card--location">{props.days} Days Trip</span>
          <img src={Star} className="card--star" alt="Star"></img>
          <span className="card--rating">{props.stats.rating}</span>
        </div>
      </div>
    </div>
  );
}
