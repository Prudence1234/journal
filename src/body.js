import  React from 'react';
import data from './data';

function Body(){
   return(
    data.map((item)=>{
      return
      <div>
      <h1>{item.location}</h1>
      <h5>{item.title}</h5>
      <h5>{item.map}</h5>
      <h5>{item.dates}</h5>
      <h5>{item.description}</h5>
      
      </div>
      
    })
   )
}
export default Body