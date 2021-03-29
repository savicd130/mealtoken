import React, { useState } from 'react';
import PropTypes from 'prop-types';

//State form
const initState = {
  name: '',
  email: '',
  password: '',
  password2: '',
  accessToken: '',
};

const Register = props => {
  const [registerForm, setRegiterForm] = useState(initState);

  const { name, email, password, password2, accessToken } = registerForm;

  const formInput = e => {
    setRegiterForm({ ...registerForm, [e.target.name]: e.target.value });
  };

  const formSubmit = e => {
    e.preventDefault();
    console.log(registerForm);
  };

  return (
    <div className="signform">
      <div className="signform__box">
        <h2>Create an Meal Token Account</h2>
        <form onSubmit={e => formSubmit(e)} className="form">
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
              name="password"
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
              value={accessToken}
              onChange={e => formInput(e)}
              className="form__input"
              placeholder="Access token"
            />
          </div>
          <button className="btn btn-primary form__btn signform__btn">
            <i className="fas fa-lock"></i>
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

Register.propTypes = {};

export default Register;
