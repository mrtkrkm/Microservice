import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Rating from "./Rating";

const Wrapper = styled.div`
  border: 1px solid white;
  background-color: rgba(255, 255, 255, 0.98);
  border-radius: 2px;
  height: 45vh;
  width: 300px;
  display: grid;
  grid-template-rows: 50% 50%;
  margin-left: 20px;
  margin-top: 20px;
  @media only screen and (max-width: 600px) {
    width: 95vw;
    height: 21vh;
    display: grid;
    grid-template-columns: 50% 50%;
    margin-left: 0;
  }

  @media only screen and (min-width: 600px) and (max-width: 800px) {
    width: 95vw;
    height: 21vh;
    display: grid;
    grid-template-columns: 50% 50%;
    margin-left: 0;
  }

  &:hover {
    filter: grayscale(75%);
    transition: filter 0.5 ease-in-out;
    //background-color: rgba(255, 255, 255, 0.8);
  }

  &:hover span {
    display: block;
  }
`;

const InfonSection = styled.div``;

const TitleSection = styled.p`
  text-align: center;
  font-size: 20px;
`;

const DescriptionSection = styled.p`
  font-size: 15px;
  text-align: center;
`;

const ImageSpan = styled.span`
  display: none;
  position: absolute;
  left: 70px;
  top: 100px;

  &:hover {
    display: block;
  }

  & > input[type="button"] {
    background: #b71c1c;
    width: 150px;
    height: 60px;
    cursor: pointer;
    color: white;
    border-radius: 5px;
    margin-bottom: 25px;
    box-shadow: 0 0 10px 2px #fff;
  }
`;

const NumbersSection = styled.div`
  font-size: 18px;
  padding: 0px;
  margin-left: 30%;
  margin-top: 3%;
`;

const Recipe = ({ item, callback }) => {
  const history = useHistory();
  const ImageSection = styled.div`
    //height: 50vh;
    //width: 200vw;
    background-size: 100% 100%;
    background-image: url(${item.image_url});
    @media only screen and (max-width: 600px) {
      background-size: 100% 100%;
      height: 19vh;
      border-radius: 5px;
      margin-right: 15px;
    }

    @media only screen and (min-width: 600px) and (max-width: 800px) {
      background-size: 100% 100%;
      height: 19vh;
      border-radius: 5px;
      margin-right: 15px;
    }
  `;

  const redirectHandler = (e) => {
    //callback(true);
    history.push({ pathname: "/recipe_detail", state: item });
  };

  const addCompareHandler = () => {
    callback(item);
  };

  return (
    <Wrapper>
      <ImageSection />
      <ImageSpan>
        <input
          type="button"
          value="Show Details"
          onClick={redirectHandler}
        ></input>
        <input
          type="button"
          value="Compare"
          onClick={addCompareHandler}
        ></input>
      </ImageSpan>
      <InfonSection>
        <TitleSection>{item.title}</TitleSection>
        <DescriptionSection>
          {item.description != null && item.description.length > 30
            ? item.description.slice(0, 30)
            : item.description}
        </DescriptionSection>
        <NumbersSection>
          <Rating value={item.rating} />
          <p style={{ padding: "0px", marginLeft: "-5px" }}>
            Rating: {item.rating}/5
          </p>
        </NumbersSection>
      </InfonSection>
    </Wrapper>
  );
};

export default Recipe;
