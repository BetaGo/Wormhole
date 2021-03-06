import {
  Divider as MUIDivider,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Paper,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { observer, useLocalStore } from "mobx-react-lite";
import React from "react";
import styled from "styled-components";
import ClearIcon from "@material-ui/icons/Clear";

import IconFont from "../Icon/IconFont";

const Root = styled(Paper)`
  padding: 2px 4px;
  display: flex;
  align-items: center;
`;

const Input = styled(InputBase)`
  margin-left: ${(props) => props.theme.spacing(1)}px;
  flex: 1;
`;

const Divider = styled(MUIDivider)`
  height: 1em;
  margin: auto 0.5em;
`;

const SearchBox = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const store = useLocalStore(() => ({
    searchEngineName: "google",
    searchText: "",
  }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!store.searchText) return;
    switch (store.searchEngineName) {
      case "google":
        window.open(
          "https://www.google.com/search?q=" +
            encodeURIComponent(store.searchText)
        );
        break;
      case "stack-overflow":
        window.open(
          "https://stackoverflow.com/search?q=" +
            encodeURIComponent(store.searchText)
        );
        break;
      case "baidu":
        window.open(
          "https://www.baidu.com/s?wd=" + encodeURIComponent(store.searchText)
        );
        break;

      default:
        break;
    }
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleSelectSearchEngine = (name: string) => () => {
    store.searchEngineName = name;
    handleCloseMenu();
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };
  return (
    <Root component="form" onSubmit={handleSubmit}>
      <IconButton
        onClick={(e) => {
          setAnchorEl(e.currentTarget);
        }}
      >
        <IconFont name={store.searchEngineName} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={handleSelectSearchEngine("google")}>
          <IconFont name="google" />
          <Divider orientation="vertical" />
          Google
        </MenuItem>
        <MenuItem onClick={handleSelectSearchEngine("baidu")}>
          <IconFont name="baidu" />
          <Divider orientation="vertical" />
          BaiDu
        </MenuItem>
        <MenuItem onClick={handleSelectSearchEngine("stack-overflow")}>
          <IconFont name="stack-overflow" />
          <Divider orientation="vertical" />
          StackOverflow
        </MenuItem>
      </Menu>
      <Input
        autoFocus
        inputRef={inputRef}
        value={store.searchText}
        onChange={(e) => (store.searchText = e.target.value)}
        placeholder={`Search with ${store.searchEngineName}`}
        endAdornment={
          store.searchText && (
            <IconButton
              size="small"
              onClick={() => {
                store.searchText = "";
                inputRef.current?.focus();
              }}
            >
              <ClearIcon fontSize="inherit" />
            </IconButton>
          )
        }
      ></Input>
      <IconButton type="submit">
        <SearchIcon />
      </IconButton>
    </Root>
  );
};

export default observer(SearchBox);
