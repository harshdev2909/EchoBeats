import React, { useEffect, useState } from 'react'
import "./Sidebar.css"
import Sidebarbtn from './Sidebarbtn';
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import apiClient from '../../Spotify';
export const Sidebar = () => {
    const [image , setImage] = useState(
        "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABc_IAP39hj-kZ8BSec3IQ3zMRFLQvuxISsTH0WbVmISwOd7_gNPUA19gEwg5EkWJFdPrVyeOrDxhCFi08qjHYzABVNdsJHmlQjpw.jpg?r=920"
    )
    useEffect(()=>{
        apiClient.get("me").then(Response =>{
            setImage(Response.data.images[0].url)
        })
    },[])
  return (
    <div className='Sidebar-container'>
        <img src={image}
      alt='profile'
      className='profile-img'/>
      <div>
        <Sidebarbtn title="Feed" to="/Feed" icon={<MdSpaceDashboard/>}/>
        <Sidebarbtn title="Trending" to="/Trending" icon={<FaGripfire/>}/>
        <Sidebarbtn title="Player" to="/Player" icon={<FaPlay/>}/>
        <Sidebarbtn title="Favorites" to="/Fav" icon={<MdFavorite/>}/>
        <Sidebarbtn title="Library" to="/" icon={<IoLibrary/>}/>
      </div>
      <Sidebarbtn title="Sign Out" to="" icon={<FaSignOutAlt/>}/>
    </div>
  )
}
