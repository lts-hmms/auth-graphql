import React from "react";
import useRequireAuth from "../hooks/useRequireAuth";

const Dashboard = () => {
    useRequireAuth();
    return <div>You are logged in.</div>
}

export default Dashboard;