import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { register } from '../../actions/auth';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Register = ({ register, isAuth }) => {
  const [wrongPassword, setWrongPassword] = useState(false);
  const [registerForm, setRegiterForm] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    token: '',
  });

  const { name, email, password, password2, token } = registerForm;

  const formInput = e => {
    setRegiterForm({ ...registerForm, [e.target.name]: e.target.value });
  };

  const registerFormSubmit = e => {
    e.preventDefault();

    if (password === password2) {
      register({ name, email, password, token });
    } else {
      setWrongPassword(true);
    }
  };

  if (isAuth) {
    return <Redirect to="/menu" />;
  }

  return (
    <div className="signform">
      <div className="signform__box">
        <h2>Create an Meal Token Account</h2>
        {wrongPassword ? (
          <div className="signform__error">Password do not match</div>
        ) : null}
        <form onSubmit={e => registerFormSubmit(e)} className="form">
          <div className="form__field">
            <label className="form__label">
              Your name <span className="form__required">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={e => formInput(e)}
              className="form__input"
              placeholder="Your name"
              autoComplete="none"
            />
          </div>
          <div className="form__field">
            <label className="form__label">
              Email <span className="form__required">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={e => formInput(e)}
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
              onChange={e => formInput(e)}
              className="form__input"
              placeholder="Password"
            />
          </div>
          <div className="form__field">
            <label className="form__label">
              Confirm Password <span className="form__required">*</span>
            </label>
            <input
              type="password"
              name="password2"
              value={password2}
              onChange={e => formInput(e)}
              className="form__input"
              placeholder="Confirm Password"
            />
          </div>

          <div className="form__field form__field form__field-one mb-3">
            <label className="form__label">Access token</label>
            <input
              type="token"
              name="token"
              value={token}
              onChange={e => formInput(e)}
              className="form__input"
              placeholder="Access token"
            />
          </div>
          <button className="btn btn-primary form__btn signform__btn">
            <i className="fas fa-lock"></i> Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

Register.propTypes = {};

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { register })(Register);
