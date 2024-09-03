import '../styles/index.css';
import React from 'react';

function BookingDepartureDate({departureDate}) {

    const getDateComponents = (departureDate) => {
        if (!departureDate) return {}
        const day = departureDate.getDate()
        const month = departureDate.toLocaleDateString(undefined, { month: 'long'})
        const year = departureDate.getFullYear()
        const dayOfWeek = departureDate.toLocaleDateString(undefined, { weekday: 'short'})
    
        return {day, month, year, dayOfWeek}
    }

    const departureDateComponents = getDateComponents(departureDate)

    return (
        <div className='col-span-2 flex items-center justify-center'>
            <h2 className='roboto-bold px-2 text-md'>Departing Flight</h2>
            <div className='border-r-2 text-center px-4 roboto-light'>
                <div>{departureDateComponents.dayOfWeek}</div>
                <div>{departureDateComponents.day}</div>
            </div>
            <div className='px-2 roboto-light '>
                <div>{departureDateComponents.month}</div>
                <div>{departureDateComponents.year}</div>
            </div>
        </div>
    );
}

export default BookingDepartureDate
