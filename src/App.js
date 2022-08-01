import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailPage from "./Components/DetailPage/DetailPage";
import HomePage from "./Components/HomePage/HomePage";
import { observer } from "mobx-react";

const App = () => {
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
