import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import AddEvent from "./assets/component/AddEvent/AddEvent";

const StudentList = [
  { Name: "Saddam Hafiz", Roll: 1, Age: 22 },
  { Name: "Mohd Rejoan", Roll: 2, Age: 24 },
];

function App() {
  const [studentList, setStudentList] = useState(StudentList);

  return (
    <div>
      <AddEvent studentList={studentList}/>
    </div>
  );
}

export default App;
