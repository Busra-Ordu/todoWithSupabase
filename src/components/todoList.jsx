import React from "react"
import "../App.css"
import Todo from "./todo"


function  TodoList({todos}) {
    return(
        <div style={{
            width:"100%",
            marginTop:"50px",
            // border:"1px solid lightgrey",
            // padding:"10px"
        }}>
            {
                todos && todos.map((todo)=> (
                    <Todo todo={todo}/>
                ))
            }
        </div>
    )
}
export default TodoList