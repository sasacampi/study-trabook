import React from "react";
import ReactDOM from 'react-dom';
import Star from '../img/star.png';
import Nav from '../img/Navigation.svg';

export default function TipCard(props) {
    return (
    <div className="card">
       <button class="card-button">Book Now</button>
      <img
        src={require(`../img/${props.coverImg}`)} className="card--image" alt="Card Image"></img>
      <div className="card--container">
      <span className="card--location--city">{props.city}</span>
      <span className="card--location--country">{props.country}</span>
      <span className="card--price">${props.price}</span>

      <div className="card--location--info">
      <img src={Nav} className="img--card--icon" alt="Navigation"></img>
      <span className="card--location">{props.days} Days Trip</span>
        <span className="card--rating">{props.stats.rating}</span>
    </div>
      </div>
      </div>
  );
}
