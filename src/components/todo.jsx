import React, { useState } from "react"
import "../App.css"
import { CiSquareRemove } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";

function  Todo({todo,onRemoveTodo}) {
    const {id,content} = todo;

    const[editable,setEditable] = useState(false);
    

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
                {
                    editable ? 
                    <input 
                    className="todo-input"  
                    type="text"/>
                    :
                    content
                }
            </div>
            <div>
                <CiSquareRemove 
                className="todo-icons" 
                onClick={removeTodo}
                />
                {
                    editable ? 
                    <CiCircleCheck className="todo-icons" /> 
                    : 
                    <CiEdit className="todo-icons" 
                    onClick={() => setEditable(true)} />  
                }
                
                

            </div>
        </div>
    )
}
export default Todo