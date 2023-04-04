import {useLocation} from "react-router-dom";

const setTitle = (title) => {

    document.title = title ? `${title} | EDUCATION FAIR 2023` : 'EDUCATION FAIR 2023'

}

const isDarkMode = () => {

    return window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)').matches ? true : false : false

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

export { setTitle, isDarkMode, currentURL, setBodyColor, scrollTo }