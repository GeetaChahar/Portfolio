import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { SiFurrynetwork } from 'react-icons/si'
import { VscFolderLibrary } from 'react-icons/vsc'
import { GiTalk } from 'react-icons/gi'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className='container about_container'>
                <div className='about_me'>
                    <div className='about_me-image'>
                        <img src={ME} alt='About Image' />
                    </div>
                </div>

                <div className='about_content'>
                    <div className='about_cards'>
                        <article className='about_card'>
                            <SiFurrynetwork className='about_icon' />
                            <h5>Experience</h5>
                            <small> Fresher With Good Projects</small>
                        </article>

                        <article className='about_card'>
                            <FaAward className='about_icon' />
                            <h5>Internship</h5>
                            <small>Though NFL</small>
                        </article>

                        <article className='about_card'>
                            <VscFolderLibrary className='about_icon' />
                            <h5>Projects</h5>
                            <small> 3+ Completed</small>
                        </article>
                    </div>

                    <p>
                        Hey I'm Geeta Chahar from Gwalior. I'm looking for good opportunity to use my skills in real life projects, as the system necessarily in demand of curious learner and obeserved I have keen interest in web development this is where I can fit in.
                    </p>
                    <a href='#contact' className='btn btn-primary'><GiTalk /> Let's Talk</a>
                </div>
            </div>
        </section>

    )
}

export default About
