import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import ShowBtn from "./assets/component/AddEvent/ToggleBtn";
import AddEvent from "./assets/component/AddEvent/AddEvent";
import Form from "./assets/component/Form/Form";
import NoStudentDetails from "./assets/component/AddEvent/NoStudentDetails";

const StudentList = [
  { Name: "Saddam Hafiz", Roll: 1, Age: 22 },
  { Name: "Mohd Rejoan", Roll: 2, Age: 24 },
];

function App() {
  const [studentList, setStudentList] = useState(StudentList);
  const [toggle, setToggle] = useState(false)

  // Update Student List
  const takeStudentDetails = (student) => {
    setStudentList((prevList) => {
      const updateList = [...prevList];
      updateList.unshift({
        Name: student.name,
        Age: student.age,
        Roll: student.roll,
      });
      return updateList;
    });
  };

  // Toggle Button
  const onToggleHandler = () => {
    setToggle(!toggle)
  }

  // Delete Event
  const onDeleteEvent = (roll) => {
    setStudentList(studentList.filter((student) => student.Roll !== roll));
  };
  return (
    <div>
      <ShowBtn onToggleHandler={onToggleHandler} showText={toggle}/>
      {toggle ? (<Form takeStudentDetails={takeStudentDetails} />) : ""}
      {studentList.length > 0 ? (
        <AddEvent studentList={studentList} onDeleteEvent={onDeleteEvent} />
      ) : (
        <NoStudentDetails />
      )}
    </div>
  );
}

export default App;
