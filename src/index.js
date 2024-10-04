import React, { Profiler } from "react";
import { createRoot } from "react-dom/client";
import "../src/pages/QuickStart/avatar.css";
import "./pages/Tic-tac-toe/tic-tac-toe.css";
import HellWorld from "./pages/QuickStart/helloWorld";
import Profile from "./pages/QuickStart/avatar";
import ShoppingList from "./pages/QuickStart/renderFruit";
import CounterUpdateSameTime from "./pages/QuickStart/counterUpdateSameTime";
import CounterSeparated from "./pages/QuickStart/counterUpdateSeparated";
import FilterableProductTable from "./pages/ThinkInReact/filterableProductTable";
import Tic_tac_toe from "./pages/Tic-tac-toe/tic-tac-toe";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export default function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/HelloWorld" element={<HellWorld />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/ShoppingList" element={<ShoppingList />}/>
        <Route path="/CounterUpdateSameTime" element={<CounterUpdateSameTime/>}/>
        <Route path="/CounterSeparated" element={<CounterSeparated/>} />
        <Route path="/FilterableProductTable" element={<FilterableProductTable/>} />
        <Route path="/Tic_tac_toe" element={<Tic_tac_toe/>} />
      </Routes>
    </BrowserRouter>
  );
}
const root = createRoot(document.getElementById("root"));
root.render(<Home />);

