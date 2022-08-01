import React from "react";
import Item from "../Item/Item";
import { useRecoilState } from "recoil";
import { TodosAtom } from "../todos.atom";

const HomePage = () => {
  const [Todos, setTodos] = useRecoilState(TodosAtom);

  const changeState = (id) => {
    const newTodos = Todos.map((td) => {
      if (td.id === id) {
        return {
          ...td,
          completed: !td.completed,
        };
      } else {
        return td;
      }
    });

    setTodos(newTodos);
  };

  const DeleteItem = (id) => {
    const newTodos = Todos.filter((td) => td.id !== id);
    setTodos(newTodos);
  };

  return (
    <div>
      <p>To do :</p>

      {Todos.filter((item) => !item.completed && item).map((item) => {
        return (
          <Item
            deleteItem={DeleteItem}
            toggle={changeState}
            id={item.id}
            title={item.title}
            completed={item.completed}
            key={item.id}
          />
        );
      })}
      <p>Done :</p>
      {Todos.filter((item) => item.completed && item).map((item) => {
        return (
          <Item
            deleteItem={DeleteItem}
            toggle={changeState}
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
