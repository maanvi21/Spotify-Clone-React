import React, {useState}from 'react'
import Songtitle from './Songtitle'
import spotifyimage6 from '../Images/spotifyimage6.jpg'; 
export default function Musicplayer() {
    const [title, setTitle]= useState("Start Playing");
  return (
    <div class="musicplayer">
   
      <button class="btn btn-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" id="mpbutton">Play music in Music Player</button>
      <div class="offcanvas"> 
<div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasScrollingLabel"> <p><a href="#" class="link-light link-offset-2 link-underline-opacity-75 link-underline-opacity-100-hover">Today's Top Hits</a></p> </h5>


    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body" >
  <img src={(spotifyimage6)} className="img6spotify" id="spotifyimage6" alt="c6"/>
  <div class="lilsomething"> <div class="text-light">Die for you</div> <i class="fa-solid fa-circle-check" id="tick" style={{color: "#23a45b"}}></i> <i class="fa-solid fa-ellipsis" id="dots" style={{color: "#f8f9fc"}}></i> </div>
  <div class="text-light text-opacity-50">The Weeknd</div>
  <div class="card" style={{width: "18rem;"}}>
  <div class="card text-bg-dark mb-3" style={{width: "18rem;"}}>
  <div class="card-header">About the Artist</div>
  <div class="card-body">
    <h5 class="card-title">The Weeknd</h5>
    <p class="card-text">The Weeknd took over pop music and culture on his own terms filtering R&B, pop and hiphop through an ambitious wide-screen lens.</p>
  </div>
</div>
</div>
  </div>
  </div>
</div>

    </div>
  )
}
