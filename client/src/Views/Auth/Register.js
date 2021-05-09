import React, { useState } from "react";
import validationFunc from "../../Helpers/Auth/RegisterValidation";
import RegisterUse from "../../Helpers/Auth/RegisterUse";
import Login from "./Login";
import { connect } from "react-redux";
import { signup } from "../../actions/auth";
import PropTypes from "prop-types";

const Register = ({ isAuthenticated, signup }) => {
  const callbackFunction = () => {
    console.log(values);
    signup(values.email, values.password, values.password2, values.username);
  };
  const { handleChange, handleSubmit, values, errors } = RegisterUse(
    validationFunc,
    callbackFunction
  );

  const [LoginClicked, setLoginClick] = useState(false);

  const LoginClickHandler = () => {
    setLoginClick(true);
  };

  return (
    <>
      {LoginClicked ? (
        <Login />
      ) : (
        <div className="form-content">
          <form
            action="submit"
            onSubmit={handleSubmit}
            className="form"
            noValidate
          >
            <div className="form-input-fields">
              {/* <label htmlFor="username">Username:</label> */}
              <input
                type="text"
                id="username"
                name="username"
                value={values.username}
                onChange={(e) => handleChange(e)}
                placeholder="Please Enter your username"
              />
              {errors.username && <p>{errors.username}</p>}
            </div>
            <div className="form-input-fields">
              {/* <label htmlFor="email">E-mail:</label> */}
              <input
                type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Please Enter your e-mail"
              />
              {errors.email && <p>{errors.email}</p>}
            </div>
            <div className="form-input-fields">
              {/* <label htmlFor="password">Password:</label> */}
              <input
                type="password"
                id="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                placeholder="Please Enter your password"
              />
              {errors.password && <p>{errors.password}</p>}
            </div>
            <div className="form-input-fields">
              {/* <label htmlFor="password2">Confirm Password</label> */}
              <input
                type="password"
                id="password2"
                name="password2"
                value={values.password2}
                onChange={handleChange}
                placeholder="Please Enter your password again"
              />
              {errors.password2 && <p>{errors.password2}</p>}
            </div>
            <button className="submit" type="submit">
              Register
            </button>
            <div className="info">
              Already have a account?
              <a onClick={LoginClickHandler}> Click to Login</a>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

Register.propTypes = {
  signup: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.isAuthenticated,
});

export default connect(mapStateToProps, { signup })(Register);
