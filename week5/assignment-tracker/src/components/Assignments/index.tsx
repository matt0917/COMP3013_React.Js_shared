import styles from "./assignments.module.css";
import { Assignment as AssignmentComponent } from "../Assignment";

type Assignment = {
    id: string;
    title: string;
    completed: boolean;
};

type AssignmentsProps = {
    assignments: Assignment[];
    deleteAssignment: (index: string) => void;
    toggleCompletion: (index: string) => void;
};

export function Assignments({
    assignments,
    deleteAssignment,
    toggleCompletion,
}: AssignmentsProps) {
    const createdCount: number = assignments.length;
    const completedCount: number = assignments.filter(
        (a) => a.completed
    ).length;

    return (
        <section className={styles.assignments}>
            <header className={styles.header}>
                <div>
                    <p>Created Assignments</p>
                    <span>{createdCount}</span>
                </div>
                <div>
                    <p className={styles.textPurple}>Completed Assignments</p>
                    <span>
                        {completedCount} of {createdCount}
                    </span>
                </div>
            </header>

            <div className={styles.list}>
                {assignments.map((assignment) => (
                    <AssignmentComponent
                        key={assignment.id}
                        assignment={assignment}
                        onDelete={() => deleteAssignment(assignment.id)}
                        onToggleCompletion={() =>
                            toggleCompletion(assignment.id)
                        }
                    />
                ))}
            </div>
        </section>
    );
}
