import HeaderIMG from '../../img/header.jpg'

const Header = () => {
    return (
        <div className="container mx-auto my-[9.5%] px-5">
            <div className="flex flex-row justify-center gap-8 max-[1024px]:flex-col">
                <div className="basis-1/2">
                    <img src={HeaderIMG} alt="about" width="100%" className="rounded-lg"/>
                </div>
                <div className="basis-1/2 mt-10 max-[1200px]:mt-1">
                    <h4 className="text-3xl text-center font-semibold font-poppins">
                        Education Fair
                    </h4>
                    <p className="mt-6 text-justify font-poppins">
                        <span className="font-semibold">Education Fair</span> merupakan ajang multi event yang berisi event-event untuk menunjang minat dan bakat mahasiswa terkhusus mahasiswa Program Studi Sistem Informasi dan masyarakat umum yang didalam nya berisi event-event seperti webinar, workshop, perlombaan dan juga pameran yang semuanya berlandaskan keilmuan di dalam ruang lingkup yang selaras dengan Program Studi Sistem Informasi.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Header;
