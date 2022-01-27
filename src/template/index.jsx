import React, { useState } from "react";
import classes from "./style.module.css";

const Template = () => {
const [inputFrom,setInputFrom]=useState("");
const [inputTo,setInputTo]=useState("");
const [errorTo,setErrorTo]=useState();
const [inputAmount,setInputAmount]=useState("");
const [errorInputAmount,setErrorInputAmount]=useState();
const [inputTA,setInputTA]=useState("");
const [accountNo,setAccountNo]=useState("IBAN");
const [balance,setBalance]=useState();

const validate=()=>{
   
  if(inputTo==="")
  setErrorTo("To is required");
 else setErrorTo ("");
  
  if(inputAmount==="")
  setErrorInputAmount("Amount is required");
   else setErrorInputAmount("");
  
}
const handleAccountChange=(e)=>{
  setAccountNo(e.currentTarget.value)

}
const checkBalance=()=>{
  setBalance(50000)
  setInputFrom(accountNo)
}

const handleTransaction=()=>{
  validate();
  setBalance(balance-inputAmount)
setInputFrom("")
setInputTo("")
setInputAmount("")
}

  return (
  <div className={classes.templateMainContainer}>
   <div className={classes.leftSection}>
    <div>
     <label>From </label>
     <input value ={inputFrom} onChange={(e)=>{
setInputFrom(e.currentTarget.value);
}}  type="text"  />
    </div>
    <div>
     <label>To</label>
     <input value ={inputTo} onChange={(e)=>{
  setInputTo(e.currentTarget.value);
}} type="text" />
    </div>
    <label>{errorTo}</label>
    <div>
     <label>Amount</label>
     <input value ={inputAmount} onChange={(e)=>{
  setInputAmount(e.currentTarget.value);
}} type="number" />
    </div>
    <label>{errorInputAmount}</label>
    
    <div>
     <label>Description</label>
     <textarea value ={inputTA} onChange={(e)=>{ setInputTA(e.currentTarget.value);}}
      name="desc" id="desc"></textarea>
    </div>
    <button disabled={inputFrom === ""?true:false||inputTo === ""?true:false||inputAmount === ""?true:false} onClick={handleTransaction}  >Send Transaction</button>
   </div>
   <div className={classes.leftSection}>
   <label>Account Detail</label>
     <div>
     <label  >Account </label>
     <input autoFocus onChange={handleAccountChange} value={accountNo} type="text" />
    </div>
    <button disabled={false} onClick={checkBalance}>Check Balance</button>
    <br />
    <div><label>Balance:{balance}</label></div>
    </div>
      
  </div>
 );
};

export default Template;
