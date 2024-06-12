import { useState } from "react";
import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";

type HeaderProps = {
    addAssignment: (title: string) => void;
};

export function Header({ addAssignment }: HeaderProps) {
    const [inputValue, setInputValue] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputValue.trim()) {
            addAssignment(inputValue);
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
