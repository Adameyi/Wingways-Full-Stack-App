import React from 'react'
import facebookLogo from '../assets/images/facebook.png';
import youtubeLogo from '../assets/images/youtube.png';
import twitterLogo from '../assets/images/twitter.png';
import instagramLogo from '../assets/images/instagram.png';

function ContactForm() {
    return (
        // Left Panel
        <div className='h-screen-min p-12 bg-white mt-[-5.5rem] grid grid-cols-5 gap-6'>
            <div className='relative col-span-2 bg-gray-200 rounded-lg p-6 overflow-hidden'>
                <h className='text-navy-blue font-roboto font-bold text-[3rem] text-[#000F94] mt-2'>WingWays</h>
                {/* Circles */}
                <div className='pl-16'>
                    <div className='absolute rounded-full h-20 w-20 bg-[#9D9898] mt-44 ml-10' />
                    <div className='absolute rounded-full h-20 w-20 bg-[#BAA8A8] mt-[28rem] ml-52' />
                    <div className='absolute rounded-full h-20 w-20 bg-[#9D9898] mt-[40rem] ml-36' />
                    <div class="w-[60rem] h-[60rem] border-2 border-[#D6C3C3] rounded-full bg-transparent flex justify-center items-center">
                        <div class="w-[45rem] h-[45rem] border-2 border-[#BAA8A8] rounded-full bg-transparent flex justify-center items-center">
                            <div class="w-[30rem] h-[30rem] border-2 border-[#9D9898] rounded-full bg-transparent flex justify-center items-center">
                                <div class="w-[15rem] h-[15rem] border-2 border-gray-500 rounded-full bg-transparent">
                                    <div className='rounded-full h-20 w-20 bg-gray-900' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Circles End */}
                <div className='flex flex-col gap-3 mt-[-22rem]'>
                    <h2 className='flex items-center gap-2 text-[1.5rem] roboto-regular'>
                        <img src={facebookLogo} alt="Facebook Logo" />
                        WingWays
                    </h2>
                    <h2 className='flex items-center gap-2 text-[1.5rem] roboto-regular'>
                        <img src={twitterLogo} alt="Facebook Logo" />
                        WingWays
                    </h2>
                    <h2 className='flex items-center gap-2 text-[1.5rem] roboto-regular'>
                        <img src={youtubeLogo} alt="Facebook Logo" />
                        WingWays
                    </h2>
                    <h2 className='flex items-center gap-2 text-[1.5rem] roboto-regular'>
                        <img src={instagramLogo} alt="Facebook Logo" />
                        WingWays
                    </h2>
                </div>

            </div>

            {/* Contact Form */}
            <div className='col-span-3 bg-blue-400 rounded-lg px-32 py-16 grid grid-cols-2'>
                <div className='col-span-2'>
                    <h1 className='roboto-bold text-[2.5rem]'>Contact Us</h1>
                    <p>Feel free to reach out to us. We will get in touch within 24 hours notice.</p>

                    <div className='grid grid-cols-2 mt-8'>
                        <div className='col-span-1 flex flex-col gap-1 p-3'>
                            <label htmlFor="firstName">First Name</label>
                            <input id="firstName" className="rounded-2xl p-2 px-3" placeholder='Enter First Name' type="text" />
                        </div>
                        <div className='col-span-1 flex flex-col gap-1 p-3'>
                            <label htmlFor="lastName">Last Name</label>
                            <input id="lastName" className="rounded-2xl p-2 px-3" placeholder='Enter Last Name' type="text" />
                        </div>
                    </div>

                    <div className='col-span-2 flex flex-col gap-1 p-3'>
                        <label htmlFor="Email">Email</label>
                        <input id="Email" className="rounded-2xl p-2 px-3" placeholder='Enter Email' type="text" />

                        <label htmlFor="contactNumber" className='mt-4'>Contact Number</label>
                        <input id="contactNumber" className="rounded-2xl p-2 px-3" placeholder='Enter Contact Number' type="text" />

                        <label htmlFor="contactNumber" className='mt-4'>Message</label>
                        <textarea id="contactNumber" className="rounded-2xl p-2 px-3" placeholder='Leave us a Message...'></textarea>
                    </div>

                    <div className='col-span-2 flex items-center gap-2 mt-4'>
                        <input type="checkbox" id="myCheckbox" />
                        <label for="myCheckbox">I have read the <u>Terms & Conditions</u> and Agree to our <u>Privacy Policy</u></label>
                    </div>

                    <div className='col-span-2'>
                        <button className='bg-blue-800 rounded-2xl p-4 text-center text-white mt-6 mb-6 w-full'>Send Message</button>
                        <div className='flex flex-row items-center justify-center'>
                            <div className='w-24 h-12 bg-no-repeat bg-[url("../assets/images/hertzLogo.png")]' />
                            <div className='w-24 h-14 bg-no-repeat bg-[url("../assets/images/adidasLogo.png")]' />
                            <div className='w-32 h-9 bg-no-repeat bg-[url("../assets/images/airbnbLogo.png")]' />
                            <div className='w-20 h-6 bg-no-repeat bg-[url("../assets/images/contikiLogo.png")]' />
                            <div className='w-20 h-16 bg-no-repeat  bg-[url("../assets/images/visaLogo.png")]' />
                        </div>
                        <div className='gap-4 flex flex-row items-center justify-center'>
                            <div className='w-24 h-12 bg-no-repeat bg-[url("../assets/images/hertzLogo.png")]' />
                            <div className='w-24 h-14 bg-no-repeat bg-[url("../assets/images/adidasLogo.png")]' />
                            <div className='w-32 h-9 bg-no-repeat bg-[url("../assets/images/airbnbLogo.png")]' />
                            <div className='w-20 h-6 bg-no-repeat bg-[url("../assets/images/contikiLogo.png")]' />
                            <div className='w-20 h-16 bg-no-repeat  bg-[url("../assets/images/visaLogo.png")]' />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ContactForm