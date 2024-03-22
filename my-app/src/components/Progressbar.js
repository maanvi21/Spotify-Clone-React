import React,{useState} from 'react';
import Songtitle from './Songtitle';
import title from './Recentlyplayedsongs';
export default function Progressbar() {

  return (
    <> 
       <div className="container-fluid" id="bottom"> 
       <Songtitle title={title}/>
             <div className="progressbar" id="progressbar"> <label htmlFor="customRange1" className="form-label">  
        </label>
<input type="range" className="form-range" id="customRange1"> 
</input>
</div>
<div className="icons" >    
         <i className="fa-solid fa-backward fa-lg" id="backward" style={{color:"#fafafa"}}></i> <i className="fa-solid fa-circle-play fa-xl" id="play" style={{color: "#fafafa"}}></i> <i className="fa-solid fa-forward fa-lg" id="forward"style={{color:"#fafafa"}}></i> 
      </div>
 <div className="sideicons">  <i className="fa-solid fa-sliders fa-s" style={{color:"#fafafa"}}></i> <i className="fa-solid fa-closed-captioning fa-lg" style={{color:"#fafafa"}} ></i> <i className="fa-solid fa-headset fa-lg"style={{color:"#fafafa"}}></i> </div>

</div>
    </>
  )
}
