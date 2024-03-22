import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Homepage from './Homepage';
import Recentlyplayedsongs from './Recentlyplayedsongs'
import recentlyplayed from './Recentlyplayedsongs'
import Musicplayer from './Musicplayer';
 export default function Songlist({src}) {
return (
    <>
   <Recentlyplayedsongs src={src}/>
   <div className="darkmode" data-bs-theme="dark">
   </div>
        <div className="songlist"> 
        
        <div className="overflow-y-visible">
          <div className="overview"> 
       
      <div className="col-6 d-grid gap-2 mx-aut" id="songs">
        
        
        <h5 className="recent">Recently Played <i className="fa-solid fa-clock"></i> </h5>
       
         <button type="button" className="btn btn-dark" id="song1" >Ishq Wala Love- Shaheen Bros  <i className="fa-solid fa-play"></i> <i className="fa-solid fa-arrow-up-from-bracket"></i>
         
         <audio src={src} type="audio/mp3"/>  
         </button>
        
          <button type="button" className="btn btn-dark" id="song2" >Teri Deewani- Shreya Ghoshal  <i className="fa-solid fa-play"></i> <i className="fa-solid fa-arrow-up-from-bracket"></i> 
          <audio src={src} type="audio/mp3"/>
          </button>
          <button type="button" className="btn btn-dark" id="song3" > Baarishein-Anuv Jain  <i className="fa-solid fa-play"></i> <i className="fa-solid fa-arrow-up-from-bracket"></i> 
          <audio src={src} type="audio/mp3"/>
          </button>
          <button type="button" className="btn btn-dark" id="song4"> Akhiyaan- Mitraz  <i className="fa-solid fa-play"></i> <i className="fa-solid fa-arrow-up-from-bracket"></i> 
          <audio src={src} type="audio/mp3"/>
          </button>
          <button type="button" className="btn btn-dark"id="song5" > Akhiyaan- Mitraz  <i className="fa-solid fa-play"></i> <i className="fa-solid fa-arrow-up-from-bracket"></i> <audio src={src} type="audio/mp3"/></button>
          <button type="button" className="btn btn-dark" id="song6" > Akhiyaan- Mitraz  <i className="fa-solid fa-play"></i> <i className="fa-solid fa-arrow-up-from-bracket"></i> </button>
          <button type="button" className="btn btn-dark"id="song7" > Baarishein-Anuv Jain  <i className="fa-solid fa-play"></i> <i className="fa-solid fa-arrow-up-from-bracket"></i>
          <audio src={src} type="audio/mp3"/></button>
          <button type="button" className="btn btn-dark" id="song8" > Baarishein-Anuv Jain  <i className="fa-solid fa-play"></i> <i className="fa-solid fa-arrow-up-from-bracket"></i> <audio src={src} type="audio/mp3"/></button>
          <button type="button" className="btn btn-dark" id="song9" > Baarishein-Anuv Jain  <i className="fa-solid fa-play"></i> <i className="fa-solid fa-arrow-up-from-bracket"></i> <audio src={src} type="audio/mp3"/></button>
          <button type="button" className="btn btn-dark" id="song10" > Baarishein-Anuv Jain  <i className="fa-solid fa-play"></i> <i className="fa-solid fa-arrow-up-from-bracket"></i> <audio src={src} type="audio/mp3"/></button>
          <button type="button" className="btn btn-dark" id="song11" > Baarishein-Anuv Jain  <i className="fa-solid fa-play"></i> <i className="fa-solid fa-arrow-up-from-bracket"></i> <audio src={src} type="audio/mp3"/></button>
          <button type="button" className="btn btn-dark" id="song12" > Baarishein-Anuv Jain  <i className="fa-solid fa-play"></i> <i className="fa-solid fa-arrow-up-from-bracket"></i> <audio src={src} type="audio/mp3"/></button>
          <button type="button" className="btn btn-dark" id="song13" > Baarishein-Anuv Jain  <i className="fa-solid fa-play"></i> <i className="fa-solid fa-arrow-up-from-bracket"></i> <audio src={src} type="audio/mp3"/></button>

        </div>
        <Homepage/>
        </div>
        </div>
       
      </div>
      <Musicplayer/>
    </>
  )
}
