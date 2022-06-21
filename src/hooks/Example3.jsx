import React, { useContext, useState } from "react";

const myContext = React.createContext(null);

const Component1 = () => {
	const state = useContext(myContext);
	return (
		<div>
			<h1>Componente 1</h1>
			<h2>el token es {state.token}</h2>
			<Component2 />
		</div>
	);
};

const Component2 = () => {
	const state = useContext(myContext);
	return (
		<div>
			<h1>Componente 2</h1>
			<h2>La sesion es: {state.session}</h2>
		</div>
	);
};

export default function MyContextComponent() {
	const initialState = {
		token: "1233333",
		session: 1,
	};

	const [sessionData, setSessionData] = useState(initialState);

	const updateSession = () => {
		setSessionData({
			token: "34ererfddd",
			session: sessionData.session + 1,
		});
	};

	return (
		<myContext.Provider value={sessionData}>
			<Component1></Component1>
			<button onClick={updateSession}>Actualizar Datos</button>
		</myContext.Provider>
	);
}
