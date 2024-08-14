import React from 'react'

function StaffThumbnail({ img, fullname, title }) {
    return (
        <div className='bg-white h-96 w-72 shadow-xl'>
            <div style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover' }} className='bg-gray-600 h-64 w-72' />
            <div className='p-6'>
                <h1 className='text-[1.75rem] roboto-bold'>{fullname}</h1>
                <h2 className='text-[1.25rem] text-gray-400 roboto-regular'>{title}</h2>
            </div>
        </div>
    )
}

export default StaffThumbnail