import React from 'react'
import window_norway from '../assets/images/window_norway.png'

function Newsletter() {
    return (
        <div
            style={{ backgroundImage: `url(${window_norway})` }}
            className='h-screen-min w-full bg-cover relative'
        >
            {/* Overlay */}
            <div className='absolute inset-0 bg-gray-500 bg-opacity-40'></div>

            <div className='relative z-10 flex flex-col text-center text-white p-6 h-full'>
                <h1 className='text-[2rem] roboto-medium'>Get Exclusive Deals & Travel Tips</h1>
                <p className='roboto-light'>Subscribe to our Newsletter for the latest travel tips and deals</p>
                <div>
                    <div className='flex flex-row items-center justify-center mt-4'>
                        <input type="text" className='w-96 h-9 px-2 rounded-lg' placeholder='Enter Email Here..' />
                        <button className='flex bg-[#000F94] px-6 ml-2 py-2 text-white rounded-full hover:bg-blue-500 gap-2'>
                            Subscribe
                        </button>
                    </div>
                    <p className='roboto-light'>By Joining you agree to our <u>Terms & Conditions*</u></p>
                </div>
            </div>
        </div>
    )
}

export default Newsletter