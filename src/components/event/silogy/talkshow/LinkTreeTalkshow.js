import React from 'react';
import EdufairLogo from "../../../../img/logo/logo-edufair-2023.png";
import TalkshowLinks from "./TalkshowLinks";

const LinkTreeTalkshow = () => {
    return (
        <div className="bg-[#1B254B] min-h-screen flex justify-center items-center rounded-md">
            <div className="w-6/12 my-4 bg-white/95 px-5 rounded-md shadow-md py-8 max-[992px]:w-full max-[992px]:mx-4 max-[992px]:px-5 text-center">
                <div>
                    <img src={EdufairLogo} alt="webinar" className="mx-auto" width="25%" />
                    <h4 className="text-4xl text-center font-bold mt-6 uppercase">
                        TALKSHOW SILOGY EXPO 2023
                    </h4>
                    <p className="font-semibold mt-4 text-gray-500">Silogy Fest merupakan salah satu rangkaian dari event Education Fair</p>
                    <hr className="my-4"/>
                    <TalkshowLinks />
                    {/*<h1 className="text-center my-10 font-bold text-3xl max-[768px]:text-lg text-red-500">*/}
                    {/*    Pendaftaran Talkshow SILOGY EXPO Sudah di Tutup.*/}
                    {/*</h1>*/}
                </div>
            </div>
        </div>
    );
};

export default LinkTreeTalkshow;
