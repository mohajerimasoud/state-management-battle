import create from "zustand";

export const useTodosStore = create((set) => ({
  todos: [],
  title: "",
  fetchData: async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    set({ todos: data });
  },
  changeState: (id) => {
    set((state) => {
      const newTodos = state.todos.map((td) => {
        if (td.id === id) {
          return {
            ...td,
            completed: !td.completed,
          };
        } else {
          return td;
        }
      });

      set({ todos: newTodos });
    });
  },
  deleteItem: (id) => {
    set((state) => {
      const newTodos = state.todos.filter((td) => td.id !== id);
      set({ todos: newTodos });
    });
  },
  findDataWithId: (id) => {
    set((state) => {
      const item = state.todos.find((itm) => itm.id === +id);
      set({ ...state, title: item?.title });
    });
  },
}));
