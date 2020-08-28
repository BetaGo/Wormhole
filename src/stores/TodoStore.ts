import { observable, computed, action } from "mobx";

export class Todo {
  id: string;

  @observable
  title: string;

  @observable
  comment?: string;

  @observable
  finished: boolean = false;

  @observable
  deadline?: Date;

  constructor(title: string) {
    this.title = title;
    this.id = Date.now().toString();
  }
}

export class TodoList {
  id: string;

  @observable
  name: string;

  @observable
  todos: Todo[] = [];

  constructor(name: string) {
    this.name = name;
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
  @observable
  selectedTodoListIndex?: number;

  @observable
  editingSelected: boolean = false;

  @observable
  todoLists: TodoList[] = [];

  @computed get selectedTodoList(): TodoList | undefined {
    if (this.selectedTodoListIndex === undefined) return undefined;
    return this.todoLists[this.selectedTodoListIndex];
  }

  @action
  addList(name: string) {
    this.todoLists.push(new TodoList(name));
    const newListIndex = this.todoLists.length - 1;
    this.selectedTodoListIndex = newListIndex;
    this.editingSelected = true;
  }

  @action
  removeList(id: string) {
    this.todoLists = this.todoLists.filter((v) => v.id !== id);
  }
}
