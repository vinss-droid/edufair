import {Accordion} from "flowbite-react";

const QuestionAnswerWorkshop = () => {
    return (
        <div className="container mx-auto px-5 my-12">
            <Accordion className="shadow-md">
                <Accordion.Panel>
                    <Accordion.Title>
                        Apa itu Workshop PBB?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Workshop PBB atau Program Belajar Bareng adalah sebuah workshop yang dilakukan dalam sehari untuk melakukan pelatihan singkat dibidang pemrograman.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        Kapan Workshop PBB dilaksanakan?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Workshop PBB akan dilaksanakan pada tanggal 24 April 2023 pukul 09.00 WIB - Selesai.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        Workshop PBB dilaksanakan dimana?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Workshop PBB ini akan dilaksanakan secara Luring (offline) pada tempat yang sudah ditentukan oleh panitia.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        Berapa kuota perserta untuk Workshop PBB kali ini?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Kuota untuk Workshop PBB pada tahun 2023 ini sebanyak 50 peserta.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        Siapa aja yang boleh mengikuti Workshop PBB ini?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Workshop PBB ini dibuka untuk Mahasiswa Fasilkom UNSIKA dan UMUM.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        Apa saja persyaratan untuk mengikuti Workshop PBB ini?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Dalam Workshop PBB kali ini ada requirement untuk mengikutinya yaitu :
                        </p>
                        <ol className="list-decimal pl-5 text-gray-500 dark:text-gray-400">
                            <li>Mengetahui dasar HTML</li>
                            <li>Mengetahui dasar CSS</li>
                            <li>Mengetahui dasar Javascript & DOM</li>
                        </ol>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        Kenapa ada persyaratan untuk mengikuti Workshop PBB ini?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Dalam Workshop PBB 2023 ini mengangkat tema <span className="font-semibold">"ReactJS Integration with External API's"</span>. <br/> Dimana untuk mempelajari ReactJS tersebut harus mengetahui beberapa perseyaratan yang sudah ditentukan.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        Apakah boleh kita mengikuti Workshop PBB tanpa memenuhi persyaratan tersebut?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Boleh, tetapi sangat dianjurkan untuk para pendaftar untuk memenuhi perseyaratan tersebut. <br/>
                            Jika pendaftar tidak memenuhi persyaratan tersebut maka perserta harus siap menerima segala bentuk ketidaktahuan dari dasar-dasar persyaratan tersebut.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        Benefit apa saja yang didapatkan oleh peserta?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Workshop PBB ini akan memberikan beberapa Benefit untuk para peserta yang hadir berupa :
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

export default QuestionAnswerWorkshop;
