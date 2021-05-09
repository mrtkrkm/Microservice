import React, { useState, useEffect } from "react";
import { GiKnifeFork } from "react-icons/gi";
import styled from "styled-components";

const FullRate = styled(GiKnifeFork)`
  color: tomato;
  font-size: 30;
`;

const HalfRate = styled(GiKnifeFork)`
  color: linear-gradient(to right, tomato, gray);
  font-size: 10;
`;

const EmptyRate = styled(GiKnifeFork)`
  color: gray;
  font-size: 30;
`;

const Wrapper = styled.div`
  display: flex;

  &:hover {
    color: black;
  }
`;

const Rating = ({ value }) => {
  const [stars, setStars] = useState([]);

  const getStars = (value) => {
    const stars = [];
    const [whole, part] = parseFloat(value).toString().split(".");
    console.log(part);
    for (let i = 0; i < whole; i++)
      stars.push(<FullRate value="3" onClick={ActiveHandler(1)} />);
    if (part) stars.push(<HalfRate value={whole + 1} />);
    for (let i = whole; i < (part ? 4 : 5); i++)
      stars.push(<EmptyRate value={i + 1} />);

    return stars;
  };

  useEffect(() => {
    setStars(getStars(value));
  }, []);

  const ActiveHandler = (value) => {
    const newvalue = value;
    console.log(newvalue);
    const newstars = [];
    for (let i = 0; i < newvalue; i++) newstars.push(<FullRate />);
    for (let i = newvalue; i < 5; i++) newstars.push(<EmptyRate />);

    setStars(newstars);

    console.log(stars);
  };
  return (
    <Wrapper>
      {stars.map((item, index) => {
        return item;
      })}
    </Wrapper>
  );
};

export default Rating;
