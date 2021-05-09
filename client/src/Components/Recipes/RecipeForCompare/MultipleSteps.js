import React from "react";
import styled from "styled-components";
import Rating from "../Rating";

const Wrapper = styled.div`
  width: 500px;
  //height: 400px;

  border-right: 1px solid gray;
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

const MultipleSteps = ({ name, data }) => {
  const ImageSection = styled.div`
    width: 400px;
    height: 250px;
    margin-left: 12%;
    background-size: 100% 100%;
    background-image: url(${data.image_url});
  `;
  return (
    <Wrapper>
      <Description>
        {data.length} {name}
      </Description>
      <List>
        {data.map((item, index) => {
          return <ListItem>{item}</ListItem>;
        })}
      </List>
    </Wrapper>
  );
};

export default MultipleSteps;
