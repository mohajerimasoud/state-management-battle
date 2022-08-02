import { makeAutoObservable } from "mobx";

// Model the application state.
class Todos {
  todos = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchTodos() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        this.todos = data;
      });
  }

  toggleTodoStatus(id) {
    const newTodos = this.todos.map((td) => {
      if (td.id === id) {
        return {
          ...td,
          completed: !td.completed,
        };
      } else {
        return td;
      }
    });

    this.todos = newTodos;
  }

  deleteItem(id) {
    const newTodos = this.todos.filter((td) => td.id !== id);
    this.todos = newTodos;
  }

  findDataWithId(id) {
    const item = this.todos.find((itm) => itm.id === +id);
    return item?.title;
  }
}

export const TodosStore = new Todos();
