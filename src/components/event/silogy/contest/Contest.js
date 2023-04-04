import {ContestIMG} from "../../../../helper/Image";
import TimelineContest from "./TimelineContest";
import QuestionAnswerContest from "./QuestionAnswerContest";
import {setTitle} from "../../../../helper/Utills";


const Contest = () => {
    setTitle('Lomba - SILOGY EXPO')
    return (
        <div>
            <div className="container mx-auto mt-10 mb-6 px-8">
                <h4 className="text-3xl text-center font-semibold max-[992px]:mt-16 max-[992px]:mb-4 uppercase">
                    Lomba SILOGY EXPO 2023
                </h4>
                <hr className="min-[993px]:hidden"/>
                <div className="flex flex-row max-[992px]:flex-col-reverse justify-between my-14">
                    <div className="w-6/12 max-[992px]:w-full">
                        <p className="text-justify pt-1 max-[992px]:py-8">
                            Lomba tahun ini diadakan secara online pada bulan juli sampai agustus, sub tema lomba ini yaitu <span className="font-semibold">"Teknologi"</span>. Lomba dibagi menjadi beberapa tahap yaitu pendaftaran dan pengumpulan karya, seleksi karya, pengumuman babak penyisihan, technical meeting, dan yang terakhir yaitu final dan pengumuman juara yang akan diumumkan pada Instagram edufair
                        </p>
                        <p className="text-justify pt-5 max-[992px]:py-8">
                            Jenis lomba pada tahun ini meliputi : <br/>
                            <ol className="list-decimal px-4">
                                <li>Software Development</li>
                                <li>UI/UX</li>
                                <li>Karya Tulis Ilmiah</li>
                            </ol>
                        </p>
                    </div>
                    <div className="w-5/12 max-[992px]:w-full">
                        <img src={ContestIMG(260)} alt="Webinar.png" className="ml-auto max-[992px]:mx-auto"/>
                    </div>
                </div>
                <div className="time-line mt-6">
                    <p className="text-3xl text-center font-semibold mb-8">
                        Timeline
                    </p>
                    <TimelineContest />
                </div>
            </div>
            <div className="time-line mt-6">
                <p className="text-3xl text-center font-semibold mb-8 px-4">
                    Pertanyaan yang sering diajukan
                </p>
                <QuestionAnswerContest />
            </div>
        </div>
    );
};

export default Contest;
