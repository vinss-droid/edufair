import React from 'react';
import ThanksIMG from "../../../../../img/thanks.png";

const ThanksTalkshow = ({type}) => {
    return (
        <div
            className="w-full py-5 mt-20 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg mx-auto" src={ThanksIMG} alt="thanks.png"/>
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center uppercase">
                    Terimakasih
                </h5>
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center uppercase">
                    Telah Mendaftar di Talkshow <span className="text-blue-500 uppercase">({type})</span> SILOGY EXPO
                </h5>
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center uppercase">
                    diadakan oleh Education Fair 2023
                </h5>
                <hr/>
                <p className="mt-5 font-semibold text-center max-[768px]:text-justify">
                    Kamu berhasil mendaftar Talkshow <span className="text-blue-500 uppercase">({type})</span> SILOGY EXPO. Jangan lupa join ke Grup Talkshow SILOGY EXPO untuk informasi lebih lanjut!
                </p>
                <p className="mt-5 mb-10 font-normal text-gray-700 dark:text-gray-400 text-center">
                    Kami tunggu kehadiran kamu di tanggal 27 Agustus nanti, terimakasih!
                </p>

                <center>
                    <a href={
                        type === 'offline' ? 'https://chat.whatsapp.com/D4zdRB35sOB6RfcH4yx6Lx'
                            : 'https://chat.whatsapp.com/Ju0Tx4mp1aZ0au0zDS3K5i'
                    }
                       target="_blank"
                        // onClick={sendThanks}
                       className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:cursor-not-allowed disabled:bg-blue-700/70" rel="noreferrer"
                        // disabled={isLoading}
                    >
                        Grup WhatsApp Talkshow SILOGY EXPO
                    </a>
                </center>

            </div>
        </div>
    );
};

export default ThanksTalkshow;
