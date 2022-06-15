import React from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";

const TaskListComponent = () => {
  const defaultTask = new Task("Ejemplo", "test", false, LEVELS.NORMAL);
  // !pending
  // const changeState = (id) => {
  //   console.log("Cambiar estado id :>> ", id);
  // };
  return (
    <div>
      <h1>Tus tareas:</h1>
      <TaskComponent key={1} task={defaultTask}></TaskComponent>
    </div>
  );
};

export default TaskListComponent;
