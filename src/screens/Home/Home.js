import React, { useEffect, useState } from 'react'
import {Library} from '../Library/library'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Feed } from '../feed/feed'
import { Player } from '../Player/Player';
import { Trending } from '../Trending/Trending';
import {Fav} from '../Fav/Fav';
import './Home.css'
import { Sidebar } from '../../components/Sidebar';
import { Login } from '../auth/Login';
import { setClientToken } from '../../Spotify';
export const Home = () => {
  const [token , setToken] = useState("");

  useEffect(()=>{
    const tokenn = window.localStorage.getItem("token")
    const hash = window.location.hash;
    window.location.hash= "";
    if(!token && hash){
      const token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token",token);
      setToken(token) ;
      setClientToken(token)
    }else {
      setToken(tokenn)
      setClientToken(tokenn)
    }
  },[])
  return !token ?(
    <Login/> 
  ) : (
    <BrowserRouter>
    <div className='mainbody'>
    <Sidebar/>
    <Routes>
      <Route path="/" element={<Library/>}/>
      <Route path='/Feed' element={<Feed/>}/>  
      <Route path='/player' element={<Player/>}/>  
      <Route path='/trending' element ={<Trending/>}/>
      <Route path='/fav' element={<Fav/>}/>
    </Routes>
    </div>
  </BrowserRouter>
  )
}
