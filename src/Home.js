import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from './Navbar';
import Card from './Card';
import axios from "axios";
import { config } from "./config";
import { useEffect, useState } from "react";
function Home(){
 
  const [data, setData]=useState([])
  useEffect(()=>{
    loadData()
  },[])
   
  
  let loadData=async ()=>{
     try {
      let itemx = await axios.get(`${config.api}/card`,
      {
        headers: {
          'Authorization': `${localStorage.getItem('react_app_token')}`
        }
      }
      );
      setData(itemx.data)
      console.log(itemx)
     } catch (error) {
      console.log(error)
     }
  }

 
    return(
      <div id="wrapper">
      <Navbar></Navbar>
     <div className="container">
     <div className="row">
     {data.map((item) => {
                return<Card item={item}></Card>
            })}

        
      <Outlet />
     </div>
     </div>
     
     
          </div>
      
   
    )
}
export default Home;   