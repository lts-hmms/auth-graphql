import React from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import GET_CURRENTUSER from "../queries/CurrentUser";

const Header = () => {
    const { loading, error, data } = useQuery(GET_CURRENTUSER);

    if (loading) return <div/>;

    const renderButtons = () => {
    if (data.currentUser) {
            return <div>Logout</div>;
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

