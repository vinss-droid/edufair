import secureLocalStorage from "react-secure-storage";

const useIsAuthenticated = () => {

    const localStorage = secureLocalStorage

    return localStorage.getItem('_auth') != null &&
        localStorage.getItem('_user') != null;

}

const useLogin = (token, userData) => {

    const localStorage = secureLocalStorage

    localStorage.setItem('_auth', `Bearer ${token}`)
    localStorage.setItem('_user', JSON.stringify(userData))

    return !!(localStorage.getItem('_user') && localStorage.getItem('_auth'))

}

const useAuthUser = () => {

    const localStorage = secureLocalStorage

    if (localStorage.getItem('_user') && localStorage.getItem('_auth')) {
        return JSON.parse(localStorage.getItem('_user'))
    } else {
        return {}
    }

}

const useLogout = () => {

    const localStorage = secureLocalStorage

    localStorage.removeItem('_auth')
    localStorage.removeItem('_user')

    return !!(localStorage.removeItem('_auth') && localStorage.removeItem('_user'))

}

export { useIsAuthenticated, useAuthUser, useLogin, useLogout }