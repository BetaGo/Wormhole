import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Divider,
} from "@material-ui/core";
import ListIcon from "@material-ui/icons/List";
import AddIcon from "@material-ui/icons/Add";
import styled from "styled-components";
import { useStores } from "../../hooks/useStores";
import { observer } from "mobx-react-lite";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  background-color: ${(props) => props.theme.palette.background.paper};
`;

const ListRoot = styled(List)`
  flex-grow: 1;
  overflow: auto;
`;

const FullWidthButton = styled(Button)`
  width: 100%;
`;

const TodoListMenu = () => {
  const { todoStore } = useStores();

  const handleAdd = () => {
    todoStore.addList("无标题清单");
  };

  return (
    <Root>
      <ListRoot>
        {todoStore.todoLists.map((v, index) => (
          <ListItem
            button
            onClick={(e) => {
              todoStore.selectedTodoListIndex = index;
            }}
          >
            <ListItemIcon>
              <ListIcon />
            </ListItemIcon>
            <ListItemText primary={v.name} />
          </ListItem>
        ))}
      </ListRoot>
      <div>
        <Divider />
        <FullWidthButton
          color="primary"
          startIcon={<AddIcon />}
          onClick={handleAdd}
        >
          新建清单
        </FullWidthButton>
      </div>
    </Root>
  );
};

export default observer(TodoListMenu);