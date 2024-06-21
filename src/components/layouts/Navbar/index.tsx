import React from "react";
const Navbar = () => {
    return (
        <div className="navbar">
            <img className="logo" src="/image/Logo.png" alt="logo" />
            <div className="HomePage">
            <a href="#">
            </a>HomePage</div>
            <div className="About-page">
                <a href="/about"> About Us </a></div>
            <div className="Product">
                <a href="/product"> Products /Services Page </a></div>
            <div className="Teams">
               <a href="/team" >
                Teams Page </a></div>
        </div>
    );
}

export default Navbar