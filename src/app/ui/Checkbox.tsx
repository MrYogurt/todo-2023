import { ChangeEventHandler } from "react";
import { TaskStatuses } from "../types/tasks";
import styles from "./styles.module.css";

interface IProps {
  id: string;
  value: TaskStatuses;
  onChange: (id: string) => void;
}

export const Checkbox = ({ id, value, onChange }: IProps) => {
  const handleChangeStatus: ChangeEventHandler<HTMLInputElement> = () =>
    onChange(id);

  return (
    <label className={styles.taskCheckboxContainer}>
      <input
        data-taskId={id}
        type="checkbox"
        checked={value === "completed"}
        onChange={handleChangeStatus}
      />
      <span className={styles.taskCheckboxLabel}></span>
    </label>
  );
};
