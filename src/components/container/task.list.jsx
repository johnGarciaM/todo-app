import React, { useState, useEffect } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";

// task styles
import "../../styles/tasks.scss";

const TaskListComponent = () => {
	const defaultTask = new Task(
		"Tarea #1",
		"Primera tarea",
		true,
		LEVELS.NORMAL
	);

	const [tasks, setTasks] = useState([defaultTask]);
	const [loading, setLoading] = useState(true);
	console.log("tasks :>> ", tasks);
	useEffect(() => {
		const otherTask = new Task(
			"Tarea #2",
			"segunda tarea",
			true,
			LEVELS.NORMAL
		);
		console.log("loading :>> ", loading);
		console.log("task state has been modified :>> ");
		setTasks([otherTask]);
		setLoading(false);
		return () => {
			console.log("! Change state");
		};
	}, [loading]);
	return (
		<div>
			<h1 className="task-title">Tus tareas:</h1>
			<TaskComponent key={1} task={defaultTask}></TaskComponent>
		</div>
	);
};

export default TaskListComponent;
