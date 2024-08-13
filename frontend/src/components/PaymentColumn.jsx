import React, { useState } from 'react'

function PaymentColumn() {

    const [paymentMethod, setPaymentMethod] = useState('card')

    const togglePaymentMethod = () => {
        setPaymentMethod(paymentMethod === 'card' ? 'paypal' : 'card')
    }

    return (
        <div className='col-span-3 p-12'>
            <div className='bg-white px-16 py-6 rounded-lg shadow-lg'>
                <h1 className='text-[2.5rem] roboto-medium'>Payment Details</h1>
                <p className='text-[1.25rem] roboto-regular'>Please fill out the payment details below to complete your booking</p>
                <div className='px-12 py-6'>
                    <div className='flex items-center justify-center'>
                        <div className='bg-[url("../assets/images/cardTemplate.png")] bg-contain bg-no-repeat w-[27rem] h-[16rem] rounded-[1.5rem]  w-full' />
                    </div>
                    <div className='px-6 py-3'>
                        <div
                            onClick={togglePaymentMethod}
                            className={`relative text-[1.5rem] border-black border-2 w-full h-16 flex items-center rounded-lg cursor-pointer transition-colors text-gray-400 bg-gray-500`}
                        >
                            <div className='flex justify-between items-center w-full px-16'>
                                <span>{paymentMethod === 'card' ? '' : 'Pay with Card'}</span>
                                <span>{paymentMethod === 'card' ? 'Pay with PayPal' : ''}</span>
                            </div>

                            {/* Toggle Button */}
                            <div
                                className={`absolute flex justify-center items-center roboto-medium w-1/2 h-full text-black bg-gray-100 rounded-lg shadow-mg transform transition-transform duration-300 z-0 ${paymentMethod === 'card' ? 'translate-x-0' : 'translate-x-full'
                                    }`}
                            >
                                {paymentMethod === 'card' ? (
                                    <>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="40px"
                                            viewBox="0 -960 960 960"
                                            width="40px"
                                            fill="#5f6368"
                                        >
                                            <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-320h640v-160H160v160Z" />
                                        </svg>
                                        <span className="ml-1">Pay with Card</span>
                                    </>
                                ) : (
                                    <>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="40px"
                                            viewBox="0 -960 960 960"
                                            width="40px"
                                            fill="#5f6368"
                                            className='ml-2'
                                        >
                                            <path d="M856-390 570-104q-12 12-27 18t-30 6q-15 0-30-6t-27-18L103-457q-11-11-17-25.5T80-513v-287q0-33 23.5-56.5T160-880h287q16 0 31 6.5t26 17.5l352 353q12 12 17.5 27t5.5 30q0 15-5.5 29.5T856-390ZM260-640q25 0 42.5-17.5T320-700q0-25-17.5-42.5T260-760q-25 0-42.5 17.5T200-700q0 25 17.5 42.5T260-640Z" />
                                        </svg>
                                        <span className="ml-1">Pay with PayPal</span>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>Email Address</p>
                        <input
                            type="text"
                            className='p-2 w-full border-gray-200 border-2 rounded-lg   '
                            placeholder={`Enter Email...`} />
                    </div>
                    <div className='bg-gray-200 rounded-lg grid grid-cols-2 gap-4 p-6 mt-4'>
                        <div className='col-span-1'>
                            <p className='roboto-mono'>First Name</p>
                            <input
                                type="text"
                                className='bg-transparent p-2 w-full border-gray-400 border-2 rounded-lg   '
                                placeholder={`Enter Email...`} />
                        </div>
                        <div className='col-span-1'>
                            <p className='roboto-mono'>Last Name</p>
                            <input
                                type="text"
                                className='bg-transparent p-2 w-full border-gray-400 border-2 rounded-lg   '
                                placeholder={`Enter Email...`} />
                        </div>
                        <div className='col-span-2'>
                            <p>Card Number</p>
                            <input
                                type="text"
                                className='bg-transparent p-2 w-full border-gray-400 border-2 rounded-lg   '
                                placeholder={`Enter Card Number`} />
                        </div>
                        <div className='col-span-1'>
                            <p className='roboto-mono'>Expiry Date</p>
                            <input
                                type="text"
                                className='bg-transparent p-2 w-full border-gray-400 border-2 rounded-lg   '
                                placeholder={`DD/MM/YYYY`} />
                        </div>
                        <div className='col-span-1'>
                            <p className='roboto-mono'>CVC</p>
                            <input
                                type="text"
                                className='bg-transparent p-2 w-full border-gray-400 border-2 rounded-lg   '
                                placeholder={`•••`} />
                        </div>
                        <div className='col-span-2'>
                            <p className='roboto-mono'>Billing Address</p>
                            <div className='space-y-2'>
                                <input
                                    type="text"
                                    className='bg-transparent p-2 w-full border-gray-400 border-2 rounded-lg   '
                                    placeholder={`Address Line 1`} />
                                <input
                                    type="text"
                                    className='bg-transparent p-2 w-full border-gray-400 border-2 rounded-lg   '
                                    placeholder={`Address Line 2`} />
                            </div>
                        </div>
                        <div className='flex justify-center items-center w-[24rem]'>
                            <input
                                type="checkbox"
                                id="checkbox1"
                                value="option1"
                                className='mr-2 h-4 w-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500'
                            />
                            Save Billing Information for Future Transactions
                        </div>
                    </div>
                    <div className='flex justify-between items-center mt-4'>
                        <span className='roboto-regular text-gray-400 text-[1.1rem]'>VAT(20%)</span>
                        <span className='roboto-medium text-[1.5rem]'>$999.00</span>
                    </div>
                    <div className='flex justify-between items-center mt-1'>
                        <span className='roboto-regular text-gray-400 text-[1.1rem]'>Subtotal</span>
                        <span className='roboto-medium text-[1.5rem]'>$999.00</span>
                    </div>
                    <hr />
                    <div className='flex justify-between items-center mt-1'>
                        <span className='roboto-regular text-gray-400 text-[1.1rem]'>Total Amount</span>
                        <span className='roboto-medium text-[1.5rem]'>$999.00</span>
                    </div>
                    <div className='shadow-lg bg-blue-800 hover:bg-blue-400 h-1/4 text-white p-4 flex items-center justify-center rounded-full mt-6'>
                        Make Payment
                    </div>
                </div>
            </div >
        </div >
    )
}


export default PaymentColumn