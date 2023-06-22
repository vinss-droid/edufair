import React from 'react';
import EdufairLogo from '../../../../img/logo/logo-edufair-2023.png'

const RegisterClosed = () => {
    return (
        <div className="bg-[#1B254B] min-h-screen flex justify-center items-center rounded-md">
            <div className="w-6/12 my-4 bg-white/95 px-5 rounded-md shadow-md py-8 max-[992px]:w-full max-[992px]:mx-4 max-[992px]:px-5 text-center">
                <div>
                    <img src={EdufairLogo} alt="webinar" className="mx-auto" width="25%" />
                    <h4 className="text-3xl text-center font-semibold mt-6 uppercase">
                        Education Fair 2023
                    </h4>
                    <hr className="my-4"/>
                    <h2 className="text-2xl text-center font-semibold mt-5 uppercase">
                        Pendaftaran Workshop PBB 2023 Telah di Tutup
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default RegisterClosed;
