import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { GiSkills } from 'react-icons/gi'
import { HiOutlineDatabase } from 'react-icons/hi'

const HeaderSocials = () => {
    return (
        <div className='header_socials'>
            <a href='' target={'_blank'}><AiOutlineHome /></a>
            <a href='https://github.com/GeetaChahar' target={'_blank'}><GiSkills /></a>
            <a href='https://github.com/GeetaChahar/Portfolio' target={'_blank'}><HiOutlineDatabase /></a>
        </div>
    )
}

export default HeaderSocials
