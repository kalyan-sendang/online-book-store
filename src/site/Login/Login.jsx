import react, { useState } from "react";
import "../../styles/styles.css";
import { Field, Form, Formik } from "formik";
import { Label } from "reactstrap";
import axiosInstance from "../../../axiosInstance";
import { useNavigate } from "react-router-dom";

const LoginUser = () => {
  const navigate = useNavigate();
  const [userForm, setUserForm] = useState({
    userName: "",
    password: "",
  });

  function validateUsername(value) {
    let error;
    if (!value) {
      error = "UseName is Required";
    } else if (!/^[a-zA-Z0-9_-]{3,20}$/i.test(value)) {
      error = "Invalid Username";
    }
    return error;
  }

  function validatePassword(value) {
    let error;
    if (!value) {
      error = "Password is Required";
    } else if (value.length < 6) {
      error = "Password must be at least 6 characters long";
    }
    return error;
  }

  const formikSubmit = async (value, action) => {
    try {
      const { status, data } = await axiosInstance.post("/user/login", value);
      const token = data?.token;
      // Save the token in local storage
      localStorage.setItem("token", "Bearer " + token);
      if (status == "200" && localStorage.getItem("token")) {
        const response = await axiosInstance.get(`/userprofile`);
        localStorage.setItem("userprofile", JSON.stringify(response?.data));
        console.log(response.data);
        response?.data?.role == "ADMIN" ? navigate("/admin") : navigate("/");
      }
    } catch (error) {
      console.log("Login Error ", error);
    }
  };
  return (
    <div className="name" style={{ paddingBottom: "200px" }}>
      <div>
        <h1>Login User!!!</h1>
        <br></br>
        <Formik initialValues={userForm} onSubmit={formikSubmit}>
          {({ errors, touched }) => (
            <Form>
              <div className="form-group">
                <Label>UserName</Label>
                <Field
                  className="form-control"
                  name="userName"
                  type="text"
                  validate={validateUsername}
                />
                {errors.userName && touched.userName && (
                  <div style={{ color: "red" }}>{errors.userName}</div>
                )}
              </div>

              <div>
                <Label>Password</Label>
                <Field
                  className="form-control"
                  name="password"
                  type="text"
                  validate={validatePassword}
                />
                {errors.password && touched.password && (
                  <div style={{ color: "red" }}>{errors.password}</div>
                )}
              </div>
              <br></br>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginUser;