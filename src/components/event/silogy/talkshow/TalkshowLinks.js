import React from 'react';
import ButtonLinks from "../components/ButtonLinks";

const TalkshowLinks = () => {

    const protocol = window.location.protocol
    const host = window.location.host

    return (
        <div className="flex flex-col justify-center gap-7">
            <ButtonLinks
                title="Pendaftaran Talkshow (OFFLINE) SILOGY EXPO"
                link={`${protocol}//${host}/event/silogy-expo/talkshow/daftar/offline`}
            />
            <ButtonLinks
                title="Pendaftaran Talkshow (ONLINE) SILOGY EXPO"
                link={`${protocol}//${host}/event/silogy-expo/talkshow/daftar/online`}
            />
        </div>
    );
};

export default TalkshowLinks;
