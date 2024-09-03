import React from 'react';
import { useState } from 'react';
import '../styles/index.css'

function Dropdown({ header, children }) {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedItem, setSelectedItem] = useState(header)

    const toggleDropdown = () => {
        //Set Dropdown to opposite of current active state.
        setIsOpen(!isOpen);
    }

    const closeDropdown = (value) => {
        setSelectedItem(value)
        setIsOpen(false);
    }

    return (
        <div className='relative inline-block text-left'>
            <button
                onClick={toggleDropdown}
                className='border-2 w-[10rem] rounded-lg px-4 py-2 ml-2 mt-2 focus:outline-none'
            >
                {selectedItem} <span className='absolute right-1'>▾</span>
            </button>

            {isOpen && (
                <div className='absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-20'>
                    <div className='p-2'>
                        {React.Children.map(children, child =>
                            React.cloneElement(child, { onClick: closeDropdown })
                        )}
                    </div>
                </div>
            )
            }
        </div>
    )
}

/* Usage:
    <Dropdown header="Options">
        <DropdownItem>Option 1</DropdownItem>
        <DropdownItem>Option 2</DropdownItem>
        <DropdownItem>Option 3</DropdownItem>
    </Dropdown>
*/

export default Dropdown;