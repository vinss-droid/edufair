import * as React from "react";
import axios from "axios";
import {getQueryURL, setBodyColor, setTitle} from "../helper/Utills";
import {useGoogleLogin} from "@react-oauth/google";
import {useSignIn} from "react-auth-kit";
import {useLogin} from "../store/localStorage";
import {Navigate, useNavigate} from "react-router-dom";
import EDUFAIRLOGO from '../img/logo/logo-edufair-2023-bg.png'
import {notifyError, useQueryURL} from "../Utils/Utils";

const Login = () => {

    setTitle('Login')

    const navigate = useNavigate()
    const [isLoading, setIsLoading] = React.useState(false)
    const queryURL = useQueryURL()

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
                // eslint-disable-next-line react-hooks/rules-of-hooks
                if(useLogin(res.data.token, res.data.user)){
                    setIsLoading(false)
                    queryURL.get('next') !== null ? navigate(queryURL.get('next')) : navigate('/')
                }else {
                    setIsLoading(false)
                    queryURL.get('next') !== null ? navigate(queryURL.get('next')) : navigate('/')
                }
            }
        }).catch((err) => {
            notifyError('Gagal Login!')
        })

    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 shadow-md">
                <img src={EDUFAIRLOGO} alt="edufair logo" className="w-[50%] mx-auto my-6"/>
                <h5 className="text-xl font-medium text-gray-900 dark:text-white text-center">
                    <span className="font-bold uppercase">Welcome to Edufair</span> <br/> Please signin to your account!
                </h5>
                <hr className="mt-4"/>
                <button
                    disabled={isLoading}
                    onClick={googleLogin}
                    type="submit"
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 mt-5 disabled:bg-blue-600/80 disabled:cursor-not-allowed">
                    {isLoading ? (
                        <svg aria-hidden="true" role="status" className="inline w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                        </svg>
                    ) : 'Login to your account'}
                </button>
            </div>
        </div>
    );
};

export default Login;
