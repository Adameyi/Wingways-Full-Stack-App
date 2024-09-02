import '../styles/index.css';

import React from 'react'
import Tickets from './Tickets';

function ReceiptTickets() {
    return (
        <div className='h-screen-min bg-gray-300 flex flex-col p-12'>

            <h1 className='roboto-medium text-[3rem] flex items-center gap-2 text-blue-900'>
                <div className='bg-blue-900 h-8 w-2'></div>
                Trip Overview</h1>
            <h2 className='roboto-regular text-[2rem]'>Flight Departure Tickets</h2>
            <Tickets type="DepartureTicket" />
            <h2 className='roboto-regular text-[2rem]'>Flight Arrival Tickets</h2>
            <Tickets type="ArrivalTicket" />
        </div>
    )
}

export default ReceiptTickets