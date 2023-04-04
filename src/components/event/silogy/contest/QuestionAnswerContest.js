import {Accordion} from "flowbite-react";

const QuestionAnswerContest = () => {
    return (
        <div className="container mx-auto px-5 my-12">
            <Accordion className="shadow-md">
                <Accordion.Panel>
                    <Accordion.Title>
                        Siapa saja yang bisa mengikuti lomba ini?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Lomba pada kali ini dibukan untuk Siswa & Mahasiswa diseluruh Indonesia.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        Apa persyaratan lomba ini?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Persyaratan pada lomba kali ini yaitu, para peserta yang akan mendaftar harus merupakan Siswa atau Mahasiswa dengan dibuktikan dengan tanda pengenal Instansi nya.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        Apa tema dari setiap lombanya?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Tema untuk seluruh lomba yang ada yaitu "Teknologi". Dimana semua karya harus berhubungan dengan teknologi.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        Apa benefit para peserta?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Para peserta akan mendapatkan beberapa benefit yaitu :
                        </p>
                        <ol className="list-decimal pl-5 text-gray-500 dark:text-gray-400">
                            <li>e-certificate</li>
                            <li>Hadiah Juara</li>
                            <li>Ilmu yang Bermanfaat</li>
                            <li>Relasi</li>
                        </ol>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        Ada Contact Person untuk Lomba?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Ya, ada. Jika kalian mengalami kendala ataupun memiliki pertanyaan tentang lomba kalian dapat menghubungi <br/> Contact Person dibawah.
                        </p>
                        <div className="mt-4">
                            <button className="inline-flex items-center px-5 text-white bg-[#25D366] rounded-md py-2 shadow-sm hover:bg-[#25D366]/80">
                                <i className="fa-brands fa-whatsapp mr-1"></i> Aksyal
                            </button>
                            <button className="inline-flex items-center px-5 text-white bg-[#25D366] rounded-md py-2 shadow-sm hover:bg-[#25D366]/80 ml-2">
                                <i className="fa-brands fa-whatsapp mr-1"></i> Aksyal
                            </button>
                        </div>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </div>
    );
};

export default QuestionAnswerContest;
