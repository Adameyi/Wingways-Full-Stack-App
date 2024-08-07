import '../styles/index.css';

import React from 'react';
import { useNavigate } from 'react-router-dom';

function Bookingbar() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/flights-booking');
    };

    return (
        <div className='flex justify-center'>
            <div className='flex flex-col p-4 w-2/3 bg-white rounded-[35px] mt-[-5rem] shadow-lg'>
                {/* Navigation Links */}
                <div className='flex items-center flex-start w-full mb-4'>
                    <a href="#" className='flex items-center text-gray-800 hover:text-navy-blue roboto-light text-[1.5rem]'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368" className='mr-2'>
                            <path d="M280-80v-100l120-84v-144L80-280v-120l320-224v-176q0-33 23.5-56.5T480-880q33 0 56.5 23.5T560-800v176l320 224v120L560-408v144l120 84v100l-200-60-200 60Z" />
                        </svg>
                        <div className='border-b-4 border-[#000F94]'>
                            Flights
                        </div>
                    </a>
                    <a href="#" className='flex items-center text-gray-800 hover:text-navy-blue roboto-light text-[1.5rem] ml-8'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M40-200v-600h80v400h320v-320h320q66 0 113 47t47 113v360h-80v-120H120v120H40Zm240-240q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z" /></svg>
                        Hotels
                    </a>
                    <a href="#" className='flex items-center text-gray-800 hover:text-navy-blue roboto-light text-[1.5rem] ml-8'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M240-200v40q0 17-11.5 28.5T200-120h-40q-17 0-28.5-11.5T120-160v-320l84-240q6-18 21.5-29t34.5-11h440q19 0 34.5 11t21.5 29l84 240v320q0 17-11.5 28.5T800-120h-40q-17 0-28.5-11.5T720-160v-40H240Zm-8-360h496l-42-120H274l-42 120Zm68 240q25 0 42.5-17.5T360-380q0-25-17.5-42.5T300-440q-25 0-42.5 17.5T240-380q0 25 17.5 42.5T300-320Zm360 0q25 0 42.5-17.5T720-380q0-25-17.5-42.5T660-440q-25 0-42.5 17.5T600-380q0 25 17.5 42.5T660-320Z" /></svg>
                        Cars
                    </a>
                </div>

                <hr />

                {/* Selection Grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-3'>
                    <div className='relative border-2 p-1'>
                        <div className='absolute top-0 left-0 p-2'>
                            From
                        </div>
                        <div className='text-center text-[2.5rem]'>
                            SYD
                        </div>
                        <div className='absolute top-0 right-0 p-2'>
                            Sydney,<br />Australia
                        </div>
                    </div>

                    <div className='relative border-2 p-1'>
                        <div className='absolute top-0 left-0 p-2'>
                            To
                        </div>
                        <div className='roboto-light text-center text-[2.5rem] text-gray-400'>
                            Where to?
                        </div>
                        <div className='absolute top-0 right-0 p-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-200Q339-304 269.5-402T200-594q0-125 78-205.5T480-880q124 0 202 80.5T760-594q0 94-69.5 192T480-200Zm0-320q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520ZM200-80v-80h560v80H200Z" /></svg>
                        </div>
                    </div>

                    <div className='relative border-2 p-1'>
                        <div className='absolute top-0 left-0 p-2'>
                            Date
                        </div>
                        <div className='roboto-light text-center text-[2.5rem] text-gray-400'>
                            Fly When?
                        </div>
                        <div className='absolute top-0 right-0 p-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-400q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Z" /></svg>
                        </div>
                    </div>
                </div>

                <hr />

                {/* Flight Setting and Class */}
                <div className='flex items-center flex-start text-[1.5rem] mt-4 '>
                    <div className='flex flex-grow items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className='mr-2' fill="#5f6368"><path d="m397-115-99-184-184-99 71-70 145 25 102-102-317-135 84-86 385 68 124-124q23-23 57-23t57 23q23 23 23 56.5T822-709L697-584l68 384-85 85-136-317-102 102 26 144-71 71Z" /></svg>
                        Round Trip ⮟
                    </div>

                    <div className='flex flex-grow items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className='mr-2' fill="#5f6368"><path d="M856-390 570-104q-12 12-27 18t-30 6q-15 0-30-6t-27-18L103-457q-11-11-17-25.5T80-513v-287q0-33 23.5-56.5T160-880h287q16 0 31 6.5t26 17.5l352 353q12 12 17.5 27t5.5 30q0 15-5.5 29.5T856-390ZM260-640q25 0 42.5-17.5T320-700q0-25-17.5-42.5T260-760q-25 0-42.5 17.5T200-700q0 25 17.5 42.5T260-640Z" /></svg>
                        Economy ⮟
                    </div>

                    <button
                        onClick={handleClick}
                        className='bg-[#000F94] px-6 py-2 text-white rounded-full hover:bg-blue-500'>
                        Search Flights
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Bookingbar;
