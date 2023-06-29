import "./HeroImageStyles.css";
import {Link} from "react-router-dom";

import React from 'react'
import intro_bg from "../assets/intro_bg.jpg"

const HeroImage = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={intro_bg} alt="Intro-Img"/>
        </div>
        <div className="content">
            <p>HI I AM A FREELANCER</p>
            <h1>React Developer</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className=" btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImage;