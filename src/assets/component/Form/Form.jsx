import React, { useState } from "react";

import classes from "./Form.module.css";
import Card from "../UI/Card";

const Form = (props) => {

    const [addName, setAddName] = useState('')
    const [addAge, setAddAge] = useState('')
    const [addRoll, setAddRoll] = useState('')

    const onNameHandler = (event) => {
        setAddName(event.target.value)
    }
    const onAgeHandler = (event) => {
        setAddAge(event.target.value)
    }
    const onRollHandler = (event) => {
        setAddRoll(event.target.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()

        const studentDetails = {
            name: addName,
            age: addAge,
            roll: addRoll
        }

        console.log(studentDetails)
        props.takeStudentDetails(studentDetails);
        setAddName('')   
        setAddAge('')   
        setAddRoll('')   
    }
  return (
    <Card className={classes.form_wrap}>
      <form onSubmit={onSubmitHandler}>
        <div className={classes.form}>
          <div className={classes.input_wrap}>
            <label htmlFor="">Enter Your Name : </label>
            <input value={addName} type="text" onChange={onNameHandler}/>
          </div>
          <div className={classes.input_wrap}>
            <label htmlFor="">Enter Your Age : </label>
            <input value={addAge} type="number" onChange={onAgeHandler}/>
          </div>
          <div className={classes.input_wrap}>
            <label htmlFor="">Enter Your Roll : </label>
            <input value={addRoll} type="number" onChange={onRollHandler}/>
          </div>
        </div>
        <div className={classes.btn_wrap}>
          <button type="submit">Add Event</button>
        </div>
      </form>
    </Card>
  );
};

export default Form;
