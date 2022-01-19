import React from "react";
import classes from "./style.module.css";

const Template = () => {
 return (
  <div className={classes.templateMainContainer}>
   <div className={classes.leftSection}>
    <div>
     <label>From</label>
     <input type="text" />
    </div>
    <div>
     <label>To</label>
     <input type="text" />
    </div>
    <div>
     <label>Amount</label>
     <input type="number" />
    </div>
    <div>
     <label>Description</label>
     <textarea name="desc" id="desc"></textarea>
    </div>
    <button>Send Transaction</button>
   </div>
   <div className={classes.rightSection}>Right</div>
  </div>
 );
};

export default Template;
