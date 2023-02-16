import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className='container services_container'>
                <article className='service'>
                    <div className='service_head'>
                        <h3>ReactJs</h3>
                    </div>

                    <ul className='service_list'>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Hands on using react-icon to give unique touch.</p>
                        </li>

                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Used SwiperJs with various feature.</p>
                        </li>

                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Made live weather-app with changing background along with temperature.</p>
                        </li>

                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>To-do list using ReactJs.</p>
                        </li>

                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Learnt with-in a month and got familiar with ReactJs</p>
                        </li>
                    </ul>
                </article>
                {/* {END OF REACTJS} */}
                <article className='service'>
                    <div className='service_head'>
                        <h3>Wev Development</h3>
                    </div>

                    <ul className='service_list'>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>My favorite part is to design web-page.</p>
                        </li>

                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>I have included my painting gallery in !Housite page.</p>
                        </li>

                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Designing interest in same boost me to complete all task.</p>
                        </li>

                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>I have color combo talent from childhood which now converted in skills I have worked on them.</p>
                        </li>

                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>My way of using data behind the web-page is unique.</p>
                        </li>

                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Made logos for the web-site which resonate with site.</p>
                        </li>
                    </ul>
                </article>
                {/* {END OF WEB DEVELOPMENT} */}
                <article className='service'>
                    <div className='service_head'>
                        <h3>Content Creation</h3>
                    </div>

                    <ul className='service_list'>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>I can create content along with content writing which most people praised.</p>
                        </li>

                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Content writing adds beauty in Content and my word selections are good.</p>
                        </li>

                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>I have good knowledge of selecting data according to topic.</p>
                        </li>

                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Content Creation skill I have learnt in school from various projects.</p>
                        </li>

                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Tech content is different and roots are the same that's way my content is unique.</p>
                        </li>
                    </ul>
                </article>
            </div>

        </section>
    )
}

export default Services
