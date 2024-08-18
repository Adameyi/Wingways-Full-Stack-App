import React from 'react'
import Navbar from '../components/Navbar'
import Utilbar from '../components/Utilitybar'
import AboutSection from '../components/AboutSection'
import StaffSection from '../components/StaffSection'
import ContactForm from '../components/ContactForm'

import '../styles/index.css';
import Footer from '../components/Footer'

function About() {
    return (
        <div className='overflow-x-hidden'>
            <Utilbar />
            <Navbar />
            <AboutSection />
            <StaffSection />
            <ContactForm />
            <Footer />
        </div>
    )
}

export default About