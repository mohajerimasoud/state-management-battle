import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk(
  "todo/fetchTodosStatus",
  async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await res.json();
    return todos;
  }
);

const initialState = {
  todo: [],
  loading: true,
  title: "",
};

export const todosSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    deleteItem: (state, action) => {
      const { id } = action.payload;
      const newTodos = state.todo.filter((td) => td.id !== id);
      state.todo = newTodos;
    },
    toggleState: (state, action) => {
      const { id } = action.payload;
      const newTodos = state.todo.map((td) => {
        if (td.id === id) {
          return {
            ...td,
            completed: !td.completed,
          };
        } else {
          return td;
        }
      });

      state.todo = newTodos;
    },
    getTitle: (state, action) => {
      const { id } = action.payload;
      const item = state.todo.find((itm) => itm.id === +id);
      state.title = item?.title;
    },
  },
  extraReducers: {
    [fetchTodos.pending]: (state, _) => {
      state.loading = true;
    },
    [fetchTodos.fulfilled]: (state, action) => {
      state.todo = action.payload;
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { deleteItem, toggleState, getTitle } = todosSlice.actions;

export default todosSlice.reducer;
