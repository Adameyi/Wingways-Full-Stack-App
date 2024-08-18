import React from 'react'
import ContactForm from '../components/ContactForm'
import Navbar from '../components/Navbar'
import Utilbar from '../components/Utilitybar'
import Footer from '../components/Footer'

function Contact() {
    return (
        <>
            <Utilbar />
            <Navbar />
            <div className='mt-20'>
                <ContactForm />
            </div>
            <Footer />
        </>
    )
}

export default Contact