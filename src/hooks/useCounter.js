import { useState } from "react";

function UseCounter(value){
   const[Number,setNumber]=useState(value)

   const increment=()=>{
    setNumber(Number+1)
   }
   const decrement=()=>{
    if(Number>0){
        setNumber(Number-1)
    }}
   return[Number,increment,decrement];

}
export{UseCounter}