import React, { useState } from "react";
import Button  from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/BUttonGroup';


export default function QuestionForm(props) {
  let green = "#39D1B4";
  let black = "#000000";
  let red =   "#b80000";
const [correctColor, setCorrect] = useState(black);
const [disable,setDisable] =useState("");

function handleCorrectColor(e) {
    e.preventDefault()
    const newColor=green
    //editGreen(questions.index, newColor)
    setCorrect(newColor);
    setDisable("dissabled") ;   
}
function handleIncorrectColor(e) {
    e.preventDefault()
    const newColor=red
    //editGreen(questions.index, newColor)
    setCorrect(newColor); 
    setDisable("dissabled") ;   
   
}


return(
    <div>
        <h2
        style={{ color : correctColor}}
        align = "center"
        color ={correctColor}>
        {props.questionBody}
          <div>
          <ButtonGroup disabled ={disable}> 
              <Button
              onClick = {handleCorrectColor}>
                {props.correct}
              </Button>
              <Button
              onClick = {handleIncorrectColor}>
                {props.incorrect1}
              </Button>        
              <Button
              onClick = {handleIncorrectColor}>
                {props.incorrect2}
              </Button>        
              <Button
              onClick = {handleIncorrectColor}>
                {props.incorrect3}
              </Button>        
            </ButtonGroup>
          </div>
        </h2> 
</div>  
)   
}