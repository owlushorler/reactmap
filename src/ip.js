import { useEffect, useState } from "react";
import Mmap from "./map";

function Ip(prop){
 let {ap,aa, aw}=prop
 
 let  [da, setdat]=useState([])

    useEffect(()=>{
        fetch(`http://ip-api.com/json/${ap}`)
        .then(res=>res.json())
        .then(data =>(setdat(data) ,console.log(data)))
        .catch(error=>{
            console.log(error)
        })
    },[ap])
    return(
    
     <div>
           
        
           <Mmap
        ab={da}/>
        

   </div>  
        
    )
}





export default Ip