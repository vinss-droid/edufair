import * as React from 'react';
import {signOut, useUserToken} from "../../../../../helper/Auth";
import axios from "axios";
import {notifyError} from "../../../../../Utils/Utils";
import SilogyPamphlet from '../../../../../img/pamphlet/PAMFLET SOSIALISAASI SILOGY.png'
import {useParams} from "react-router-dom";
import NotFound from "../../../../errors/NotFound";
import FormRegisterTalkshow from "./FormRegisterTalkshow";
import ThanksTalkshow from "./Thanks";
import {TalkshowIMG} from "../../../../../helper/Image";

const RegisterTalkshow = () => {

    const {
        types
    } = useParams()

    const defaultType = ['offline', 'online']
    const token = useUserToken()
    const [remainingQuotaOffline, setRemainingQuotaOffline] = React.useState(60)
    const [remainingQuotaOnline, setRemainingQuotaOnline] = React.useState(300)
    const [isRegistered, setIsRegistered] = React.useState(false)
    const [isRegisteredType, setIsRegisteredType] = React.useState('')

    const getTotalParticipants = () => {

        axios.get(`${process.env.REACT_APP_API_URL}/register/talkshow/2023/total-participants`, {
            headers: {
                'X-Authorization': process.env.REACT_APP_API_KEY,
                'Authorization': token

            }
        }).then((res) => {
            setRemainingQuotaOffline(60 - res.data.total_participant.offline)
            setRemainingQuotaOnline(300 - res.data.total_participant.online)
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

        axios.get(`${process.env.REACT_APP_API_URL}/register/talkshow/2023/check`, {
            headers: {
                'X-Authorization': process.env.REACT_APP_API_KEY,
                'Authorization': token
            }
        }).then((res) => {
            setIsRegistered(res.data.is_registered)
            setIsRegisteredType(res.data.type)
        }).catch((err) => {
            if (err.response.status === 401) {
                signOut()
            }
        })

    }

    const callbackIsRegistered = React.useCallback((data) => {

        userHasRegistered()
        setIsRegistered(data)

    })

    React.useEffect(() => {
        getTotalParticipants()
        userHasRegistered()
    }, [])

    if(!defaultType.includes(types)) {
        return <NotFound />
    } else {
        return (
            <div>
                {isRegistered ? (
                    <ThanksTalkshow type={isRegisteredType}/>
                ) : (
                    <div className="container mx-auto px-4 mt-10 shadow-lg w-10/12 py-8 max-[992px]:w-11/12">
                        <h3 className="text-4xl font-semibold text-center mb-3 max-[992px]:text-3xl">
                            Pendaftaran Talkshow <span className="text-blue-500">({types === 'offline' ? 'OFFLINE' : 'ONLINE'})</span>
                        </h3>
                        <h3 className="text-4xl font-semibold text-center mb-3 max-[992px]:text-3xl">
                            SILOGY EXPO 2023
                        </h3>
                        <hr className="mb-12 max-[992px]:mb-1"/>
                        {/*<RegisterClosed />*/}
                        <div className="flex justify-center gap-3 max-[992px]:flex-col">
                            <div className="w-6/12 max-[992px]:w-full">
                                <img src={TalkshowIMG(300)} alt="webinar"
                                     className="mx-auto pt-36 max-[992px]:pt-10 rounded-md"/>
                                <h4 className="font-semibold text-3xl uppercase pt-6 text-center max-[992px]:text-2xl">
                                    Sisa Kuota Peserta
                                    {types === 'offline' ? ` Offline : ${remainingQuotaOffline}` : ` Online : ${remainingQuotaOnline}`}
                                </h4>
                            </div>
                            <div
                                className="w-6/12 max-[992px]:w-full shadow-lg p-4 max-[768px]:p-0 max-[768px]:shadow-none">
                                <FormRegisterTalkshow setIsRegistered={callbackIsRegistered}/>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
};

export default RegisterTalkshow;
