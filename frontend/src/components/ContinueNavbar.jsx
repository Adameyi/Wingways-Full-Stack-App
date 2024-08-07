import '../styles/index.css';
import React from 'react';

function ContinueNavbar({ onCancel }) {
    return (
        <div className='fixed bottom-0 h-1/7 w-full bg-[#454545] px-[2rem] text-white leading-[2.5rem]'>
            <div className='grid grid-cols-3'>
                <div className='col-span-2'>
                    <p>Subtotal:</p>
                    <h1 className='text-[3rem] roboto-regular ml-12'>$1,500.00<sup className='ml-2 text-[1rem]'>AUD</sup></h1>
                    <div className='text-[0.75rem] underline roboto-light ml-12' onClick={onCancel}>Cancel Booking</div>
                </div>
                <div className='col-span-1'>
                    <div className='text-center bg-[#000F94] text-[3rem] p-6 h-3/4 w-2/3'>
                        Continue
                    </div>
                </div>
            </div>
        </div >
    );
}

export default ContinueNavbar;
