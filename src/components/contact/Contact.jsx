import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RxLinkedinLogo } from 'react-icons/rx'
import { RiWhatsappLine } from 'react-icons/ri'
import { useRef } from 'react'
import emailjs from 'emailjs-com'



const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className='container contact_container'>
                <div className='contact-options'>
                    <article className='contact_option'>
                        <MdOutlineEmail className='contact_option-icon' />
                        <h4>Email</h4>
                        <h5>vgeetachahar@gmail.com</h5>
                        <a href='mailto:vgeetachahar@gmail.com' target='_blank'>Send a message</a>
                    </article>

                    <article className='contact_option'>
                        <RxLinkedinLogo className='contact_option-icon' />
                        <h4>LinkedIn</h4>
                        <h5>geetachahar</h5>
                        <a href='https://m.me/geeta-chahar' target='_blank'>Send a message</a>
                    </article>

                    <article className='contact_option'>
                        <RiWhatsappLine className='contact_option-icon' />
                        <h4>Whatsapp</h4>
                        <h5>+9100000000</h5>
                        <a href='https://api.whatsapp.com/send?phone+57833798236' target='_blank'>Send a message</a>
                    </article>
                </div>
                {/* {END OF CONTACT SECTION} */}
                <form ref={form} onSubmit>
                    <input type='text' name='name' placeholder='Your Full Name' required />
                    <input type='email' name='email' placeholder='Your Email' required />
                    <textarea name='message' rows='7' placeholder='Your Message' required >
                    </textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
