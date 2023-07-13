import React from "react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import "./style.css"
import Card from './components/Card'
import data from "./data";
import CenteredText from "./components/CenteredText";
import VacationPlans from "./components/VacationPlans"
import TravelPackage from "./components/TravelPackage"

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
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
           
            
        </div>
    )

}
