"use client";

import { MouseEventHandler, useState } from "react";
import { AddTaskInputMemoized } from "./AddTaskInput";
import styles from "./styles.module.css";
import { TasksList } from "./TasksList";
import { Task, TaskFilters } from "../types/tasks";
import { Filters } from "./Filters";
import { TASKS_DATA } from "../mocks/tasks";

const generateTasks = (count: number) => {
  const result: Task[] = [];

  for (let i = 0; i < count; i++) {
    result.push({
      id: i.toString(),
      description: `Task ${i}`,
      status: "active",
    });
  }

  return result;
};

const filterTasks = (tasks: Task[], filter: TaskFilters) => {
  if (filter === "all") {
    return tasks;
  }

  return tasks.filter((task) => task.status === filter);
};

const getActiveCount = (data: Task[]) => {
  return TASKS_DATA.reduce((acc, curr) => {
    if (curr.status === "active") {
      return acc + 1;
    }

    return acc;
  }, 0);
};

export const TodosContainer = () => {
  const [tasks, setTasks] = useState<Task[]>(TASKS_DATA);
  const [activeTasksCount, setActiveTasksCount] = useState(
    getActiveCount(TASKS_DATA)
  );
  const [isExpand, setExpand] = useState(true);
  const [selectedFilter, setFilter] = useState<TaskFilters>("all");

  const handleExpandTasks = () => setExpand((prev) => !prev);
  const handleAddTask = (description: string) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Date.now().toString(), description, status: "active" },
    ]);
    setActiveTasksCount((prev) => prev + 1);
  };

  const handleChangeFilter: MouseEventHandler<HTMLDivElement> = (event) => {
    setFilter(event.currentTarget.getAttribute("data-name") as TaskFilters);
  };

  const handleClearCompleted = () => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.status !== "completed")
    );
  };

  const handleChangeStatus = (id: string) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === id) {
          const isActive = task.status === "active";

          if (isActive) {
            setActiveTasksCount((prev) => prev - 1);
          }

          return {
            ...task,
            status: isActive ? "completed" : "active",
          };
        }

        return task;
      });
    });
  };

  const filteredTasks = filterTasks(tasks, selectedFilter);

  return (
    <div className={styles.todosContainer}>
      <AddTaskInputMemoized
        isExpand={isExpand}
        toggleExpand={handleExpandTasks}
        addNewTask={handleAddTask}
      />
      <TasksList
        isExpand={isExpand}
        tasks={filteredTasks}
        changeStatus={handleChangeStatus}
      />
      <Filters
        activeCount={activeTasksCount}
        selectedFilter={selectedFilter}
        changeFilter={handleChangeFilter}
        clearCompleted={handleClearCompleted}
      />
    </div>
  );
};
