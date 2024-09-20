import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return <div>Error 404 {error.statusText || error.message}</div>;
};

export default ErrorPage;