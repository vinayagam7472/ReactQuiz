import React, { useContext } from 'react'
import { data } from '../App'
import { useNavigate } from 'react-router-dom'

function Result() {
  const navigate=useNavigate()
  const {name}=useContext(data)
  function move(){
    navigate("/")
  }
  return (
    <>
    <p>Result</p>
    <h1>{name}</h1>
    <button onClick={move}>Go to user page</button>
    </>
  )
}

export default Result