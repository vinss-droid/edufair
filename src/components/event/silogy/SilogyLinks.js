import * as React from 'react';
import ButtonLinks from "./components/ButtonLinks";

const SilogyLinks = () => {

    const protocol = window.location.protocol
    const host = window.location.host

    return (
        <div className="flex flex-col justify-center gap-7">
            <ButtonLinks
                title="Pendaftaran Lomba Soft Dev"
                link={`${protocol}//${host}/event/silogy-expo/daftar/softdev`}
            />
            <ButtonLinks
                title="Pendaftaran Lomba UI/UX"
                link={`${protocol}//${host}/event/silogy-expo/daftar/ui-ux`}
            />
            <ButtonLinks
                title="Pendaftaran Lomba KTI"
                link={`${protocol}//${host}/event/silogy-expo/daftar/kti`}
            />
            <ButtonLinks
                title="Guide Book SILOGY EXPO"
                link={`https://drive.google.com/file/d/1T91umfwqBbknDs7RzJfz1G5_n4Pp9YPN/view`}
            />
            <ButtonLinks
                title="Format Orisinalitas Karya"
                link={`https://drive.google.com/drive/folders/1crAz6POfcOH5sXNnu-1_Xu0GVtUdsGiE`}
            />
        </div>
    );
};

export default SilogyLinks;
