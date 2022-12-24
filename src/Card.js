import React from 'react'
import { setStatus, useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import { config } from "./config";
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
function Card({item}) {
const [view,setView]=useState('')

const [users, setUsers] = useState([]);

  useEffect(() => {
        loadData()
    }, []);

    let loadData = async () => {
       
        let users = await axios.get(`${config.api}/card`,
        {
          headers: {
            'Authorization': `${localStorage.getItem('react_app_token')}`
          }
        })
        console.log(users)
        setUsers(users.data)
       
    }

    let userDelete = async (users) => {
        try {
            let ask = window.confirm("Are you sure? Do you want to delete this data ?");
            if(ask){
                await axios.delete(`${config.api}/card/${users}`,{
                  headers: {
                    'Authorization': `${localStorage.getItem('react_app_token')}`
                  }
                });
                
                loadData();
            }
            
        } catch (error) {
            
        }
    }

  return (
  <>
    <div class="col-lg-3 mt-4">
   <div class="cardlg card" style={{width: "15 rem"}}>
   <h1 class="cardhed card-text">{item.title}</h1>
  <img class="imagecard card-img-top" style={{width: "10 rem"}} src={`${item.images}`} alt="Card image cap"/> 
<div class="card-body">
<p class="subhed card-text">{item.paragraph}</p>
    <div className="col-lg bttn">
    <button className="btn1" onClick={() => setView(true)}>view</button>

    <button className="btn2" onClick={()=>userDelete(item._id)}>Delete</button>
    </div>
   <Modal
        size="sl"
        show={view}
       onHide={() => setView(false)}
        aria-labelledby="example-modal-sizes-title-lg "
        className="maincard"
      >
        <Modal.Header closeButton>
       
        </Modal.Header>
        <Modal.Body>
  <div class="incard col-lg  mt-4">
     <div class="card-body">
    <div class="card" >
    <img class="cardimg"  src={`${item.images}`} alt="Card image cap"/>
   
    </div>
    <h3 class="card-text">{item.title}</h3>
   </div>
 <p class="card-text">{item.discriptions}</p>
 
 </div>
           
        </Modal.Body>
      </Modal>

 {/*<button><Link to={`/subCard/${item.id}`}>View</Link></button>*/}
 </div>
</div>
</div>

</>
  )

  }
export default Card
