import * as React from 'react';
import axios from "axios";
import Select from 'react-select'
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginImageValidateSize from 'filepond-plugin-image-validate-size';
import {signOut, user as userData, useUserToken} from "../../../../../helper/Auth";
import {notifyError, notifySuccess} from "../../../../../Utils/Utils";
import {useParams} from "react-router-dom";

registerPlugin(
    FilePondPluginFileValidateSize,
    FilePondPluginFileValidateType,
    FilePondPluginImagePreview,
    FilePondPluginImageValidateSize
)

const FormRegisterTalkshow = (props) => {

    const token = useUserToken()
    const user = userData()
    const {
        setIsRegistered
    } = props

    const {
        types
    } = useParams()

    const [isLoading, setIsLoading] = React.useState(false)

    // Form Data
    const [data, setData] = React.useState({
        type: types,
        name: user.name
    })

    const [dataProvinces, setDataProvinces] = React.useState([])
    const [dataRegencies, setDataRegencies] = React.useState([])
    const [isProvincesSelected, setIsProvincesSelected] = React.useState(false)

    // Proof File
    const [proofFileHimsika, setProofFileHimsika] = React.useState([])
    const [proofFileEdufair, setProofFileEdufair] = React.useState([])
    const [isUploaded, setIsUploaded] = React.useState({})

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

    const validateData = (e) => {

        e.preventDefault()

        if (data.name &&
            data.no_whatsapp &&
            data.agency_name &&
            data.province &&
            data.regency &&
            data.proof_himsika &&
            data.proof_edufair
        ) return sendRegister()
        else
            notifyError('Pastikan semua kolom di isi, dan sudah selesai mengupload gambar!')

    }

    const sendRegister = () => {

        setIsLoading(true)

        axios.post(`${process.env.REACT_APP_API_URL}/register/talkshow/2023`, data, {
            headers: {
                'X-Authorization': process.env.REACT_APP_API_KEY,
                'Authorization': token
            }
        }).then((res) => {
            setIsLoading(false)
            notifySuccess('Berhasil Mendaftar!')
            setIsRegistered(true)
        }).catch((err) => {
            setIsLoading(false)
            notifyError('Gagal mendaftar!')
            if(err.response.status === 401)
                return signOut()
        })

    }

    React.useEffect(() => {
        getProvincesData()
    }, [])

    return (
        <form autoComplete="off" onSubmit={validateData}>
            <div className="mb-6">
                <label htmlFor="full_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Nama Lengkap <span className="text-red-600">(Untuk Sertifikat)</span>
                </label>
                <input type="text" id="full_name"
                       className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:cursor-not-allowed disabled:bg-gray-100"
                       placeholder="Nama Lengkap"
                       required
                       value={data.name}
                       disabled={isLoading}
                       onChange={(e) => setData({...data, name: e.target.value})}
                />
            </div>
            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Email
                </label>
                <input type="email" id="email"
                       className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500"
                       value={user.email}
                       disabled
                       required />
            </div>
            <div className="mb-6">
                <label htmlFor="whatsapp" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    No.WhatsApp <span className="text-red-600">(AKTIF)</span>
                </label>
                <input type="number" id="whatsapp"
                       className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:cursor-not-allowed disabled:bg-gray-100"
                       placeholder="08123456789" minLength="10" maxLength="13" required
                       onChange={(e) => setData({...data, no_whatsapp: e.target.value})}
                       disabled={isLoading}
                />
            </div>
            <div className="mb-6">
                <label htmlFor="instansi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Asal Instansi
                </label>
                <input type="text" id="instansi"
                       className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:cursor-not-allowed disabled:bg-gray-100"
                       placeholder="Nama Kampus / Komunitas / Organisasi / Perusahaan / Umum"
                       required
                       onChange={(e) => setData({...data, agency_name: e.target.value})}
                       disabled={isLoading}
                />
            </div>
            <div>
                <div className="w-full mb-6">
                    <label htmlFor="provinsi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Provinsi
                    </label>
                    <Select
                        isDisabled={isLoading}
                        id="provinsi"
                        options={dataProvinces}
                        defaultValue={dataProvinces[0]}
                        required
                        onChange={(opt) => {
                            setIsProvincesSelected(true)
                            getRegenciesData(opt.value)
                            setData({...data, province: opt.label})
                        }}
                    />
                </div>

                {isProvincesSelected && (
                    <div className="w-full mb-6">
                        <label htmlFor="kota" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Kabupaten / Kota
                        </label>
                        <Select
                            isDisabled={isLoading}
                            id="kota"
                            options={dataRegencies}
                            defaultValue={dataRegencies[0]}
                            required
                            onChange={(opt) => setData({...data, regency: opt.label})}
                        />
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
                    acceptedFileTypes={['image/png', 'image/jpg', 'image/jpeg']}
                    name="image"
                    labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                    required
                    disabled={isUploaded.proof_himsika}
                    server={{

                        url: `${process.env.REACT_APP_API_URL}/upload/proof-image`,
                        process: {
                            headers: {
                                'X-Authorization': process.env.REACT_APP_API_KEY,
                                'Authorization': token
                            },
                            onload: (res) => {
                                setData({...data, proof_himsika: res})
                                setIsUploaded({...isUploaded, proof_himsika: true})
                            },
                            onerror: (err) => notifyError('Gagal mengupload gambar! Silahkan coba lagi.')
                        }

                    }}
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
                    acceptedFileTypes={['image/png', 'image/jpg', 'image/jpeg']}
                    name="image"
                    labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                    required
                    disabled={isUploaded.proof_edufair}
                    server={{

                        url: `${process.env.REACT_APP_API_URL}/upload/proof-image`,
                        process: {
                            headers: {
                                'X-Authorization': process.env.REACT_APP_API_KEY,
                                'Authorization': token
                            },
                            onload: (res) => {
                                setData({...data, proof_edufair: res})
                                setIsUploaded({...isUploaded, proof_edufair: true})
                            },
                            onerror: (err) => notifyError('Gagal mengupload gambar! Silahkan coba lagi.')
                        }

                    }}
                />
            </div>
            <button type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:cursor-not-allowed disabled:bg-blue-700/70"
                    disabled={isLoading}
            >
                {isLoading ? (
                    <svg aria-hidden="true" role="status" className="inline w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                    </svg>
                ) : 'Daftar'}
            </button>
        </form>
    );
};

export default FormRegisterTalkshow;
