import React from "react";
import bruschetta from "../Images/bruschetta.jpg"
import saladgreek from "../Images/salad-greek.jpg"
import lemondessert from "../Images/lemon dessert.jpg"

const Specials = () => {
  return (
    <>
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

export default Specials;