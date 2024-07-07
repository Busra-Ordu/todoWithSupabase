import React from "react"
import "../App.css"
import Todo from "./todo"


function  TodoList({todos,onRemoveTodo}) {
    return(
        <div style={{
            width:"100%",
            marginTop:"50px",
            // border:"1px solid lightgrey",
            // padding:"10px"
        }}>
            {
                todos && todos.map((todo)=> (
                    <Todo 
                    key={todo.id} todo={todo}
                    onRemoveTodo={onRemoveTodo}
                    />
                ))
            }
        </div>
    )
}
export default TodoList