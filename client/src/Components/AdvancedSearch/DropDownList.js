import React from "react";
import Dropdown from "./Dropdown";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #596269;

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

const DropDownList = ({ data }) => {
  return (
    <Wrapper>
      {data.map((item, index) => {
        return <Dropdown items={item.values} name={item.name} />;
      })}
    </Wrapper>
  );
};

export default DropDownList;
