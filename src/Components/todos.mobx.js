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
}

export const TotosStore = new Todos();
