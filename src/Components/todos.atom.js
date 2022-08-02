import { atom } from "recoil";

export const TodosAtom = atom({
  key: "Todos",
  default: [],
});

// export const FetchTodos = selector({
//   key: "FetchTodosSelector",
//   get: async ({ get }) => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos");
//     const data = await response.json();
//     return data;
//   },
// 	set: ({set}, newValue) =>
//     set(
//       tempFahrenheit,
//       newValue instanceof DefaultValue ? newValue : (newValue * 9) / 5 + 32
//     ),
// });
