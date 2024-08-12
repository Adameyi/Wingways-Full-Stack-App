import React from 'react';
import AccordionReceipt from './AccordionReceipt';
import FlightSchedule from './FlightSchedule';

function ReceiptColumn() {
    const accordionData = [
        {
            title: 'Seats',
            receiptItems: [
                { description: 'Seat 1 (Adult - Window)', price: '$10.00' },
                { description: 'Seat 2 (Adult - Middle)', price: '$10.00' },
                { description: 'Seat 3 (Adult - Window)', price: '$10.00' },
                { description: 'Seat 4 (Adult - Window)', price: '$10.00' },
            ],
            price: '$40.00',
        },
        {
            title: 'Luggage',
            receiptItems: [
                { description: 'Seat 1 (Adult) - 10kg', price: '$20.00' },
                { description: 'Seat 2 (Adult) - 0kg', price: '$0.00' },
                { description: 'Seat 3 (Adult) - 0kg', price: '$0.00' },
                { description: 'Seat 4 (Adult) - 0kg', price: '$0.00' },
                { description: 'Additional Baggage', price: '$0.00' },
            ],
            price: '$20.00',
        },
        {
            title: 'Hotels',
            receiptItems: [
                { description: 'Shangri La Front Resort (4 Adults - 7 Nights)', price: '$800.00' },
                { description: 'Kempsie Motel (2 Nights', price: '$100.00' },
            ],
            price: '$900.00',
        },
        {
            title: 'Rented Vehicles',
            receiptItems: [
                { description: 'SUV, Honda CR-V (Hertz Rental - 7 Days)', price: '$300.00' },
            ],
            price: '$40.00',
        },
        {
            title: 'Travel Insurance',
            receiptItems: [
                { description: 'Allianz (Comprehensive - 31 Days)', price: '$110.00' },
            ],
            price: '$110.00',
        },
    ];

    return (
        <div className='col-span-2 p-12'>
            <div className='bg-gray-500 flex items-center justify-center h-[10rem] text-[3rem] roboto-regular shadow-xl z-10'>
                <svg xmlns="http://www.w3.org/2000/svg" height="80px" viewBox="0 -960 960 960" width="80px" fill="#000000">
                    <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
                </svg>
                My Trip
            </div>
            <div className='bg-white p-6'>
                <AccordionReceipt
                    title={<h1>Flights</h1>}
                    price={'$50.00'}
                >
                    <FlightSchedule />
                    <FlightSchedule />
                </AccordionReceipt>
                {accordionData.map((item, index) => (
                    <AccordionReceipt
                        key={index}
                        title={item.title}
                        price={item.price}
                        receiptItems={item.receiptItems}
                    />
                ))}
            </div>

            <div className='mt-4 bg-gray-700 text-white p-6 flex justify-between'>
                <div>
                    <h2 className='roboto-regular text-[1.5rem]'>Total Amount:</h2>
                    <h1 className='roboto-medium text-[3.5rem]'>$2,000.00<sup className='text-[2rem]'>AUD</sup></h1>
                </div>
                <u>Cost Breakdown</u>
            </div>
            <p className='mt-2'>Payment Method - Credit (Mastercard) </p>
        </div>
    );
}

export default ReceiptColumn;
