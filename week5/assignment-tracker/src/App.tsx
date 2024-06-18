import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { TAssignment } from "./types";

function App() {
    const [assignments, setAssignments] = useState<TAssignment[]>([]);

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

    if (assignments === null) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Header setAssignments={setAssignments} />
            <Assignments assignments={assignments} setAssignments={setAssignments}/>
        </>
    );
}

export default App;
