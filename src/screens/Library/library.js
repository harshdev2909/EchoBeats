import React, { useEffect, useState } from 'react'
import APIKit from "../../Spotify";
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";
import "./library.css";
import { useNavigate } from 'react-router-dom';
export const Library = () => {
  const[playlists,setPlaylists] = useState(null);
  useEffect(()=>{
    APIKit.get("me/playlists").then(function(Response){
      setPlaylists(Response.data.items)
      console.log(Response.data.items)
    })
  },[])
  const navigate = useNavigate();
  const playplaylist = (id)=>{
    navigate("/Player",{state :{id:id}})
  }
  
  return (
    <div className='screen-container'>
      <div className='library-body'>
    {playlists?.map((playlists)=>(
      <div className='playlist-card' 
      key={playlists.id}
      onClick={()=>playplaylist(playlists.id)}
      >
        <img src={playlists.images[0].url} className='playlist-image' alt='Playlist-Art' />
        <p className='playlist-title'>{playlists.name}</p>
        <p className='playlist-subtitle'>{playlists.tracks.total}Songs</p>
        <div className="playlist-fade">
              <IconContext.Provider value={{ size: "50px", color: "#E99D72" }}>
                <AiFillPlayCircle />
              </IconContext.Provider>
            </div>
        </div>
      ))}</div>
    </div>
  )
}
