import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import InfoSection from "../../Components/Recipes/RecipeForCompare/InfoSection";
import MultipleSteps from "../../Components/Recipes/RecipeForCompare/MultipleSteps";
const InfoS = styled.div`
  display: flex;
`;

const PageHeader = styled.p`
  font-size: 45px;
  align-items: center;
  text-align: center;
  margin-bottom: 15px;
  text-transform: uppercase;
`;

const ItemSection = styled.div`
  margin-left: 10%;
  margin-top: 3%;
`;

const MultiStepsSection = styled.div`
  display: flex;
`;

const MultiStepsHeader = styled.div`
  background-color: rgb(148, 181, 20);
  width: 80%;
  height: 40px;
  margin-top: 30px;
  text-align: center;
  color: white;
  font-size: 25px;
`;

const RecipeCompare = ({ data }) => {
  const location = useLocation();

  const recipes = location.state ? location.state : [];

  console.log(recipes);
  return (
    <div>
      <PageHeader>COMPARE {recipes.length} Recipe</PageHeader>
      <ItemSection>
        <InfoS>
          {recipes.map((item) => {
            return <InfoSection data={item}></InfoSection>;
          })}
        </InfoS>
        <MultiStepsHeader>INGREDIENTS</MultiStepsHeader>
        <MultiStepsSection>
          {recipes.map((item) => {
            return <MultipleSteps name="Ingredients" data={item.ingredients} />;
          })}
        </MultiStepsSection>
        <MultiStepsHeader>PREPERATION</MultiStepsHeader>
        <MultiStepsSection>
          {recipes.map((item) => {
            return <MultipleSteps name="Preperation" data={item.directions} />;
          })}
        </MultiStepsSection>
      </ItemSection>
    </div>
  );
};

export default RecipeCompare;
