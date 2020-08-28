import React from "react";
import { useStores } from "../../hooks/useStores";
import { Typography } from "@material-ui/core";
import { observer } from "mobx-react-lite";

const TodoList = () => {
  const { todoStore } = useStores();
  return (
    <div>
      <Typography>{todoStore.selectedTodoList?.name}</Typography>
    </div>
  );
};

export default observer(TodoList);
