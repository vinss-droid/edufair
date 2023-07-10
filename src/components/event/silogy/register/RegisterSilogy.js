import * as React from 'react';
import axios from "axios";
import {signOut, useUserToken} from "../../../../helper/Auth";
import {Navigate, useParams} from "react-router-dom";
import SilogyPamphlet from '../../../../img/pamphlet/PAMFLET SOSIALISAASI SILOGY.png'
import FormRegisterSilogy from "./FormRegisterSilogy";
import {setTitle} from "../../../../helper/Utills";
import NotFound from "../../../errors/NotFound";
import Thanks from "./Thanks";

const RegisterSilogy = () => {

    setTitle('Pendaftaran SILOGY EXPO')

    const {
        types
    } = useParams()
    const token = useUserToken()
    const [isRegistered, setIsRegistered] = React.useState(false)
    const [type, setType] = React.useState('')
    const defaultType = ['softdev', 'ui-ux', 'kti']
    const userHasRegistered = () => {

        axios.get(`${process.env.REACT_APP_API_URL}/register/silogy/2023/check`, {
            headers: {
                'X-Authorization': process.env.REACT_APP_API_KEY,
                'Authorization': token
            }
        }).then((res) => {
            setIsRegistered(res.data.is_registered)
            setType(res.data.type)
        }).catch((err) => {
            if (err.response.status === 401) {
                signOut()
            }
        })

    }

    const callbackIsRegistered = React.useCallback((data) => {

        userHasRegistered()

    })

    React.useEffect(() => {
        userHasRegistered()
    }, [])

    if(!defaultType.includes(types)) {
        return <NotFound />
    } else {
        return (
            <div>
                {isRegistered ? (
                    <Thanks type={type} />
                ) : (
                    <div className="container mx-auto px-4 mt-10 shadow-lg w-10/12 py-8 max-[992px]:w-11/12">
                        <h3 className="text-4xl font-semibold text-center mb-3 max-[992px]:text-3xl uppercase">
                            {types === 'softdev' ? 'Pendaftaran Lomba Software Development' :
                                types === 'ui-ux' ? 'Pendaftaran Lomba UI/UX' :
                                    'Pendaftaran Lomba Karya Tulis Ilmiah'
                            }
                        </h3>
                        <hr className="mb-12 max-[992px]:mb-1"/>
                        <div className="flex justify-center gap-3 max-[992px]:flex-col">
                            <div className="w-6/12 max-[992px]:w-full">
                                <img src={SilogyPamphlet} alt="webinar" className="mx-auto pt-36 max-[992px]:pt-10 rounded-md"/>
                            </div>
                            <div className="w-6/12 max-[992px]:w-full shadow-lg p-4 max-[768px]:p-0 max-[768px]:shadow-none">
                                <FormRegisterSilogy setIsRegistered={callbackIsRegistered} type={types} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
};

export default RegisterSilogy;
