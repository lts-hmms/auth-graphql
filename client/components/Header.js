import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import GetCurrentUserQuery from "../queries/CurrentUserQuery";
import LogoutMutation from "../mutations/LogoutMutation";

const Header = () => {
    const { loading, error, data } = useQuery(GetCurrentUserQuery);
    const [logout] = useMutation(LogoutMutation);

    const onLogout = () => {
        logout({
            refetchQueries: [{ query: GetCurrentUserQuery }]
        });
    }

    if (loading) return <div/>;

    const renderButtons = () => {
    if (data.currentUser) {
            return (
                <li>
                    <a onClick={onLogout}>
                        Logout
                    </a>
                </li>
            );
        } else {
            return (
            <div>
                <li>
                    <Link to="/signup">Signup</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </div>
            );
        }
    }

    return (
        <nav>
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo left">
                    Home
                </Link>
                <ul className="right">
                    {renderButtons()}
                </ul>
            
            </div>
        </nav>
    )
}

export default Header;

