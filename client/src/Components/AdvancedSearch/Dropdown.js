import React, { useState, useEffect, useRef } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import styled from "styled-components";

import { connect } from "react-redux";
import { recipeSearch } from "../../actions/search";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  //background-color: #596269;
  margin-right: 5px;
  height: 30px;
  width: 190px;
  z-index: 500;
`;

const Description = styled.div`
  display: flex;
  //background-color: #ffff;
  width: 120px;
  color: white;

  cursor: pointer;
`;

const CategoryName = styled.p`
  font-size: 12px;
`;

const DropIcon = styled(AiFillCaretDown)`
  padding: 17px;
  font-size: 17px;
  cursor: pointer;
`;

const ItemList = styled.ul`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0;
  margin-top: 0;
  margin-left: 0;
  background-color: #ffff;
  //border: 1px solid black;
  width: 200px;
  cursor: pointer;
`;

const Item = styled.div`
  display: flex;
`;

const ItemCheckbox = styled.input`
  //padding: 15px;
  height: 30px;
  width: 30px;
`;

const FilterButton = styled.button`
  background-color: #141414;
  padding: 12px;
  width: 100px;
  cursor: pointer;
`;

const ItemName = styled.p`
  margin-top: 10px;
`;

const AllItemList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;

  padding: 0;
  margin-top: 10;
  margin-left: 0;
  background-color: #ffff;
  border: 1px solid black;
  width: 800px;
  cursor: pointer;
`;

const AllItem = styled.div`
  display: flex;
  margin: 14px;
  //background-color: black;
  width: 90px;
`;

const CancelButton = styled.button`
  background-color: rgb(255, 20, 50);
  padding: 12px;
  width: 100px;
  cursor: pointer;
`;

const ButtonGroup = styled.div`
  display: flex;
  width: 400px;
`;

const Dropdown = ({ items, name, recipeSearch }) => {
  const [searchItem, setsearchItem] = useState([]);
  const [Open, setOpen] = useState(false);
  const [MoreFilter, setMoreFilter] = useState(false);

  const values = [];
  const OpenHandler = () => {
    setOpen(!Open);
  };

  const MoreFilterHandler = () => {
    setMoreFilter(!MoreFilter);
    if (MoreFilter) {
      setOpen(!Open);
    }
  };

  const CheckboxHandler = (e) => {
    console.log(e.target.value);
    console.log(e.target.checked);
    if (e.target.checked) {
      values.push(e.target.value);
    }
    recipeSearch("categories", values);
  };

  const BasicFilter = () => {
    return (
      <Wrapper onMouseLeave={OpenHandler}>
        <Description onMouseEnter={OpenHandler}>
          <CategoryName>{name}</CategoryName>
          <DropIcon />
        </Description>
        <ItemList>
          {Open ? (
            <div clasName="withButton" onMouseLeave={OpenHandler}>
              <div>
                {firstItems.map((item, index) => {
                  return (
                    <Item key={index}>
                      <ItemCheckbox
                        value={item}
                        type="checkbox"
                        onClickCapture={CheckboxHandler}
                      />
                      <ItemName>{item}</ItemName>
                    </Item>
                  );
                })}
              </div>
              {items != firstItems && Open ? (
                <FilterButton onClick={MoreFilterHandler}>
                  More Filter
                </FilterButton>
              ) : null}
            </div>
          ) : null}
        </ItemList>
      </Wrapper>
    );
  };

  useEffect(() => {}, [MoreFilter]);
  const AdvancedFilter = () => {
    return (
      <Wrapper>
        <Description onMouseEnter={OpenHandler}>
          <CategoryName>{name}</CategoryName>
          <DropIcon />
        </Description>

        {Open ? (
          <div clasName="withButton" onMouseLeave={OpenHandler}>
            <AllItemList>
              {items.map((item, index) => {
                return (
                  <AllItem key={index}>
                    <ItemCheckbox type="checkbox" />
                    <ItemName>{item}</ItemName>
                  </AllItem>
                );
              })}
              <ButtonGroup>
                <FilterButton>SEARCH</FilterButton>
                <CancelButton onClick={MoreFilterHandler}>CANCEL</CancelButton>
              </ButtonGroup>
            </AllItemList>
          </div>
        ) : null}
      </Wrapper>
    );
  };

  const firstItems = items.length > 8 ? items.slice(0, 8) : items;
  return <div>{MoreFilter ? <AdvancedFilter /> : <BasicFilter />};</div>;
};

export default connect(null, { recipeSearch })(Dropdown);
