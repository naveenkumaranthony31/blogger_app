import React from 'react'
import './App.css';
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { config } from "./config";
import axios from "axios";
import { text } from '@fortawesome/fontawesome-svg-core';
function Register(email,password,repeatpassword) {
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      repeatpassword: "",
    },
    onSubmit: async (values) => {
      try {
        console.log(values);
        const user = await axios.post(`${config.api}/register`, values);
       // localStorage.setItem("react_app_token", user.data.token);
        //alert(user.data.message);
        
        //if (user.data.message === `Successfully Logged In!!`) {
    //       console.log(values.role);
    //       if (values.role === "Admin") {
            navigate("/");
    //       }  else {
    //         alert("Please try Admin/User (Case Sensitive)");
    //       }
    //     }
      } catch (error) {
        console.log(error);
      }
     },
  });
  return (
    <div>
    <section class=" bg-image"
style={{backgroundimage:" url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')"}}>
    <div class="mask d-flex align-items-center h-100 gradient-custom-3">
      <div class="container h-100">
      
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-9 col-lg-7 col-xl-6">
            <div class="card" style={{borderradius: "15px"}}>
              <div class="card-body p-5">
                <h2 class="text-uppercase text-center mb-5">Create an account</h2>
  
                <form onSubmit={formik.handleSubmit}>
  
                  <div class="form-outline mb-4">
                  <input
                      type={text}
                      id="form3Example3cg"
                      class="form-control form-control-lg"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      name="name"
                    />
                    <label class="form-label" for="form3Example1cg">Your Name</label>
                  </div>
  
                  <div class="form-outline mb-4">
                  <input
                      type={email}
                      id="form3Example3cg"
                      class="form-control form-control-lg"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      name="email"
                    />
                    
                    <label class="form-label" for="form3Example3cg">Your Email</label>
                  </div>
  
                  <div class="form-outline mb-4">
                  <input
                      type={password}
                      id="form3Example3cg"
                      class="form-control form-control-lg"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      name="password"
                    />
                    
                    <label class="form-label" for="form3Example4cg">Password</label>
                  </div>
  
                  <div class="form-outline mb-4">
                  <input
                      type={repeatpassword}
                      id="form3Example3cg"
                      class="form-control form-control-lg"
                      value={formik.values.repeatpassword}
                      onChange={formik.handleChange}
                      name="repeatpassword"
                    />
                 
                    <label class="form-label" for="form3Example4cdg">Repeat your password</label>
                  </div>
  
                  <div class="form-check d-flex justify-content-center mb-5">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                    <label class="form-check-label" for="form2Example3g">
                      I agree all statements in <a href="#!" class="text-body"><u>Terms of service</u></a>
                    </label>
                  </div>
  
                  <div class="d-flex justify-content-center">
                  
                 <input
                className="btn btn-primary mt-2 "
                type={"Submit"}
                value="Submit"
               
              />
                 
                   
                  {/* <button type={"onSubmit"}
                      class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button> */}
                     
                  </div>
  
                  <p class="text-center text-muted mt-5 mb-0">Have already an account? <Link to="/"
                      class="fw-bold text-body"><u>Login here</u></Link></p>
  
                </form>
  
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </section>
  </div>
  )
}

export default Register
