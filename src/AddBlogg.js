import { useNavigate } from "react-router-dom";
import { config } from "./config";
import { useFormik } from "formik";
import axios from "axios";
function AddBlogg() {
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
      let user = await axios.post(`${config.api}/createblog`, values, {
        headers: {
          Authorization: `${localStorage.getItem("react_app_token")}`,
        },
      });

      navigate("/Home");
    },
  });

  return (
    <>
      <div className="container cntr">
        <h2>Your-Blog</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-lg-12">
              <label className="addbloglabel">Bolg-Title</label>
              <input
                className="form-control"
                type={"text"}
                value={formik.values.title}
                onChange={formik.handleChange}
                name="title"
              />
              <label className="addbloglabel">Blog-Mini-Statement</label>
              <input
                className="form-control"
                type={"text"}
                value={formik.values.paragraph}
                onChange={formik.handleChange}
                name="paragraph"
              />
              <label className="addbloglabel">Discripe-Your-Blogg</label>
              <input
                className="form-control"
                type={"text"}
                value={formik.values.discription}
                onChange={formik.handleChange}
                name="discriptions"
              />

              <label className="addbloglabel">Blog-Image-URL</label>
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
  );
}

export default AddBlogg;
