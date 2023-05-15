import React from "react";
import Header_Image from "../Images/header-img.jpg"
import { Link } from "react-router-dom";


const Header = () => {
    return(
        <header>
            <section>
               <div>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes servred with a modern twist.</p>
                    <Link to="/Booking"><button aria-label="On Click">Reserve Table</button></Link>
                </div>
                <div>
                    <img src={Header_Image} />
                </div>
            </section>
        </header>
    )
}

export default Header;