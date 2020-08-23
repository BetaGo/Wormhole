import { Typography, Paper } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import Split from "react-split";

import TodoList from "./TodoList";
import TodoListMenu from "./TodoListMenu";

const Root = styled(Paper)`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  overflow: hidden;
`;

const StyledSplit = styled(Split)`
  display: flex;
  flex-direction: row;
  width: 100%;

  & .gutter.gutter-horizontal {
    display: flex;
    position: relative;
    cursor: col-resize;
    background: linear-gradient(
      90deg,
      transparent 45%,
      ${(props) => props.theme.palette.divider} 0,
      ${(props) => props.theme.palette.divider} 55%,
      transparent 0
    );
    background-size: 10px 100%;
  }
`;

const Todos = () => {
  return (
    <Root>
      <StyledSplit
        sizes={[32, 68]}
        direction="horizontal"
        cursor="col-resize"
        gutterSize={10}
        elementStyle={(dimension, size, gutterSize) => {
          return {
            "flex-basis": "calc(" + size + "% - " + gutterSize + "px)",
          };
        }}
        gutterStyle={(dimension, gutterSize) => {
          return {
            "flex-basis": gutterSize + "px",
          };
        }}
      >
        <TodoListMenu />
        <TodoList />
      </StyledSplit>
    </Root>
  );
};

export default Todos;
