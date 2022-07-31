import React from "react";
import Item from "../Item/Item";

const Mock = [
  {
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: true,
  },
  {
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
];
const HomePage = () => {
  return (
    <div>
      <p>To do :</p>

      {Mock.filter((item) => !item.completed && item).map((item) => {
        return (
          <Item
            id={item.id}
            title={item.title}
            completed={item.completed}
            key={item.id}
          />
        );
      })}
      <p>Done :</p>
      {Mock.filter((item) => item.completed && item).map((item) => {
        return (
          <Item
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
