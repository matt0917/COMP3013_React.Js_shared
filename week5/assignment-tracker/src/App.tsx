import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";

type Assignment = {
  title: string;
  completed: boolean;
};

function App() {
  const [assignments, setAssignments] = useState<Assignment[] | null>(null);

  // Load assignments from localStorage when the app initializes
  useEffect(() => {
    const storedAssignments = localStorage.getItem("assignments");
    if (storedAssignments) {
      setAssignments(JSON.parse(storedAssignments));
    } else {
      console.log("No assignments found in localStorage.");
      setAssignments([]);
    }
  }, []);

  // Save assignments to localStorage whenever they are modified
  useEffect(() => {
    if (assignments !== null) {
      // console.log("Saving assignments to localStorage:", assignments);
      localStorage.setItem("assignments", JSON.stringify(assignments));
    }
  }, [assignments]);

  const addAssignment = (title: string) => {
    if (assignments !== null) {
      const newAssignments = [...assignments, { title, completed: false }];
      setAssignments(newAssignments);
      // console.log("Added new assignment:", newAssignments);
    }
  };

  const deleteAssignment = (index: number) => {
    // keeping immutability by creating a newAssignments array is **important** in React to recognize the current state changes.Therefore, didn't use direct remove item from the current state.
    if (assignments !== null) {
      const newAssignments = assignments.filter((_, i) => i !== index);
      setAssignments(newAssignments);
      // console.log("Deleted assignment:", newAssignments);
    }
  };

  const toggleCompletion = (index: number) => {
    if (assignments !== null) {
      const newAssignments = assignments.map((assignment, i) =>
        i === index ? { ...assignment, completed: !assignment.completed } : assignment
      );
      setAssignments(newAssignments);
      // console.log("Toggled completion:", newAssignments);
    }
  };

  if (assignments === null) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header addAssignment={addAssignment} />
      <Assignments
        assignments={assignments}
        deleteAssignment={deleteAssignment}
        toggleCompletion={toggleCompletion}
      />
    </>
  );
}

export default App;
