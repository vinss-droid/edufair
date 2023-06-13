import {SilogyIMG} from "../helper/Image";
import TimelineSilogyExpo from "../components/event/silogy/TimelineSilogyExpo";
import QuestionAnswerSilogyExpo from "../components/event/silogy/QuestionAnswerSilogyExpo";
import {setTitle} from "../helper/Utills";


const SilogyExpo = () => {
    setTitle('SILOGY EXPO')
    return (
        <div>
            <div className="container mx-auto mt-10 mb-6 px-8">
                <h4 className="text-3xl text-center font-semibold max-[992px]:mt-16 max-[992px]:mb-4 uppercase">
                    SILOGY EXPO 2023
                </h4>
                <hr className="min-[993px]:hidden"/>
                <div className="flex flex-row max-[992px]:flex-col-reverse justify-center my-14">
                    <div className="w-6/12 max-[992px]:w-full">
                        <p className="text-justify pt-1 max-[992px]:py-8">
                            Silogy Expo merupakan festival dari Prodi Sistem Informasi mengenai
                            keilmuan teknologi informasi. Festival ini meliputi berbagai kegiatan seperti
                            kompetisi baik akademik maupun non akademik serta talkshow mengenai teknologi.
                        </p>
                        <p className="text-justify pt-4 max-[992px]:py-8">
                            Dimana mahasiswa bisa mengasah kemampuannya di dalam kompetisi tersebut dan
                            memperluas pengetahuannya di bidang teknologi melalui talkshow yang sudah
                            direncanakan. Event ini juga berisikan pameran dari karya atau project yang
                            diciptakan oleh Mahasiswa Program Studi Sistem Informasi.
                        </p>
                        <p className="text-justify py-4">
                            Pada tahun 2023 ini, Silogy Expo mengangkat Tema <br/> <span className="font-semibold">
                        "Become a creative people in the era of digital technology".</span> Jangan sampai ketinggalan dengan Silogy Expo ini dan terus pantau untuk Timeline nya!
                        </p>
                    </div>
                    <div className="w-6/12 max-[992px]:w-full">
                        <img src={SilogyIMG(345)} alt="Webinar.png" className="ml-auto max-[992px]:mx-auto"/>
                    </div>
                </div>
                <div className="time-line mt-6">
                    <p className="text-3xl text-center font-semibold mb-8">
                        Timeline
                    </p>
                    <TimelineSilogyExpo />
                </div>
            </div>
            <div className="time-line mt-6">
                <p className="text-3xl text-center font-semibold mb-8 px-4">
                    Pertanyaan yang sering diajukan
                </p>
                <QuestionAnswerSilogyExpo />
            </div>
        </div>
    );
};

export default SilogyExpo;
