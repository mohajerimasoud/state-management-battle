import React, { useContext, useState } from "react";

export const TodoContext = React.createContext({});

export const TodoCnx = () => useContext(TodoContext);

const FetchData = () => fetch("https://jsonplaceholder.typicode.com/todos");

export const TodoContextProvider = (props) => {
  const [Todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const FetchDataFromInternet = async () => {
    try {
      if (Todos.length < 1) {
        setLoading(true);
        const res = await FetchData();
        const data = await res.json();
        setTodos(data);
        setLoading(false);
      }
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const FindDataWithId = (id) => {
    const item = Todos.find((itm) => itm.id === +id);
    return item?.title;
  };

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

  const contextExportValue = {
    Todos,
    loading,
    error,
    FetchDataFromInternet,
    FindDataWithId,
    changeState,
    DeleteItem,
  };
  return (
    <TodoContext.Provider value={contextExportValue}>
      {props.children}
    </TodoContext.Provider>
  );
};
