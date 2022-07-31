import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  const { id, title, completed } = props;

  return (
    <div className={`item ${completed ? "done-item" : "todo-item"} `}>
      <Link className="item-title" to={`/${id}`}>
        {title}
      </Link>
      <div>
        <button
          className="item-button"
          onClick={() => {
            console.log("delete", id);
          }}
        >
          🗑
        </button>

        <button
          className="item-button"
          onClick={() => {
            console.log("complete", id);
          }}
        >
          {completed ? <div>👆</div> : <div>👇</div>}
        </button>
      </div>
    </div>
  );
};

export default Item;
