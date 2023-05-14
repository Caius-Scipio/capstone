import React from 'react';

function Header() {
  return (
    <>
    <header class="header">
      <img src={process.env.PUBLIC_URL + '/Logo.svg'} alt="Logo" />
      <ul class="navigation">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservation">Reservation</a></li>
        <li><a href="/online-order">Online Order</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </header>
    </>
  );
}

export default Header;