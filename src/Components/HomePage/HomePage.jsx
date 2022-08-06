import React from "react";
import Item from "../Item/Item";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, toggleState } from "../../redux/todo.store";

const HomePage = () => {
  const loading = useSelector((state) => state.todo.loading);
  const todo = useSelector((state) => state.todo.todo);
  const dispatch = useDispatch();

  const deleteItemById = (id) => {
    dispatch(deleteItem({ id }));
  };

  const toggleItemById = (id) => {
    dispatch(toggleState({ id }));
  };

  return (
    <div>
      <p>To do :</p>
      {!loading &&
        todo
          ?.filter((item) => !item.completed && item)
          .map((item) => {
            return (
              <Item
                toggle={(id) => {
                  toggleItemById(id);
                }}
                deleteItem={(id) => {
                  deleteItemById(id);
                }}
                id={item.id}
                title={item.title}
                completed={item.completed}
                key={item.id}
              />
            );
          })}
      <p>Done :</p>
      {!loading &&
        todo
          ?.filter((item) => item.completed && item)
          .map((item) => {
            return (
              <Item
                toggle={(id) => {
                  toggleItemById(id);
                }}
                deleteItem={(id) => {
                  deleteItemById(id);
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

export default HomePage;
