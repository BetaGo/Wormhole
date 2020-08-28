import React from "react";
import { TodoStore } from "../stores";

const stores = {
  todoStore: new TodoStore(),
};

// @ts-ignore
window.__MOBX_STORES__ = stores;

export const storesContext = React.createContext(stores);
