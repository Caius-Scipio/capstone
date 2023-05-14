import React from 'react';

function Main() {
  return (
    <>
    <div>
      <div class="section1">
        <div class="section1-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned Mediterranian restaurant, focused on traditional recipes served with a modern twist.</p>
          <button class="button">Reserve Table</button>
        </div>
        <div class="section1-image">
          <img src={process.env.PUBLIC_URL + '/headerImg.jpg'} alt="plate of bruschetta" width="280px" height="300px"/>
        </div>
      </div>
    </div>
    <div class="section2">
      <div class="card">
        <img src={process.env.PUBLIC_URL + 'greek salad.jpg'} alt="greek salad" width="100%"/>
        <h2>Greek Salad</h2>
        <p class="cardText">$12.99</p>
        <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
        <button class="button">Order Delivery</button>
      </div>
      <div class="card">
        <img src={process.env.PUBLIC_URL + 'Bruschetta-close-side.jpg'} alt="bruschetta" width="100%"/>
        <h2>Bruschetta</h2>
        <p class="cardText">$16.99</p>
        <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.</p>
        <button class="button">Order Delivery</button>
      </div>
      <div class="card">
      <img src={process.env.PUBLIC_URL + 'lemon dessert.jpg'} alt="lemon dessert" width="100%"/>
        <h2>Lemon Dessert</h2>
        <p class="cardText">$8.50</p>
        <p>Filled with bright, fresh lemon flavors, this Lemon Dessert will steal the show. This cake is absolutely irresistible as it's so buttery.</p>
        <button class="button">Order Delivery</button>
      </div>
    </div>

    <div class="section3">
      <div class="card">
        <img src={process.env.PUBLIC_URL + 'rating.png'} alt="5 stars" width="300px"/>
        <h2>Linda C Costello</h2>
        <p class="cardText">You’re all that and a super-size bag of chips.</p>
      </div>
      <div class="card">
        <img src={process.env.PUBLIC_URL + 'rating.png'} alt="5 stars" width="300px%"/>
        <h2>Louis M. Valenti</h2>
        <p class="cardText">ctions speak louder than words, and yours tell an incredible story.</p>
      </div>
      <div class="card">
        <img src={process.env.PUBLIC_URL + 'rating.png'} alt="5 stars" width="300px"/>
        <h2>Dennis S. Combs</h2>
        <p class="cardText">You're so thoughtful.</p>
      </div>
    </div>
    <div>
      <div class="section4">
        <div class="section4-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. Despite the city's diversity, 
            the brothers recogized the lack of Mederteranian cuisine in Chicago, and were inspired to bring the 
            flavors of their hometown in Italy to the people of Chicago. The two brothers continue to oversee the 
            Little Lemon restaurant, nearly thirty years later.</p>
          <button class="button">Reserve Table</button>
        </div>
        <div class="section4-image">
          <section><img src={process.env.PUBLIC_URL + '/Mario and Adrian A.jpg'} alt="Mario and Adrian" width="100%" height="300px"/></section>
        </div>
      </div>
    </div>
    </>
  );
}

export default Main;