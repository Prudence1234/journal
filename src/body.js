import  React from 'react';
import data from './data';

function Body(props){
   return(
    <div>
       <img src={'../img/ ${props.image}'}/>
       <div>
        <span>{ props.location}</span>
        <span>{ props.title}</span>
        <span>{ props.dates}</span>
        <span>{ props.map}</span>
        <p>{ props.description}</p>
       </div>
    </div>
   )
}
export default Body