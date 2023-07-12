import React from "react";
import ReactDOM from 'react-dom';
import Star from '../img/star.png';
import Location from '../img/location.svg'

export default function Card(props) {
    return (
    <div className="card">
       <button class="card-button">Book Now</button>
      <img
        src={require(`../img/${props.coverImg}`)} className="card--image" alt="Card Image"></img>
      <div className="card--container">
        <span className="card--title">{props.title}</span>
        <img src={Star} className="card--star" alt="Star"></img>
        <span className="card--rating">{props.stats.rating}</span>
        </div>
      
      <div className="card--location--pricing">
        <img src={Location} className="img--card--location" alt="Location"></img>
        <span className="card--location">{props.location}</span>
        <span className="card--old--pricing">${props.oldPrice}</span>
        <span className="card--new--pricing">${props.newPrice}</span>
      </div>
      </div>
  );
}

