import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { TAssignment } from "../../types";
import { useState } from "react";

type Props = {
    setAssignments: React.Dispatch<React.SetStateAction<TAssignment[]>>;
};

export function Header({ setAssignments }: Props) {
    const [inputValue, setInputValue] = useState<string>("");

    const addAssignment = () => {
    /**
     * In React.Js, by passing a callback function to setAssignments, we ensure that we are working with the most up-to-date state.
     * The callback function receives the previous state as its argument, which in this case is the current 'prevAssignments' array before we add a new task.
     * This approach is beneficial because it avoids potential issues with state staleness in asynchronous operations, ensuring that the state is correctly updated based on the latest state.
     * We don't need to pass 'assignments' and the state updater function 'setAssignments' as separate arguments, simplifying our component's logic.
     */
        setAssignments((prevAssignments) =>{
            const currentAssignment = prevAssignments || [];
            return [
                ...currentAssignment,
                { id: crypto.randomUUID(), task: inputValue, completed: false }
            ];
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputValue.trim()) {
            addAssignment();
            setInputValue("");
        }
    };

    return (
        <header className={styles.header}>
            <h1>BCIT Assignment Tracker</h1>
            {/* OnClick doesn't work with Enter key. onSubmit works!*/}
            <form className={styles.newAssignmentForm} onSubmit={handleSubmit}> 
                <input
                    placeholder="Add a new assignment"
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button disabled={!inputValue.trim()}>
                    Create <AiOutlinePlusCircle size={20} />
                </button>
            </form>
        </header>
    );
}
