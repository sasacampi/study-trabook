import React from "react";
import ReactDOM from 'react-dom';
import Star from '../img/star.png';
import Nav from '../img/Navigation.svg';

export default function TripCard(props) {
    return (
    <div className="tripcard">
       <button class="card-button">Book Now</button>
      <img
        src={require(`../img/${props.coverImg}`)} className="tripcard--image" alt="Card Image"></img>
      <div className="tripcard--container">
      <span className="card--location--city">{props.city},</span>
      <span className="card--location--country">{props.country}</span>
      <span className="card--price">${props.price}</span>
      </div>
      <div className="card--location--info">
      <img src={Nav} className="img--tripcard--icon" alt="Navigation"></img>
      <span className="card--location">{props.days} Days Trip</span>
      <img src={Star} className="card--star" alt="Star"></img>
        <span className="card--rating">{props.stats.rating}</span>
    </div>
      </div>
  );
}
