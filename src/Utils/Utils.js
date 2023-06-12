import toast from "react-hot-toast";
import {useLocation} from "react-router-dom";

const notifySuccess = (message) => {

    toast.success(message ? message : 'Error No Message', {
        duration: 4000
    })

}

const notifyError = (message) => {

    toast.error(message ? message : 'Error No Message', {
        duration: 4000
    })

}

const useQueryURL = () => {
    const location = useLocation()
    return new URLSearchParams(location.search)
}

export {
    notifySuccess,
    notifyError,
    useQueryURL
}