
import React from 'react'
import spotifycarousel1 from '../Images/spotifycarousel1.jpg';
import spotifycarousel2 from '../Images/spotifycarousel2.png';
import spotifyimage5 from '../Images/spotifyimage5.jpg'; 
import spotifyimage6 from '../Images/spotifyimage6.jpg'; 
import spotifycarousel3 from '../Images/spotifycarousel3.jpg';
import spotifyimage7 from '../Images/spotifyimage7.jpg';
import spotifyimage8 from '../Images/spotifyimage8.jpg';
import dailymix1 from '../Images/dailymix1.jpg';
import dailymix2 from '../Images/dailymix2.jpg';
export default function Homepage() {
  return (
    
<>
      <div className="container text-center" id="homepage">
  
  <div className="row" id="main">
    <div className="col-md-6" id="maincarousel">
    <div id="carouselExampleFade" className="carousel slide carousel-fade" >
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src= {(spotifycarousel1)} className="d-block w-100" id="spotifycarousel1" alt="c1"/>
    </div>
    <div className="carousel-item">
      <img src={(spotifycarousel2)} className="d-block w-100" id="spotifycarousel2" alt="c2"/>
    </div>
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
       
       
       </div>
    
  </div>

  <div className="row">
    <div className="col-6 col-md-2" id="row2">
    <img src={(spotifyimage5)} className="d-block w-100" id="spotifyimage5" alt="c5"/>
    </div>
    <div className="col-6 col-md-2">
    <img src={(spotifyimage6)} className="d-block w-100" id="spotifyimage6" alt="c6"/>
    </div>
    <div className="col-6 col-md-2">
    <img src={(dailymix1)} className="d-block w-100" id="dailymix1" alt="d1"/>
    </div>
    <div className="col-6 col-md-2">
    <img src={(dailymix2)} className="d-block w-100" id="dailymix2" alt="d2"/>
    </div>
    
  </div>
    </div>
    </>
  )
}
