import React from "react";
import { useQuery } from "@apollo/client";
import GET_CURRENTUSER from "../queries/CurrentUser";

const Header = () => {
    const { loading, error, data } = useQuery(GET_CURRENTUSER);
    if (loading) return null;
    console.log(data);

    return (
        <div>
            <h1>My Header</h1>
        </div>
    )
}

export default Header;

