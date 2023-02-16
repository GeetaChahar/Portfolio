import React from 'react'
import CV from '../../assets/cv.pdf'
import { IoMdDownload } from 'react-icons/io'
import { GiTalk } from 'react-icons/gi'

const CTA = () => {
    return (
        <div className='cta'>
            <a href={CV} download className='btn'><IoMdDownload />  Download CV</a>
            <a href='#contact' className='btn btn-primary'><GiTalk />  Let's talk</a>
        </div>
    )
}

export default CTA
