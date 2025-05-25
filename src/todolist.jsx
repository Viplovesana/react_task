
import { useSelector,useDispatch } from "react-redux";
import { addtask } from "./todoSlice";
import { useState } from "react";
const Todolist=()=>{
    const[input,setInput]=useState("")
    const mytodo=useSelector((state)=>state.todo.task);
    const dispatch=useDispatch();
    const handleadd=()=>{
        dispatch(addtask(input))
        setInput("")
    }
    const show=mytodo.map((key)=>{
        return(
            <>
            <tr>
                <td>
                    {key.task}
                </td>
            </tr>
            </>
        )
    })


    return(
        <>
        <h1>Welcome to Todo app</h1>
        enter : <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}} />
        <button onClick={handleadd}>Add</button>

        <table>
            <tr>
                <th>
                    list
                </th>
            </tr>
        </table>
        </>
    )
};
export default Todolist;