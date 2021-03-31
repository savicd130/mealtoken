import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { menuItem } from '../../actions/menu';
import { Link } from 'react-router-dom';

const Details = ({ menuItem, match, loading, data }) => {
  useEffect(() => {
    menuItem(match.params.id);
  }, []);

  if (loading) return null;

  const { name, descShort, descLong, price, imgUrl, type, comments } = data;

  const renderComments = () => {
    if (comments.length === 0) {
      return (
        <div className="comments-comm">
          <div className="comments-comm__user"></div>
          <p>This article does not have comment!</p>
        </div>
      );
    }

    return comments.map(el => {
      return (
        <div className="comments-comm">
          <div className="comments-comm__user">
            <i className="fas fa-user"></i> {el.name}
          </div>
          <p>{el.text}</p>
        </div>
      );
    });
  };

  return (
    <div className="details">
      <div className="details__back">
        <Link className="back-btn" to="/menu">
          <i className="fas fa-angle-left"></i>
          BACK
        </Link>
      </div>
      <div className="details__box">
        <h2>{name}</h2>
        <p className="mb-4">{descShort}</p>

        <div class="details__content mb-5">
          <div class="details__content-top">
            <img
              class="mb-3"
              src={`http://localhost:5000${imgUrl}`}
              alt="carbo"
            />

            <div class="details__content-top__details">
              <h3>
                <span>{price}$</span>
              </h3>
              <h3>{type}</h3>

              {/* <!-- <a href="/details.html" class="btn btn-primary color-white">
                <i class="fas fa-shopping-cart"></i>
                Add to cart
              </a> --> */}
            </div>
          </div>
          <div class="details__content-bottom">
            <p>{descLong}</p>
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
          {renderComments()}
        </div>
      </div>
    </div>
  );
};

Details.propTypes = {};

const mapStateToProps = state => ({
  loading: state.item.loading,
  data: state.item.data,
});

export default connect(mapStateToProps, { menuItem })(Details);
