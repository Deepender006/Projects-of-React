import './App.css'
import AddTodo from "./app/features/todo/AddTodo";
import Todos from "./app/features/todo/Todos";
function App() {
  return (
    <>
      <h1>Learn about Redux Toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App