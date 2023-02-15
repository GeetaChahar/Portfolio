import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { CgMail } from 'react-icons/cg'

const HeaderSocials = () => {
    return (
        <div className='header_socials'>
            <a href='https://www.linkedin.com/in/geeta-chahar-208b88258/' target={'_blank'}><BsLinkedin /></a>
            <a href='https://github.com/GeetaChahar' target={'_blank'}><FaGithub /></a>
            <a href='https://gmail.com' target={'_blank'}><CgMail /></a>
        </div>
    )
}

export default HeaderSocials
