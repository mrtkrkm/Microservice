import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DropDownList from "../../Components/AdvancedSearch/DropDownList";
import Navigation from "../../Components/AdvancedSearch/Navigation";
import RecipeList from "../Recipes/RecipeList";
import { fake_data, DropdownFake } from "../../fakedata";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { recipeSearch } from "../../actions/search";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

const AdvancedSearch = ({ items, recipeSearch }) => {
  const location = useLocation();
  const input = location.state.input ? location.state.input : "";

  console.log("Input is" + input);
  const [menus, setmenus] = useState([]);
  const fake_data = null;
  // fetch("/api/Search/description/potato")
  // .then((res) => res.json())
  // .then((data) => {
  //   setItems(data.data);
  // });

  useEffect(() => {
    recipeSearch("ingredients", input);

    fetch("/api/Category/GetAll")
      .then((res) => res.json())
      .then((data) => {
        setmenus(data);
      });
  }, []);

  console.log(menus);
  return (
    <Wrapper>
      <Navigation data={input} />
      <DropDownList data={menus} />
      <RecipeList data={items} />
    </Wrapper>
  );
};

AdvancedSearch.propTypes = {
  recipeSearch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  items: state.search.items,
});

export default connect(mapStateToProps, { recipeSearch })(AdvancedSearch);
