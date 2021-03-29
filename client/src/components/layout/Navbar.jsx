import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Login from './Login';
import { logout } from '../../actions/auth';

const Navbar = ({ isAuth, highaccess, logout }) => {
  const [loginModal, setLoginModal] = useState(false);

  const admin = (
    <ul className="navigation__list">
      <li className="navigation__btn cart-btn">
        <span>7</span>
        <a href="/cart.html" className="btn btn-primary">
          <i className="fas fa-user"></i>
          Users
        </a>
      </li>

      <li className="navigation__btn">
        <button onClick={() => logout()} className="btn btn-primary">
          <i className="fas fa-sign-out-alt"></i>
          Log out
        </button>
      </li>
    </ul>
  );

  // User
  const user = (
    <ul className="navigation__list">
      <li className="navigation__btn cart-btn">
        <span>7</span>
        <a href="/cart.html" className="btn btn-primary">
          <i className="fas fa-shopping-cart"></i>
          Cart
        </a>
      </li>

      <li className="navigation__btn">
        <button onClick={() => logout()} className="btn btn-primary">
          <i className="fas fa-sign-out-alt"></i>
          Log out
        </button>
      </li>
    </ul>
  );

  const guest = (
    <ul className="navigation__list">
      <li className="navigation__btn">
        <button
          onClick={() => setLoginModal(true)}
          className="btn btn-secondary"
        >
          Log in
        </button>
        <Login loginModal={loginModal} setLoginModal={setLoginModal} />
      </li>
      <li className="navigation__btn">
        <Link to="/register" className="btn btn-primary">
          <i className="fas fa-user"></i> Sign up
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="navigation">
      <Link className="navigation__title" to="/">
        Meal <span>Token</span>
      </Link>

      <ul className="navigation__list">
        <li className="navigation__item">
          <Link to="/" className="navigation__links">
            Home
          </Link>
        </li>
        <li className="navigation__item">
          <Link to="/menu" className="navigation__links">
            Menu
          </Link>
        </li>
        <li className="navigation__item">
          <Link to="/about" className="navigation__links">
            About
          </Link>
        </li>
        <li className="navigation__item">
          <Link to="/contact" className="navigation__links">
            Contact
          </Link>
        </li>
      </ul>

      {!highaccess ? <Fragment>{isAuth ? user : guest}</Fragment> : admin}
    </nav>
  );
};

Navbar.prototype = {};

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  highaccess: state.auth.highaccess,
});

export default connect(mapStateToProps, { logout })(Navbar);
