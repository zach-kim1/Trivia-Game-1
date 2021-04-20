import Button from "@material-ui/core/Button";
import React, { useState, useEffect } from "react";
import QuestionForm from "./components/QuestionForm";
var he = require('he');

//import QuestionButtons from "./components/QuestionButtons";

function App() {
  const [questions, setQuestions] = useState([]);
  const [counter,setCounter] =useState(0);


  useEffect(() => {
      fetch("https://opentdb.com/api.php?amount=10")
        .then((res) => res.json())
        .then((res) => {
          //console.log(res);
          for(let i = 0 ; i < res.results.length; i++){
            if(res.results.type==="boolean"){
              res.results[i].question = he.decode(res.results[i].question)

            }else{
              res.results[i].question = he.decode(res.results[i].question)
              res.results[i].correct_answer = he.decode(res.results[i].correct_answer)
              for(let j = 0; j < res.results[i].incorrect_answers.length; j++){
                res.results[i].incorrect_answers[j] = he.decode(res.results[i].incorrect_answers[j])

              }
              //res.results[i].incorrect_answers[0] = he.decode(res.results[i].incorrect_answers[0])
              //res.results[i].incorrect_answers[1] = he.decode(res.results[i].incorrect_answers[1])
              //res.results[i].incorrect_answers[2] = he.decode(res.results[i].incorrect_answers[2])
            }
          }
          setQuestions(res.results);
  
        })
  
    }, []);


function editCounter(){
  setCounter(counter+1)
}

const questionList = questions.map((question) => (
  <QuestionForm
    name = {question.correct_answer}
    questionBody = {question.question}
    correct = {question.correct_answer}
    incorrect1 = {question.incorrect_answers[0]}
    incorrect2 ={question.incorrect_answers[1]}
    incorrect3 = {question.incorrect_answers[2]}
    bank = {[question.correct_answer, 
            question.incorrect_answers[0], 
            question.incorrect_answers[1], 
            question.incorrect_answers[2]]}
    editCounter = {editCounter}
  />
)
);


return (
  <div>
  <h1 style = {{color :"green"}}>Number Correct: {counter} </h1>
  <div> {questionList}</div>
  <Button onClick = {useEffect}> New Questions</Button>


  </div>
  );
}
export default App;