import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.css"
import logo from "../images/esg_logo.jpeg"

export default () =>
(
    <div id="header" className={headerStyles.header}>
        <Link to="/"><img src={logo} className={headerStyles.logo} alt="Elevated Solutions Group" /></Link>
        <div id="navigation" className={headerStyles.links}>
            <Link to="/howitworks">How It Works</Link>&nbsp;|&nbsp;
            <Link to="/service">Service Areas</Link>&nbsp;|&nbsp;
            <Link to="/team">Team</Link>&nbsp;|&nbsp;
            <Link to="/contact">Contact</Link>
        </div>
        <div className={headerStyles.clear} />
    </div>
)