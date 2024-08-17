import React from 'react'
import ContactForm from '../components/ContactForm'
import Navbar from '../components/Navbar'
import Utilbar from '../components/Utilitybar'

function Contact() {
    return (
        <>
            <Utilbar />
            <Navbar />
            <div className='mt-20'>
                <ContactForm />
            </div>
        </>
    )
}

export default Contact