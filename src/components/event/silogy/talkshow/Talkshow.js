import {TalkshowIMG} from "../../../../helper/Image";
import TimelineTalkshow from "./TimelineTalkshow";
import QuestionAnswerTalkshow from "./QuestionAsnwerTalkshow";
import {setTitle} from "../../../../helper/Utills";


const Talkshow = () => {
    setTitle('Talkshow - SILOGY EXPO')
    return (
        <div>
            <div className="container mx-auto mt-10 mb-6 px-8">
                <h4 className="text-3xl text-center font-semibold max-[992px]:mt-16 max-[992px]:mb-4 uppercase">
                    Talkshow SILOGY EXPO 2023
                </h4>
                <hr className="min-[993px]:hidden"/>
                <div className="flex flex-row max-[992px]:flex-col-reverse justify-between my-14">
                    <div className="w-6/12 max-[992px]:w-full">
                        <p className="text-justify pt-6 max-[992px]:py-8">
                            Pada tahun ini Talkshow mengangkat tema <br/>
                            <span className="font-semibold">"Dampak Teknologi Terhadap Masa Depan Pekerjaan".</span>
                        </p>
                        <p className="text-justify pt-5 max-[992px]:py-8">
                            Pembahasan Talkshow pada tahun ini meliputi : <br/>
                            <ol className="list-disc px-4">
                                <li>Bagaimana teknologi merubah cara manusia bekerja.</li>
                                <li>Kebangkitan automatisasi & Kecerdasan Buatan.</li>
                            </ol>
                        </p>
                    </div>
                    <div className="w-5/12 max-[992px]:w-full">
                        <img src={TalkshowIMG(200)} alt="Webinar.png" className="mx-auto max-[992px]:mx-auto"/>
                    </div>
                </div>
                <div className="time-line mt-6">
                    <p className="text-3xl text-center font-semibold mb-8">
                        Timeline
                    </p>
                    <TimelineTalkshow />
                </div>
            </div>
            <div className="time-line mt-6">
                <p className="text-3xl text-center font-semibold mb-8 px-4">
                    Pertanyaan yang sering diajukan
                </p>
                <QuestionAnswerTalkshow />
            </div>
        </div>
    );
};

export default Talkshow;
