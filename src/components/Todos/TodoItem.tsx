import React from "react";
import { Todo } from "../../stores/TodoStore";

export interface ITodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<ITodoItemProps> = ({ todo }) => {
  return <div>{todo.title}</div>;
};

export default TodoItem;
