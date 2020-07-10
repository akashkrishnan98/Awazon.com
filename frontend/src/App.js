import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>
                &#9776;
            </button>
            <Link to="/">Awazon</Link>
          </div>
          <div className="header-links">
            <a href="cart.html">Cart</a>
            <a href="signin.html">Sign-in</a>
          </div>
        </header>
        <aside className="sidebar">
          <p>Shopping categories</p>
          <button className="close-button" onClick={closeMenu}>X</button>
          <ul>
            <li><a href="index.html">Pet Food</a></li>
            <li><a href="index.html">Mobiles</a></li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/" exact={true} component={HomeScreen}/>
          </div>
        </main>
        <footer className="footer">
          All rights reserved
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
