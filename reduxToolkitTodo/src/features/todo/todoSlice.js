import {createSlice,nanoid} from '@reduxjs/toolkit'
const initialState={
    todos:[{id:1,text:"Hello World"}],
    editingTodo:''
}
//slice reducer ka ek bada version hai
//reducer ek functionality hai

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload,//payload apne aap me ek object hai
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
            console.log("working")
        },
        setEditingTodo:(state,action)=>{
          state.editingTodo=action.payload
        },
        updateTodo:(state,action)=>{
            state.todos=state.todos.map((todo)=>todo.id===action.payload.id?{...todo,text:action.payload.text}:todo)
            console.log(state.todos)
            state.editingTodo=''
        }

    }
})

export const {addTodo,removeTodo,setEditingTodo,updateTodo}=todoSlice.actions//individually components me kaam aayenge

export default todoSlice.reducer//saare reducers ko available karane ke liye