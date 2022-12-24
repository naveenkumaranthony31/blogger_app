import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { config } from "./config";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
function Login(password,message,token,text) {
  const [email, setEmail]=useState([])
  const [item, setItem]=useState('')
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
       
        const user = await axios.post(`${config.api}/login`, values);
        setEmail(email)
      let item= localStorage.setItem("react_app_token", token);
       //alert({message});
        
        // if (message === `Successfully Logged In!!`) {
 alert("Logged in successfully" )
        //   if (values.email === "email") {
            navigate("/Home");
          //   console.log(values.email);}
          //  }  
          // else {
          //   alert("Please Register )");
          // }
      }
       catch (error) {
        alert("Please Register" )
        console.log(error);
      }
     },
  });
  return (
    <section class=" gradient-custom">
      <div class="container py-5 h-100">
      <form onSubmit={formik.handleSubmit}>
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              class="card bg-dark text-white"
              style={{ borderRadius: "1rem" }}
            >
              <div class="card-body p-5 text-center">
                <div class="mb-md-5 mt-md-4 pb-5">
                  <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                  <p class="text-white-50 mb-5">
                    Please enter your login and password!
                  </p>
                  

                  <div class="form-outline form-white mb-4">
                    <input
                      type={email}
                      
                      id="typeEmailX"
                      class="form-control form-control-lg"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      name="email"
                    />
                    <label class="form-label" for="typeEmailX">
                      Email
                    </label>
                  </div>

                  <div class="form-outline form-white mb-4">
                  <input
                      type={text}
                      id="typeEmailX"
                      class="form-control form-control-lg"
                   value={formik.values.password}
                      onChange={formik.handleChange}
                      name="password"
                    />
                    <label class="form-label" for="typeEmailX">
                      Password
                    </label>
                  </div>

                  <p class="small mb-5 pb-lg-2">
                    <a class="text-white-50" href="#!">
                      Forgot password?
                    </a>
                  </p>

                  
                   
                    <input
                    class="btn btn-outline-light btn-lg px-5"
                    type={"submit"}
                    values="login"
                   
                  />
                  
                    

                  <p class="mt-5">
                    Don't have an account?
                    <Link to="/Register" class="text-blue-50 fw-bold ml-2">
                      Register
                    </Link>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
        </form>
      </div>
    </section>

    //<div>
    //<h1>login</h1>
    //<button onClick={login}>LOGIN</button>
    //</div>
  );
}
export default Login;
