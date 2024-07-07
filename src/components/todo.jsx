import React from "react"
import "../App.css"
import { CiSquareRemove } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";

function  Todo({todo}) {
    return(
        <div style={{
                display:"flex",
                flexDirection:"row",
                alignItems:"center",
                justifyContent:"space-between",
                fontWeight:"bold",
                border: "1px solid lightgrey",
                padding:"10px",
                marginTop:"10px"
            }}>
            <div>
                {todo.content}
            </div>
            <div>
                <CiSquareRemove className="todo-icons" />
                <CiEdit className="todo-icons" />
            </div>
        </div>
    )
}
export default Todo