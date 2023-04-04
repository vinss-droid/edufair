import {ExhibitionIMG} from "../../../../helper/Image";
import TimelineExhibition from "./TimelineExhibition";
import QuestionAnswerExhibition from "./QuestionAnswerExhibition";
import {setTitle} from "../../../../helper/Utills";


const Exhibition = () => {
    setTitle('Pameran - SILOGY EXPO')
    return (
        <div>
            <div className="container mx-auto mt-10 mb-6 px-8">
                <h4 className="text-3xl text-center font-semibold max-[992px]:mt-16 max-[992px]:mb-4 uppercase">
                    Pameran SILOGY EXPO 2023
                </h4>
                <hr className="min-[993px]:hidden"/>
                <div className="flex flex-row max-[992px]:flex-col-reverse justify-between my-14">
                    <div className="w-6/12 max-[992px]:w-full">
                        <p className="text-justify pt-6 max-[992px]:py-8">
                            Pada tahun ini Pameran mengangkat subtema <br/>
                            <span className="font-semibold">"Teknologi & Bisnis".</span> Serta didalam pameran in terdapat karya karya yang di pamerkan mulai dari karya yang didaftarkan hingga karya karya peserta perlombaan yang dapat ditampilkan.
                        </p>
                        <p className="text-justify pt-5 max-[992px]:py-8">
                            Jenis Karya Pameran meliputi : <br/>
                            <ol className="list-decimal px-4">
                                <li>Website</li>
                                <li>Mobile Apps</li>
                                <li>Data Visualitation</li>
                                <li>UI/UX</li>
                                <li>IoT</li>
                            </ol>
                        </p>
                    </div>
                    <div className="w-5/12 max-[992px]:w-full">
                        <img src={ExhibitionIMG(300)} alt="Webinar.png" className="mx-auto max-[992px]:mx-auto"/>
                    </div>
                </div>
                <div className="time-line mt-6">
                    <p className="text-3xl text-center font-semibold mb-8">
                        Timeline
                    </p>
                    <TimelineExhibition />
                </div>
            </div>
            <div className="time-line mt-6">
                <p className="text-3xl text-center font-semibold mb-8 px-4">
                    Pertanyaan yang sering diajukan
                </p>
                <QuestionAnswerExhibition />
            </div>
        </div>
    );
};

export default Exhibition;
