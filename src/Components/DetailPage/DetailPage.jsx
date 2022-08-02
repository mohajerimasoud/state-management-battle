import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useTodosStore } from "../store.zustand";

const DetailPage = () => {
  let { id } = useParams();
  const { title, todos, findDataWithId } = useTodosStore((state) => state);

  useEffect(() => {
    if (id && todos.length > 0) {
      findDataWithId(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, todos]);

  return (
    <div>
      <h2>DetailPage</h2>
      <div className="item-title">{title} </div>
      <Link to="/" className="back-button">
        👈
      </Link>
    </div>
  );
};

export default DetailPage;
