import { FormEventHandler, memo } from "react";
import styles from "./styles.module.css";
import { ExpandIcon } from "../icons/Expand";

interface IProps {
  isExpand: boolean;
  toggleExpand: () => void;
  addNewTask: (description: string) => void;
}

const AddTaskInput = ({ isExpand, toggleExpand, addNewTask }: IProps) => {
  const handleAddTask: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    if (!form.newTask.value.trim()) return;

    addNewTask(form.newTask.value);

    form.reset();
  };

  return (
    <form className={styles.addTaskInputContainer} onSubmit={handleAddTask}>
      <div
        className={styles.addTaskInputLeftIcon}
        style={{ transform: isExpand ? "rotate(0deg)" : "rotate(-180deg)" }}
        onClick={toggleExpand}
      >
        <ExpandIcon />
      </div>
      <input
        name="newTask"
        className={styles.addTaskInput}
        type="text"
        placeholder="What needs to be done?"
      />
    </form>
  );
};

export const AddTaskInputMemoized = memo(AddTaskInput);
