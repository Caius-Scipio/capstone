import React from "react";
import Header_Image from "../Images/header-img.jpg"
import { Link } from "react-router-dom";
import bruschetta from "../Images/bruschetta.jpg"
import saladgreek from "../Images/salad-greek.jpg"
import lemondessert from "../Images/lemon dessert.jpg"

const Header = () => {
    return(
        <>
        <header>
            <section>
               <div>
                    <h2 aria-level="1">Little Lemon</h2>
                    <h3 aria-level="2">Chicago</h3>
                    <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes servred with a modern twist.</p>
                    <Link to="/Booking"><button aria-label="button">Reserve a Table</button></Link>
                </div>
                <div>
                    <img src={Header_Image} alt="serving bruschetta" />
                </div>
            </section>
        </header>
        <div class="main__header">
        <h1>This Week's Specials!</h1>
        <p><button>Order Online</button></p>
      </div>
      <div class="container">
        <div class="card">
          <img src={ saladgreek } alt="greek salad" />
          <section class="product">
            <h2>Greek Salad</h2>
            <p class="price">$12.99</p>
          </section>
          <p>The famous Greek salad of crispy lettuce, peppers, olives, and out Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
          <p><button>Order Online</button></p>
        </div>
        <div class="card">
          <img src={ bruschetta } alt="bruschetta" />
          <section class="product">
            <h2>Bruschetta</h2>
            <p class="price">$5.99</p>
          </section>
          <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olice oil.</p>
          <p><button>Order Online</button></p>
        </div>
        <div class="card">
          <img src={ lemondessert } alt="lemon dessert" />
          <section class="product">
            <h2>Lemmon Dessert</h2>
            <p class="price">$5.00</p>
          </section>
          <p>This comes straight from grandma's recipie book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
          <p><button>Order Online</button></p>
        </div>
      </div>
      </>
    )
}

export default Header;