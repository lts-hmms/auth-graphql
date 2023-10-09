import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import AuthForm from "./AuthForm";
import SignupMutation from "../mutations/SignupMutation";
import GetCurrentUserQuery from "../queries/CurrentUserQuery";


const SignupForm = () => {
    const [signup] = useMutation(SignupMutation);
    const { loading, error, data } = useQuery(GetCurrentUserQuery);
    const [errors, setErrors] = useState([]);

    const onSubmit = ({ email, password }) => {
        signup({
            variables: { email, password },
            refetchQueries: [{ query: GetCurrentUserQuery }]
        })
        .catch(res => {
            const errors = res.graphQLErrors.map(error => error.message);
            setErrors(errors);
        });
    }


    return (
        <div>
            <h3>Sign Up</h3>
            <AuthForm errors={errors} onSubmit={onSubmit} />
        </div>
    )
}

export default SignupForm;