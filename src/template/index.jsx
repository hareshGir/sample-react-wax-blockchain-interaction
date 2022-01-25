import React, { useState } from "react";
import classes from "./style.module.css";

const Template = () => {
const [inputFrom,setInputFrom]=useState("");
const [errorFrom,setErrorFrom]=useState();
const [inputTo,setInputTo]=useState("");
const [errorTo,setErrorTo]=useState();
const [inputAmount,setInputAmount]=useState("");
const [errorInputAmount,setErrorInputAmount]=useState();
const [inputTA,setInputTA]=useState("");
const [errorinputTA,setErrorInputTA]=useState();


const handleFrom=(e)=>{
setInputFrom(e.currentTarget.value);
}
const handleTo=(e)=>{
  setInputTo(e.currentTarget.value);
}
const handleAmount=(e)=>{
  setInputAmount(e.currentTarget.value);
}
const handleTA=(e)=>{
  setInputTA(e.currentTarget.value);
}


const handleTransaction=()=>{
  
  if(inputFrom.trim()==="")
  setErrorFrom("From is required");
  else setErrorFrom("");
   
  if(inputTo.trim()==="")
  setErrorTo("To is required");
  else setErrorTo("");
  
  if(inputAmount.trim()==="")
  setErrorInputAmount("Amount is required");
  else setErrorInputAmount("");
   
  if(inputTA.trim()==="")
  setErrorInputTA("Text Area is required");
  else setErrorInputTA("");
   
  }

  return (
     
  <div className={classes.templateMainContainer}>
   <div className={classes.leftSection}>
    <div>
     <label>From </label>
     <input value ={inputFrom} onChange={handleFrom} autoFocus type="text"  />
    </div>
    <p>{errorFrom}</p>
    <div>
     <label>To</label>
     <input value ={inputTo} onChange={handleTo} type="text" />
    </div>
    <label>{errorTo}</label>
    <div>
     <label>Amount</label>
     <input value ={inputAmount} onChange={handleAmount} type="number" />
    </div>
    <label>{errorInputAmount}</label>
    
    <div>
     <label>Description</label>
     <textarea value ={inputTA} onChange={handleTA} name="desc" id="desc"></textarea>
    </div>
    <label>{errorinputTA}</label>
    <button  onClick={handleTransaction} >Send Transaction</button>
   </div>
   <div className={classes.rightSection}>Right</div>
  </div>
 );
};

export default Template;
