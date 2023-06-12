import * as React from 'react';
import {useNavigate} from "react-router-dom";

const ShortLink = (props) => {

    const {
        to
    } = props

    return window.location.href = to

};

export default ShortLink;
