import React from "react"
import "./Header.css"

const Header = () => {
    return (
        <header>
            <div className="overlay"></div>
            <section className="search">
                <input type="text" placeholder="Search for your favourite book" />
                <span><i className="fas fa-search"></i></span>
            </section>
        </header>
    )
}

export default Header