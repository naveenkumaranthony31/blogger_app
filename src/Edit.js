import axios from "axios";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
//import { env } from "./config";
function Edit({item}) {
  const params=useParams()
  const navigate=useNavigate()
  const formik = useFormik({
    initialValues: {
      title: "",
      images: "",
      discriptions: "",
      paragraph:"",
     
    },
  
    //   validate: (values) => {
    //     let errors = {};
    //     if (values.Name === "") {
    //       errors.Name = "Please enter username";
    //     } 
    //     if (values.Name.length<5){ 
    //       errors.Name = "Please enter greater than 5";
    //     }
  
    //     if (values.Position === "") {
    //       errors.Position = "Please enter position";
    //     }
  
    //     return errors;
    //   },
  
      onSubmit: async(values) => {
       await axios.put(`'http://localhost:3001/card/:id'/${params.id}`,values)
      navigate("/Home")
      },
    });

useEffect(()=>{
  loadUser()
},[])

let loadUser=async()=>{
  try {
   let user= await axios.get(`http://localhost:3001/card"${params.id}`)
formik.setValues({
  Title: user.item.title,
  Discription: item.data.discription,
  Paragraph:user.item.Paragraph,
  
},

)
  } catch (error) {
    
  }
}


    return (
        <>
        <div className="container">
    
        <form onSubmit={formik.handleSubmit}>
    
          <div className="row">
            <div className="col-lg-12">
    
              <label>Title</label>
              <input
                className="form-control"
                type={"text"}
               value={formik.values.title}
                onChange={formik.handleChange}
                name="title"
              />
              
              <label>Discription</label>
              <input
                className="form-control"
                type={"text"}
                value={formik.values.discription}
                onChange={formik.handleChange}
                name="discriptions"
              />
    
    <label>Paragraph</label>
              <input
                className="form-control"
                type={"text"}
                value={formik.values.paragraph}
                onChange={formik.handleChange}
                name="paragraph"
              />
             
            </div>
            
            </div>
          <input
                    className="btn btn-primary mt-2 "
                    type={"Submit"}
                    value="Submit"
                   
                  />
            </form>
            </div>
            </>
    );
  }

export default Edit;

