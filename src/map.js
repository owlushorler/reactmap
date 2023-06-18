import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import './ac.css'
import Ip from './ip'
import { useEffect, useState } from 'react'


function Mmap(prop){
    let ap = prop.ab
  
    
     
 
 
   return(<div className='we' >
        <div className='bol' > 
        

        <div className='io' >
             
             <div className='mo' >  
                 <div className='yu' ><p>IP ADDRESS</p> <h3 className='an' > {ap.query}</h3> </div>
                 <div className='li' ></div>
            </div>
             
 
         </div>

         <div className='io' >
             
             <div className='mo' >  
                 <div className='yu' ><p>LOCATION</p> <h3 className='an' > {ap.city},{ap.country},
                        {ap.zip}   </h3> </div>
                 <div className='li' ></div>
            </div>
             
 
         </div>

         <div className='io' >
             
             <div className='mo' >  
                 <div className='yu' ><p>TIME ZONE</p> <h3 className='an' >  {ap.timezone} </h3> </div>
                 <div className='li' ></div>
            </div>
             
 
         </div>     

        

         <div className='io' >
             
             <div className='mo' >  
                 <div className='yu' ><p>ISP</p> <h3 className='an' >   {ap.isp}  </h3> </div>
                
            </div>
             
 
         </div>
       
       
        
                  


        </div>
        
        <div className='boo'>
    <MapContainer center={[typeof ap.lat === "undefined"?17:ap.lat,typeof ap.lon === "undefined"?8:ap.lon]} zoom={13} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[typeof ap.lat === "undefined"?17:ap.lat,typeof ap.lon === "undefined"?8:ap.lon]}>

  </Marker>
</MapContainer>
</div>
 </div>)
}

export default Mmap