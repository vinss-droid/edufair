import * as React from 'react'
import {WebinarIMG} from "../helper/Image";
import WebinarPamphlet from '../img/pamphlet/webinar.jpg'
import TimelineWebinar from "../components/event/webinar/TimelineWebinar";
import {setTitle} from "../helper/Utills";
import QuestionAnswerWebinar from "../components/event/webinar/QuestionAnswerWebinar";
const Webinar = () => {
    setTitle('Webinar Nasional')

    return (
        <div>
            <div className="container mx-auto mt-10 mb-6 px-8">
                <h4 className="text-3xl text-center font-semibold max-[992px]:mt-16 max-[992px]:mb-4">
                    Webinar Nasional
                </h4>
                <hr className="min-[993px]:hidden"/>
                <div className="flex flex-row max-[992px]:flex-col-reverse justify-center">
                    <div className="w-6/12 max-[992px]:w-full">
                        <p className="text-justify pt-14 max-[992px]:py-8">
                            Webinar Nasional ini merupakan program kerja Himpunan Mahasiswa Sistem
                            Informasi Universitas Singaperbangsa Karawang dalam divisi edukasi yang bertujuan
                            untuk memperluas dasar pengetahuan dan pengalaman.
                        </p>
                        <p className="text-justify py-6">
                            Pada tahun 2023 ini, Webinar Nasional mengangkat Tema <br/> <span className="font-semibold">
                        "Belajar mengelola konten digital dalam strategi bisnis dengan ecommerce".</span> Jangan sampai ketinggalan dengan Webinar Nasional ini dan terus pantau untuk Timeline nya!
                        </p>
                    </div>
                    <div className="w-6/12 max-[992px]:w-full mt-8">
                        <img src={WebinarPamphlet} alt="Webinar.png" className="mx-auto w-[70%] rounded-md"/>
                    </div>
                </div>
                <div className="time-line mt-6">
                    <p className="text-3xl text-center font-semibold mb-8">
                        Timeline
                    </p>
                    <TimelineWebinar />
                </div>
            </div>
            <div className="time-line mt-6">
                <p className="text-3xl text-center font-semibold mb-8 px-4">
                    Pertanyaan yang sering diajukan
                </p>
                <QuestionAnswerWebinar />
            </div>
        </div>
    );
};

export default Webinar;
