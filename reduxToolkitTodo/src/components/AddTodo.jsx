import React,{useState} from 'react'
import {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {addTodo,updateTodo} from '../features/todo/todoSlice'
function AddTodo() {
    const dispatch=useDispatch()
    const editingTodo = useSelector(state => state.editingTodo);
    const [input, setInput] = useState(editingTodo ? editingTodo.text : '');
    useEffect(() => { // Log to check if it's coming from Redux
          if (editingTodo) {
            setInput(editingTodo.text); // Set input value based on editingTodo's text
          }
          else
          setInput('')
    }, [editingTodo]);
    const addTodoHandler=(e)=>{
        e.preventDefault()
        if(editingTodo){
            dispatch(updateTodo({...editingTodo,text:input}))
        }
        else
        {
            dispatch(addTodo(input))
            setInput('')
        }
    }
  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
    <input
      type="text"
      className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      placeholder="Enter a Todo..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
    <button
      type="submit"
      className=" bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
    >
      {editingTodo?"Update Todo" :"Add Todo"}
    </button>
  </form>
  )
}

export default AddTodo