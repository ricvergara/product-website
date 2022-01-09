import React from "react";
import '../App.css'
import { Button } from "./Button";
import './HeroSection.css'
import  Video1 from "../components/media/videos/video-1.mp4";

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src={Video1} autoPlay loop muted/>
            <h1>ADVENTURES AWAITS</h1>
            <p>What are you waiting for?</p>

            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>WATCH TRAILER <i className="fas fa-play-circle"></i></Button>
            </div>
        </div>
    )
}

export default HeroSection;