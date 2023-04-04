import {currentURL} from "../../helper/Utills";
import {useNavigate} from "react-router-dom";

const BottomNavbar = () => {
    let svg = <svg className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M4.1 38.2C1.4 34.2 0 29.4 0 24.6C0 11 11 0 24.6 0H133.9c11.2 0 21.7 5.9 27.4 15.5l68.5 114.1c-48.2 6.1-91.3 28.6-123.4 61.9L4.1 38.2zm503.7 0L405.6 191.5c-32.1-33.3-75.2-55.8-123.4-61.9L350.7 15.5C356.5 5.9 366.9 0 378.1 0H487.4C501 0 512 11 512 24.6c0 4.8-1.4 9.6-4.1 13.6zM80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm184.4-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z"/>
    </svg>;

    const navigate = useNavigate()

    return (

        <div
            className="hidden fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600 shadow-lg">
            <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
                <button data-tooltip-target="tooltip-home" type="button" title="Home" onClick={() => navigate('/')}
                        className="inline-flex flex-col items-center justify-center px-5 rounded-l-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <svg
                        className={`${currentURL() === '/' ? 'text-blue-600' : 'text-gray-500'} w-6 h-6 mb-1 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500`}
                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path
                            d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                    </svg>
                </button>
                <button data-tooltip-target="tooltip-wallet" type="button" title="event"
                        className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <i className="fa-solid fa-medal mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 text-[18px] leading-[24px]"></i>
                </button>
                <div className="flex items-center justify-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="w-7 h-6 mr-3 sm:h-9 cursor-pointer" alt="Flowbite Logo" onClick={() => navigate('/')} title="Education Fair 2023" />
                </div>
                <button data-tooltip-target="tooltip-settings" type="button" title="contact"
                        className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <i className="fa-regular fa-id-badge mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 text-[18px] leading-[24px]"></i>
                </button>
                <button data-tooltip-target="tooltip-profile" type="button" title="login" onClick={() => navigate('/auth/login')}
                        className="inline-flex flex-col items-center justify-center px-5 rounded-r-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <i className={`fa-solid fa-right-to-bracket mb-1 ${currentURL() === '/auth/login' ? 'text-blue-600' : 'text-gray-500'} dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 text-[18px] leading-[24px]`}></i>
                </button>
            </div>
        </div>

    );
};

export default BottomNavbar;
