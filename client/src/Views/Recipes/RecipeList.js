import React, { useState } from "react";
import Recipe from "../../Components/Recipes/Recipe";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Wrapper = styled.div`
  height: 100%;
  display: flex;

  justify-content: center;
  background-color: rgba(0, 10, 0, 0.95);
  @media only screen and (max-width: 600px) {
    display: flex;
    justify-content: start;
  }

  @media only screen and (min-width: 600px) and (max-width: 1000px) {
    margin-left: 0;
    justify-content: start;
  }
`;

const RecipesListWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
  @media only screen and (min-width: 600px) and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }

  @media only screen and (min-width: 800px) and (max-width: 1000px) {
    display: grid;

    grid-template-columns: repeat(2, 1fr);
    margin-left: 0;
  }

  @media only screen and (min-width: 1000px) and (max-width: 1200px) {
    display: grid;

    grid-template-columns: repeat(3, 1fr);
    margin-left: 0;
    grid-column-gap: 50px;
  }
`;

const quickLook = styled.div`
  position: relative;

  top: 100px;
  left: 70px;
  background-color: white !important;
  width: 600px;
  height: 500px;
`;

const CompareRedirectButton = styled.button`
  position: sticky;
  left: 85%;
  top: 92%;
  height: 70px;
  width: 120px;
  background-color: green;
  padding: 0px;
  margin-left: 0px;
`;

const RecipeList = ({ data }) => {
  const history = useHistory();
  const [CompareRecipe, setCompareRecipe] = useState([]);
  const [look, useLook] = useState(false);

  const AddCompare = (data) => {
    var newState = [...CompareRecipe, data];
    setCompareRecipe(newState);

    console.log(newState);
  };

  const CompareHandler = () => {
    history.push({ pathname: "/recipe_compare", state: CompareRecipe });
  };

  console.log(look);
  return (
    <div>
      <Wrapper>
        <RecipesListWrapper>
          {data.map((item, index) => {
            return <Recipe item={item.item} callback={AddCompare}></Recipe>;
          })}
        </RecipesListWrapper>
        {look ? <quickLook>Heyyyyyy</quickLook> : null}
        {CompareRecipe.length > 0 ? (
          <CompareRedirectButton onClick={CompareHandler}>
            Compare {CompareRecipe.length} Recipe{" "}
          </CompareRedirectButton>
        ) : null}
      </Wrapper>
    </div>
  );
};

export default RecipeList;
