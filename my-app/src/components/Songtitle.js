import React,{useState} from 'react'

import Recentlyplayedsongs from './Recentlyplayedsongs';

export default function Songtitle(props) {
  
  const [title, setTitle]= useState("Start Playing");
  return (
    <>
    
   <div className="songTitle"> 
     {title}
   </div>

  
    </>
  )
}
