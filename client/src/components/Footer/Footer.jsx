import React from "react";
import styled from "./Footer.module.css"

const Footer = () => {
    return(
        <div className={styled.container}>
            <footer className={styled.containerfoter}>
            <p className={styled.textp}> "Hasta aquí nos ha ayudado el SEÑOR." - 2023  Diogo Machado </p>
            </footer>
        </div>
    )
}

export default Footer;