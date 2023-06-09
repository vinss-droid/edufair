import {useLocation} from "react-router-dom";
import axios from "axios";
import {useUserToken} from "./Auth";

const setTitle = (title) => {

    document.title = title ? `${title} | EDUCATION FAIR 2023` : 'EDUCATION FAIR 2023'

}

const isDarkMode = () => {

    return window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)').matches : false

}

const currentURL = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const location = useLocation()

    return location.pathname

}

const setBodyColor = (color) => {

    // eslint-disable-next-line no-unused-expressions
    document.body.style.backgroundColor = color ? color : 'white'

}

const scrollTo = (x,y) => {

    window.scrollTo(x,y)

}

const getQueryURL = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const location = useLocation()
    return new URLSearchParams(location.search)

}

const fetcher = url => axios.get(url, {
    headers: {
        'X-Authorization': process.env.REACT_APP_API_KEY,
        // eslint-disable-next-line react-hooks/rules-of-hooks
        'Authorization': useUserToken()
    }
}).then(res => res.data)

export { setTitle, isDarkMode, currentURL, setBodyColor, scrollTo, getQueryURL, fetcher }