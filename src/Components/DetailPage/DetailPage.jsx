import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { TodosAtom } from "../todos.atom";
import { useRecoilValue } from "recoil";

const DetailPage = () => {
  let { id } = useParams();
  const Todos = useRecoilValue(TodosAtom);

  const [Title, setTitle] = useState("");

  const FindDataWithId = (id) => {
    const item = Todos.find((itm) => itm.id === +id);
    return item?.title;
  };

  const getItem = async () => {
    const theTitle = FindDataWithId(id);
    setTitle(theTitle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  useEffect(() => {
    getItem();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, Todos]);

  return (
    <div>
      <h2>DetailPage</h2>
      <div className="item-title">{Title}</div>
      <Link to="/" className="back-button">
        👈
      </Link>
    </div>
  );
};

export default DetailPage;
