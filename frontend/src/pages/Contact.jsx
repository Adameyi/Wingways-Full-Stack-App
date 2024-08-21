import React from 'react'
import ContactForm from '../components/ContactForm'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Contact() {
    return (
        <>
            <Navbar />
            <div className='mt-20'>
                <ContactForm />
            </div>
            <Footer />
        </>
    )
}

export default Contact