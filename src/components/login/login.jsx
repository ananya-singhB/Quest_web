import React from "react";
import loginImg from "../../images/login2.png";
import { NavBtnLink } from "../../components/NavbarElements";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import Auth from "../Auth";
import Navbar from "../Nav";
import { Redirect } from "react-router";

export function Login() {
  const { authorized, setAuthorized } = useContext(Auth);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  function set(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const CheckAuth = () => {
    if (authorized) {
      return <Redirect to="./qna" />;
    }
  };

  const onSubmit = (data) => {
    console.log(data);

    if (!authorized) {
      setAuthorized(true);
      <Navbar />;
    }
    reset({
      email: "",
      password: "",
    });

    return <Redirect to="../home/qna" />;
  };

  return (
    <div className="base.container" onLoad={CheckAuth}>
      <div className="header-login">
        <h1>Login</h1>
      </div>
      <br />
      <div className="content">
        <div className="image">
          <img src={loginImg} alt="Image" />
        </div>
        <form className="form">
          <div className="from-group">
            <input
              required
              type="text"
              className={`form-control ${errors.email && "invalid"}`}
              {...register("email", {
                required: "Email is Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              onKeyUp={() => {
                trigger("email");
              }}
              placeholder="Email"
              onChange={set}
            />
            {errors.email && (
              <h6 className="text-danger">{errors.email.message}</h6>
            )}
          </div>
        </form>

        <div className="from-group">
          <input
            required
            type="password"
            className={`form-control ${errors.password && "invalid"}`}
            {...register("password", {
              required: "Password is Required",
              minLength: {
                value: 8,
                message: "Password should have min 8 characters",
              },
            })}
            onKeyUp={() => {
              trigger("password");
            }}
            placeholder="Password"
            onChange={set}
          />
          {errors.password && (
            <h6 className="text-danger">{errors.password.message}</h6>
          )}
          <h6>
            <Link className="recover-pass" to="#">
              Forgot Password?
            </Link>
          </h6>
        </div>
      </div>

      <div className="footer-login" onClick={handleSubmit(onSubmit)}>
        <button type="submit" className="btn">
          Login
        </button>
      </div>

      <br />
      <div>
        <h4>
          Don't have an account?
          <NavBtnLink
            style={{ color: "#8a34db", background: "#ebf3d2" }}
            to="register"
          >
            Register
          </NavBtnLink>
        </h4>
      </div>
    </div>
  );
}
