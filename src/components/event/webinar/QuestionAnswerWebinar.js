import {Accordion} from "flowbite-react";

const QuestionAnswerWebinar = () => {
    return (
        <div className="container mx-auto px-5 my-12">
            <Accordion className="shadow-md">
                <Accordion.Panel>
                    <Accordion.Title>
                        Apa itu Webinar Nasional?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Webinar Nasional ini merupakan program kerja Himpunan Mahasiswa Sistem
                            Informasi Universitas Singaperbangsa Karawang dalam divisi edukasi yang bertujuan
                            untuk memperluas dasar pengetahuan dan pengalaman.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        Kapan Webinar Nasional dilaksanakan?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Webinar Nasional akan dilaksanakan pada tanggal 29 April 2023 pukul 10.00 WIB - Selesai.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        Webinar Nasional dilaksanakan dimana?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Webinar Nasional ini akan dilaksanakan secara Daring (Online) yang dilangsungkan pada Zoom Meeting.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        Berapa kuota peserta untuk Webinar Nasional kali ini?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Kuota untuk Webinar Nasional pada tahun 2023 ini sebanyak 500 peserta.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        Siapa aja yang boleh mengikuti Webinar Nasional ini?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Webinar Nasional ini dibuka untuk UMUM dan tidak ada ketentuan minimun untuk mengikuti Webinar Nasional ini.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        Benefit apa saja yang didapatkan oleh peserta?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Webinar Nasional ini akan memberikan beberapa Benefit untuk para peserta yang hadir berupa :
                        </p>
                        <ol className="list-decimal pl-5 text-gray-500 dark:text-gray-400">
                            <li>e-certificate</li>
                            <li>Ilmu yang bermanfaat</li>
                            <li>Relasi</li>
                        </ol>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </div>
    );
};

export default QuestionAnswerWebinar;
