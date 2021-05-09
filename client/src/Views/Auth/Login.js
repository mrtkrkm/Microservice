import React, { useState } from "react";
import validationFunc from "../../Helpers/Auth/LoginValidation";
import UseForm from "../../Helpers/Auth/LoginUse";
import Register from "./Register";
import "./Login.css";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import PropTypes from "prop-types";

const Login = ({ isAuthenticated, login }) => {
  const callbackFunction = () => {
    console.log("login Login");
    console.log(values);
    login(values.email, values.password);
  };
  const { handleChange, handleSubmit, values, errors } = UseForm(
    validationFunc,
    callbackFunction
  );

  const [RegisterClick, setRegisterClick] = useState(false);

  const RegisterClickHandler = () => {
    setRegisterClick(true);
  };
  return (
    <>
      {RegisterClick ? (
        <Register />
      ) : (
        <div className="form-content">
          <form action="submit" className="form" onSubmit={handleSubmit}>
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
            <button className="submit" type="submit">
              Login
            </button>
            <div className="info">
              Still don't have an account?
              <a onClick={RegisterClickHandler}> Click to Sign-up</a>
            </div>
          </form>
        </div>
      )}
    </>

    // <div className="form-content">
    //   <form action="submit" className="form" onSubmit={handleSubmit}>
    //     <div className="form-input-fields">
    //       <label htmlFor="email">E-mail:</label>
    //       <input
    //         type="email"
    //         id="email"
    //         name="email"
    //         value={values.email}
    //         onChange={handleChange}
    //         placeholder="Please Enter your e-mail"
    //       />
    //       {errors.email && <p>{errors.email}</p>}
    //     </div>
    //     <div className="form-input-fields">
    //       <label htmlFor="password">Password:</label>
    //       <input
    //         type="password"
    //         id="password"
    //         name="password"
    //         value={values.password}
    //         onChange={handleChange}
    //         placeholder="Please Enter your password"
    //       />
    //       {errors.password && <p>{errors.password}</p>}
    //     </div>
    //     <button className="submit" type="submit">
    //       Login
    //     </button>
    //   </form>
    //   <div>Still don't have an account? Click to Sign-up</div>
    // </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
