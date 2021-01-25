

import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar.js"


export default function Links() {
  return (
    <div>
      <header className="header">
        <nav className="header--nav">
          <Link to="/"><i class="cars"></i></Link>

          <h2 className="img-h2">
            <Link to="/">KICKING IT WITH TYREK ! SNEAKER HEAD WITH COLLECTABLES! 
              </Link>
          </h2>
          <ul className="nav-ul">
              <Link className="blue" to="/">HomePage </Link>
            </ul>
          
            <ul className="nav-ul">
              <Link className="blue" to="/Product">Products </Link>
            </ul>
          <ul>
            <ul className="nav-ul">
              <Link className="blue" to="/Contact">ContactPage</Link>
            </ul>
          </ul>
        </nav>
      </header>
    </div>
  );
}