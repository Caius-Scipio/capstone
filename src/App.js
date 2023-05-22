import React from 'react';
import './App.css';
import Nav from "./Components/Nav";
/*
import header from "./Components/header";
import Main from "./Components/main";
import Footer from "./Components/Footer";
*/

function App() {
  return (
    <div role="document">
      <React.Fragment>
        <Nav role="navigation" />
      </React.Fragment>
    </div>
  );
}

export default App;