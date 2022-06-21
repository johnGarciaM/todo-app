import React, { useState } from "react";

const Example1 = () => {
	const initialValue = 0;
	const initialPerson = {
		name: "John",
		email: "test@gmail.com",
	};

	const [count, setCounter] = useState(initialValue);
	const [person, setPerson] = useState(initialPerson);

	const incrementCount = () => {
		setCounter(count + 1);
	};

	const updatePerson = () => {
		setPerson({ name: "Pablo", email: "pablo@gmail.com" });
	};
	return (
		<div>
			<div>
				<h1>***Ejemplo de useState()</h1>
				<h2>Contador: {count}</h2>
				<h2>Datos de la persona: </h2>
				<h3>Nombre de la persona: {person.name}</h3>
				<h3>Correo de la persona: {person.email}</h3>
				<div>
					<button onClick={incrementCount}>Incrementar contador</button>
					<button onClick={updatePerson}>Actualizar persona</button>
				</div>
			</div>
		</div>
	);
};

export default Example1;
