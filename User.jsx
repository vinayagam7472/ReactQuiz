import React, { useContext } from "react";
import { data } from "../App";
import { useNavigate } from "react-router-dom";

function User() {
  const navigate = useNavigate();
  const { name, setName } = useContext(data);
  function next(){
    if(name===""){
      navigate("/")
    }else{
      navigate("/question")
    }
    
  }
  function receive(e) {
    setName(e.target.value);
  }
  return (
    <>
      <input type="text" value={name} onChange={receive}  />
      <button onClick={next} >start</button>
    </>
  );
}

export default User;
