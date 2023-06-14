import {WorkshopIMG} from "../helper/Image";
import EdufairLogo from '../img/logo/logo-edufair-2023.png'
import WorkshopPamphletLandscape from '../img/pamphlet/Pamflet Workshop Landscape.png'
import TimelineWorkshop from "../components/event/workshop/TimelineWorkshop";
import QuestionAnswerWorkshop from "../components/event/workshop/QuestionAnswerWorkshop";
import {setTitle} from "../helper/Utills";
import {Helmet} from "react-helmet";


const Workshop = () => {

    return (
        <div>

            <Helmet>
                <title>WORKSHOP PBB - EDUCATION FAIR 2023</title>
                <meta
                    name="description"
                    content='Workshop PBB atau Program Belajar Bareng adalah sebuah workshop yang dilakukan dalam sehari untuk melakukan pelatihan singkat dibidang pemrograman. Pada tahun 2023 ini, Workshop PBB mengangkat Tema "React Integration with External APIS". Jangan sampai ketinggalan dengan Workshop PBB ini dan terus pantau untuk Timeline nya!'
                />
                <link rel="icon" href={EdufairLogo} />
                <link rel="apple-touch-icon" href={EdufairLogo} />

                <meta property="og:url" content="https://www.edufair.tech/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="EDUCATION FAIR" />
                <meta property="og:description" content='Workshop PBB atau Program Belajar Bareng adalah sebuah workshop yang dilakukan dalam sehari untuk melakukan pelatihan singkat dibidang pemrograman. Pada tahun 2023 ini, Workshop PBB mengangkat Tema "React Integration with External APIS". Jangan sampai ketinggalan dengan Workshop PBB ini dan terus pantau untuk Timeline nya!' />
                <meta property="og:image" content={EdufairLogo} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="telsquiz.com" />
                <meta property="twitter:url" content="https://www.edufair.tech/" />
                <meta name="twitter:title" content="EDUCATION FAIR" />
                <meta name="twitter:description" content='Workshop PBB atau Program Belajar Bareng adalah sebuah workshop yang dilakukan dalam sehari untuk melakukan pelatihan singkat dibidang pemrograman. Pada tahun 2023 ini, Workshop PBB mengangkat Tema "React Integration with External APIS". Jangan sampai ketinggalan dengan Workshop PBB ini dan terus pantau untuk Timeline nya!' />
                <meta name="twitter:image" content={EdufairLogo} />
            </Helmet>

            <div className="container mx-auto mt-10 mb-6 px-8">
                <h4 className="text-3xl text-center font-semibold max-[992px]:mt-16 max-[992px]:mb-4">
                    Workshop PBB 2023
                </h4>
                <hr className="min-[993px]:hidden"/>
                <div className="flex flex-row max-[992px]:flex-col-reverse justify-center my-14">
                    <div className="w-6/12 max-[992px]:w-full">
                        <p className="text-justify pt-10 max-[992px]:py-8">
                            Workshop PBB atau Program Belajar Bareng adalah sebuah workshop yang dilakukan dalam sehari untuk melakukan pelatihan singkat dibidang pemrograman.
                        </p>
                        <p className="text-justify py-6">
                            Pada tahun 2023 ini, Workshop PBB mengangkat Tema <br/> <span className="font-semibold">
                        "React Integration with External API'S".</span> Jangan sampai ketinggalan dengan Workshop PBB ini dan terus pantau untuk Timeline nya!
                        </p>
                    </div>
                    <div className="w-6/12 max-[992px]:w-full">
                        <img src={WorkshopPamphletLandscape} alt="workshop.png" className="mx-auto w-[70%] rounded-md"/>
                        {/*<img src={WorkshopIMG(70)} alt="workshop.png" className="mx-auto w-[70%] rounded-md"/>*/}
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
