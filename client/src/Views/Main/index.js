import React, { useState } from "react";
import Aux from "../../hoc/Auxi";
import SearchSection from "./SearchSection";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 70vh;
`;
const Index = () => {
  return (
    <Aux>
      <Wrapper>
        <SearchSection />
      </Wrapper>
    </Aux>
  );
};

export default Index;
