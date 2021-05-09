import React from "react";
import styled from "styled-components";
import Rating from "../Rating";

const Wrapper = styled.div`
  width: 500px;
  height: 400px;

  border-right: 1px solid gray;
`;

const TitleSection = styled.p`
  text-align: center;
  font-size: 20px;

  &p {
    font-size: 12px;
  }
`;

const NumbersSection = styled.div`
  font-size: 22px;
  margin-left: 40%;
`;

const InfoSection = ({ data }) => {
  const ImageSection = styled.div`
    width: 400px;
    height: 250px;
    margin-left: 12%;
    background-size: 100% 100%;
    background-image: url(${data.image_url});
  `;
  return (
    <Wrapper>
      <ImageSection></ImageSection>
      <TitleSection>{data.title}</TitleSection>
      <NumbersSection>
        <Rating value={data.rating} />
        <p style={{ padding: "0px", marginLeft: "-5px" }}>
          Rating: {data.rating}/5
        </p>
      </NumbersSection>
    </Wrapper>
  );
};

export default InfoSection;
