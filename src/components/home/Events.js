import {SilogyIMG, WebinarIMG, WorkshopIMG} from "../../helper/Image";
import {Link} from "react-router-dom";


const Events = () => {
    return (
        <div className="container mx-auto px-5">
            <h4 className="text-center text-3xl font-semibold font-poppins my-4">
                Events
            </h4>
            <hr/>
            <div className="flex flex-row justify-center gap-4 pb-20 pt-10 max-[992px]:flex-col">
                {/*Webinar*/}
                <div
                    className="w-4/12 max-[992px]:w-auto p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 shadow-xl hover:shadow">
                    <img src={WebinarIMG(100)} className="mx-auto mb-2"/>
                    <h5 className="text-center mb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Webinar
                    </h5>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 text-justify">
                        Webinar Nasional ini merupakan program kerja Himpunan Mahasiswa Sistem
                        Informasi Universitas Singaperbangsa Karawang yang bertujuan
                        untuk memperluas dasar pengetahuan dan pengalaman.
                    </p>
                    <Link to="/event/webinar" type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 mt-5 md:mt-[7vh]">
                        Detail
                    </Link>
                </div>
                {/*Workshop*/}
                <div
                    className="w-4/12 max-[992px]:w-auto p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 shadow-xl hover:shadow">
                    <img src={WorkshopIMG(75)} className="mx-auto my-4"/>
                    <a href="#">
                        <h5 className="text-center mb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            Workshop
                        </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 text-justify">
                        Workshop PBB atau Program Belajar Bareng adalah sebuah workshop yang dilakukan dalam sehari untuk melakukan pelatihan singkat dibidang pemrograman.
                    </p>
                    <Link to='/event/workshop' type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 mt-5 md:mt-[10vh]">
                        Detail
                    </Link>
                </div>
                {/*SILOGY*/}
                <div
                    className="w-4/12 max-[992px]:w-auto p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 shadow-xl hover:shadow">
                    <img src={SilogyIMG(78)} className="mx-auto my-4"/>
                    <a href="#">
                        <h5 className="text-center mb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            Silogy Expo
                        </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 text-justify">
                        Silogy Expo merupakan festival dari Prodi Sistem Informasi mengenai
                        keilmuan teknologi informasi. Festival ini meliputi berbagai kegiatan seperti
                        kompetisi baik akademik maupun non akademik serta talkshow mengenai teknologi.
                    </p>
                    <Link to='/event/silogy-expo' type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 mt-5">
                        Detail
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Events;
