import styles from "./assignments.module.css";
import { Assignment as AssignmentComponent } from "../Assignment";

type Assignment = {
  title: string;
  completed: boolean;
};

type AssignmentsProps = {
  assignments: Assignment[];
  deleteAssignment: (index: number) => void;
  toggleCompletion: (index: number) => void;
};

export function Assignments({ assignments, deleteAssignment, toggleCompletion }: AssignmentsProps) {
  const createdCount: number = assignments.length;
  const completedCount: number = assignments.filter(a => a.completed).length;

  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{createdCount}</span>
        </div>
        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{completedCount} of {createdCount}</span>
        </div>
      </header>

      <div className={styles.list}>
        {assignments.map((assignment, index) => (
          <AssignmentComponent
            key={index}
            assignment={assignment}
            onDelete={() => deleteAssignment(index)}
            onToggleCompletion={() => toggleCompletion(index)}
          />
        ))}
      </div>
    </section>
  );
}
