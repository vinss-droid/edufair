import {Accordion} from "flowbite-react";

const QuestionAnswerTalkshow = () => {
    return (
        <div className="container mx-auto px-5 my-12">
            <Accordion className="shadow-md">
                <Accordion.Panel>
                    <Accordion.Title>
                        Siapa saja yang bisa mengikuti Talkshow ini?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Talkshow pada kali ini dibukan untuk Siswa & Mahasiswa diseluruh Indonesia.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        Apa persyaratan Talkshow ini?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Persyaratan pada Talkshow kali ini yaitu, para peserta yang akan mendaftar harus merupakan Siswa atau Mahasiswa dengan dibuktikan dengan tanda pengenal Instansi nya.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        Talkshow nya diadakan dimana?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Talkshow pada tahun ini diadakan secara online dan offline. <br/>
                            Untuk tempat pelaksanaan secara offline akan dilaksanakan di TechnoMart Karawang.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        Berapa kuota peserta untuk Talkshow kali ini?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Kuota peserta dibagi menjadi 2 yaitu :
                        </p>
                        <ol className="list-decimal pl-5 text-gray-500 dark:text-gray-400">
                            <li>Online : 300 Kuota Peseta</li>
                            <li>Offline : 60 Kuota Peserta</li>
                        </ol>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </div>
    );
};

export default QuestionAnswerTalkshow;
