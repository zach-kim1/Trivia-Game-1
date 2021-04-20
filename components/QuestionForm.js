import React, { useState } from "react";
import Button  from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const _ = require("lodash")

export default function QuestionForm(props) {
  const newArr = _.shuffle(props.bank)
  let green = "#39D1B4";
  let black = "#000000";
  let red =   "#b80000";
const [correctColor, setCorrect] = useState(black);
const [disable,setDisable] =useState("");

function handleCorrectColor(e) {
    e.preventDefault()
    if( e.currentTarget.getAttribute("name") === props.correct){
      const newColor=green
      setCorrect(newColor);
      setDisable("dissabled") ; 
      props.editCounter()
    }else{
      const newColor=red
      setCorrect(newColor); 
      setDisable("dissabled") ;  
    } 
}


return(
  <div>
        <h2
        style={{ color : correctColor}}
        align = "center"
        color ={correctColor}>
        {props.questionBody}
          <div>
          <ButtonGroup 
          variant="contained"
          disabled ={disable}> 
          {newArr.map((answer) => (
              <Button
              name = {answer}
              onClick = {handleCorrectColor}

              >
              {answer}
              </Button>

          ))}
            </ButtonGroup>
          </div>
        </h2> 
  </div>  
)   
}