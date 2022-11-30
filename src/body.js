import  React from 'react';
import data from './data';
import './App.css'

function Body(){
   return(
    data.map((item)=>{
      return <div className='body'>
      <img src={item.image} alt="" className='images'/>
      <div className='items'>
      <h1>{item.location}</h1>
      <h2>{item.title}</h2>
      <a href='https://www.google.com/maps/place/Mount+Kenya/@-0.1521383,37.2908983,14z/data=!3m1!4b1!4m5!3m4!1s0x1827e264a95116b7:0x501b6e20567ff6b8!8m2!3d-0.1521384!4d37.3084079'>{item.map}</a>
      <h4>{item.dates}</h4>
      <h5>{item.description}</h5>
      </div>
      </div>
      
    })
   )
}
export default Body