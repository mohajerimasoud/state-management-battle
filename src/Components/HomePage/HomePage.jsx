import React from "react";
import Item from "../Item/Item";
import { TodosStore } from "../todos.mobx";
import { observer } from "mobx-react";

const HomePage = () => {
  return (
    <div>
      <p>To do :</p>
      {TodosStore.todos
        .filter((item) => !item.completed && item)
        .map((item) => {
          return (
            <Item
              toggle={() => TodosStore.toggleTodoStatus(item.id)}
              deleteItem={() => {
                TodosStore.deleteItem(item.id);
              }}
              id={item.id}
              title={item.title}
              completed={item.completed}
              key={item.id}
            />
          );
        })}
      <p>Done :</p>
      {TodosStore.todos
        .filter((item) => item.completed && item)
        .map((item) => {
          return (
            <Item
              toggle={() => TodosStore.toggleTodoStatus(item.id)}
              deleteItem={() => {
                TodosStore.deleteItem(item.id);
              }}
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

export default observer(HomePage);
