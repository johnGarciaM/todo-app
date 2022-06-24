import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";

// tasks styles
import "../../styles/tasks.scss";
import { LEVELS } from "../../models/levels.enum";

const TaskComponent = ({ task }) => {
	useEffect(() => {
		return () => {
			console.log(`Task: ${task.name} is going to unmount`);
		};
	});

	const taskLevelBadge = () => {
		switch (task.level) {
			case LEVELS.NORMAL:
				return (
					<h6 className="mb-0">
						<span className="badge bg-primary">{task.level}</span>
					</h6>
				);
			case LEVELS.URGENT:
				return (
					<h6 className="mb-0">
						<span className="badge bg-warning">{task.level}</span>
					</h6>
				);
			case LEVELS.BLOCKING:
				return (
					<h6 className="mb-0">
						<span className="badge bg-danger">{task.level}</span>
					</h6>
				);
			default:
				break;
		}
	};

	const taskCompletedIcon = (params) => {
		return task.completed ? (
			<i
				className="bi bi-toggle-on"
				style={{ color: "green", fontSize: "1.5rem" }}
			></i>
		) : (
			<i
				className="bi bi-toggle-off"
				style={{ color: "grey", fontSize: "1.5rem" }}
			></i>
		);
	};

	return (
		<tr className="fw-normal">
			<th>
				<span className="ms-2">{task.name}</span>
			</th>
			<td className="align-middle">
				<span>{task.description}</span>
			</td>
			<td className="align-middle">{taskLevelBadge()}</td>
			<td className="align-middle">
				{taskCompletedIcon()}
				<i
					className="bi bi-trash"
					style={{ color: "tomato", fontSize: "1.5rem" }}
				></i>
			</td>
		</tr>
	);
};

TaskComponent.propTypes = {
	task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
