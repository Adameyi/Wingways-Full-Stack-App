import '../styles/index.css';
import React from 'react';
import Accordion from './AccordionSeats';

function BookingSeats() {
    const rows = Array.from({ length: 23 }, (_, index) => index + 1)
    const seats = ['A', 'B', 'C', '', 'D', 'E', 'F']

    const accordionData = [
        {
            title: 'Adult 1',
            content: 'Content for Section 1'
        },
        {
            title: 'Adult 2',
            content: 'Content for Section 2'
        },
        {
            title: 'Adult 3',
            content: 'Content for Section 3'
        }
    ]
    return (
        <div className='h-screen bg-gray-300 flex '>
            <div className='grid lg:grid-cols-2 w-full p-2'>
                <div className='col-span-1 p-6'>
                    <h1 className='roboto-medium text-[2.5rem] text-white'>Key</h1>
                    <div className='text-white border border-white border-2 rounded-lg p-4 mb-4'>
                        <div className='grid grid-cols-2'>
                            <div className='col-span-1'>
                                <div className='flex whitespace-nowrap items-center mt-2'>
                                    <div className='bg-green-600 rounded-lg h-10 w-10 mr-2' />
                                    <p>Available</p>
                                </div>
                                <div className='flex whitespace-nowrap items-center mt-2'>
                                    <div className='bg-blue-700 rounded-lg h-10 w-10 mr-2' />
                                    <p>Available<br></br>(Disability)</p>
                                </div>
                                <div className='flex whitespace-nowrap items-center mt-2'>
                                    <div className='bg-orange-700 rounded-lg h-10 w-10 mr-2' />
                                    <p>Available<br></br>(Reserved)</p>
                                </div>
                            </div>
                            <div className='col-span-1'>
                                <div className='flex whitespace-nowrap items-center mt-2'>
                                    <div className='border border-2 rounded-lg h-10 w-10 mr-2 flex items-center justify-center text-[3rem] roboto-light'>
                                        X
                                    </div>
                                    <p>Unavailable</p>
                                </div>
                                <div className='flex whitespace-nowrap items-center mt-3'>
                                    <div className='border border-2 rounded-lg h-10 w-10 mr-2 flex items-center justify-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M220-80v-300h-60v-220q0-33 23.5-56.5T240-680h120q33 0 56.5 23.5T440-600v220h-60v300H220Zm80-640q-33 0-56.5-23.5T220-800q0-33 23.5-56.5T300-880q33 0 56.5 23.5T380-800q0 33-23.5 56.5T300-720ZM600-80v-240H480l102-306q8-26 29.5-40t48.5-14q27 0 48.5 14t29.5 40l102 306H720v240H600Zm60-640q-33 0-56.5-23.5T580-800q0-33 23.5-56.5T660-880q33 0 56.5 23.5T740-800q0 33-23.5 56.5T660-720Z" /></svg>
                                    </div>
                                    <p>Toilet</p>
                                </div>
                                <div className='flex whitespace-nowrap items-center mt-4'>
                                    <div className='border border-2 rounded-lg h-10 w-10 mr-2 flex items-center justify-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m175-120-56-56 410-410q-18-42-5-95t57-95q53-53 118-62t106 32q41 41 32 106t-62 118q-42 44-95 57t-95-5l-50 50 304 304-56 56-304-302-304 302Zm118-342L173-582q-54-54-54-129t54-129l248 250-128 128Z" /></svg>
                                    </div>
                                    <p>Galley</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {accordionData.map((item, index) => (
                        <Accordion
                            key={index}
                            title={item.title}
                            content={item.content}
                        >
                        </Accordion>
                    ))}
                </div>
                <div className='col-span-1 p-6'>
                    <h1 className='roboto-medium text-[2.5rem] '>Booking Flights for Jack - Adult 1</h1>
                    <div className='bg-slate-500 grid grid-cols-8 p-4 rounded-lg whitespace-nowrap'>

                        {/* Letters X-Axis */}
                        <div className='col-span-1 flex items-center justify-center text-[2rem]'>
                            {seats.map((seat, index) => (
                                <div key={index} className='col-span-1 text-[2rem] flex items-center justify-center mb-2 mt-2'>
                                    {seat}
                                </div>
                            ))}
                            {/*  End of Letters X-Axis*/}


                            {rows.map((row) => (
                                <React.Fragment key={row}>
                                    <div key={index} className='col-span-1 text-[2rem] flex items-center justify-center mb-2 mt-2'>
                                        {row}
                                    </div>

                                    {seats.map((seat, index) => (
                                        <div key={index} className={`col-span-1 text-[2rem] flex items-center justify-center mb-2 mt-2 ${seat === '' ? 'bg-slate-500' : 'bg-green-600'} h-14 w-14 rounded-lg`}>
                                            {seat && `${row}${seat}`}
                                        </div>
                                    ))}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingSeats
