import React from 'react';

const Landing = props => {
  return (
    <div className="landing">
      <div className="landing__title">
        <h3>Enjoy your healthy delicious meal</h3>
        <h1>Treat Yourself</h1>
        <a href="/menu.html" className="btn btn-primary">
          Explore now
        </a>
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
