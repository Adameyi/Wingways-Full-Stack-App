import React from 'react'

function FlightSchedule() {
    return (
        <>
            <div className='grid-cols-4 p-3 mb-2'>
                <h1 className='roboto-bold'>Sydney to Adelaide</h1>
                <h2 className='roboto-light'>Saturday 21, August 2024</h2>
                <div className='grid grid-cols-3 mt-2'>
                    <div className='col-span-1 text-center'>
                        <span className='text-[0.75rem]'>SYDNEY</span>
                        <div className='text-[1.5rem] roboto-regular'>
                            06:05
                        </div>
                        Departure
                        <div className='mt-2 underline flex whitespace-nowrap'>
                            <img src="https://1000logos.net/wp-content/uploads/2017/05/Qantas-Logo.png" height={20} width={30} alt="Qantas_Icon" />QF4300
                        </div>
                    </div>
                    <div className='col-span-1 flex justify-center items-center'>
                        _____
                    </div>
                    <div className='col-span-1 text-center'>
                        <span className='text-[0.75rem]'>ADELAIDE</span>
                        <div className='text-[1.5rem] roboto-regular'>
                            08:35
                        </div>
                        Arrival
                        <div className='mt-2'>
                            <p>2h 30m</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default FlightSchedule