import React from 'react';
import PropTypes from 'prop-types';

const Details = props => {
  console.log(props.match.params.id);
  return (
    <div className="details">
      <div className="details__back">
        <a className="back-btn" href="/menu.html">
          <i className="fas fa-angle-left"></i>
          BACK
        </a>
      </div>
      <div className="details__box">
        <h2>Pasta Carbonara</h2>
        <p className="mb-4">
          classNameic bacon-and-egg pasta with the yummy addition of peas.
          Nothing better on earth.
        </p>
        <div className="details__content mb-5">
          <div className="details__content-left">
            <p>
              I can’t eat, think about, dream about, or even remotely consider
              Pasta Carbonara without thinking of Heartburn, the Meryl
              Streep/Jack Nicholson movie from the eighties that I both love and
              hate. Love, because it’s incredibly written by Nora Ephron and
              incredibly acted by Meryl and Jack. And Stockard. And because
              Carly Simon sings the songs. And because Meryl and Jack feast on
              Pasta Carbonara on the night of their first date.
            </p>
          </div>
          <div className="details__content-right">
            <img className="mb-3" src="./img/carbonara2f55.jpg" alt="carbo" />
            {/* <!-- <a href="/details.html" className="btn btn-primary color-white">
            <i className="fas fa-shopping-cart"></i>
            Add to cart
          </a> --> */}
          </div>
        </div>
        <div className="comments">
          <h3 className="mb-2">Comments</h3>
          {/* <!-- <div className="comments-form mb-3">
          <form action="" className="form">
            <small>Add a comment about this meal</small>
            <textarea
              className="form__textarea mb-3"
              placeholder="Please, type comment..."
              rows="5"
            ></textarea>
            <button className="btn btn-primary color-white">Add comment</button>
          </form>
        </div> --> */}

          <div className="comments-comm">
            <div className="comments-comm__user">
              <i className="fas fa-user"></i>
              Will Smith
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
              possimus commodi asperiores, nesciunt laudantium saepe quia. Eaque
              aut qui consectetur, repellendus minima ullam similique doloremque
              nulla reprehenderit libero? Alias, reprehenderit?
            </p>
          </div>
          <div className="comments-comm">
            <div className="comments-comm__user">
              <i className="fas fa-user"></i>
              Will Smith
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
              possimus commodi asperiores, nesciunt laudantium saepe quia. Eaque
              aut qui consectetur, repellendus minima ullam similique doloremque
              nulla reprehenderit libero? Alias, reprehenderit?
            </p>
          </div>
          <div className="comments-comm">
            <div className="comments-comm__user">
              <i className="fas fa-user"></i>
              Will Smith
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
              possimus commodi asperiores, nesciunt laudantium saepe quia. Eaque
              aut qui consectetur, repellendus minima ullam similique doloremque
              nulla reprehenderit libero? Alias, reprehenderit?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Details.propTypes = {};

export default Details;
