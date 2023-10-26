import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import AuthForm from "./AuthForm";
import SignupMutation from "../mutations/SignupMutation";
import GetCurrentUserQuery from "../queries/CurrentUserQuery";


const SignupForm = () => {
    const [signup] = useMutation(SignupMutation);
    const { loading, error, data } = useQuery(GetCurrentUserQuery);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

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

    // if user is logged in, redirect to dashboard
    useEffect(() => {
        if (!loading && data.currentUser) {
            navigate("/dashboard");
        }
    }, [loading, data]);


    return (
        <div>
            <h3>Sign Up</h3>
            <AuthForm errors={errors} onSubmit={onSubmit} />
        </div>
    )
}

export default SignupForm;