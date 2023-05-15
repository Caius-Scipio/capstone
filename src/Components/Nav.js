import React from "react";
import main_logo from "../Images/logo-main.png"

const Nav = () => {
    return(
        <nav>
            <section>
                <img src={main_logo} alt="Little Lemon Logo" ></img>
            </section>
            <section>
                <ul>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Menu</a></li>
                    <li><a>Reservations</a></li>
                    <li><a>Order Online</a></li>
                    <li><a>Login</a></li>
                </ul>
            </section>
        </nav>
    )
}

export default Nav;