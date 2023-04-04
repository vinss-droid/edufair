import {Link} from "react-router-dom";


const TimelineWorkshop = () => {
    return (
        <ol className="relative border-l border-gray-200 dark:border-gray-700 mb-24 mt-16">
            <li className="mb-10 ml-6">
                <span
                    className="absolute flex items-center justify-center w-6 h-6 bg-red-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg aria-hidden="true" className="w-3 h-3 text-red-800 dark:text-blue-300" fill="currentColor"
                         viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                    </svg>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    Pendaftaran
                    <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3 max-[768px]:text-center">
                        Segera Dilaksanakan
                    </span>
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Dilaksanakan Pada <br className="md:hidden" /> 07 Mei 2023 - 17 Juni 2023
                </time>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    Para calon peserta yang akan mengikuti Workshop PBB diwajibkan untuk mendaftar pada tombol dibawah!
                </p>
                <Link to='/event/workshop/daftar' className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600  rounded-lg hover:bg-blue-700 hover:text-gray-100 focus:z-10 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 cursor-pointer disabled:bg-blue-400 disabled:cursor-not-allowed">
                    Daftar Workshop
                </Link>
            </li>
            <li className="mb-10 ml-6">
                <span
                    className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg aria-hidden="true" className="w-3 h-3 text-gray-400 dark:text-blue-300" fill="currentColor"
                         viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                    </svg>
                </span>
                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    Pelaksanaan
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Dilaksanakan Pada <br className="md:hidden" /> 24 Juni 2023
                </time>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Semua peserta yang sudah mendaftar akan melaksanakan Workshop PBB secara luring (offline). <br/>
                    Pada tempat dan waktu yang sudah ditetapkan oleh panitia.
                </p>
            </li>
            <li className="ml-6">
                <span
                    className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg aria-hidden="true" className="w-3 h-3 text-gray-400 dark:text-blue-300" fill="currentColor"
                         viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                    </svg>
                </span>
                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    Pembagian Benefit
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Dilaksanakan Pada <br className="md:hidden" /> 10 Juli 2023
                </time>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Semua peserta yang sudah melaksanakan Workshop PBB secara offline akan mendapatkan Benefit. <br/> Benefit akan diberikan pada email peserta atau pada akun peserta pada website ini.
                </p>
            </li>
        </ol>
    );
};

export default TimelineWorkshop;
