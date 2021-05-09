import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 28%;
  margin-bottom: 10px;
  padding: 10px;
  margin-left: 20%;
  border: 1px solid black;
  border-radius: 5px;
  border-bottom: 5px solid gray;

  @media only screen and (max-width: 1200px) {
    background-size: 100% 100%;
    width: 70vw;
    border-radius: 5px;
    margin-right: 15px;
    margin-left: 10%;
  }
`;

const Description = styled.p`
  text-align: center;
  font-size: 20px;
  text-transform: uppercase;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

const ListItem = styled.li`
  margin-bottom: 20px;
  list-style: circle;
`;

const MultipleStep = ({ name, data }) => {
  return (
    <Wrapper>
      <Description>{name}</Description>
      <List>
        {data.map((item, index) => {
          return <ListItem>{item}</ListItem>;
        })}
      </List>
    </Wrapper>
  );
};

export default MultipleStep;
