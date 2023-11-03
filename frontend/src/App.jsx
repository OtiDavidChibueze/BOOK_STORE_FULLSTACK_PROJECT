import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/HomePage/Home";
import ShowBook from "./components/pages/ShowBook/ShowBook";
import EditBook from "./components/pages/EditBook/EditBook";
import CreateBook from "./components/pages/CreateBook/CreateBook";
import DeleteBook from "./components/pages/DeleteBook/DeleteBook";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/api/v1/books/details/:id"
        element={<ShowBook />}
      />
      <Route
        path="/api/v1/books/edit/:id"
        element={<EditBook />}
      />
      <Route
        path="/api/v1/books/create"
        element={<CreateBook />}
      />
      <Route
        path="/api/v1/books/delete/:id"
        element={<DeleteBook />}
      />
    </Routes>
  );
};

export default App;
