import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Calculator } from "./CalculatorComps/Calculator";
import { Navigator } from "./Navigator";
import { AgeCalculator } from "./Age Calculator/AgeCalculator";
import { BMICalculator } from "./BMI calculator/BMICalculator";
import { SearchApp } from "./SearchApp/SearchApp";
import { TodoList } from "./TodoList/TodoList";
function App() {
  return (
    <div className="App ">
      <Router>
        <Navigator />
        <Routes>
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/agecalculator" element={<AgeCalculator />} />
          <Route path="/bmicalculator" element={<BMICalculator />} />
          <Route path="/searchapp" element={<SearchApp />} />
          <Route path="/todoList" element={<TodoList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
