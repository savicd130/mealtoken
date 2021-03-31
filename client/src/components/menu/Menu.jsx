import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { menuItems } from '../../actions/menu';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Menu = ({ menuItems, loading, data }) => {
  const [valueType, setValueType] = useState('');
  const [indexPagination, setIndexPagination] = useState({
    value: 0,
  });

  useEffect(() => {
    !valueType ? menuItems() : menuItems(valueType);
  }, [valueType]);

  const changeType = e => [
    setIndexPagination({ value: 0 }),
    setValueType(e.target.value),
  ];

  const pagination = inx => {
    const left = (
      <li key="left">
        <button
          onClick={() =>
            setIndexPagination({ value: indexPagination.value - 1 })
          }
        >
          <i className="fas fa-long-arrow-alt-left"></i>
          Last page
        </button>
      </li>
    );

    const leftDistable = (
      <li key="leftDistable">
        <button disabled>
          <i className="fas fa-long-arrow-alt-left"></i>
          Last page
        </button>
      </li>
    );

    const right = (
      <li key="right">
        <button
          onClick={() =>
            setIndexPagination({ value: indexPagination.value + 1 })
          }
        >
          <i className="fas fa-long-arrow-alt-right"></i>
          Next page
        </button>
      </li>
    );

    const rightDistable = (
      <li key="rightDistable">
        <button disabled>
          <i className="fas fa-long-arrow-alt-right"></i>
          Next page
        </button>
      </li>
    );

    if (loading) return null;
    const pageNumber = Math.ceil(data.length / 9);
    const paginatNum = indexPagination.value + 1;
    if (pageNumber === 1) return [leftDistable, rightDistable];
    console.log(`${pageNumber} pageNum : ${paginatNum} pagiNum`);
    if (pageNumber > paginatNum && paginatNum >= 2) return [left, right];
    if (pageNumber > paginatNum) return [leftDistable, right];
    if (pageNumber === paginatNum) return [left, rightDistable];
  };

  const itemsCard = inx => {
    if (loading) return null;

    const index = inx * 9;
    const custom = inx * 9 + 9;
    const sliceItems = data.slice(index, custom);

    return sliceItems.map(el => {
      return (
        <div key={el._id} className="menu__card">
          <div className="menu__card-header mb-1">
            <img src={`http://localhost:5000${el.imgUrl}`} alt="carbonara" />
            <span>{el.price}$</span>
          </div>
          <h3>{el.name}</h3>
          <p className="mb-2">{el.descShort}</p>
          <div className="menu__card-nav">
            <Link to={`details/${el._id}`} className="btn btn-secondary">
              See Details
            </Link>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="menu">
      <div className="menu__header">
        <div className="menu__header-title">
          <h2>Menu</h2>
        </div>
      </div>
      <div className="menu__content">
        <div className="menu__links">
          <ul>
            <li>
              <button
                className={valueType === '' ? 'active' : ''}
                onClick={e => setValueType('')}
              >
                <i className="fas fa-clipboard-list"></i>
                all
              </button>
            </li>
            <li>
              <button
                className={valueType === 'breakfast' ? 'active' : ''}
                onClick={e => changeType(e)}
                value="breakfast"
              >
                <i className="fas fa-egg"></i>
                breakfast
              </button>
            </li>
            <li>
              <button
                className={valueType === 'appetizer' ? 'active' : ''}
                onClick={e => changeType(e)}
                value="appetizer"
              >
                <i className="fas fa-cheese"></i>
                appetizer
              </button>
            </li>
            <li>
              <button
                className={valueType === 'maindish' ? 'active' : ''}
                onClick={e => changeType(e)}
                value="maindish"
              >
                <i className="fas fa-utensils"></i>
                main dish
              </button>
            </li>
            <li>
              <button
                className={valueType === 'dessert' ? 'active' : ''}
                onClick={e => changeType(e)}
                value="dessert"
              >
                <i className="fas fa-birthday-cake"></i>
                dessert
              </button>
            </li>
          </ul>
        </div>
        <div className="menu__cards">{itemsCard(indexPagination.value)}</div>
        <div className="menu__pagination">
          <ul>{pagination()}</ul>
        </div>
      </div>
    </div>
  );
};

Menu.propTypes = {};

const mapStateToProps = state => ({
  loading: state.menu.loading,
  data: state.menu.data,
});

export default connect(mapStateToProps, { menuItems })(Menu);
