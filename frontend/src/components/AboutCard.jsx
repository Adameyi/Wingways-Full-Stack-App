import '../styles/index.css';
import React from 'react'

function AboutCard({ icon, title, description }) {
    return (
        <div className='bg-gray-300 p-4 grid grid-cols-4 w-full mt-3'>
            <div className='col-span-1 flex justify-center'>
                <div className='w-3/4 h-full bg-cyan-400 rounded-full flex justify-center items-center'>
                    {icon}
                </div>
            </div>
            <div className='col-span-3 p-3'>
                <h1 className='text-center text-[1.5rem] roboto-regular'>{title}</h1>
                <p className='roboto-light'>{description}</p>
            </div>
        </div>
    )
}

export default AboutCard