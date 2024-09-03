import '../styles/index.css';
import React from 'react';

function BookingReturningDate({returnDate}) {

    const getDateComponents = (returnDate) => {
        if (!returnDate) return {}
        const day = returnDate.getDate()
        const month = returnDate.toLocaleDateString(undefined, { month: 'long'})
        const year = returnDate.getFullYear()
        const dayOfWeek = returnDate.toLocaleDateString(undefined, { weekday: 'short'})
    
        return {day, month, year, dayOfWeek}
    }

    const returnDateComponents = getDateComponents(returnDate)

    return (
        <div className='col-span-2 flex items-center justify-center'>
            <h2 className='roboto-bold px-2 text-md'>Departing Flight</h2>
            <div className='border-r-2 text-center px-4 roboto-light'>
                <div>{returnDateComponents.dayOfWeek}</div>
                <div>{returnDateComponents.day}</div>
            </div>
            <div className='px-2 roboto-light '>
                <div>{returnDateComponents.month}</div>
                <div>{returnDateComponents.year}</div>
            </div>
        </div>
    );
}

export default BookingReturningDate
