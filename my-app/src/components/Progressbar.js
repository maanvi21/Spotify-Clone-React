import React from 'react'

export default function Progressbar() {
  return (
    <> 
       <div class="container-fluid" id="bottom"> 
      <div className="progressbar" id="progressbar"> <label for="customRange1" className="form-label">  
      <span className="icons" id="icons">    
         <i className="fa-solid fa-backward fa-lg"style={{color:"#fafafa"}}></i> <i class="fa-solid fa-circle-play fa-xl" style={{color: "#fafafa"}}></i> <i className="fa-solid fa-forward fa-lg" style={{color:"#fafafa"}}></i> 
      </span>  </label>
<input type="range" className="form-range" id="customRange1"> 
</input>
</div>
 <div class="sideicons">  <i class="fa-solid fa-sliders fa-s" style={{color:"#fafafa"}}></i> <i class="fa-solid fa-closed-captioning fa-lg" style={{color:"#fafafa"}} ></i> <i class="fa-solid fa-headset fa-lg"style={{color:"#fafafa"}}></i> </div>

</div>
    </>
  )
}
