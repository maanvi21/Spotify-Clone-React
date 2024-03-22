
import './App.css';




import Navbar from './components/Navbar';
import Progressbar from './components/Progressbar';
import Songlist from './components/Songlist';


function App() {
  return (
    <>

      <div className="darkmode" data-bs-theme="dark">
      <Navbar/> 
        </div>
    
      <body className="App">
      <div className="darkmode" data-bs-theme="dark">
        
      <form className="searchBar" role="search">
                <input className="form-control me-2" type="search" placeholder="Search for Songs" aria-label="Search" />
                <button type="button" className="btn btn-dark"> <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
              </form>
              </div>
      
      
        <Songlist/>
     
        <Progressbar/>
       
      </body>

    </>
  );
}

export default App;
