import "./App.css";
// import { Person } from "./models/person.class";
import TaskListComponent from "./components/container/task.list.jsx";
// import ContactComponent from "./components/container/contact";
// import ClockComponent from "./components/pure/Clock.jsx";
// import Father from "./components/container/father";

function App() {
	// const myPerson = new Person({
	// 	nombre: "Pedro",
	// 	apellidos: "Robles Pumarejo",
	// 	fecha: new Date(),
	// 	edad: 30,
	// });
	return (
		<div className="App">
			<TaskListComponent></TaskListComponent>
			{/* <ContactComponent></ContactComponent> */}
			{/* <ClockComponent person={myPerson}></ClockComponent> */}
			{/* <Father></Father> */}
		</div>
	);
}

export default App;
