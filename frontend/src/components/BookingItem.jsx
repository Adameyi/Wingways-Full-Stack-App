import '../styles/index.css'
import React from 'react'

function BookingItem({ onSelectFlight }) {
    const handleSelect = () => {
        if (onSelectFlight) onSelectFlight()
    }

    return (
        <div className='mt-4 grid lg:grid-cols-4 gap-[0.05rem]'>
            {/* Flight Info Section */}
            <div className='col-span-1 rounded-[1rem] bg-white p-3 roboto-light shadow-lg'>
                <div className='grid grid-cols-3'>
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
            {/* Flight Info Section */}
            <div className='col-span-1 rounded-[1rem] bg-white p-3 roboto-light shadow-lg'>
                <div className='grid grid-cols-3'>
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
            {/* Additional Section */}
            <div className='col-span-2 rounded-[1rem] bg-white p-3 roboto-light shadow-lg'>
                <div className='grid grid-cols-2'>
                    <div className='col-span-1'>
                        <span className='roboto-regular'>Economy</span>
                        <div className='text-4xl roboto-light'>$1,500.00</div>
                        <div className='flex mt-3 whitespace-nowrap'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#5985E1"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                            <button
                                className='ml-2 flex bg-slate-500 px-6 py-2 text-white rounded-full hover:bg-blue-500 gap-2 shadow-lg'
                                onClick={handleSelect}
                            >
                                Select Flight
                            </button>
                        </div>
                    </div>
                    <div className='col-span-1'>
                        <div className='flex justify-end'>
                            <div className='bg-green-200 px-6 py-1 text-green-500 rounded-full gap-2'>
                                Low Price
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookingItem;
