import React from 'react';

function Footer() {
  return (
    <>
    <img src={process.env.PUBLIC_URL + '/Logo.svg'} alt="Logo" />
    <p>Doormat Navigation</p>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservation">Reservation</a></li>
        <li><a href="/online-order">Online Order</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    <p>Contact</p>
      <ul>
        <li>Address</li>
        <li>Phone</li>
        <li>Email</li>
      </ul>
    <p>Social Media</p>
      <ul>
        <li>Address</li>
        <li>Phone</li>
        <li>Email</li>
      </ul>
    </>
  );
}

export default Footer;