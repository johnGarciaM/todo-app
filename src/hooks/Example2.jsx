import React, { useEffect, useRef, useState } from "react";

const Example2 = () => {
	const [count1, setCounter1] = useState(0);
	const [count2, setCounter2] = useState(0);

	const miRef = useRef();

	const incrrementCount1 = () => {
		setCounter1(count1 + 1);
	};
	const incrrementCount2 = () => {
		setCounter2(count2 + 1);
	};

	// useEffect(() => {
	// 	console.log("Ejecutando  useEffect:>> ");
	// 	console.log("miRef :>> ", miRef);
	// });

	// useEffect(() => {
	// 	console.log("Ejecutar solo con contador 1 :>> ");
	// 	console.log("miRef :>> ", miRef);
	// }, [count1]);

	useEffect(() => {
		console.log("Ejecutar solo con contador 1 y 2 :>> ");
		console.log("miRef :>> ", miRef);
	}, [count1, count2]);

	return (
		<div>
			<div>
				<h1>***Ejemplo de useState(), useRef(), useEffect()</h1>
				<h3>Contador1: {count1}</h3>
				<h3>Contador2: {count2}</h3>
				<h4 ref={miRef}>Ejemplo de elemento referenciado</h4>
				<div>
					<button onClick={incrrementCount1}>Incrementar contador1</button>
					<button onClick={incrrementCount2}>Incrementar contador2</button>
				</div>
			</div>
		</div>
	);
};

export default Example2;
