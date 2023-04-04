import {WorkshopIMG} from "../helper/Image";
import TimelineWorkshop from "../components/event/workshop/TimelineWorkshop";
import QuestionAnswerWorkshop from "../components/event/workshop/QuestionAnswerWorkshop";
import {setTitle} from "../helper/Utills";


const Workshop = () => {
    setTitle('Workshop PBB')
    return (
        <div>
            <div className="container mx-auto mt-10 mb-6 px-8">
                <h4 className="text-3xl text-center font-semibold max-[992px]:mt-16 max-[992px]:mb-4">
                    Workshop PBB 2023
                </h4>
                <hr className="min-[993px]:hidden"/>
                <div className="flex flex-row max-[992px]:flex-col-reverse justify-center my-14">
                    <div className="w-6/12 max-[992px]:w-full">
                        <p className="text-justify pt-4 max-[992px]:py-8">
                            Workshop PBB atau Program Belajar Bareng adalah sebuah workshop yang dilakukan dalam sehari untuk melakukan pelatihan singkat dibidang pemrograman.
                        </p>
                        <p className="text-justify py-4">
                            Pada tahun 2023 ini, Workshop PBB mengangkat Tema <br/> <span className="font-semibold">
                        "React Integration with External API'S".</span> Jangan sampai ketinggalan dengan Workshop PBB ini dan terus pantau untuk Timeline nya!
                        </p>
                    </div>
                    <div className="w-6/12 max-[992px]:w-full">
                        <img src={WorkshopIMG(230)} alt="workshop.png" className="ml-auto max-[992px]:mx-auto"/>
                    </div>
                </div>
                <div className="time-line mt-6">
                    <p className="text-3xl text-center font-semibold mb-8">
                        Timeline
                    </p>
                    <TimelineWorkshop />
                </div>
            </div>
            <div className="time-line mt-6">
                <p className="text-3xl text-center font-semibold mb-8 px-4">
                    Pertanyaan yang sering diajukan
                </p>
                <QuestionAnswerWorkshop />
            </div>
        </div>
    );
};

export default Workshop;
