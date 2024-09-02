import React from 'react'
import StaffThumbnail from '../components/StaffThumbnail'
import staff1 from '../assets/images/staff1.png'

import '../styles/index.css';

function StaffSection() {
    return (
        <div className='bg-gray-400 w-full h-screen-min mt-[-2.75rem] p-12'>
            <h1 className='text-center text-[1.5rem]'>Meet our dedicated team, committed to providing exceptional service and support.</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='flex flex-col lg:flex-row flex-wrap gap-6 p-12'>
                    <StaffThumbnail img={staff1} fullname={'Matthew Carter'} title={'Project Manager'} />
                    <StaffThumbnail img={staff1} fullname={'Matthew Carter'} title={'Project Manager'} />
                    <StaffThumbnail img={staff1} fullname={'Matthew Carter'} title={'Project Manager'} />
                    <StaffThumbnail img={staff1} fullname={'Matthew Carter'} title={'Project Manager'} />
                </div>

                <div className='flex flex-col lg:flex-row flex-wrap gap-6 p-12'>
                    <StaffThumbnail img={staff1} fullname={'Matthew Carter'} title={'Project Manager'} />
                    <StaffThumbnail img={staff1} fullname={'Matthew Carter'} title={'Project Manager'} />
                    <StaffThumbnail img={staff1} fullname={'Matthew Carter'} title={'Project Manager'} />
                    <StaffThumbnail img={staff1} fullname={'Matthew Carter'} title={'Project Manager'} />
                </div>
            </div>
            <h1 className='text-right text-[6.25rem] text-white roboto-medium'>
                CONTACT US
            </h1>
        </div>
    )
}

export default StaffSection