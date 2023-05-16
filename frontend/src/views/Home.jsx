

import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import BasicExample from "../components/navbar-components/NavBar";
import HeroComponent from "../components/hero-components/HeroComponent";

const Home = () => {
  
  return (
    <div>
        <div className="hero">
            <HeroComponent></HeroComponent>
        </div>
    </div>
  );
};

export default Home;
