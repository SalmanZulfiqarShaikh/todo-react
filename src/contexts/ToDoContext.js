import { createContext, useContext } from "react";  // import these for context api shit


// store in a variable to create context
export const ToDoContext = createContext({
    todos: [  
        {id: 1, title: "Sample ToDo", completed: false}  // to dos will have a title ,a u.id, and will not be obviously completed upon creaation
    ],
    addTodo: (title) => {}, // for adding todo u just need a title
    editTodo: (id, title) => {}, //when editing to do u will need to edit the title and id will changed
    deleteTodo: (id) => {}, //id will change
    toggleComplete: (id) => {}, // id will change
});


//store in a custom hookkto use it
export const useToDoContext = () => {
      return useContext(ToDoContext)
};


// so that it will be easy to provide in the app.jsx
export const ToDoProvider =  ToDoContext.Provider;