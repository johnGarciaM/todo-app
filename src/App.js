// import logo from "./logo.svg";
import "./App.css";
// import Greeting from "./components/pure/greeting";
// import GreetingF from "./components/pure/greetingF";
// import TaskListComponent from "./components/container/task.list.jsx";
import ContactComponent from "./components/container/contact";

function App() {
  return (
    <div className='App'>
      {/* Componente propio */}
      {/* <Greeting name='John'></Greeting>
        <GreetingF name='John'></GreetingF> */}
      {/* <TaskListComponent></TaskListComponent> */}
      <ContactComponent />
    </div>
  );
}

export default App;
