import {WorkshopIMG} from "../../../../helper/Image";
import FormRegisterWorkshop from "./FormRegisterWorkshop";


const RegisterWorkshop = () => {
    return (
        <div className="container mx-auto px-4 mt-10 shadow-lg w-10/12 py-8 max-[992px]:w-11/12">
            <h3 className="text-4xl font-semibold text-center mb-3 max-[992px]:text-3xl">
                Pendaftaran Workshop PBB
            </h3>
            <hr className="mb-12 max-[992px]:mb-1"/>
            <div className="flex justify-center gap-3 max-[992px]:flex-col">
                <div className="w-6/12 max-[992px]:w-full">
                    <img src={WorkshopIMG(300)} alt="webinar" className="mx-auto pt-36 max-[992px]:pt-10"/>
                    <h4 className="font-semibold text-3xl uppercase pt-6 text-center max-[992px]:text-2xl">
                        Sisa Kuota Peserta : 50
                    </h4>
                </div>
                <div className="w-6/12 max-[992px]:w-full shadow-lg p-4 max-[768px]:p-0 max-[768px]:shadow-none">
                    <FormRegisterWorkshop />
                </div>
            </div>
        </div>
    );
};

export default RegisterWorkshop;
