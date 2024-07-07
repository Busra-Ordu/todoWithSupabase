import { useState } from 'react'
import './App.css'
import TodoCreate from './components/todoCreate'
import TodoList from './components/todoList'

function App() {
  const[todos,setTodos] = useState([]);

  const createTodo= (newTodo) => {
    setTodos([...todos,newTodo]);
  }

  // todoyu silmek için  
  const removeTodo = (todoId) => {
    setTodos([...todos.filter((todo) => todo.id!==todoId)]);
  }

  console.log(todos);
  return (
    <div className='App'>
      <div className='main'> 
        <TodoCreate onCreateTodo= {createTodo}/>
        <TodoList todos={todos} onRemoveTodo={removeTodo}/>
      </div>
    </div>
  )
}

export default App
