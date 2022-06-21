import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Person } from "../../models/person.class";

const Clock = ({ person }) => {
	const [currentData, setPerson] = useState(person);

	useEffect(() => {
		const tick = () => {
			const edad = currentData.edad + 1;
			setPerson({ ...currentData, fecha: new Date(), edad });
		};
		console.log("componentDidMount", currentData);
		const timerID = setInterval(() => {
			tick();
			console.log("componentDidUpdate", currentData);
		}, 1000);
		return () => {
			clearInterval(timerID);
			console.log("componentWillUnmount", currentData);
		};
	}, [currentData]);

	return (
		<div>
			<h2>Hora Actual: {currentData.fecha.toLocaleTimeString()}</h2>
			<h3>
				{currentData.nombre} {currentData.apellidos}
			</h3>
			<h1>Edad: {currentData.edad}</h1>
		</div>
	);
};

Clock.propTypes = {
	person: PropTypes.instanceOf(Person),
};

export default Clock;
