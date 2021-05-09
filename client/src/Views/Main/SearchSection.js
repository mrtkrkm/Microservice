import React, { useState } from "react";

import SearchBar from "../../Components/Search/SearchBar";
import { AiOutlineSearch } from "react-icons/ai";

import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

const SearcInput = styled.div`
  width: 45%;
  border: 1px solid white;
  height: 4vh;
  margin-top: 1px;
  background: rgba(255, 255, 255, 0.6);
  @media only screen and (max-width: 600px) {
    width: 300px;
  }
`;

const SearchIcon = styled(AiOutlineSearch)`
  padding: 7px;
  font-size: 30px;
  height: 3vh;
  background: rgba(255, 255, 255, 0.6);
  border: none;
  @media only screen and (max-width: 600px) {
    font-size: 25px;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  padding: 5px;
  position: relative;
  top: 40%;
  left: 30%;
  width: 70%;
  @media only screen and (max-width: 600px) {
    width: 450px;
    left: 10%;
  }
  //transform: translate(50%, 50%);
`;

const MainWrapper = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  height: 70vh;
  background-size: 100% 100%;
  background-image: url("https://readcacao.com/wp-content/uploads/2019/07/chocolate-ingredients-min.jpg");
  @media only screen and (max-width: 600px) {
    height: 70vh;
  }
`;

const SearchSection = () => {
  const [clicked, setclicked] = useState(false);

  const ClickHandler = () => {
    setclicked(true);
  };

  return (
    <MainWrapper>
      <SearchWrapper>
        <SearchIcon />
        <SearcInput
          placeholder="Please enter something to searcssss"
          onClick={ClickHandler}
        />
        {clicked ? (
          <SearchBar clicked={clicked} Setclicked={setclicked} />
        ) : null}
      </SearchWrapper>
    </MainWrapper>
  );
};

export default SearchSection;
