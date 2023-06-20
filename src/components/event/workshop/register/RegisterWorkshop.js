import * as React from 'react'
import {WorkshopIMG} from "../../../../helper/Image";
import WorkshopPamphletLandscape from '../../../../img/pamphlet/Pamflet Workshop Landscape.png'
import FormRegisterWorkshop from "./FormRegisterWorkshop";
import axios from "axios";
import {signOut, user, useUserToken} from "../../../../helper/Auth";
import {useAuthUser} from "../../../../store/localStorage";
import {notifyError} from "../../../../Utils/Utils";
import Thanks from "./Thanks";
import RegisterClosed from "./RegisterClosed";


const RegisterWorkshop = () => {

    const token = useUserToken()
    const [remainingQuota, setRemainingQuota] = React.useState(100)
    const [isRegistered, setIsRegistered] = React.useState(false)

    const getTotalParticipants = () => {

        axios.get(`${process.env.REACT_APP_API_URL}/register/workshop/2023/total-participants`, {
            headers: {
                'X-Authorization': process.env.REACT_APP_API_KEY,
                'Authorization': token

            }
        }).then((res) => {
            setRemainingQuota(100 - res.data.total_participant)
            setTimeout(getTotalParticipants, 10000)
        }).catch((err) => {
            if (err.response.status === 401) {
                signOut()
            } else {
                notifyError('Gagal mengambil sisa kuota! Silahkan refresh browser anda!')
            }
        })

    }

    const userHasRegistered = () => {

        axios.get(`${process.env.REACT_APP_API_URL}/register/workshop/2023/check`, {
            headers: {
                'X-Authorization': process.env.REACT_APP_API_KEY,
                'Authorization': token
            }
        }).then((res) => {
            setIsRegistered(res.data.is_registered)
        }).catch((err) => {
            if (err.response.status === 401) {
                signOut()
            }
        })

    }

    const callbackIsRegistered = React.useCallback((data) => {

        setIsRegistered(data)

    })

    React.useEffect(() => {
        getTotalParticipants()
        userHasRegistered()
    }, [])

    return (
        <div>
            {isRegistered ? (
                <Thanks />
            ) : (
                <div className="container mx-auto px-4 mt-10 shadow-lg w-10/12 py-8 max-[992px]:w-11/12">
                    <h3 className="text-4xl font-semibold text-center mb-3 max-[992px]:text-3xl">
                        Pendaftaran Workshop PBB
                    </h3>
                    <hr className="mb-12 max-[992px]:mb-1"/>
                    <RegisterClosed />
                    {/*<div className="flex justify-center gap-3 max-[992px]:flex-col">*/}
                    {/*    <div className="w-6/12 max-[992px]:w-full">*/}
                    {/*        <img src={WorkshopPamphletLandscape} alt="webinar" className="mx-auto pt-36 max-[992px]:pt-10 rounded-md"/>*/}
                    {/*        <h4 className="font-semibold text-3xl uppercase pt-6 text-center max-[992px]:text-2xl">*/}
                    {/*            Sisa Kuota Peserta : {remainingQuota}*/}
                    {/*        </h4>*/}
                    {/*    </div>*/}
                    {/*    <div className="w-6/12 max-[992px]:w-full shadow-lg p-4 max-[768px]:p-0 max-[768px]:shadow-none">*/}
                    {/*        <FormRegisterWorkshop setIsRegistered={callbackIsRegistered} />*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            )}
        </div>
    );
};

export default RegisterWorkshop;
