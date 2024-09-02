import React, { useState } from 'react'

const AccordionReceipt = ({ title, price, receiptItems = [], children }) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleAccordion = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='border-b border-gray-200'>
            <button
                className={`mt-4 bg-gray-200 shadow-lg border-blue-300 ${isOpen ? '' : 'border-b-8'} text-[2rem] roboto-light flex justify-between items-center p-4 w-full text-left focus:outline-none`}
                onClick={toggleAccordion}
            >
                {title}
                <svg
                    className={`w-6 h-6 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''
                        }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>
            {isOpen && (
                <div>
                    <div className='bg-slate-100 p-4 grid grid-cols-1'>
                        <div className='col-span-1'>
                            {children}
                            {receiptItems && receiptItems.map((item, index) => (
                                <div key={index} className='flex justify-between'>
                                    <span>{item.description}</span>
                                    <b>{item.price}</b>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
            {isOpen && (
                <div className='bg-blue-300 text-white py-2 px-4 col-span-1'>
                    <div className='grid grid-cols-4 flex justify-center items-center'>
                        <div className='col-span-1'>
                            <h2 className='roboto-regular text-[1.5rem]'>Subtotal:</h2>
                            <u>4 Adults</u>
                        </div>
                        <div className='col-span-3 text-right'>
                            <h1 className='roboto-medium text-[2.5rem]'>{price}<sup className='text-[1.4rem]'>AUD</sup></h1>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AccordionReceipt
