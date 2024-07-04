import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [assignments, setAssignments] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("http://localhost:8080/api/assignments");
        const data = await response.json();
        setAssignments(data);
      } catch (error) {
        console.error("Failed to fetch assignments:", error);
      }
    }

    getData();
  }, []);

  return (
    <>
      <h1>Assignments</h1>
      <ul> 
        { assignments.map((assignment)=>(
          <li key={assignment.id}>{assignment.title}</li>
        )) }
      </ul>
    </>
  )
}

export default App
