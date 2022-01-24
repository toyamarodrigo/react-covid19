import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../containers";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </BrowserRouter>
  );
};
