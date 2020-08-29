import React from "react";
import styled from "styled-components";

const Root = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  & ::-webkit-scrollbar {
    width: 12px;
  }

  & ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    background-color: ${(props) => props.theme.palette.text.hint};
  }

  & ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
`;

const ThemedRoot: React.FC = ({ children }) => {
  return <Root>{children}</Root>;
};

export default ThemedRoot;
