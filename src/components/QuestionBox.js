// components/QuestionBox.js
import React, { useState } from "react";
import questions from "../questions";
import Result from "./Result";

function QuestionBox() {
  const [q_no, setQuesNo] = useState(0);
  const [isResult, setIsResult] = useState(false);
  const [count, setCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [highlightedOptions, setHighlightedOptions] = useState([]);

  const ClickOption = (selectedOption) => {
    const correctOption = questions[q_no].answer;
    const isCorrect = selectedOption === correctOption;

    setHighlightedOptions([
      ...highlightedOptions,
      { q_no, selectedOption, isCorrect },
    ]);

    if (q_no < questions.length - 1) {
      setQuesNo(q_no + 1);
    } else {
      setIsResult(true);
    }

    if (isCorrect) {
      setCount(count + 1);
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const Question = questions[q_no];

  if (isResult) {
    return (
      <Result
        correctCount={count}
        wrongCount={questions.length - count}
        highlightedOptions={highlightedOptions}
      />
    );
  }

  return (
    <div className={`quiz-main ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <button className="dark-mode" onClick={toggleDarkMode}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <div className="Questions">
        <h1>Question</h1>
        <h4>
          {q_no + 1} of {questions.length}
        </h4>
        <h2>{Question.question}</h2>
        <div className="buttons">
          {Question.options.map((option, index) => (
            <button
              key={index}
              className={`option${index + 1}`}
              onClick={() => ClickOption(index)}
            >
              {option.text}
            </button>
          ))}
          <button className="highlight">Highlight Question</button>
          <button className="quit">Quit</button>
        </div>
      </div>
    </div>
  );
}

export default QuestionBox;
