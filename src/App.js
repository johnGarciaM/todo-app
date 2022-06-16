// import logo from "./logo.svg";
import "./App.css";
// import Greeting from "./components/pure/greeting";
// import GreetingF from "./components/pure/greetingF";
// import TaskListComponent from "./components/container/task.list.jsx";
// import ContactComponent from "./components/container/contact";
// import Example1 from "./hooks/Example1";
// import Example2 from "./hooks/Example2";
// import Example3 from "./hooks/Example3";
import Example4 from "./hooks/Example4";

function App() {
	return (
		<div className="App">
			{/* Componente propio */}
			{/* <Greeting name='John'></Greeting>
        <GreetingF name='John'></GreetingF> */}
			{/* <TaskListComponent></TaskListComponent> */}
			{/* <ContactComponent /> */}
			<Example4 name="John">
				<span>Esto es el contenido props.children</span>
			</Example4>
		</div>
	);
}

export default App;
