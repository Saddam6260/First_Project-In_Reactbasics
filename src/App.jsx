import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import ShowBtn from "./assets/component/AddEvent/ToggleBtn"
import AddEvent from "./assets/component/AddEvent/AddEvent";
import Form from "./assets/component/Form/Form"

const StudentList = [
  { Name: "Saddam Hafiz", Roll: 1, Age: 22 },
  { Name: "Mohd Rejoan", Roll: 2, Age: 24 },
];

function App() {
  const [studentList, setStudentList] = useState(StudentList);

  const takeStudentDetails = (student) => {
    setStudentList((prevList) => {
      const updateList = [...prevList]
      updateList.unshift({Name:student.name, Age:student.age, Roll:student.roll})
      return updateList;
    }) 
  }
  return (
    <div>
      <ShowBtn/>
      <Form takeStudentDetails={takeStudentDetails}/>
      <AddEvent studentList={studentList}/>
    </div>
  );
}

export default App;
