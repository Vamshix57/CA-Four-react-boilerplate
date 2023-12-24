// components/Result.js
import React from "react";

function Result({ correctCount, wrongCount, highlightedOptions }) {
  return (
    <div className="result-container">
      <h1>Quiz Result</h1>
      <p>Correct Answers: {correctCount}</p>
      <p>Wrong Answers: {wrongCount}</p>
      <h2>Highlighted Answers:</h2>
      <ul>
        {highlightedOptions.map((highlight, index) => (
          <li key={index}>
            Question {highlight.q_no + 1}: Option {highlight.selectedOption + 1}{" "}
            - {highlight.isCorrect ? "Correct" : "Wrong"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Result;
