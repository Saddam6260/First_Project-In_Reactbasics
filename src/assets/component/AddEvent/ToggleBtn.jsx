import React, { useState } from "react";

import classes from "./ToggoleBtn.module.css";

const ToggleBtn = (props) => {
  return (
    <div className={classes.show_btn}>
      <button onClick={props.onToggleHandler}>
        {props.showText ? "Hide Form" : "Show Form"}
      </button>
    </div>
  );
};

export default ToggleBtn;
