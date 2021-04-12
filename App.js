import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";

//import QuestionButtons from "./components/QuestionButtons";

function App() {
  let green = "#39D1B4";
  let black = "#000000";
  const [buttonColor, setButtonColor] = useState(black);
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10")
      .then((res) => res.json())
      .then((res) => {
        //console.log(res);
        setQuestions(res.results);

      })

  }, []);

  function handleColorChange(e) {
    e.preventDefault()
    const newColor=green
    //editGreen(questions.index, newColor)
    setButtonColor(newColor);

    
  }
  
  /*
  function editGreen(index,newColor){
    const updatedQuestions = questions.map(question => {
    if (index === question.index) {
      setButtonColor(newColor);
    }
    })
    setQuestions(updatedQuestions)
  }
  */
 
  return (
  <div>
      <h1>Hey, Launch! 👋</h1> 
      {questions.map((question) => (
      <h2
      >
      {question.question}
        <div>
        <button_group> 
            <button 
            id = {"CA-" + nanoid()}
            style={{ color : buttonColor}}
            color ={buttonColor}
            onClick = { handleColorChange }
            >
            {question.correct_answer}
            </button>
            <button
            style={{
              backgroundColor: 'red',
            }}>{question.incorrect_answers[0]}
            </button>        
            <button
            style={{
              backgroundColor: 'red',
            }}>
              {question.incorrect_answers[1]}
            </button>        
            <button
            style={{
              backgroundColor: 'red',
            }}>
              {question.incorrect_answers[2]}
              </button>        
          </button_group>
        </div>
      </h2>
      ))}      
  </div>
  );
}
export default App;