import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { login } from '../../actions/auth';
import { connect } from 'react-redux';

const Login = ({ loginModal, setLoginModal, login, loading }) => {
  const isAuth = +localStorage.getItem('isAuth');

  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
    token: '',
  });

  const { email, password, token } = loginFormData;

  const inputLoginData = e =>
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });

  const onLoginFormSubmit = e => {
    e.preventDefault();

    login({ email, password, token });
  };

  if (isAuth) {
    return <Redirect to="/" />;
  }

  return (
    <Modal
      ariaHideApp={false}
      className="login"
      isOpen={loginModal}
      onRequestClose={() => setLoginModal(false)}
    >
      <div className="login__box">
        <button onClick={() => setLoginModal(false)} className="login__close">
          <i className="fas fa-times"></i>
        </button>
        <h2>Please, Log in</h2>
        {!loading && !isAuth && (
          <div className="login__error">Wrong credentials!</div>
        )}
        <form onSubmit={e => onLoginFormSubmit(e)} className="form">
          <div className="form__field">
            <label className="form__label">
              Email <span className="form__required">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={e => inputLoginData(e)}
              className="form__input"
              placeholder="Email"
            />
          </div>
          <div className="form__field">
            <label className="form__label">
              Password <span className="form__required">*</span>
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={e => inputLoginData(e)}
              className="form__input"
              placeholder="Password"
            />
          </div>
          <div className="form__field form__field form__field-one mb-3">
            <label className="form__label">Access token</label>
            <input
              type="token"
              name="token"
              value={token}
              onChange={e => inputLoginData(e)}
              className="form__input"
              placeholder="Access token"
            />
          </div>
          <button className="btn btn-primary form__btn signform__btn">
            <i className="fas fa-user"></i> Log in
          </button>
        </form>
      </div>
    </Modal>
  );
};

Login.propTypes = {
  loginModal: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  loading: state.auth.loading,
});

export default connect(mapStateToProps, { login })(Login);
