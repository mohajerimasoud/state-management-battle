import React from "react";
import Item from "../Item/Item";
import { useTodosStore } from "../store.zustand";

const HomePage = () => {
  const { deleteItem, todos, changeState } = useTodosStore((state) => state);

  return (
    <div>
      <p>To do :</p>

      {todos
        .filter((item) => !item.completed && item)
        .map((item) => {
          return (
            <Item
              toggle={() => changeState(item.id)}
              deleteItem={() => deleteItem(item.id)}
              id={item.id}
              title={item.title}
              completed={item.completed}
              key={item.id}
            />
          );
        })}
      <p>Done :</p>
      {todos
        .filter((item) => item.completed && item)
        .map((item) => {
          return (
            <Item
              toggle={() => changeState(item.id)}
              deleteItem={() => deleteItem(item.id)}
              id={item.id}
              title={item.title}
              completed={item.completed}
              key={item.id}
            />
          );
        })}
    </div>
  );
};

export default HomePage;
