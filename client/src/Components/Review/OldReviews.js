import React from "react";
import Rating from "../Recipes/Rating";
import styled from "styled-components";
import { SiCodechef } from "react-icons/si";

const Wrapper = styled.div`
  margin-left: 20%;
  display: flex;
  margin-top: 10px;
  padding-bottom: 15px;
  border-bottom: 2px solid gray;
  width: 30%;
  justify-content: space-between;

  @media only screen and (max-width: 1200px) {
    margin-left: 8%;
    display: grid;
    grid-template-columns: 15% 85%;
    width: 88%;
  }
`;

const AllCommentSection = styled.div``;

const CommentSection = styled.div`
  font-size: 15px;
`;

const UserSection = styled.div`
  margin-right: 20px;
`;

const ReportButton = styled.button`
  position: absolute;
  right: 52%;
  width: 70px;
  padding: 0;

  background-color: red;
  height: 35px;

  @media only screen and (max-width: 1200px) {
    right: 15%;
  }
`;

const UserIcon = styled(SiCodechef)`
  font-size: 45px;
`;

const UserInfo = styled.p`
  margin-top: 5px;
  font-size: 18px;
  color: tomato;
`;

const OldReviews = ({ data }) => {
  return (
    <Wrapper>
      <UserSection>
        <UserIcon />
        <UserInfo>{data.userName}</UserInfo>
      </UserSection>

      <AllCommentSection>
        <CommentSection>{data.review}</CommentSection>

        <ReportButton>Report</ReportButton>
      </AllCommentSection>
    </Wrapper>
  );
};

export default OldReviews;
