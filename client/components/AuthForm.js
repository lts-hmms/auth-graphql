import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

const AuthForm = ({ onSubmit }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onFormSubmit = (e) => {
        e.preventDefault();
        onSubmit({ email, password });
    }

    return (
        // ensure that app has class container
        <div className="row">
            <form onSubmit={onFormSubmit} className="col s6">
                <div className="input-field">
                    <input 
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-field">
                    <input
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <button className="btn">Submit</button>
            </form>
        </div>
    );
}

export default AuthForm;

AuthForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}