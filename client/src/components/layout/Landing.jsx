import React from 'react';
import { Link } from 'react-router-dom';

const Landing = props => {
  return (
    <div className="landing">
      <div className="landing__title">
        <h3>Enjoy your healthy delicious meal</h3>
        <h1>Treat Yourself</h1>
        <Link to="/menu" className="btn btn-primary">
          Explore now
        </Link>
      </div>

      <div className="landing__social">
        <ul>
          <li>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Landing;
