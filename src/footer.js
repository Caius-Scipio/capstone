import React from 'react';

function Footer() {
  return (
    <>
    <footer class="footer">
      <div class="footerImg">
        <img src={process.env.PUBLIC_URL + '/Logo.svg'} alt="Logo" />
      </div>
      <div class="footerList">
        <ul>
          <li>Doormat Navigation</li>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reservation">Reservation</a></li>
          <li><a href="/online-order">Online Order</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </div>
      <div class="footerList">
        <ul>
          <li>Contact</li>
          <li>Address</li>
          <li>Phone</li>
          <li>Email</li>
        </ul>
      </div>
      <div class="footerList">
        <ul>
          <li>Social Media</li>
          <li>Address</li>
          <li>Phone</li>
          <li>Email</li>
        </ul>
      </div>
    </footer>
    </>
  );
}

export default Footer;