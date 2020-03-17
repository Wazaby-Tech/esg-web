import React from "react"
import Footer from "../components/footer"

export default ({ children }) => (
    <div style={{ margin: `3rem auto`, maxWidth: 800, padding: `0 1rem` }}>
        <a href="/"><img src="../images/esg_logo.jpeg" /></a>
        <h3>Elevated Solutions Group</h3>
        {children}
        <Footer />
    </div>
)