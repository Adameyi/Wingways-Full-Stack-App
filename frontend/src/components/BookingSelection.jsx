import '../styles/index.css';

import React, { useState } from 'react';
import BookingItem from './BookingItem';
import ContinueNavbar from './ContinueNavbar';

function BookingSelection() {
    const [isFlightSelected, setIsFlightSelected] = useState(false)

    const handleFlightSelect = () => {
        setIsFlightSelected(true)
    }

    const cancelFlightSelect = () => {
        setIsFlightSelected(false)
    }


    return (
        <div className='h-screen bg-gray-300 flex justify-center'>
            <div className='w-2/3 p-6'>
                <div className='grid lg:grid-cols-4 gap-4 mb-1'>
                    <h1 className='flex items-center justify-center col-span-1'>Departing Flights</h1>
                    <h1 className='flex items-center justify-center col-span-1'>Returning Flights</h1>
                    <h1 className='flex items-center justify-center col-span-1'>Flight Price</h1>
                    <h1 className='flex items-center justify-end col-span-1'>FILTER <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368" className='ml-2'><path d="M440-120v-240h80v80h320v80H520v80h-80Zm-320-80v-80h240v80H120Zm160-160v-80H120v-80h160v-80h80v240h-80Zm160-80v-80h400v80H440Zm160-160v-240h80v80h160v80H680v80h-80Zm-480-80v-80h400v80H120Z" /></svg></h1>
                </div>
                <hr />
                <BookingItem onSelectFlight={handleFlightSelect} />
                <BookingItem onSelectFlight={handleFlightSelect} />
                <BookingItem onSelectFlight={handleFlightSelect} />
                <BookingItem onSelectFlight={handleFlightSelect} />
            </div>
            {isFlightSelected && <ContinueNavbar onCancel={cancelFlightSelect} />}
        </div>
    );
}

export default BookingSelection;
