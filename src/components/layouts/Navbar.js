import * as React from "react";
import axios from "axios";
import {Link, NavLink, useNavigate} from "react-router-dom";
import {currentURL} from "../../helper/Utills";
import {useGoogleLogin} from "@react-oauth/google";
import {useSignIn, useSignOut} from "react-auth-kit";
import {isAuthenticated, user} from "../../helper/Auth";
import EdufairPNG from '../../img/logo/logo-edufair-2023.png'

const Navbar = () => {

    const signIn = useSignIn()
    const signOut = useSignOut()
    const authorization = user().header
    const [dropHidden, setDropHidden] = React.useState(false)
    const [toggleProfile, setToggleProfile] = React.useState(false)
    const [navbarToggle, setNavbarToggle] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false)
    const navigate = useNavigate()

    const googleLogin = useGoogleLogin({
        flow: 'implicit',
        onSuccess: async tokenResponse => {
            const userInfo = await axios.get(`https://www.googleapis.com/oauth2/v3/userinfo`, {
                headers: {
                    Authorization: `Bearer ${tokenResponse.access_token}`
                }
            }).then((res) => {
                setIsLoading(true)
                login(res.data)
            }).catch((err) => {
                console.log(err)
            })
        }
    })

    const login = (data) => {

        const userData = {
            gid: data.sub,
            name: data.name,
            email: data.email,
            user_picture: data.picture
        }

        axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, userData, {
          headers: {
              'X-Authorization': process.env.REACT_APP_API_KEY
          }
        }).then((res) => {
            if (res.status === 200) {
                if(signIn(
                    {
                        token: res.data.token,
                        expiresIn:res.data.expired,
                        tokenType: "Bearer",
                        authState: res.data.user,
                    }
                )){
                    setIsLoading(false)
                }else {

                }
            }
        }).catch((err) => {
            console.log(err)
        })

    }

    const logout = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/auth/logout`, {
            headers: {
                'X-Authorization': process.env.REACT_APP_API_KEY,
                'Authorization': authorization
            }
        }).then((res) => {
            console.log(res)
            signOut()
        }).catch((err) => {
            console.log(err)
            if (err.response.status === 401) {
                signOut()
            }
        })
    }

    return (

        <div className="">
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 shadow-md">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <a className="flex items-center select-none cursor-pointer" onClick={() => {
                        setNavbarToggle(false)
                        setToggleProfile(false)
                        navigate('/')
                    }}>
                        <img src={EdufairPNG} className="h-6 mr-3 sm:h-9"
                             alt="Edufair Logo"/>
                        <span
                            className="self-center text-xl font-bold whitespace-nowrap dark:text-white uppercase">
                        Education Fair
                    </span>
                    </a>
                    <div className="flex md:order-2">
                        {currentURL() != '/auth/login' && (
                            <div>
                                {isAuthenticated() ? (
                                    <button type="button"
                                            className="flex mr-3 text-sm rounded-full md:mr-0 max-[768px]:pt-1"
                                            onClick={() => {
                                                setToggleProfile(!toggleProfile)
                                                setDropHidden(false)
                                            }}>
                                        <span className="sr-only">Open user menu</span>
                                        <img className="w-8 h-8 rounded-full"
                                             src={user().picture} alt="user photo" />
                                    </button>
                                ) : (
                                    <button
                                        type="button"
                                        className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 select-none cursor-pointer disabled:cursor-not-allowed disabled:bg-blue-700/80"
                                        onClick={() => {
                                            setNavbarToggle(false)
                                            setDropHidden(false)
                                            googleLogin()
                                        }}
                                        disabled={isLoading}
                                    >
                                        {isLoading ? (
                                            <svg aria-hidden="true" role="status" className="inline w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                                            </svg>
                                        ) : 'Login'}
                                    </button>
                                )}
                            </div>
                        )}
                        <button data-collapse-toggle="navbar-cta"
                                type="button"
                                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                                aria-controls="navbar-cta"
                                aria-expanded="false"
                                onClick={() => {
                                    setNavbarToggle(!navbarToggle)
                                    setDropHidden(false)
                                    setToggleProfile(false)
                                }}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                      clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <div className={`max-[768px]:hidden items-center justify-between w-full md:flex md:w-auto md:order-1 select-none`}>
                        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <NavLink to='/'
                                         onClick={() => {
                                             setDropHidden(false)
                                             setToggleProfile(false)
                                         }}
                                         className={`${currentURL() === '/' ? 'md:text-blue-700' : 'md:text-gray-700'} block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white`}
                                         aria-current="page">Home
                                </NavLink>
                            </li>
                            <li>
                                <button onClick={() => {
                                    setDropHidden(!dropHidden)
                                    setToggleProfile(false)
                                }} className={`flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent`}>
                                    Events
                                    <svg className="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                    </svg>
                                </button>
                            </li>
                            <li>
                                <a type="button"
                                   className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/*Profile Menu*/}
                {isAuthenticated() && (
                    <div
                        className={`absolute right-0 mr-3 z-50 ${toggleProfile ? '' : 'hidden'} shadow-md my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}>
                        <div className="px-4 py-3">
                        <span className="block text-sm text-gray-900 dark:text-white font-semibold">
                            {user().name}
                        </span>
                        </div>
                        <ul className="py-2" aria-labelledby="user-menu-button">
                            <li>
                                <a href="#"
                                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                            </li>
                            {/*<li>*/}
                            {/*    <a href="#"*/}
                            {/*       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>*/}
                            {/*</li>*/}
                            <hr/>
                            <li>
                                <a onClick={logout}
                                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                    Sign out
                                </a>
                            </li>
                        </ul>
                    </div>
                )}

                {/*Dropdown Menu*/}
                <div className={`max-[768px]:hidden absolute right-0 left-0 mx-auto mt-3 ${dropHidden ? '' : 'hidden'} font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-400"
                        aria-labelledby="dropdownLargeButton">
                        <li>
                            <Link onClick={() => {
                                setDropHidden(false)
                                setToggleProfile(false)
                            }} to='/event/webinar' className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${currentURL() == '/event/webinar' ? 'text-blue-700 font-semibold' : ''}`}>
                                Webinar
                            </Link>
                        </li>
                        <li>
                            <Link onClick={() => {
                                setDropHidden(false)
                                setToggleProfile(false)
                            }} to='/event/workshop' className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${currentURL() == '/event/workshop' ? 'text-blue-700 font-semibold' : ''}`}>
                                Workshop
                            </Link>
                        </li>
                        <li>
                            <Link to="/event/silogy-expo" onClick={() => {
                                setDropHidden(false)
                                setToggleProfile(false)
                            }} href="#"
                               className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${currentURL() == '/event/silogy-expo' ? 'text-blue-700 font-semibold' : ''}`}>
                                Silogy Expo
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            {/*Responsive Menu*/}
            {/*Nav Menu*/}
            <div className={`${navbarToggle ? '' : 'hidden'} md:hidden absolute w-full md:flex md:w-auto md:order-1 select-none shadow`}>
                <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <NavLink to='/'
                                 onClick={() => {
                                     setDropHidden(false)
                                     setNavbarToggle(false)
                                     setToggleProfile(false)
                                 }}
                                 className={`${currentURL() === '/' ? 'md:text-blue-700' : 'md:text-gray-700'} block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white`}
                                 aria-current="page">Home
                        </NavLink>
                    </li>
                    <li>
                        <button onClick={() => {
                            setDropHidden(!dropHidden)
                            setToggleProfile(false)
                        }} className={`flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent`}>
                            Events
                            <svg className="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                        {/*Dropdown Menu*/}
                        <div className={`w-full mt-3 ${dropHidden ? '' : 'hidden'} font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-400"
                                aria-labelledby="dropdownLargeButton">
                                <li>
                                    <Link onClick={() => {
                                        setDropHidden(!dropHidden)
                                        setNavbarToggle(false)
                                        setToggleProfile(false)
                                    }} to='/event/webinar' className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${currentURL() == '/event/webinar' ? 'text-blue-700 font-semibold' : ''}`}>
                                        Webinar
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={() => {
                                        setDropHidden(!dropHidden)
                                        setNavbarToggle(false)
                                        setToggleProfile(false)
                                    }} to='/event/workshop' className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${currentURL() == '/event/workshop' ? 'text-blue-700 font-semibold' : ''}`}>
                                        Workshop
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/event/silogy-expo" onClick={() => {
                                        setDropHidden(!dropHidden)
                                        setNavbarToggle(false)
                                        setToggleProfile(false)
                                    }} href="#"
                                       className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${currentURL() == '/event/silogy-expo' ? 'text-blue-700 font-semibold' : ''}`}>
                                        Silogy Expo
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a type="button"
                           className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer">Contact</a>
                    </li>
                </ul>
            </div>
        </div>

    );
};

export default Navbar;
