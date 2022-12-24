import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { config } from "./config";
import Lottie from "lottie-react";
import plus from "./plus.json";
import { useFormik } from "formik";
import axios from "axios";
function AddBlogg() {
  const [lgShow, setLgShow] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      title: "",
      images: "",
      discriptions: "",
      paragraph: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      let user = await axios.post(`${config.api}/createblog`, values,{
        headers: {
          'Authorization': `${localStorage.getItem('react_app_token')}`
        }
      });
      setLgShow(false);
      navigate("/Home");
    },
  });

  return (
    <>
      <button className="addblgbtn" onClick={() => setLgShow(true)}>
        <Lottie className="plusanimation" animationData={plus} /><span className="addtxt">AddYourBlog</span> 
      </button>

      <Modal
        size="lg"
        show={lgShow}
        onHide={(conet) => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <div className="container">
              <form onSubmit={formik.handleSubmit}>
                <div className="row">
                  <div className="col-lg-12">
                    <label>Bolg-Title</label>
                    <input
                      className="form-control"
                      type={"text"}
                      value={formik.values.title}
                      onChange={formik.handleChange}
                      name="title"
                    />
          <label>Blog-Mini-Statement</label>
                    <input
                      className="form-control"
                      type={"text"}
                      value={formik.values.paragraph}
                      onChange={formik.handleChange}
                      name="paragraph"
                    />
          <label>Discripe-Your-Blogg</label>
                    <input
                      className="form-control"
                      type={"text"}
                      value={formik.values.discription}
                      onChange={formik.handleChange}
                      name="discriptions"
                    />


                    <label>Blog-Image-URL</label>
                    <input
                      type="text"
                      class="form-control"
                      name="images"
                      placeholder=""
                      onChange={formik.handleChange}
                      value={formik.values.images}
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
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddBlogg;
