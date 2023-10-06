import React from "react";
import AuthForm from "./AuthForm";
import { useMutation } from "@apollo/client";
import LoginMutation from "../mutations/LoginMutation";

const LoginForm = () => {
    const [login] = useMutation(LoginMutation);

    
    const onSubmit = ({ email, password }) => {
        login({
            variables: { email, password }
        });
    }

    return (
        <div>
            <h3>Login</h3>
            <AuthForm onSubmit={onSubmit} />
        </div>
    )
}

export default LoginForm;