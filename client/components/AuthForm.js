import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

const AuthForm = ({ onSubmit, errors }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const emailRef = useRef(null);

    const onFormSubmit = (e) => {
        e.preventDefault();
        onSubmit({ email, password });
    }

    // render the email input field with focus
    useEffect(() => {
        emailRef.current.focus();
    }, []);

    return (
        // ensure that App.js component has class 'container' to center the form
        <div className="row">
            <form onSubmit={onFormSubmit} className="col s6">
                <div className="input-field">
                    <input 
                        ref={emailRef}
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        aria-label="Email"
                    />
                </div>
                <div className="input-field">
                    <input
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        aria-label="Password"
                    />
                </div>
                <div className="errors">
                    {errors.map(error => <div key={error}>{error}</div>)}
                </div> 
                <button className="btn">Submit</button>
            </form>
        </div>
    );
}

export default AuthForm;

AuthForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    errors: PropTypes.array.isRequired
}