import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { BsCheckCircleFill } from "react-icons/bs";
import { TAssignment } from "../../types";

type Props = {
    assignment: TAssignment;
    setAssignments: React.Dispatch<React.SetStateAction<TAssignment[]>>;
};

export function Assignment({ assignment, setAssignments, }:Props) {
    
    const toggleCompletion = () => {
        setAssignments(prevAssignments =>
            prevAssignments.map(item =>
                item.id === assignment.id ? { ...item, completed: !item.completed } : item
            )
        );
    };

    const deleteAssignment = () => {
        setAssignments(prevAssignments =>
            prevAssignments.filter(item => item.id !== assignment.id)
        );
    };

    return (
        <div className={styles.assignment}>
            <button
                className={styles.checkContainer}
                onClick={toggleCompletion}
            >
                {assignment.completed ? (
                    <BsCheckCircleFill
                        size={20}
                        className={styles.completedIcon}
                    />
                ) : (
                    <div className={styles.incompleteIcon} />
                )}
            </button>

            <p className={assignment.completed ? styles.textCompleted : ""}>
                {assignment.task}
            </p>

            <button className={styles.deleteButton} onClick={deleteAssignment}>
                <TbTrash size={20} />
            </button>
        </div>
    );
}
