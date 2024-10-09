import { useState,useMemo,useEffect} from "react";
function Usememoex(){
   
    const [number,setNumber]=useState(0)
    const [count,setCount]=useState(0);
    const [square,setSquare]=useState(0)

 function incCount(){
    console.log("incCount working")
    setCount(count+1)
   }
   const changeValue=(e)=>{
    setNumber(e.target.value)
   }        
   const squareResult=useMemo(()=>{
    return squareNumber(number)
   },[number])

    return(
        <>
                    
          <input type="text" value={number}  onChange={changeValue}/>
          <div style={{backgroundColor:'white'}}>output:{squareResult}</div>
          <button onClick={incCount}>INC Count</button>
          <div style={{backgroundColor:'white'}}>output:{count}</div>

        </>
    )
}
function squareNumber(number){
    let sq=Math.pow(Number(number),2)
    console.log("square",sq)
    return sq
     
}
export default Usememoex;