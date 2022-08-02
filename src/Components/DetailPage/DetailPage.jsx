import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { observer } from "mobx-react";
import { TodosStore } from "../todos.mobx";

const DetailPage = () => {
  let { id } = useParams();
  const [title, setTitle] = useState("");
  useEffect(() => {
    if (id) {
      setTitle(TodosStore.findDataWithId(id));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, TodosStore.todos]);

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

export default observer(DetailPage);
