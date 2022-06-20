import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";

// tasks styles
import "../../styles/tasks.scss";

const TaskComponent = ({ task }) => {
	useEffect(() => {
		return () => {
			console.log(`Task: ${task.name} is going to unmount`);
		};
	});
	return (
		<div>
			<h2 className="task-name">Nombre: {task.name}</h2>
			<h3>Descripción: {task.description}</h3>
			<h4>Nivel: {task.level ? "Activa" : "Inactiva"}</h4>
			<h4>Esta tarea está: {task.completed ? "Completada" : "Pendiente"}</h4>
		</div>
	);
};

TaskComponent.propTypes = {
	task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
