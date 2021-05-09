import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-left: 20%;

  @media only screen and (max-width: 1200px) {
    margin-left: 9%;
  }
`;

const InputBox = styled.textarea`
  height: 150px;
  width: 36%;
  resize: none;

  @media only screen and (max-width: 1200px) {
    width: 92%;
  }
`;

const HeadSection = styled.p`
  border-bottom: 5px solid gray;
  width: 36%;
  font-size: 25px;
  text-transform: uppercase;

  @media only screen and (max-width: 1200px) {
    font-size: 20px;
    width: 92%;
  }
`;

const ReviewBox = () => {
  return (
    <Wrapper>
      <HeadSection>Leave A Review</HeadSection>
      <InputBox
        textAlignVertical="top"
        placeholder="Please Share your thoughts With Us.."
      ></InputBox>
    </Wrapper>
  );
};

export default ReviewBox;
