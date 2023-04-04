import * as React from 'react';
import Select from "react-select";
import axios from "axios";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginImageValidateSize from 'filepond-plugin-image-validate-size';
import {setTitle} from "../../../../helper/Utills";

registerPlugin(
    FilePondPluginFileValidateSize,
    FilePondPluginFileValidateType,
    FilePondPluginImagePreview,
    FilePondPluginImageValidateSize
)

const FormRegisterWorkshop = () => {

    setTitle('Pendaftaran Workshop PBB')

    // Provinces & Regencies
    const [dataProvinces, setDataProvinces] = React.useState([])
    const [dataRegencies, setDataRegencies] = React.useState([])
    const [isProvincesSelected, setIsProvincesSelected] = React.useState(false)

    // Proof File
    const [proofFileHimsika, setProofFileHimsika] = React.useState([])
    const [proofFileEdufair, setProofFileEdufair] = React.useState([])

    const getProvincesData = () => {

        axios.get('https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json')
            .then((res) => {
                res.data.map((data, id) => {
                    let provinces = [{'value': '', 'label': 'pilih kabupaten/kota'}]
                    res.data.map((data) => {
                        provinces.push({'value': data.id, 'label': data.name})
                    })
                    setDataProvinces(provinces)
                })
            }).catch((err) => {
            // console.log(err)
        })

    }

    const getRegenciesData = (provinceID) => {

        if (provinceID) {
            axios.get(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${provinceID}.json`)
                .then((res) => {
                    let regencies = [{'value': '', 'label': 'pilih kabupaten/kota'}]
                    res.data.map((data) => {
                        regencies.push({'value': data.id, 'label': data.name})
                    })
                    setDataRegencies(regencies)
                }).catch((err) => {
                // console.log(err)
            })
        } else {
            setIsProvincesSelected(false)
        }

    }

    React.useEffect(() => {
        getProvincesData()
    }, [])

    return (
        <form autoComplete="off">
            <div className="mb-6">
                <label htmlFor="full_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Nama Lengkap <span className="text-red-600">(Untuk Sertifikat)</span>
                </label>
                <input type="text" id="full_name"
                       className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:cursor-not-allowed disabled:bg-gray-100"
                       placeholder="Education Fair"
                       required />
            </div>
            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Email
                </label>
                <input type="email" id="email"
                       className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:cursor-not-allowed disabled:bg-gray-100"
                       placeholder="edufair@gmail.com"
                       disabled
                       required />
            </div>
            <div className="mb-6">
                <label htmlFor="whatsapp" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    No.WhatsApp
                </label>
                <input type="number" id="whatsapp"
                       className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:cursor-not-allowed disabled:bg-gray-100"
                       placeholder="08123456789" minLength="10" maxLength="13" required />
            </div>
            <div className="mb-6">
                <label htmlFor="instansi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Nama Instansi
                </label>
                <input type="text" id="instansi"
                       className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:cursor-not-allowed disabled:bg-gray-100"
                       placeholder="Unversitas Singaperbangsa Karawang"
                       required />
            </div>
            <div>
                <div className="w-full mb-6">
                    <label htmlFor="provinsi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Provinsi
                    </label>
                    <Select
                        id="provinsi"
                        options={dataProvinces}
                        defaultValue={dataProvinces[0]}
                        required
                        onChange={(opt) => {
                            setIsProvincesSelected(true)
                            getRegenciesData(opt.value)
                        }}
                    />
                </div>

                {isProvincesSelected && (
                    <div className="w-full mb-6">
                        <label htmlFor="kota" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Kabupaten / Kota
                        </label>
                        <Select id="kota" options={dataRegencies} defaultValue={dataRegencies[0]} required />
                    </div>
                )}

            </div>
            <div className="mb-6">
                <label htmlFor="kota" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Bukti follow IG
                    <a
                        className="text-blue-500"
                        href="https://instagram.com/himsika"
                        target="_blank"> @himsika</a> <br/> <span className="text-red-600">(Klik pada @himsika untuk membuka instagram)</span>
                </label>
                <FilePond
                    files={proofFileHimsika}
                    onupdatefiles={setProofFileHimsika}
                    credits={false}
                    allowMultiple={false}
                    allowRevert={false}
                    allowReplace={false}
                    maxFileSize="3MB"
                    acceptedFileTypes={['image/png', 'image/jpg', 'image/jpeg', 'image/bmp', 'image/heif']}
                    server="/api"
                    name="files"
                    labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                    required
                />
            </div>
            <div className="mb-6">
                <label htmlFor="kota" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Bukti follow IG
                    <a
                        className="text-blue-500"
                        href="https://instagram.com/edufair.himsika"
                        target="_blank"> @edufair.himsika</a> <br/> <span className="text-red-600">(Klik pada @edufair.himsika untuk membuka instagram)</span>
                </label>
                <FilePond
                    files={proofFileEdufair}
                    onupdatefiles={setProofFileEdufair}
                    credits={false}
                    allowMultiple={false}
                    allowRevert={false}
                    allowReplace={false}
                    maxFileSize="3MB"
                    acceptedFileTypes={['image/png', 'image/jpg', 'image/jpeg', 'image/bmp', 'image/heif']}
                    server="/api"
                    name="files"
                    labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                    required
                />
            </div>
            <button type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:cursor-not-allowed disabled:bg-blue-700/70">
                Daftar
            </button>
        </form>
    );
};

export default FormRegisterWorkshop;
