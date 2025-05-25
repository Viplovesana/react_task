import { useSelector,useDispatch } from "react-redux"
import { increament,decreament ,reset} from "./counterSlice"
const Countertool=()=>{
    const mycount=useSelector((state)=>state.count.value);
    const dispatch=useDispatch();
    return(
        <>
        <div style={{marginleft:"50px"}}>
        <h1>{mycount}</h1>
        <button onClick={()=>{dispatch(decreament())}}>-</button>
        <button onClick={()=>{dispatch(reset())}}>[reset]</button>
        <button onClick={()=>{dispatch(increament())}}>+</button>
        </div>
        </>
    )
}
export default Countertool;