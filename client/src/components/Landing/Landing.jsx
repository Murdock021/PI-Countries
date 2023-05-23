import React from "react";
import styled from "./Landing.module.css";
import { Link } from "react-router-dom";


const Landing = () => {
    return(
        <div className={styled.divlanding}>
            <div className={styled.divdescrp}>         
            <p className={styled.pland}></p>
            <Link to="/home">
                <button className={styled.buttonlan1}>Let's Get Started</button>
            </Link>
            </div>
        </div>
    )
}

export default Landing;