import React from "react";
import NavigationHeader from "../navigation/NavigationHeader";
import MainRouter from "../navigation/MainRouter";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Layout = () => {
  return (
    <Wrapper>
      <NavigationHeader />
      <main>
        <MainRouter />
      </main>
    </Wrapper>
  );
};

export default Layout;
