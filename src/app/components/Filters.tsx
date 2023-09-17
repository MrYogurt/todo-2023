import { MouseEventHandler } from "react";
import { TaskFilters } from "../types/tasks";
import styles from "./styles.module.css";

interface IProps {
  activeCount: number;
  selectedFilter: TaskFilters;
  changeFilter: MouseEventHandler<HTMLDivElement>;
  clearCompleted: () => void;
}

export const Filters = ({
  activeCount,
  selectedFilter,
  changeFilter,
  clearCompleted,
}: IProps) => {
  return (
    <div className={styles.filtersContainer}>
      <div className={styles.filtersActiveTasksCount}>
        {activeCount} items left
      </div>
      <div className={styles.filterButtonsContainer}>
        <div
          data-name="all"
          className={`${styles.filterButton} ${
            selectedFilter === "all" && styles.filterSelected
          }`}
          onClick={changeFilter}
        >
          All
        </div>
        <div
          data-name="active"
          className={`${styles.filterButton} ${
            selectedFilter === "active" && styles.filterSelected
          }`}
          onClick={changeFilter}
        >
          Active
        </div>
        <div
          data-name="completed"
          className={`${styles.filterButton} ${
            selectedFilter === "completed" && styles.filterSelected
          }`}
          onClick={changeFilter}
        >
          Completed
        </div>
      </div>
      <div className={styles.filterButton} onClick={clearCompleted}>
        Clear completed
      </div>
    </div>
  );
};
