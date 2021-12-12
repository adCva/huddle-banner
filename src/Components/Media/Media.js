import React from 'react';
import { MediaContainer, MediaIcon } from "./MediaStyle";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Media = () => {
    const message = () => {
        alert("fuck")
    }
    return (
        <MediaContainer>
            <MediaIcon href="https://www.facebook.com/" target="_blank"><FaFacebookF /></MediaIcon>
            <MediaIcon href="https://twitter.com/" target="_blank"><FaTwitter /></MediaIcon>
            <MediaIcon href="https://www.instagram.com/" target="_blank"><FaInstagram /></MediaIcon>
        </MediaContainer>
    )
}

export default Media;