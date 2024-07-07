import React from "react"
import "../App.css"
import { CiSquareRemove } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";

function  Todo({todo,onRemoveTodo}) {
    const {id,content} = todo;

    const removeTodo = () => {
        onRemoveTodo(id);
    }

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
                {content}
            </div>
            <div>
                <CiSquareRemove 
                className="todo-icons" 
                onClick={removeTodo}
                />
                <CiEdit className="todo-icons" />
            </div>
        </div>
    )
}
export default Todo