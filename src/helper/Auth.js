import {useAuthUser, useIsAuthenticated, useLogout} from "../store/localStorage";
import secureLocalStorage from "react-secure-storage";

const isAuthenticated = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useIsAuthenticated()
}

const user = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useAuthUser()
}

const signOut = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useLogout()
}

const useUserToken = () => {
    return secureLocalStorage.getItem('_auth')
}

export { isAuthenticated, user, signOut, useUserToken }