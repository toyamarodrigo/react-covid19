import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../containers";

console.log("pre-render Router");
export const Router = () => {
  console.log("render Router");

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </BrowserRouter>
  );
};
