import React from "react";
import { Link } from "react-router-dom"

 export default function Header(){

    return(
        <header>
        <div className="container">
          <div className="inner-content">
            <h1>MOVIE HUB</h1>
            <div className="brand">
              <Link to="/">MyWatchList</Link>
            </div>
            <div className="nav-links">
              <li>
                <Link to="/">Watch List</Link>
              </li>
              <li>
                <Link to="/watched">Watched</Link>
              </li>
              <li>
                <Link to="/add" className="btn"> + add</Link>
              </li>
            </div>
          </div>
        </div>
      </header>
    );
};