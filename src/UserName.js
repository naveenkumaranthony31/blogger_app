import React from 'react'
import { Routes, Route, Outlet } from "react-router-dom";
import axios from "axios";
import { setStatus, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { config } from "./config";

function UserName() {
  
    const params = useParams();

    const [userData, setUserData] = useState([]);

   useEffect(() => {
        loadData()
    }, []);

    let loadData = async (userData) => {
       
        await axios.get(`http://localhost:3001/register/${userData}`);
        console.log(userData)
        setUserData(userData.data)
       
    }

    
    
    
  return (
  <div>
    <h3>{loadData.name}</h3>
  </div>
  )
}

export default UserName;
