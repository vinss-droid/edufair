import * as React from 'react';
import {isAuthenticated} from "../../helper/Auth";
import {Navigate} from "react-router-dom";

const AuthenticatedComponent = ({ Children }) => {
    if (isAuthenticated())
        return Children
    else
        return <Navigate to='/auth/login'/>;
};

export default AuthenticatedComponent;
