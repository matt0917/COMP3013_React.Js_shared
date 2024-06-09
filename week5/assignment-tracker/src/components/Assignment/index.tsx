import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { BsCheckCircleFill } from "react-icons/bs";

type AssignmentProps = {
  assignment: {
    title: string;
    completed: boolean;
  };
  onDelete: () => void;
  onToggleCompletion: () => void;
};

export function Assignment({ assignment, onDelete, onToggleCompletion }: AssignmentProps) {
  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer} onClick={onToggleCompletion}>
        {assignment.completed ? (
          <BsCheckCircleFill size={20} className={styles.completedIcon} />
        ) : (
          <div className={styles.incompleteIcon} />
        )}
      </button>

      <p className={assignment.completed ? styles.textCompleted : ""}>{assignment.title}</p>

      <button className={styles.deleteButton} onClick={onDelete}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
