import { useState } from "react";
import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";

// explcitly declares the 'Assignment' type in .tsx
type Assignment = {
  title: string;
  completed: boolean;
};

function App() {
  const [assignments, setAssignments] = useState<Assignment[]>([]);

  const addAssignment = (title: string) => {
    setAssignments([...assignments, { title, completed: false }]);
  };

  const deleteAssignment = (index: number) => {
    // keeping immutability by creating a newAssignments array is **important** in React to recognize the current state changes.Therefore, didn't use direct remove item from the current state.
    const newAssignments = assignments.filter((_, i) => i !== index);
    setAssignments(newAssignments);
  };

  const toggleCompletion = (index: number) => {
    const newAssignments = assignments.map((assignment, i) =>
      i === index ? { ...assignment, completed: !assignment.completed } : assignment
    );
    setAssignments(newAssignments);
  };

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
