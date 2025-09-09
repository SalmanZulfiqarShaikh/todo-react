import { useEffect, useState } from 'react'
import './App.css'
import { ToDoProvider } from './contexts';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
// No.of todos currently using use state
  const [todos, setTodos] = useState([]);

// functionallity


// we use ... to access the old state as it is
//(prev is used so we can use og state)

  const addTodo = (title) => {
         setTodos((prev) => [...prev,{id: Date.now(), ...title}]);
  }
// og state laye usko map kiya(for each loop which create a duplicate array uskay element ko naam diya prevTodo if each value is equal to the id then name wohi rehnay do prev todo wala)
  const editTodo = (id, newTitle) => {
     setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, title: newTitle} : prevTodo));
  }
// only keep those that doesnt match the id bcz I wanna delete that one that matches the id
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }

  // ulta kardo jo bhi prevTodo ki value hai
  const toggleComplete = (id) => {
      setTodos((prev)=> prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }


  // local Storage
  useEffect(()=>{
      const todos =  JSON.parse(localStorage.getItem("todos"));

      if (todos && todos.length > 0) {
        setTodos(todos)
      }
  },[])


  useEffect(()=>{
       localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])
    // values that need to be included from the provider so we can actually use them
  return ( //UI
    <>
      
<ToDoProvider value={{todos, addTodo, editTodo, deleteTodo, toggleComplete}}>

      <div className="bg-[#f1ee5a] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Ultimate TODO List</h1>
                    <div className="mb-4">
                       
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map((todo) => (
                             <TodoItem key={todo.id} todo={todo}/>

                             
                        ))}
                    </div>
                </div>
            </div>
</ToDoProvider>
    </>
  )
}

export default App
