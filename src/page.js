import de from './images/pattern-bg-desktop.png'
import op from './images/icon-arrow.svg'
import './page.css'
import { useState } from 'react'
import Ip from './ip'

function Page(){
    let [man,setman]=useState("")
    let [love,setlove]=useState('')
    

    function lov(){

        setlove(man)
       setman("")
    
    }


    return(
        <div className='abc' style={{backgroundImage:`url(${de})`,width:"100vw", height:"17vw", }  } >
                
             <h2>IP Address Tracker</h2>

             <div className='ab' > 
                <input 
                
                className='z'
                onChange={e=>setman(e.target.value)}
                value={man}
                />
                <div  onClick={()=>lov()} className='abb' > <img src={op} alt='' />  </div>
             </div>
            
            <Ip
             ap={love}
             
             
             />

                
        </div>
    )
}

export default Page