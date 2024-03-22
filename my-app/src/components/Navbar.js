import React from 'react'

export default function Navbar() {
  return (
    <div>
      <div>
      
    
      <nav className="navbar navbar-vertical-lg bg-body-tertiary">
  

  <div className="container-fluid">
  <i className="fa-brands fa-spotify fa-2xl" style={{color: "#23a45b"}} ></i>
  
    <a className="navbar-brand" href="#"> Spotify </a> <button type="button" className="btn btn-light">Explore Premium</button>
     <button type="button" className="btn btn-success">Sign In</button>
    <span className="navtopicons" > 
    <i className="fa-solid fa-house fa-lg" style={{color: "#f8f9fc"}}></i> 
           <i className="fa-solid fa-bell fa-lg" style={{color: "#f8f9fc"}}></i>
    <button className="visually-hidden-navbar-toggler-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" >
      <span> <i className="fa-solid fa-user fa-lg" style={{color: "#f7f7f8"}}></i> </span>
    </button> </span>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
       
          <li className="nav-item">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fa-solid fa-warehouse"></i> Your Library </a>
          

            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Your Playlists</a></li>
              <li><a className="dropdown-item" href="#">Liked Songs</a></li>
              
              <li><a className="dropdown-item" href="#"> Artists</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#"><i className="fa-solid fa-info"></i>  More info</a></li>

            </ul>
            </li>
            
        </li>
        
        
      </ul>
     
      
    </div>
    
  </div>

</nav>
</div>
    </div>
  )
}
