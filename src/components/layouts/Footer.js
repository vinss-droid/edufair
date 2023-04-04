import {Link} from "react-router-dom";


const Footer = () => {

    const currentYear = new Date().getFullYear()

    return (

        <div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
            <div className="container mx-auto px-2 my-8">
                <span className="block text-sm text-center text-gray-500 sm:text-center dark:text-gray-400">© {currentYear} <a
                    href="https://himsika.unsika.ac.id" target="_blank" className="hover:underline">
                Himpunan Mahasiswa Sistem Informasi UNSIKA</a>. <br className="md:hidden"/> All Rights Reserved.
            </span>
            </div>
        </div>

    );
};

export default Footer;
