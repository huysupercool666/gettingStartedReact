import React, { Profiler } from "react";
import { createRoot } from "react-dom/client";
import "../src/pages/QuickStart/avatar.css";
import "./pages/Tic-tac-toe/ticTacToe.css";
import HellWorld from "./pages/QuickStart/helloWorld";
import Profile from "./pages/QuickStart/avatar";
import ShoppingList from "./pages/QuickStart/renderFruit";
import CounterUpdateSameTime from "./pages/QuickStart/counterUpdateSameTime";
import CounterSeparated from "./pages/QuickStart/counterUpdateSeparated";
import FilterableProductTable from "./pages/ThinkInReact/filterableProductTable";
import TicTacToe from "./pages/Tic-tac-toe/TicTacToe";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Home() {
    return (
      <> 
      <div>
      <h1>Quick Start</h1>
        <ul>
          <li> Url Homework 1: <b>/Hello-World</b></li>
          <li> Url Homework 2: <b>Profile</b></li>
          <li> Url Homework 3: <b>/Shopping-List</b></li>
          <li> Url Homework 4: <b>/Counter-Update-Same-Time</b></li>
          <li> Url Homework 5: <b>/Counter-Separated</b></li>
        </ul>
          <h1>Think In React</h1>
        <ul>
          <li> Url Homework: Filterable Product Table: <b>/Product-Table</b></li>
        </ul>
          <h1>Tic Tac Toe</h1>
        <ul>
          <li> Url Homework: <b>/Tic-Tac-Toe</b></li>
        </ul>
      </div>
    <BrowserRouter>
      <Routes>
        <Route path="/Hello-World" element={<HellWorld />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Shopping-List" element={<ShoppingList />}/>
        <Route path="/Counter-Update-Same-Time" element={<CounterUpdateSameTime/>}/> 
        <Route path="/Counter-Separated" element={<CounterSeparated/>} />
        <Route path="/Product-Table" element={<FilterableProductTable/>} />
        <Route path="/Tic-Tac-Toe" element={<TicTacToe/>} />   
      </Routes>
    </BrowserRouter>
    </>
  );
}
const root = createRoot(document.getElementById("root"));
root.render(<Home />);

