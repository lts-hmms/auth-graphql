import React, {useState} from "react";
import AuthForm from "./AuthForm";
import { useQuery, useMutation } from "@apollo/client";
import LoginMutation from "../mutations/LoginMutation";
import GetCurrentUserQuery from "../queries/CurrentUserQuery";

const LoginForm = () => {
    const [login] = useMutation(LoginMutation);
    const { loading, error, data } = useQuery(GetCurrentUserQuery);
    const [errors, setErrors] = useState([]);
    
    const onSubmit = ({ email, password }) => {
        login({
            variables: { email, password },
            refetchQueries: [{ query: GetCurrentUserQuery }]
        }).catch(res => {
            const errors = res.graphQLErrors.map(error => error.message);
            setErrors(errors);
        });
    }

    return (
        <div>
            <h3>Login</h3>
            <AuthForm errors={errors} onSubmit={onSubmit} />
        </div>
    )
}

export default LoginForm;