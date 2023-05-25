import React from 'react';
import './App.css';
import Nav from "./Components/Nav";
import Header from "./Components/header";
import Footer from "./Components/Footer";
import Main from "./Components/main";

function App() {
  return (
    <div role="document">
      <React.Fragment>
        <Nav role="navigation" />
        <Header role="header" />
        <Main role="main" />
        <Footer role="footer" />
      </React.Fragment>
    </div>
  );
}

export default App;