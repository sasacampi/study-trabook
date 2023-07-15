import React from "react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import "./style.css"
import Card from './components/Card'
import CenteredText from "./components/CenteredText";
import VacationPlans from "./components/VacationPlans";
import TravelPackage from "./components/TravelPackage";
import TripCard from "./components/TripCard";
import {trips, events} from './data';

export default function App() {
    const cards = trips.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
            />
            
        )
    }) 
    
    const tripcard = events.map(item => {
        return (
            <TripCard
                key={item.id}
                {...item}
            />
            
        )
    })    

    return (
        <div>
            <Navbar />
            <Hero />
            <VacationPlans />
            <CenteredText />
            <section className="cards-list">
                {cards}
            </section>
            <TravelPackage />
            <section className="cards-list">
                {tripcard}
            </section>
           
            
        </div>
    )

}
