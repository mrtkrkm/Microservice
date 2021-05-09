import React, { useState } from "react";
import styled from "styled-components";
import MultipleStep from "./MultipleStep";
import { useLocation } from "react-router-dom";
import Rating from "./Rating";
import ReviewBox from "../Review/ReviewBox";
import OldReviews from "../Review/OldReviews";

const Wrapper = styled.div`
  background-color: white;
  position: absolute;
`;

const RecipeHeader = styled.div`
  font-size: 30px;
  background-color: white;
  padding: 10px;
  border: 1px solid red;
  height: 230px;
  width: 40%;
  margin-top: 2%;
  margin-left: 20%;
  @media only screen and (max-width: 1200px) {
    margin-top: 10px;
    width: 90vw;
    height: 250px;
    margin-left: 10px;
    padding: 0px;
    /* background-color: tomato; */
  }
`;
const RecipeName = styled.div`
  text-align: start;
  margin-left: 5%;
  display: flex;

  & p {
    font-size: 25px;
  }

  @media only screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin-left: 0%;
    padding: 0px;

    & p {
      font-size: 25px;
      margin-left: 15%;
    }
  }
`;

const RecipeDetailSection = styled.div`
  position: relative;
  margin-top: 17%;

  @media only screen and (max-width: 600px) {
    margin-top: 60%;
  }
  @media only screen and (min-width: 600px) and (max-width: 1200px) {
    margin-top: 40%;
  }
`;
const RecipeDescription = styled.p`
  text-align: center;
  border-bottom: 0.8px solid gray;
  padding-bottom: 15px;
  width: 29%;
  margin-left: 20%;
  font-size: 22px;
  @media only screen and (max-width: 1200px) {
    text-align: center;
    width: 100%;
    margin-left: 0;
    background-color: tomato;
  }
`;

const NumbersSection = styled.div`
  margin-right: 10px;
  padding: 0px;
  margin-top: 20px;
  margin-left: 22%;
  & p {
    margin: 0;
  }
  & .p-review {
    margin: 0;
    margin-left: -50%;
    font-size: 25px;
    text-align: center;
  }

  @media only screen and (max-width: 1200px) {
    background-color: white;
    padding: 0px;
  }
`;

const RatingSection = styled.div`
  display: flex;
  margin-right: 10px;

  & p {
    margin-top: 0px;
    margin-right: 10px;
    font-size: 30px;
    color: tomato;
    font-weight: 600;
  }
`;

const LastReviewSection = styled.p`
  border-bottom: 5px solid gray;
  width: 30%;
  font-size: 25px;
  text-transform: uppercase;
  margin-left: 20%;

  @media only screen and (max-width: 1200px) {
    font-size: 20px;
    width: 88%;
    margin-left: 8%;
  }
`;

const RecipeDetail = () => {
  const location = useLocation();
  const data = location.state ? location.state : "";
  // const data = {
  //   directions: [
  //     "Stir together soy sauce, sugar, sesame oil, white and pale green scallions, garlic, ginger, and 2 tablespoons sesame seeds in a bowl until sugar is dissolved. Add steak and toss to coat, then marinate 15 minutes.",
  //     "Heat vegetable oil in a 12-inch heavy skillet over high heat until just smoking, then add steak in 1 layer and sauté, turning over occasionally, until browned and just cooked through, about 5 minutes total. Transfer to a platter and sprinkle with scallion greens and remaining 1 tablespoon sesame seeds, then serve with accompaniments.",
  //     "*Available at Asian markets and many supermarkets.",
  //   ],
  //   ingredients: [
  //     "1/4 cup soy sauce",
  //     "1 tablespoon sugar",
  //     "2 teaspoons Asian sesame oil",
  //     "1 bunch scallions (white and pale green parts separated from greens), minced (1/2 cup)",
  //   ],
  //   title: "Korean Marinated Beef",
  //   image_url:
  //     "https://assets.epicurious.com/photos/560df200f3a00aeb2f1d5bf8/109206.jpg",
  //   description: "Bulgogi",
  //   calories: 170,
  //   rating: 3.5,
  //   fat: 10,
  // };

  const Review = {
    review:
      "Perfect but we have to be careful especially during the putting all those thung",
    rating: 4.5,
    userName: "murat",
  };
  const RecipeImage = styled.div`
    height: 35vh;
    width: 25vw;
    position: relative;
    border-radius: 10px;
    top: 10%;
    margin-left: 7%;
    background-size: 100% 100%;
    background-image: url(${data.image_url});
    @media only screen and (max-width: 800px) {
      top: 10%;
      background-size: 100% 100%;
      height: 25vh;
      width: 80vw;
      border-radius: 5px;
      margin-right: 15px;
      margin-left: 20px;
    }

    @media only screen and (min-width: 800px) and (max-width: 1200px) {
      background-size: 100% 100%;
      height: 35vh;
      width: 70vw;
      border-radius: 5px;
      margin-right: 15px;
    }
  `;
  return (
    <Wrapper>
      <RecipeHeader>
        <RecipeName>
          <p>{data.title}</p>

          <NumbersSection>
            <RatingSection>
              <p>{data.rating}/5</p>
              <Rating value={data.rating} />
            </RatingSection>

            <p className="p-review">Review({0})</p>
          </NumbersSection>
        </RecipeName>
        <RecipeImage />
      </RecipeHeader>

      <RecipeDetailSection>
        <RecipeDescription>{data.description}</RecipeDescription>
        <MultipleStep name="Ingredients" data={data.ingredients} />
        <MultipleStep name="preperation" data={data.directions} />
        <ReviewBox></ReviewBox>
      </RecipeDetailSection>
      <LastReviewSection>Last review</LastReviewSection>
      <OldReviews data={Review} />
    </Wrapper>
  );
};

export default RecipeDetail;
