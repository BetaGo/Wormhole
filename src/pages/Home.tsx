import React from "react";
import SearchBox from "../components/SearchBox/SearchBox";
import styled from "styled-components";
import Todos from "../components/Todos/Todos";

const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const Content = styled.div`
  width: 100%;
  margin: auto;
`;

const SearchContainer = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 0 10px;
`;

const TodosContainer = styled.div`
  max-width: 800px;
  height: 500px;
  margin: ${(props) => props.theme.spacing(3)}px auto;
`;

const Home = () => {
  return (
    <Root>
      <Content>
        <SearchContainer>
          <SearchBox />
        </SearchContainer>
        <TodosContainer>
          <Todos />
        </TodosContainer>
      </Content>
    </Root>
  );
};

export default Home;
