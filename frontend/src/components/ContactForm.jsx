import React from 'react'

function ContactForm() {
    return (
        <div className='h-screen-min p-12 bg-white mt-[-5.5rem] grid grid-cols-5 gap-6'>
            <div className='col-span-2 bg-gray-200 rounded-lg p-6'>
                <a href="/" className='navbar-brand text-navy-blue font-roboto font-bold text-[2rem] text-[#000F94] mt-2'>WingWays</a>
            </div>
            <div className='col-span-3 bg-blue-400 rounded-lg p-12'>
                <h1>Contact Us</h1>
                <p>Feel free to reach out to us. We will get in touch within 24 hours notice.</p>
            </div>
        </div>
    )
}

export default ContactForm