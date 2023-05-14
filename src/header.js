import React from 'react';

function Header() {
  return (
    <>
      <img src={process.env.PUBLIC_URL + '/Logo.svg'} alt="Logo" />
    </>
  );
}

export default Header;