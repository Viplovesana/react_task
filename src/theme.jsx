
import { useSelector,useDispatch } from "react-redux";
import { colorchange } from "./colorSlice";
const Theme=()=>{
    const mycolor=useSelector((state)=>state.themechange.color)
    const dispatch=useDispatch();
    const handlechange=(e)=>{
        dispatch(colorchange(e.target.value))
    }
    return(
        <>
        <div style={{width:"400px",height:"400px",border:"1px solid black",backgroundColor:mycolor}} >
            <h1> theme App</h1>
            <input type="text" placeholder="Enter any color" onChange={handlechange} />
        </div> 
        </>
    )
};
export default Theme;