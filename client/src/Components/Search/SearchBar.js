import React, { useState, useEffect } from "react";
import SearchModal from "./SearchModal";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { useHistory } from "react-router-dom";

const SearchInput = styled.input`
  padding: 40px;
  width: 500px;
  font-size: 30px;
  border: none;
  background: rgba(255, 255, 255, 0.004);
  @media only screen and (max-width: 600px) {
    padding: 20px;
    width: 440px;
    font-size: 20px;
  }

  &:focus {
    outline: none;
    border-color: none;
    box-shadow: none;
  }
`;

const SearchIcon = styled(AiOutlineSearch)`
  padding: 5px;
  font-size: 40px;
  margin-top: 2rem;
  //background-color: rgba(192, 192, 192, 0.3);
  @media only screen and (max-width: 600px) {
    padding: 5px;
    margin-top: 0.8rem;
    font-size: 25px;
    //background-color: rgba(192, 192, 192, 0.3);
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  width: 50vw;
  border-bottom: 1px solid black;
  //background-color: rgba(192, 192, 192, 0.3);
  @media only screen and (max-width: 850px) {
    display: flex;
    width: 100%;
    //background-color: rgba(192, 192, 192, 0.3);
  }
`;

const SearchBar = ({ clicked, Setclicked }) => {
  const [windowsSize, setwindowsSize] = useState(window.innerWidth);
  const [justify, setjustify] = useState("start");
  const [searchText, setSearchText] = useState("");

  const history = useHistory();
  useEffect(() => {
    function handleResize() {
      setwindowsSize(window.innerWidth);
      console.log(windowsSize);
      if (windowsSize > 700) {
        setjustify("center");
      }
      if (windowsSize < 700) {
        setjustify("start");
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  });

  //console.log(windowsSize);
  const ClickHandler = () => {
    Setclicked(!clicked);
  };

  const KeyHandler = (e) => {
    if (e.key === "Enter") {
      console.log("yes");
      history.push({ pathname: "/search", state: { input: searchText } });
    }
  };

  const searchHandler = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <SearchModal showModal={clicked} setShowModal={Setclicked}>
      <SearchWrapper>
        <SearchIcon />
        <SearchInput
          onKeyUp={KeyHandler}
          value={searchText}
          onChange={searchHandler}
          autoFocus
          placeholder="Please Enter Something to search"
        />
      </SearchWrapper>
    </SearchModal>
  );
};

export default SearchBar;
