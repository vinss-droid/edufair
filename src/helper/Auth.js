import {useAuthUser, useIsAuthenticated, useAuthHeader} from "react-auth-kit";
import { Navigate } from "react-router-dom";

const isAuthenticated = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const auth = useIsAuthenticated();

    return auth();
}

const user = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const auth = useAuthUser();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const header = useAuthHeader()

    if (isAuthenticated()) {
        return {
            name: auth().name,
            email: auth().email,
            picture: auth().picture,
            is_admin: auth().is_admin,
            header: header
        }
    } else {
        return <Navigate to={'/auth/login'} />
    }

}

export { isAuthenticated, user }