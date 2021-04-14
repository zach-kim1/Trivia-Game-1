import React, { useState, useEffect } from "react";
import QuestionForm from "./components/QuestionForm";

//import QuestionButtons from "./components/QuestionButtons";

function App() {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
      fetch("https://opentdb.com/api.php?amount=10")
        .then((res) => res.json())
        .then((res) => {
          //console.log(res);
          setQuestions(res.results);
  
        })
  
    }, []);
const questionList = questions.map((question) => (
  <QuestionForm
    questionBody = {question.question}
    correct = {question.correct_answer}
    incorrect1 = {question.incorrect_answers[0]}
    incorrect2 ={question.incorrect_answers[1]}
    incorrect3 = {question.incorrect_answers[2]}
  />
)
);
return (
  <div>
      {questionList}

  </div>
  );
}
export default App;