import React from "react";
import main_logo from "../Images/logo-main.png"
import { Link } from "react-router-dom";

const Nav = () => {
    return(
        <nav>
            <section>
                <img src={main_logo} alt="Little Lemon Logo" role="presentation"></img>
            </section>
            <section>
                <ul>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Menu</a></li>
                    <li><Link to="/Booking" style={{ textDecoration: 'none' }}>Reservations</Link></li>
                    <li><a>Order Online</a></li>
                    <li><a>Login</a></li>
                </ul>
            </section>
        </nav>
    )
}

export default Nav;