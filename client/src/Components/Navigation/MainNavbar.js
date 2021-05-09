import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import Aux from "../../hoc/Auxi";
import Login from "../../Views/Auth/Login";
import Register from "../../Views/Auth/Register";
import Modal from "./Modal";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

import NavigationItem from "./NavigationItem";

const MainNavbar = ({ isAuthenticated, logout }) => {
  const [clicked, setClicked] = useState(true);
  const [active, setactive] = useState(true);
  const ClickHandler = () => {
    setClicked(!clicked);
  };

  const CheckMenu = () => {
    return (
      <>
        {isAuthenticated != true ? (
          <div className="navbar-left">
            <NavigationItem name="Login" className="navbar--link">
              <Login />
            </NavigationItem>
            <NavigationItem name="Sign-Up" className="navbar--link">
              <Register />
            </NavigationItem>
          </div>
        ) : (
          <div className="navbar-left">
            <NavigationItem name="My-Reviews" className="navbar--link">
              <Login />
            </NavigationItem>
            <div className="navbar--link">Log out</div>
          </div>
        )}
      </>
    );
  };

  console.log(isAuthenticated);

  return (
    <Aux>
      <div className="navbar">
        <Link to="/">
          <div className="navbar-logo">
            Recipe <i className="fa fa-utensils" />
          </div>
        </Link>
        <div className="navbar-menuIcon">
          <i
            className={clicked ? "fas fa-times" : "fas fa-bars"}
            onClick={ClickHandler}
          />
        </div>
        {clicked ? <CheckMenu></CheckMenu> : null}
      </div>
    </Aux>
  );
};

MainNavbar.propTypes = {
  isAuthenticated: PropTypes.bool,
  logout: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(MainNavbar);

{
  /* <Aux>
<div className="navbar">
  <Link to="/">
    <div className="navbar-logo">
      Recipe <i className="fa fa-utensils" />
    </div>
  </Link>
  <div className="navbar-menuIcon">
    <i
      className={clicked ? "fas fa-times" : "fas fa-bars"}
      onClick={ClickHandler}
    />
  </div>
  {clicked && isAuthenticated != true ? (
    <div className="navbar-left">
      <NavigationItem name="Login" className="navbar--link">
        <Login />
      </NavigationItem>
      <NavigationItem name="Sign-Up" className="navbar--link">
        <Register />
      </NavigationItem>
    </div>
  ) : (
    <div className="navbar-left">
      <NavigationItem name="My-Reviews" className="navbar--link">
        <Login />
      </NavigationItem>
      <div className="navbar--link" onClick={logout()}>
        Log out
      </div>
    </div>
  )}
</div>
</Aux> */
}
