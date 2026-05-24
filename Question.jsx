import React, { useContext, useState } from "react";
import { data } from "../App";
import quiz from "../assets/QuizQues";
import { useNavigate } from "react-router-dom";

function Question() {
  const navigate=useNavigate()
  const [index,setindex]=useState(0)

  function next(){
    if(index<quiz.length-1){
      setindex(index+1)
    }
    }
    function submit(){
        navigate("/result")
  }
  function previous(){
    if(index>0){
     setindex(index-1)
    }
  }
  const { name } = useContext(data);
  return (
    <>
       <h1>{quiz[index].prompt}</h1>
      
      <ul>
       <li><button>{quiz[index].optionA}</button></li>
       <li><button>{quiz[index].optionB}</button></li>
       <li><button>{quiz[index].optionC}</button></li>
       <li><button>{quiz[index].optionD}</button></li>
      </ul>
      <button onClick={previous}>previous</button>
    {index === quiz.length - 1 ? (
        <button onClick={submit}>Submit</button>
      ) : (
        <button onClick={next}>Next</button>
      )}
    </>
  );
}


export default Question;
