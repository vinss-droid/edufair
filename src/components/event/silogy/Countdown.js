import * as React from 'react';
import EdufairLogo from "../../../img/logo/logo-edufair-2023.png";

const Countdown = () => {

    const calculateTimeLeft = () => {
        const difference = +new Date("July 11, 2023 06:00:00 GMT+07:00") - +new Date().getTime();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

    React.useEffect(() => {
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
    });

    return (
        <div className="bg-[#1B254B] min-h-screen flex justify-center items-center rounded-md">
            <div className="w-6/12 my-4 bg-white/95 px-5 rounded-md shadow-md py-8 max-[992px]:w-full max-[992px]:mx-4 max-[992px]:px-5 text-center">
                <div>
                    <img src={EdufairLogo} alt="webinar" className="mx-auto" width="25%" />
                    <h4 className="text-4xl text-center font-bold mt-6 uppercase">
                        SILOGY EXPO 2023
                    </h4>
                    <hr className="my-4"/>
                    <h3 className="text-2xl text-center font-bold uppercase">
                        Pendaftaran akan dibuka dalam
                    </h3>
                    <h2 className="text-2xl text-center font-semibold mt-5 uppercase text-red-600 max-[768px]:text-sm">
                        {timeLeft.days || timeLeft.hours || timeLeft.minutes || timeLeft.seconds ? (
                            <p>
                                <span>{timeLeft.days}</span>
                                <span className="mr-3"> Hari </span>
                                <span>{timeLeft.hours}</span>
                                <span className="mr-3"> Jam </span>
                                <span>{timeLeft.minutes}</span>
                                <span className="mr-3"> Menit </span>
                                <span>{timeLeft.seconds}</span>
                                <span> Detik </span>
                            </p>
                        ) : (
                            <p>Time is up 🔥</p>
                        )}
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Countdown;
