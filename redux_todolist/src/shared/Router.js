import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoList from "../pages/TodoList";
import Work from "../pages/Work";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="Work/:id" element={<Work />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
