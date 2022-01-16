import React , {useState}from 'react'
import './Banner.css'
import Search from './Search'
import {Button} from '@material-ui/core';
import {useNavigate}  from "react-router-dom";

function Banner () {
  const navigate = useNavigate();
    const [showSearch , setShowSearch] = useState(false);
    return (
        <div className ='banner'>

          <div className ='banner__search'>
             {showSearch && <Search/>}
             <Button onClick ={() => setShowSearch(!showSearch)} className ='banner__searchButton' variant ='outlined'>{showSearch ? "Hide" :"Search Dates"}</Button>
          </div>
          
            <div className ='banner__info'>
              <h1>Get Out and stretch your imagination</h1>
              <h5>
                  plan a different kind of gateway to uncover the hidden gems near you.
              </h5><Button onClick={() =>navigate('/search')} variant = 'outlined'>Explore Nearby</Button>
               
           </div>
            
        </div>
    )
}

export default Banner
