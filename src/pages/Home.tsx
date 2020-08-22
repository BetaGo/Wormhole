import React from "react";
import SearchBox from "../components/SearchBox/SearchBox";
import styled from "styled-components";

const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const Content = styled.div`
  width: 100%;
  max-width: 600px;
  margin: auto;
  padding: 0 10px;
`;

const Home = () => {
  return (
    <Root>
      <Content>
        <SearchBox />
      </Content>
    </Root>
  );
};

export default Home;
