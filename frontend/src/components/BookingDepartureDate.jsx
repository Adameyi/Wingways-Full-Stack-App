import '../styles/index.css';
import React from 'react';

function BookingDepartureDate() {
    return (
        <div className='col-span-2 flex items-center justify-center'>
            <h2 className='roboto-bold px-2 text-[1.5rem]'>Departing Flight</h2>
            <div className='border-r-2 px-4 roboto-light'>
                <div>Fri</div>
                <div>23</div>
            </div>
            <div className='px-2 roboto-light '>
                <div>August</div>
                <div>2024</div>
            </div>
        </div>
    );
}

export default BookingDepartureDate
