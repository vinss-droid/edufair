import * as React from 'react';
import {questions} from "./data/questions";
import EdufairLogo from '../../img/logo/logo-edufair-2023.png'
import Loader from '../Loader'
import {useParams} from "react-router-dom";
import {setTitle} from "../../helper/Utills";

const index = () => {

    setTitle('Questionnaire')

    const {
        event
        // eslint-disable-next-line react-hooks/rules-of-hooks
    } = useParams()

    const dateNow = new Date()
    const endDate = new Date('2023-07-10')

    const maxLinear = [1,2,3,4,5]
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [answer, setAnswer] = React.useState([])
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isLoading, setIsLoading] = React.useState(false)

    const postData = (answer) => {
        console.log(answer)
    }

    return (
        <div className="bg-[#1B254B] min-h-screen flex justify-center items-center select-none">

            {dateNow > endDate ? (
                <div className="w-6/12 my-4 bg-white/95 px-5 rounded-md shadow-md py-8 max-[992px]:w-full max-[992px]:mx-2 max-[992px]:px-1.5 text-center">
                    <h3 className="text-center text-4xl font-semibold uppercase">
                        Pengisian Kuesioner telah ditutup
                    </h3>
                </div>
            ) : (
                <div className="w-6/12 my-4 bg-white/95 px-5 rounded-md shadow-md py-8 max-[992px]:w-full max-[992px]:mx-2 max-[992px]:px-1.5 text-center">
                    <img src={EdufairLogo} alt="edufair logo" className="mx-auto mb-8 w-[25%]"/>
                    <h3 className="text-center text-4xl font-semibold uppercase">
                        Kuesioner {event === 'workshop' ? 'Workshop PBB' : event}
                    </h3>
                    <hr className="mt-6 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                    <div className="mt-10">

                        <form onSubmit={(e) => {
                            e.preventDefault()
                            postData(answer)
                        }}>

                            {questions.map((question, index) => (
                                <div className="mt-10 mx-4" key={index}>
                                    <p className="font-semibold text-left max-[992px]:text-center">
                                        {question.question}
                                    </p>
                                    <div className="flex justify-center gap-8 max-[992px]:flex-col">
                                        <p className="mt-4">Tidak Puas</p>
                                        {maxLinear.map((linear, indexRadio) => (
                                            <div className="flex items-center justify-center mt-4" key={indexRadio}>
                                                <input
                                                    id={`${linear}${question.no}`}
                                                    type="radio"
                                                    value={linear}
                                                    name={index}
                                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                    onChange={(e) =>
                                                        answer[index] = {
                                                            question: question.question,
                                                            answer: e.target.value
                                                        }
                                                    }
                                                    required
                                                />
                                                <label
                                                    htmlFor={`${linear}${question.no}`}
                                                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                >
                                                    {linear}
                                                </label>
                                            </div>
                                        ))}
                                        <p className="mt-4">Sangat Puas</p>
                                    </div>
                                </div>
                            ))}

                            <div className="mt-10">
                                <label
                                    htmlFor="ask"
                                    className="font-semibold"
                                >
                                    Apakah dimasa mendatang anda ingin mengikuti Workshop PBB yang diadakan oleh kami lagi?
                                </label>

                                <div className="flex justify-center gap-6">
                                    <div className="flex items-center justify-center mt-4">
                                        <input
                                            id="yes"
                                            type="radio"
                                            value="Iya"
                                            name="questionnaire"
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            onChange={(e) =>
                                                answer[8] = {
                                                    question: "Apakah dimasa mendatang anda ingin mengikuti webinar yang diadakan oleh kami lagi?",
                                                    answer: e.target.value
                                                }
                                            }
                                            required
                                        />
                                        <label
                                            htmlFor="yes"
                                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Iya
                                        </label>
                                    </div>
                                    <div className="flex items-center justify-center mt-4">
                                        <input
                                            id="no"
                                            type="radio"
                                            value="Tidak"
                                            name="questionnaire"
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            onChange={(e) =>
                                                answer[8] = {
                                                    question_id: questions.length + 3,
                                                    answer: e.target.value
                                                }
                                            }
                                        />
                                        <label
                                            htmlFor="no"
                                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Tidak
                                        </label>
                                    </div>
                                </div>

                            </div>

                            <div className="mt-10">
                                <label
                                    htmlFor="message"
                                    className="font-semibold"
                                >
                                    Saran dan kritik untuk Workshop PBB ini
                                </label>
                                <textarea id="message" rows="4"
                                          className="mt-3 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                          placeholder="Tuliskan saran dan kritik kamu disini.."
                                          onChange={(e) =>
                                              answer[9] = {
                                                  question: "Saran dan kritik untuk webinar ini",
                                                  answer: e.target.value
                                              }
                                          }
                                          required
                                ></textarea>

                            </div>
                            <button
                                type="submit"
                                className={`'hidden' : 'inline-flex'} mt-6 ml-4 text-white bg-[#2557D6] font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center select-none disabled:cursor-not-allowed disabled:bg-[#2557D6]/80`}
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <Loader />
                                )  : (
                                    'Kirim'
                                )}
                            </button>

                        </form>

                    </div>
                </div>
            )}

        </div>
    );
};

export default index;
