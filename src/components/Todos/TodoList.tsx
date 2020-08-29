import { InputBase, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import styled from "styled-components";

import { useStores } from "../../hooks/useStores";
import EditableText from "../EditableText/EditableText";
import TodoItem from "./TodoItem";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${(props) => props.theme.spacing(2)}px;
`;

const ListHeader = styled.div`
  margin: 0;
  height: 60px;
  display: flex;
  align-items: center;
`;

const ListContainer = styled.div`
  flex: 1;
`;

const InputContainer = styled.div`
  background: rgba(0, 0, 0, 0.1);
  padding: 8px;
  border-radius: 8px;
  & .MuiInputBase-root {
    width: 100%;
  }
`;

const Empty = styled.div`
  margin: auto;
`;

const TodoList: React.FC = () => {
  const { todoStore } = useStores();
  const [editingName, setEditingName] = useState(false);
  const [inputTodoText, setInputTodoText] = useState("");

  const handleAddTodo = () => {
    todoStore.selectedTodoList?.add(inputTodoText);
  };

  if (!todoStore.selectedTodoList)
    return (
      <Root>
        <Empty>Nothing to show</Empty>
      </Root>
    );
  return (
    <Root>
      <ListHeader>
        <Typography variant="h5" onClick={() => setEditingName(true)}>
          <EditableText
            editing={editingName}
            text={todoStore.selectedTodoList?.name}
            onEditEnd={(t) => {
              if (todoStore.selectedTodoList) {
                if (t) {
                  todoStore.selectedTodoList.name = t;
                }
                setEditingName(false);
              }
            }}
          />
        </Typography>
      </ListHeader>

      <ListContainer>
        {todoStore.selectedTodoList?.todos.map((todo) => (
          <TodoItem>{todo.title}</TodoItem>
        ))}
      </ListContainer>
      <InputContainer>
        <InputBase
          onChange={(e) => setInputTodoText(e.target.value)}
          value={inputTodoText}
          startAdornment={<AddIcon />}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (inputTodoText) {
                handleAddTodo();
                setInputTodoText("");
              }
            }
          }}
        />
      </InputContainer>
    </Root>
  );
};

export default observer(TodoList);
