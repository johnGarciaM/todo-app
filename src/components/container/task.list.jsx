import React, { useState, useEffect } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";
import TaskForm from "../pure/forms/taskForm";

// task styles
import "../../styles/tasks.scss";

const TaskListComponent = () => {
	const defaultTask1 = new Task(
		"Tarea #1",
		"Primera tarea",
		true,
		LEVELS.NORMAL
	);

	const defaultTask2 = new Task(
		"Tarea #2",
		"Segunda tarea",
		false,
		LEVELS.URGENT
	);

	const defaultTask3 = new Task(
		"Tarea #3",
		"Tercera tarea",
		false,
		LEVELS.BLOCKING
	);

	const [tasks, setTasks] = useState([
		defaultTask1,
		defaultTask2,
		defaultTask3,
	]);
	const [loading, setLoading] = useState(true);
	console.log("tasks :>> ", tasks);
	useEffect(() => {
		console.log("tasks :>> ");
		return () => {
			console.log("! Change state");
		};
	}, []);
	return (
		<div>
			<div className="col-12">
				<div className="card">
					<div className="card-header p3">
						<h5>Your tasks:</h5>
					</div>
					<div
						className="card-body"
						data-mdb-perfect-scrollbar="true"
						style={{ position: "relative", height: "400px" }}
					>
						<table>
							<thead>
								<tr>
									<th scope="col">Title</th>
									<th scope="col">Description</th>
									<th scope="col">Priority</th>
									<th scope="col">Actions</th>
								</tr>
							</thead>
							<tbody>
								{tasks.map((task, index) => (
									<TaskComponent key={index} task={task}></TaskComponent>
								))}
							</tbody>
						</table>
					</div>
					<TaskForm></TaskForm>
				</div>
			</div>
		</div>
	);
};

export default TaskListComponent;
