import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import boy from "./boy.json";
import AddBlogg from "./AddBlogg";
import UserName from "./UserName";

//import TwoWheeler from './TwoWheeler';
function Navbar(props) {
  let navigate = useNavigate()
  let doLogout = () => {
      localStorage.removeItem('react_app_token');
      navigate('/')
      
    }
  const Navigate = useNavigate;
 
  return (
    <nav class="navbar ">
      <div class="container-fluid">
        <Lottie className="boyanimation" animationData={boy} />
        <Link className="navhead" to="/Home">
          <h1>
            <span className="navvhead">M</span>y
            <span className="navvhead">B</span>logger
            <span className="navvhead">P</span>age
          </h1>
        </Link>
        <button className='m-2 btn btn-secondary ' onClick={doLogout}>Logout</button>
        <ul class="navadd navbar-nav ms-auto">
          <li class="nav-item">
           {props.data}
            <AddBlogg></AddBlogg>
           
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
