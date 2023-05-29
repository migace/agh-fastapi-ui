import { useEffect, useState } from "react";
import "./App.css";
import { StudentsList } from "./components/StudentsList";
import { fetchStudents } from "./services/students";

function App() {
  const [students, setStudents] = useState([]); 

  useEffect(() => {
    fetchStudents().then(setStudents);
  }, []);

  return (
    <>
      <StudentsList students={students} />
    </>
  );
}

export default App;
