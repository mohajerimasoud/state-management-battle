import React, { useEffect } from "react";
import Item from "../Item/Item";
import { TodoCnx } from "../Todo.context";

const HomePage = () => {
  const {
    FetchDataFromInternet,
    Todos,
    loading,
    error,
    changeState,
    DeleteItem,
  } = TodoCnx();

  useEffect(() => {
    FetchDataFromInternet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <>
          <p>To do :</p>

          {Todos.filter((item) => !item.completed && item).map((item) => {
            return (
              <Item
                DeleteItem={DeleteItem}
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
                DeleteItem={DeleteItem}
                toggle={changeState}
                id={item.id}
                title={item.title}
                completed={item.completed}
                key={item.id}
              />
            );
          })}
        </>
      )}
      {error && <pre>error : {JSON.stringify(error, null, 2)}</pre>}
    </div>
  );
};

export default HomePage;
