import { useCallback, useState } from "react";
import Counter from "./counter";

function UseCallback(){
   const [count,setCount]=useState(0)
   const increment=useCallback(()=>{
    console.log("count increment");
    setCount(prevCount=>prevCount+1)
   },[])

    return(
        <>
        <Counter increment={increment}/>
        count:{count}
        <button onClick={()=>{
            setCount(prevCount=>prevCount-1)
            
        }}>Dec</button>
        
        </>
    )
}

export default UseCallback;