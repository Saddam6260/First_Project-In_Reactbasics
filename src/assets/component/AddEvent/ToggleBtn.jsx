import React, { useState } from "react";

import classes from "./ToggoleBtn.module.css";

const ToggleBtn = () => {
  const [toggle, setToggle] = useState(false);

  const onToggleHandler = (event) => {
    setToggle(!toggle)
    console.log(toggle)
  }
  return (
    <div className={classes.show_btn}>
      <button onClick={onToggleHandler}>Show Form</button>
    </div>
  );
};

export default ToggleBtn;
