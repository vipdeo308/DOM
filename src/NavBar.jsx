import React from 'react';
import {Link} from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">GUVI Courses</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
             <Link class="nav-link" to="/">All</Link>
            </li>
            <li class="nav-item">
             <Link class="nav-link" to="/full-stack">Full-Stack Development</Link>
            </li>
            <li class="nav-item">
             <Link class="nav-link" to="/data-science">Data Science</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/cyber-security">Cyber Security</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link disabled"to="/career">Career</Link>
            </li>
           </ul>
        </div>
      </div>
    </nav>
  );
};
