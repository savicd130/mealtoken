import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
  return (
    <nav className="navigation">
      <Link className="navigation__title" href="/index.html">
        Meal <span>Token</span>
      </Link>

      <ul className="navigation__list">
        <li className="navigation__item">
          <Link href="/index.html" className="navigation__links">
            Home
          </Link>
        </li>
        <li className="navigation__item">
          <Link href="/menu.html" className="navigation__links">
            Menu
          </Link>
        </li>
        <li className="navigation__item">
          <Link href="/about.html" className="navigation__links">
            About
          </Link>
        </li>
        <li className="navigation__item">
          <Link href="contact.html" className="navigation__links">
            Contact
          </Link>
        </li>
      </ul>

      <ul className="navigation__list">
        <li className="navigation__btn">
          <Link href="/menu-login.html" className="btn btn-secondary">
            Log in
          </Link>
        </li>
        <li className="navigation__btn">
          <Link href="/signup.html" className="btn btn-primary">
            <i className="fas fa-user"></i>
            Sign up
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
