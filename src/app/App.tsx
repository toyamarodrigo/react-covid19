import React from "react";

import { Router } from "./Router";

console.log("pre-render App");
function App() {
  console.log("render App");

  return <Router />;
}

export default App;
