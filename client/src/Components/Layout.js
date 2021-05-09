import React from "react";
import Auxi from "../hoc/Auxi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MainNavbar from "./Navigation/MainNavbar";
import Footer from "./Footer";

const Wrapper = styled.div``;

const Layout = (props) => {
  return (
    <Auxi>
      <Wrapper>
        <MainNavbar />
        <main>{props.children}</main>
        <Footer></Footer>
      </Wrapper>
    </Auxi>
  );
};

export default Layout;
