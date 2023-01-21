import React, { useState, useRef } from 'react';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { isEmail } from 'validator';

import AuthService from '../services/AuthService';
import HTMLUtils from '../utils/HTMLUtils';

const required = (value) => {
    if (!value) {
        HTMLUtils.alertMessage("This field is required!");
    }
};

const validEmail = (value) => {
    if (!isEmail(value)) {
        HTMLUtils.alertMessage("This is not a valid email.");
    }
};

const validUsername = (value) => {
    if (value.length < 3 || value.length > 20) {
        HTMLUtils.alertMessage("The username must be between 3 and 20 characters.");
    }
};

const validPassword = (value) => {
    if (value.length < 6 || value.length > 40) {
        HTMLUtils.alertMessage("The password must be between 6 and 40 characters.");
    }
};





const Register = () => {
    const form = useRef();
    const checkBtn = useRef();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleRegister = (e) => {
        e.preventDefault();

        setMessage("");
        setSuccessful(false);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            AuthService.register(username, email, password).then(
                (response) => {
                    setMessage(response.data.message);
                    setSuccessful(true);
                },
                (error) => {
                    const errorMessage =
                        (error.message && error.message.data && error.response.data.message) ||
                        error.message ||
                        error.toString();

                    setMessage(errorMessage);
                    setSuccessful(false);

                }
            );
        }
    };

    return (
        <div className='col-md-12'>
            <div className='card card-container'>
                <Form onSubmit={handleRegister} ref={form}>
                    {!successful && (
                        <div>
                            <div className='form-group'>
                                <label htmlFor='username'>Username</label>
                                <Input 
                                   type="text"
                                   className="form-control"
                                   name="username"
                                   value={username}
                                   onChange={onChangeUsername}
                                   validations={[required, validUsername]}
                                />
                            </div>

                            <div className='form-group'>
                                <label htmlFor='email'>Email</label>
                                <Input 
                                   type="text"
                                   className="form-control"
                                   name="email"
                                   value={email}
                                   onChange={onChangeEmail}
                                   validations={[required, validEmail]}
                                />
                            </div>

                            <div className='form-group'>
                                <label htmlFor='password'>Password</label>
                                <Input 
                                   type="password"
                                   className="form-control"
                                   name="password"
                                   value={password}
                                   onChange={onChangePassword}
                                   validations={[required, validPassword]}
                                />
                            </div>

                            <div className='form-group'>
                                <button className='btn btn-primary btn-block'>Sign Up</button>
                            </div>
                        </div>
                    )}

                    {message && (
                        <div className='form-group'>
                            {HTMLUtils.alertMessage(message, successful)}
                        </div>
                    )}
                    <CheckButton style={{ display: "none" }} ref={checkBtn}/>
                </Form>
            </div>
        </div>
    );
};

export default Register;