import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getTitle } from "../../redux/todo.store";

const DetailPage = () => {
  let { id } = useParams();
  const title = useSelector((state) => state.todo.title);
  const dispatch = useDispatch();

  const getItemById = (id) => {
    dispatch(getTitle({ id }));
  };

  useEffect(() => {
    getItemById(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div>
      <h2>DetailPage</h2>
      <div className="item-title">{title}</div>
      <Link to="/" className="back-button">
        👈
      </Link>
    </div>
  );
};

export default DetailPage;
