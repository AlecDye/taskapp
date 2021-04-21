import {useState} from "react"
import Header from "./components/Header";
import TaskList from "./components/TaskList"
import AddTask from "./components/AddTask"

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
    id: 1,
    text: "Something",
    day: 'Feb 4th @ 2:30pm',
    reminder: false,
  },
    {
    id: 2,
    text: "Nothing",
    day: 'Feb 8th @ 8:10am',
    reminder: true,
  },
    {
    id: 3,
    text: "Market",
    day: 'Feb 5th @ 2:30pm',
    reminder: false,
  },
  ])

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    // setState(state.filter((foo) => foo.id !== id))
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id
    ? { ...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (<TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ("All Tasks Completed!")}
    </div>
  );
}

export default App;
