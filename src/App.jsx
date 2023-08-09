import React,{useState} from 'react'
import "./App.css"
import Header from './Component/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './Component/Form';
import TodoList from './Component/TodoList';

function App() {
  const[todo,setTodo]=useState([])
  return (
    <>
    <div className="bg-dark bg-opacity-75 text-light d-flex align-items-center flex-column vh-100">
      <div>
      <Header/>
      </div>
  
    <Form todo={todo}
    setTodo={setTodo}
    />
  
    
  
       <TodoList
      todo={todo}
      setTodo={setTodo}
      /> 
    </div>
   
    </>
  )
}

export default App