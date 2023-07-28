import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./style.css";
import ExclusiveDealsCard from "./components/ExclusiveDealsCard";
import ExclusiveDealsText from "./components/ExclusiveDealsText";
import ThingsToDo from "./components/ThingsToDo";
import BestVacationText from "./components/BestVacationText";
import BestVacationCard from "./components/BestVacationCard";
import { trips, events, travel } from "./data";
import LatestBlogText from "./components/LatestBlogText";
import LatestBlogCard from "./components/LatestBlogCard";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";

export default function App() {
  const exclusivedealscard = trips.map((item) => {
    return <ExclusiveDealsCard key={item.id} {...item} />;
  });

  const bestvacationcard = events.map((item) => {
    return <BestVacationCard key={item.id} {...item} />;
  });

  const latestblogcard = travel.map((item) => {
    return <LatestBlogCard key={item.id} {...item} />;
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <ThingsToDo />
      <ExclusiveDealsText />
      <section className="cards-list">{exclusivedealscard}</section>
      <BestVacationText />
      <section className="cards-list">{bestvacationcard}</section>
      <LatestBlogText />
      <section className="cards-list">{latestblogcard}</section>
      <Newsletter />
      <Footer />
    </div>
  );
}
