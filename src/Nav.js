import React from 'react';
import './App.css';

function Nav() {
    return (
      <div className="App">
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top px-5 position-relative" >
          <a class="navbar-brand" href="/">DS21</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul class="navbar-nav mx-auto" >
              <li class="nav-item">
                <a class="nav-link" href="/">
                  HOME
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="">
                  VISUALISATION
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="">
                  TRIP PLANNING
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="">
                  SAFETY
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/login">
                  LOGIN
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="">
                  SIGN UP
                </a>
              </li>
            </ul>
            </div>
          </nav>
      </div>
    );
  }
  
  export default Nav;