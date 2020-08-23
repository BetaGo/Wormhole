import { observable } from "mobx";

export class Todo {
  id: string;

  @observable
  comment?: string;

  @observable
  finished: boolean = false;

  @observable
  deadline?: Date;

  constructor(public title: string) {
    this.id = Date.now().toString();
  }
}

export class TodoList {
  id: string;

  @observable
  todos: Todo[] = [];

  constructor(public name: string) {
    this.id = Date.now().toString();
  }

  add(title: string) {
    const todo = new Todo(title);
    this.todos.push(todo);
  }

  remove(id: string) {
    this.todos = this.todos.filter((v) => v.id !== id);
  }
}

export class TodoStore {
  todoLists: TodoList[] = [];

  addList(name: string) {
    this.todoLists.push(new TodoList(name));
  }

  removeList(id: string) {
    this.todoLists = this.todoLists.filter((v) => v.id !== id);
  }
}
