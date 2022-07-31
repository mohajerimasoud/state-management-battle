import React from "react";
import { Link } from "react-router-dom";

const DetailPage = () => {
  // let { id } = useParams();

  return (
    <div>
      <h2>DetailPage</h2>
      <div className="item-title">title asd asd asd asd asd </div>
      <Link to="/" className="back-button">
        👈
      </Link>
    </div>
  );
};

export default DetailPage;
