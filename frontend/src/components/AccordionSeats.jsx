import React, { useState } from 'react'

const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleAccordion = () => {
        //Set useState to opposite of current toggle.
        setIsOpen(!isOpen)
    }

    return (
        <div className='border-b border-gray-200'>
            <button
                className='mt-2 bg-white flex justify-between items-center p-4 w-full text-left focus:outline-none'
                onClick={toggleAccordion}
            >
                <span className='text-[1.25rem] roboto-medium flex whitespace-nowrap gap-2'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z" />
                </svg>{title}</span>
                <div className='roboto-medium h-9 w-9 rounded-lg bg-slate-400 text-center flex justify-center items-center'>
                    1B
                </div>
                Seat Unselected
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
                <div className='bg-slate-100 p-4'>
                    {content}
                </div>
            )}
        </div>
    )
}

export default Accordion