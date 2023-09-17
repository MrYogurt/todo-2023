import { CSSProperties, MouseEventHandler } from "react";
import { Task } from "../types/tasks";
import { Checkbox } from "../ui/Checkbox";
import styles from "./styles.module.css";

interface IProps {
  isExpand: boolean;
  tasks: Task[];
  changeStatus: (id: string) => void;
}

export const TasksList = ({ isExpand, tasks, changeStatus }: IProps) => {
  return (
    <div
      className={styles.tasksListContainer}
      style={{ "max-height": isExpand ? 600 : 0 } as CSSProperties}
    >
      {tasks.map((task) => {
        const isCompleted = task.status === "completed";

        return (
          <div key={task.id} className={styles.taskItemContainer}>
            <Checkbox
              id={task.id}
              value={task.status}
              onChange={changeStatus}
            />
            <div
              style={{
                textDecoration: isCompleted ? "line-through" : "none",
                opacity: isCompleted ? 0.5 : 1,
              }}
            >
              {task.description}
            </div>
          </div>
        );
      })}
    </div>
  );
};
