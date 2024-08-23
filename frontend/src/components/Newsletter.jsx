import React from 'react'
import window_norway from '../assets/images/window_norway.png'

function Newsletter() {
    return (
        <div
            style={{ backgroundImage: `url(${window_norway})` }}
            className='h-[30vh] w-full bg-cover bg-[url("../assets/images/window_norway.png")]flex flex-col text-center text-white p-6'>
            <h1 className='text-[2rem] roboto-medium'>Get Exclusive Deals & Travel Tips</h1>
            <p className='roboto-light'>Subscribe to our Newsletter for the latest travel tips and deals</p>
            <div>
                <div className='flex flex-row items-center justify-center mt-4'>
                    <input type="text" className='w-1/4 h-9 px-2 rounded-lg' placeholder='Enter Email Here..' />
                    <button className='flex bg-[#000F94] px-6 ml-2 py-2 text-white rounded-full hover:bg-blue-500 gap-2'>
                        Subscribe
                    </button>
                </div>
                <p className='roboto-light text-gray-200 '>By Joining you agree to our <u>Terms & Conditions*</u></p>
            </div>
        </div>
    )
}

export default Newsletter