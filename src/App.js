import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailPage from "./Components/DetailPage/DetailPage";
import HomePage from "./Components/HomePage/HomePage";
import { useRecoilState } from "recoil";
import { TodosAtom } from "./Components/todos.atom";

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [_, setTodos] = useRecoilState(TodosAtom);

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    setTodos(data);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <h1>State Management Battle</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
