import React from 'react';

const ButtonLinks = (props) => {

    const {
        link,
        title
    } = props

    return (
        <a href={link} className="w-full py-4 text-center px-4 bg-[#00001c] rounded-full text-white hover:bg-[#000]/0 hover:text-[#00001c] hover:border hover:border-[#00001c] hover:border-2 max-[768px]:py-3" target="_blank">
            {title}
        </a>
    );
};

export default ButtonLinks;
