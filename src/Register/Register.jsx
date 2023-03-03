import React, { useState } from 'react';
import './Register.css';

const initFormValue = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmpassword: "",
};
const isEmptyValue = (value) => {
    return !value || value.trim().length < 1;
};
const isEmptyValid = (email) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);


};

function Register() {
    const [formValue, setFormValue] = useState(initFormValue);
    const [formError, setFormError] = useState({});

    const validateForm = () => {
        const error = {};
        if (isEmptyValue(formValue.firstName)) {
            error["firstName"] = "Firt Name is required"
        }
        if (isEmptyValue(formValue.email)) {
            error["email"] = "Email is required"
        } else {
            if (!isEmptyValid(formValue.email)) {
                error["email"] = "Email is invalid"
            }
        }

        if (isEmptyValue(formValue.password)) {
            error["password"] = "Password is required"
        }
        if (isEmptyValue(formValue.confirmpassword)) {
            error["confirmpassword"] = "Confirm Password is required"
        }

        // else if (isEmptyValue(formValue.confirmpassword !== formValue.password)) {
        //    error["confirmpassword"] = "Confirm Password not match"
        //}


        setFormError(error);

        return Object.keys(error).length === 0;
    }

    const handleChange = (event) => {
        const { value, name } = event.target;
        setFormValue({
            ...formValue,
            [name]: value,
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            console.log("form value", formValue);
        } else {
            console.log("form invalid")
        }


    }
    return (
        <div className='register-page'>
            <div className='register-form-container'>
                <h1 className='title'> Register</h1>

                <form onSubmit={handleSubmit}>
                    <div className='mb-2'>
                        <label htmlFor="first-name" className='form-label'> User Name</label>
                        <input
                            id="first-name"
                            className="form-control"
                            type="text"
                            name="firstName"
                            value={formValue.firstName}
                            onChange={handleChange}
                        />
                        {formError.firstName && (
                            <div className="error-feedback">{formError.firstName}</div>
                        )}
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="email" className='form-label'> Email</label>
                        <input
                            id="email"
                            className="form-control"
                            type="text"
                            name="email"
                            value={formValue.email}
                            onChange={handleChange}
                        />
                        {formError.email && (
                            <div className="error-feedback">{formError.email}</div>
                        )}
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="password" className='form-label'> Password</label>
                        <input
                            id="password"
                            className="form-control"
                            type="password"
                            name="password"
                            value={formValue.password}
                            onChange={handleChange}
                        />
                        {formError.password && (
                            <div className="error-feedback">{formError.password}</div>
                        )}
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="confirm-password" className='form-label'> Confirm Password</label>
                        <input
                            id="confirm-password"
                            className="form-control"
                            type="password"
                            name="confirmpassword"
                            value={formValue.confirmpassword}
                            onChange={handleChange}
                        />
                        {formError.confirmpassword && (
                            <div className="error-feedback">{formError.confirmpassword}</div>
                        )}
                    </div>
                    <button type="submit" className="submit-btn btn4"> Register</button>
                </form>
            </div>
        </div>
    );
}

export default Register;