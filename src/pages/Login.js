import {setBodyColor, setTitle} from "../helper/Utills";
import {useGoogleLogin} from "@react-oauth/google";
import axios from "axios";
import * as React from "react";
import {useSignIn} from "react-auth-kit";

const Login = () => {

    setTitle('Login')
    const signIn = useSignIn()
    const [isLoading, setIsLoading] = React.useState(false)

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

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 shadow-md">
                <h5 className="text-xl font-medium text-gray-900 dark:text-white text-center">
                    <span className="font-bold uppercase">Welcome to Edufair</span> <br/> Please signin to your account!
                </h5>
                <hr className="mt-4"/>
                <button
                    onClick={googleLogin}
                    type="submit"
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 mt-5">
                    Login to your account
                </button>
            </div>
        </div>
    );
};

export default Login;
