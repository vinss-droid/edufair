import {Accordion} from "flowbite-react";


const QuestionAnswerSilogyExpo = () => {
    return (
        <div className="container mx-auto px-5 my-12">
            <Accordion className="shadow-md">
                <Accordion.Panel>
                    <Accordion.Title>
                        Apa itu Silogy Expo?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Silogy Expo merupakan festival dari Prodi Sistem Informasi mengenai
                            keilmuan teknologi informasi. <br/>
                            Festival ini meliputi berbagai kegiatan seperti
                            kompetisi baik akademik maupun non akademik serta talkshow mengenai teknologi.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        Kapan Silogy Expo dilaksanakan?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Silogy Expo sendiri memiliki 3 acara didalamnya. Acara tersebut mempunyai waktu pelaksanaan nya masing-masing. <br/>
                            Untuk melihat detail dari masing-masing acaranya kamu dapat melihat detail dari acaranya di Timeline Silogy Expo.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        Siapa aja yang boleh mengikuti Silogy Expo ini?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Silogy Expo memiliki persyaratannya masing-masing dalam acaranya. Namun secara general acara dari Silogy Expo ini dibuka untuk UMUM serta untuk Mahasiswa Sistem Informasi UNSIKA.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        Silogy Expo dilaksanakan dimana?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Silogy Expo akan dilaksanakan secara online dan offline tergantung dari acaranya sendiri. <br/>
                            Tetapi untuk acara offline nya sendiri akan dilaksanakan di TechnoMart Karawang.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </div>
    );
};

export default QuestionAnswerSilogyExpo;
