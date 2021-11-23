import React from "react";
import { NavBtnLink } from "../../components/NavbarElements";
import regImg from "../../images/register.png";
import { useState } from "react";
import { useForm } from "react-hook-form";

export function Register() {

    const [values, setValues] = useState({
        fname: '', lname: '', email: '', password1: '', password2: '', city: '', states: ''
    })

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

    const onSubmit = (data) => {
        console.log(data);
        checkValidation();
    };

    const checkValidation = () => {
        if (values.password1 != values.password2) {
            alert("Passwords don't match");
        }
        else{
            alert("You've registered successfully!");
            reset({
                fname: '', lname: '', email: '', password1: '', password2: '', city: '', states: ''
            });
        }
    }

    return <div className="base-container" id="content">

        <div className="header-login">
            <h1>Register</h1>
        </div>
        <br />
        <div className="content">
            <div className="image">
                <img src={regImg} alt="Image" />
            </div>

            <from className="form">
                <div className="from-group">
                    <input required type="text" className={`form-control ${errors.fname && "invalid"}`}
                        {...register("fname", { required: "First Name is Required" })}
                        onKeyUp={() => {
                            trigger("fname");
                        }} placeholder="First Name" /* onChange={set} */
                    />
                    {errors.fname && (
                        <h6 className="text-danger">{errors.fname.message}</h6>
                    )}
                </div>

                <div className="from-group">
                    <input type="text" className={`form-control`}
                        {...register("lname")}
                        onKeyUp={() => {
                            trigger("lname");
                        }} placeholder="Last Name" /* onChange={set} */ />
                </div>

                <div className="from-group">
                    <input required type="text" className={`form-control ${errors.email && "invalid"}`}
                        {...register("email", {
                            required: "Email is Required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address",
                            }
                        })}
                        onKeyUp={() => {
                            trigger("email");
                        }} placeholder="Email" onChange={set}
                    />
                    {errors.email && (
                        <h6 className="text-danger">{errors.email.message}</h6>
                    )}
                </div>

                <div className="from-group">
                    <input required type="password" className={`form-control ${errors.password1 && "invalid"}`}
                        {...register("password1", {
                            required: "Password is Required",
                            minLength: {
                                value: 8,
                                message: "Password should have min 8 characters"
                            }
                        })}
                        onKeyUp={() => {
                            trigger("password1");
                        }} placeholder="Password"
                        onChange={set}
                    />
                    {errors.password1 && (
                        <h6 className="text-danger">{errors.password1.message}</h6>
                    )}
                </div>


                <div className="from-group">
                    <input required type="password" className={`form-control ${errors.password2 && "invalid"}`}
                        {...register("password2", {
                            required: "Password is Required",
                            minLength: {
                                value: 8,
                                message: "Password should have min 8 characters"
                            }
                        })}
                        onKeyUp={() => {
                            trigger("password2");
                        }} placeholder="Confirm Password"
                        onChange={set}
                    />
                    {errors.password2 && (
                        <h6 className="text-danger">{errors.password2.message}</h6>
                    )}
                </div>

                <div className="from-group">
                    <input required type="text" className={`form-control ${errors.city && "invalid"}`}
                        {...register("city", { required: "City is Required" })}
                        onKeyUp={() => {
                            trigger("city");
                        }} placeholder="City"
                        onChange={set}
                    />
                    {errors.city && (
                        <h6 className="text-danger">{errors.city.message}</h6>
                    )}
                </div>


                <div className="footer-login">
                    <button type="submit" to="#" className="btn" onClick={handleSubmit(onSubmit)}>
                        Register
                    </button>
                </div>
            </from>
        </div>

        <br />
        <div>
            <h4>Already have an account?
                <NavBtnLink
                    style={{ color: '#8a34db', background: '#ebf3d2'}}
                    to="login">
                    Login
                </NavBtnLink>
            </h4>
        </div>
    </div>
}