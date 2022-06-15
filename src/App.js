import logo from "./logo.svg";
import "./App.css";
// import Greeting from "./components/pure/greeting";
// import GreetingF from "./components/pure/greetingF";
import TaskListComponent from "./components/container/task.list.jsx";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        {/* Componente propio */}
        {/* <Greeting name='John'></Greeting>
        <GreetingF name='John'></GreetingF> */}
      </header>
      <TaskListComponent></TaskListComponent>
    </div>
  );
}

export default App;
