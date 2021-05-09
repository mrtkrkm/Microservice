import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
  AiOutlineSearch,
} from "react-icons/ai";
import { MdClose } from "react-icons/md";

import { connect } from "react-redux";
import { recipeSearch } from "../../actions/search";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  background-color: tomato;
  //height: 18vh;
  display: grid;
  grid-template-columns: 25% 50% 25%;
  grid-gap: 20px;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    height: 13vh;
    grid-gap: 5px;
    grid-template-columns: 100%;
    width: 100%;
  }

  @media only screen and (min-width: 600px) and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    height: 13vh;
    grid-gap: 5px;
    grid-template-columns: 100%;
    width: 100%;
  }
`;

const LogoSection = styled.p`
  @media only screen and (max-width: 600px) {
    height: 2px;
    text-align: center;
    width: 100%;
  }
  @media only screen and (min-width: 600px) and (max-width: 800px) {
    height: 2px;
    text-align: center;
    width: 100%;
  }
`;

const BasicSearcSection = styled.div`
  display: flex;
  width: 80%;
  background-color: white;
  height: 40px;
  margin-top: 10px;
  @media only screen and (max-width: 600px) {
    height: 30px;
    margin-left: 40px;
  }

  @media only screen and (min-width: 600px) and (max-width: 800px) {
    height: 40px;
    margin-left: 60px;
  }
`;

const BaseSearchInp = styled.input`
  width: 100%;
  border: none;

  //border: 0.5px solid white;
  padding: 4px;

  &:focus {
    outline: none;
    border-color: #719ece;
    box-shadow: 0 0 10px #719ece;
  }
`;

const SearchIcon = styled(AiOutlineSearch)`
  padding: 10px;
  display: flex;

  font-size: 20px;
  background: none;

  //background-color: white;
`;

const FilteringTypes = styled.p`
  @media only screen and (max-width: 600px) {
    display: none;
  }

  @media only screen and (min-width: 600px) and (max-width: 800px) {
    display: none;
  }
`;
const PlusIcon = styled(AiOutlinePlusCircle)`
  padding: 10px;
  display: flex;

  font-size: 30px;
  background: none;
`;

const MinusIcon = styled(AiOutlineMinusCircle)`
  padding: 10px;
  display: flex;

  font-size: 30px;
  background: none;
`;

const IncludeIngSearcSection = styled.div`
  display: flex;
  width: 80%;
  background-color: white;
  height: 40px;
  margin-top: 10px;
`;

const ExcludeIngSearcSection = styled.div`
  display: flex;
  width: 80%;
  background-color: white;
  height: 40px;
  margin-top: 10px;
`;

const CombinecSearcSection = styled.div`
  display: flex;
  width: 80%;
  background-color: white;
  height: 40px;
  margin-top: 10px;
`;

const CombineFilter = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;

const ExcludechInp = styled.input`
  width: 100%;
  border: none;

  //border: 0.5px solid white;
  padding: 4px;

  &:focus {
    outline: none;
    border-color: #719ece;
    box-shadow: 0 0 10px #719ece;
  }
`;

const IncludecInp = styled.input`
  width: 100%;
  border: none;
  //border: 0.5px solid white;
  padding: 4px;

  &:focus {
    outline: none;
    border-color: #719ece;
    box-shadow: 0 0 10px #719ece;
  }
`;

const AddItemSection = styled.div`
  display: flex;
  margin-left: 500px;

  @media only screen and (max-width: 600px) {
    display: none;
  }
  margin-bottom: 5px;
`;

const IncludeItem = styled.div`
  display: flex;
  align-items: center;
  background-color: black;
  color: white;
  margin-right: 5px;
`;

const ExcludeItem = styled.div`
  display: flex;
  align-items: center;
  background-color: black;
  color: white;
  padding: 15px;
  margin-right: 5px;
  text-decoration: line-through;
`;

const CloseItem = styled(MdClose)`
  margin-top: 2px;
  font-size: 22px;
  cursor: pointer;
`;

const Navigation = ({ data, recipeSearch }) => {
  const [filterClicked, setfilterClicked] = useState(false);

  const [values, setValues] = useState([data]);
  const [IncludeIngredientName, setIncludeIngredientName] = useState("");
  const [IngredientList, setIngredientList] = useState([]);

  const [ExcludeIngredientName, setExcludeIngredientName] = useState("");

  const [SearchText, setSearchText] = useState(data);

  const FilterHandler = () => {
    setfilterClicked(!filterClicked);
  };

  console.log("Ingredient List is " + IngredientList);
  const SearchTextHandler = (e) => {
    setSearchText(e.target.value);
    console.log(e.target.value);
  };

  const IncludeIngredientNameHandler = (e) => {
    e.preventDefault();
    setIncludeIngredientName(e.target.value);
  };

  const IncludeIngredientListHandler = (e) => {
    if (e.key === "Enter") {
      setIngredientList([
        ...IngredientList,
        { value: e.target.value, type: 1 },
      ]);
      setIncludeIngredientName("");

      setValues([...values, e.target.value]);

      const newss = [...values, e.target.value];

      recipeSearch("ingredients", newss);
    }
  };

  const ExcludeIngredientNameHandler = (e) => {
    e.preventDefault();
    setExcludeIngredientName(e.target.value);
  };

  const ExcludeIngredientListHandler = (e) => {
    if (e.key === "Enter") {
      setIngredientList([
        ...IngredientList,
        { value: e.target.value, type: 0 },
      ]);
      setExcludeIngredientName("");
    }
  };

  const removeHandler = (index) => {
    const news = [...IngredientList];
    news.splice(index, 1);
    setIngredientList(news);
  };

  const MultiFilter = () => {
    return (
      <>
        <CombineFilter>
          <CombinecSearcSection>
            <SearchIcon />
            <BaseSearchInp
              value={SearchText}
              onChange={SearchTextHandler}
              autoFocus={SearchText.length > 0 ? true : false}
              placeholder="Find your Recipe"
            />
          </CombinecSearcSection>

          <IncludeIngSearcSection>
            <IncludecInp
              value={IncludeIngredientName}
              autoFocus={IncludeIngredientName.length > 0 ? true : false}
              onChange={IncludeIngredientNameHandler}
              onKeyPress={IncludeIngredientListHandler}
              placeholder="Add Ingredients"
            />
            <PlusIcon />
          </IncludeIngSearcSection>
        </CombineFilter>
        <ExcludeIngSearcSection>
          <ExcludechInp
            value={ExcludeIngredientName}
            autoFocus={ExcludeIngredientName.length > 0 ? true : false}
            onChange={ExcludeIngredientNameHandler}
            onKeyPress={ExcludeIngredientListHandler}
            placeholder="Remove Ingredients"
          />
          <MinusIcon />
        </ExcludeIngSearcSection>
        {IngredientList.length > 0 ? (
          <AddItemSection>
            {IngredientList.map((item, index) => {
              return (
                <>
                  {item.type == 1 ? (
                    <IncludeItem>
                      {item.value}
                      <CloseItem onClick={() => removeHandler(index)} />
                    </IncludeItem>
                  ) : (
                    <ExcludeItem>
                      {item.value}
                      <CloseItem onClick={() => removeHandler(index)} />
                    </ExcludeItem>
                  )}
                </>
              );
            })}
          </AddItemSection>
        ) : null}
      </>
    );
  };

  return (
    <Wrapper>
      <LogoSection>Find your Food</LogoSection>
      {!filterClicked ? (
        <>
          <BasicSearcSection>
            <SearchIcon />
            <BaseSearchInp
              value={SearchText}
              onChange={SearchTextHandler}
              autoFocus={SearchText.length > 0 ? true : false}
              value={SearchText}
              onChange={SearchTextHandler}
              placeholder="Find your Recipe"
            />
          </BasicSearcSection>
          <FilteringTypes onClick={setfilterClicked}>
            Add/ Remove Ingredients
          </FilteringTypes>
        </>
      ) : (
        <MultiFilter />
      )}
    </Wrapper>
  );
};

Navigation.propTypes = {
  recipeSearch: PropTypes.func.isRequired,
};

export default connect(null, { recipeSearch })(Navigation);
