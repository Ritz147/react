import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './context'
import { TodoForm, TodoItem } from './components'

function App() {
  const [todos,setTodos]=useState([])
  const addTodo=(todo)=>{
    setTodos((prev)=>[...prev,{id:Date.now(),...todo}])
  }
  const updateTodo=(id,updatedTodo)=>{
    setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, ...updatedTodo } : todo)));
  }
  const deleteTodo = (id) => {
    console.log("Deleting todo with id:", id);
    console.log("Previous todos:",todos)
    setTodos((prev) => {
        const newTodos = prev.filter((todo) => todo.id !== id);
        console.log("Updated todos:", newTodos);
        return newTodos;
    });
};

  const toggleComplete=(id)=>
    {
      setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id?{...prevTodo,completed:!prevTodo.completed}:prevTodo))
    }
  useEffect(()=>{
    const todos=JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length>0){
      setTodos(todos)
    }
  },[setTodos])//jab tak hum react me hai hum local storage directly access kar skte hain// hum get item krenge toh hume string me value milegi but hume chahiye JSON mei
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[setTodos])
  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                          <div key={todo.id} className="w-full">
                            <TodoItem todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
