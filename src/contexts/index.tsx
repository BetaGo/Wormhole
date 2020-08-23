import React from "react";
import { TodoStore } from "../stores";

export const storesContext = React.createContext({
  todoStore: new TodoStore(),
});
