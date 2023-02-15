import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
    return (
        <section id='experience'>
            <h5>Skills I Have</h5>
            <h2>My Experience</h2>

            <div className='container experience_container'>
                <div className='experience_frontend'>
                    <h3>Frontend Development</h3>
                    <div className='experience_content'>
                        <articl className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Advance</small>
                            </div>
                        </articl>

                        <articl className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Advance</small>
                            </div>
                        </articl>

                        <articl className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <div>
                                <h4>JavaScript</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </articl>

                        <articl className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <div>
                                <h4>Bootstrap</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </articl>

                        <articl className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <div>
                                <h4>ReactJs</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </articl>
                    </div>
                </div>
                {/* END OF FRONTEND */}
                <div className='experience_backend'>
                    <h3>Skills</h3>
                    <div className='experience_content'>
                        <articl className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <div>
                                <h4>Artist</h4>
                                <small className='text-light'>Advance</small>
                            </div>
                        </articl>

                        <articl className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <div>
                                <h4>Reasoning</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </articl>

                        <articl className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <div>
                                <h4>Critical Thinker</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </articl>

                        <articl className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <div>
                                <h4>Designing</h4>
                                <small className='text-light'>Advance</small>
                            </div>
                        </articl>

                        <articl className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <div>
                                <h4>Sports</h4>
                                <small className='text-light'>Advance</small>
                            </div>
                        </articl>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Experience
