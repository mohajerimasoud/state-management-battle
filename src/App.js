import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailPage from "./Components/DetailPage/DetailPage";
import HomePage from "./Components/HomePage/HomePage";
import { useTodosStore } from "./Components/store.zustand";

const App = () => {
  const fetchData = useTodosStore((state) => state.fetchData);

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
