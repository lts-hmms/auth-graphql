import React from "react";
import AuthForm from "./AuthForm";
import { useQuery, useMutation } from "@apollo/client";
import LoginMutation from "../mutations/LoginMutation";
import GetCurrentUserQuery from "../queries/CurrentUserQuery";

const LoginForm = () => {
    const [login] = useMutation(LoginMutation);
    const { loading, error, data } = useQuery(GetCurrentUserQuery);

    
    const onSubmit = ({ email, password }) => {
        login({
            variables: { email, password },
            refetchQueries: [{ query: GetCurrentUserQuery }]
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