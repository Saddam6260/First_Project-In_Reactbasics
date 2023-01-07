import React from "react";

import classes from "./AddEvent.module.css"
import Card from "../UI/Card"

const AddEvent = (props) => {

  return (
    <Card className={classes.addevent_wrap}>
      {props.studentList.map((student, index) => {
        return (
          <div key={index} className={classes.student_wrap}>
            <h5>{student.Name}</h5>
            <h5>{student.Roll}</h5>
            <h5>{student.Age}</h5>
          </div>
        );
      })}
    </Card>
  );
};

export default AddEvent;
