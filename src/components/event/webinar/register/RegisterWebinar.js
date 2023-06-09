import * as React from "react";
import axios from "axios";
import useSWR from 'swr'
import {WebinarIMG} from "../../../../helper/Image";
import FormRegisterWebinar from "./FormRegisterWebinar";
import {useUserToken} from "../../../../helper/Auth";


const RegisterWebinar = () => {

    const [remainingQuota, setRemainingQuota] = React.useState(500)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getTotalParticipants = () => {

        axios.get(`${process.env.REACT_APP_API_URL}/register/webinar/2023/total-participants`, {
            headers: {
                'X-Authorization': process.env.REACT_APP_API_KEY,
                // eslint-disable-next-line react-hooks/rules-of-hooks
                'Authorization': useUserToken()
            }
        }).then((res) => {
            setRemainingQuota(remainingQuota - res.data.total_participant)
        }).catch((err) => {
            console.log(err)
        })

    }

    React.useEffect(() => {

        getTotalParticipants()

    }, [])

    return (
        <div className="container mx-auto px-4 mt-10 shadow-lg w-10/12 py-8 max-[992px]:w-11/12">
            <h3 className="text-4xl font-semibold text-center mb-3 max-[992px]:text-3xl">
                Pendaftaran Webinar Nasional
            </h3>
            <hr className="mb-12 max-[992px]:mb-1"/>
            <div className="flex justify-center gap-3 max-[992px]:flex-col">
                <div className="w-6/12 max-[992px]:w-full">
                    <img src={WebinarIMG(300)} alt="webinar" className="mx-auto pt-36 max-[992px]:pt-10"/>
                    <h4 className="font-semibold text-3xl uppercase pt-6 text-center max-[992px]:text-2xl">
                        Sisa Kuota Peserta : {remainingQuota}
                    </h4>
                </div>
                <div className="w-6/12 max-[992px]:w-full shadow-lg p-4 max-[768px]:p-0 max-[768px]:shadow-none">
                    <FormRegisterWebinar />
                </div>
            </div>
        </div>
    );
};

export default RegisterWebinar;
