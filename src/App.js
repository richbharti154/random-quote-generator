import React from "react";
import {useState} from 'react'
import "./style.css";
import Data from './Data'


export default function App() {
  const[value,setValue]=useState(Data[0])
  function handleClick(){
    let random=Math.floor(Math.random()*Data.length)
    setValue(Data[random])
  }
  return (
    <div className='App'>
      <div className='main'>
      <p>{value.Quotation}</p>
      <p className='author'>{value.Author}</p>
      </div>
      <div className='box'>
     
        <button className='next' onClick={handleClick}>Next</button> 
        </div>
        
    </div>
  );
}
