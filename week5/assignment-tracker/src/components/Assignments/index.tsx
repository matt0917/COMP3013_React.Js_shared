import React, {useState} from "react";
import styles from "./assignments.module.css";
import { TAssignment } from "../../types";
import { Assignment as AssignmentComponent } from "../Assignment";

type Props = {
    assignments: TAssignment[];
    setAssignments: React.Dispatch<React.SetStateAction<TAssignment[]>>;
};

export function Assignments({ assignments, setAssignments }: Props ) {

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
                        setAssignments={setAssignments}
                    />
                ))}
            </div>
        </section>
    );
}
