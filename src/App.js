import React, { useEffect, useState } from "react";
import "./App.css";
import questions from "./questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";
import Navbar from "./components/QuestionBox";
import lightpng from "./Assets/Light-Mode-image.png";

function App() {
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;
