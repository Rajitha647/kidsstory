import { memo } from "react";

function Counter({increment}){
    function Show(){
        return(
            console.log("show")
        ) 
    }
    const sh=Show()
    
    return(
        <>
        <button style={{backgroundColor:"blue",height:"40px",width:"70px"}} onClick={()=>{
            increment()
        }}>Inc</button>
        
        </>
    )
}

export default Counter;