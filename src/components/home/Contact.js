import {ContacIMG} from "../../helper/Image";


const Contact = () => {
    return (
        <div className="container mx-auto px-10 mt-10 mb-20">
            <h4 className="text-3xl text-center font-bold mb-5">
                Contact Us
            </h4>
            <hr/>
            <div className="flex flex-row my-8 justify-center gap-4 max-[648px]:flex-col">
                <div className="w-4/12 rounded-md p-3 hover:bg-gray-200 max-[648px]:w-full">
                    <center>
                        <i className="fa-solid fa-location-dot text-blue-700 text-4xl"></i>
                    </center>
                    <p className="text-center font-semibold pt-1">
                        Alamat
                    </p>
                    <p className="text-center mt-3 text-gray-500">
                        Jl. HS.Ronggo Waluyo, Puseurjaya, Telukjambe Timur, Karawang, Jawa Barat 41361
                    </p>
                </div>
                <div className="w-4/12 rounded-md p-3 hover:bg-gray-200 max-[648px]:w-full">
                    <center>
                        <i className="fa-brands fa-instagram text-blue-700 text-4xl"></i>
                    </center>
                    <p className="text-center font-semibold pt-1">
                        Instagram
                    </p>
                    <p className="text-center mt-3 text-gray-500">
                        @edufair.himsika
                    </p>
                </div>
                <div className="w-4/12 rounded-md p-3 hover:bg-gray-200 max-[648px]:w-full">
                    <center>
                        <i className="fa-solid fa-envelope text-blue-700 text-4xl"></i>
                    </center>
                    <p className="text-center font-semibold pt-1">
                        Email
                    </p>
                    <p className="text-center mt-3 text-gray-500">
                        edufair@gmail.com
                    </p>
                </div>
            </div>
            <iframe className="w-full rounded-md"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.5453142879487!2d107.30415071436146!3d-6.323292563633996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6977ccb34822e1%3A0x6c4c7c12678610e0!2sUniversity%20of%20Singaperbangsa%20Karawang!5e0!3m2!1sen!2sid!4v1679223026525!5m2!1sen!2sid" height="450" allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
};

export default Contact;
