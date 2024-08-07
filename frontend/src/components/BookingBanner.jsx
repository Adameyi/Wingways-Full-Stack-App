import '../styles/index.css';
import BookingReturningDate from './BookingReturningDate';
import BookingDepartureDate from './BookingDepartureDate';
import Dropdown from './Dropdown'
import DropdownItem from './DropdownItem'

function BookingBanner({ hideDropdowns, hideReturning }) {

    return (
        <div className='mx-auto text-white bg-[#454545] px-12 w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 '>
            <div className='col-span-10'>
                <h1 className='flex items-center text-[6rem] roboto-bold'>
                    SYD-ADL
                    <svg xmlns="http://www.w3.org/2000/svg" className='ml-6' height="70px" viewBox="0 -960 960 960" width="70px" fill="#adadad"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" /></svg>
                </h1>
                <div className='border-2 mb-8 border-[#adadad] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 w-2/5 rounded-lg p-2 flex whitespace-nowrap'>
                    <BookingDepartureDate />
                    <div className='flex items-center justify-center col-span-1'>
                        <svg className='' xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 -960 960 960" width="70px" fill="#adadad"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z" /></svg>
                    </div>
                    {hideReturning ? <div></div> : <BookingReturningDate />}
                </div>
            </div>
            {hideDropdowns ? <div></div> : (
                <div>
                    <div className='col-span-2 whitespace-nowrap mt-4'>
                        <div className='flex justify-end'>
                            <p className='py-[1.1rem]'>Type:</p>
                            <Dropdown header="Round Trip">
                                <DropdownItem>Round Trip</DropdownItem>
                                <DropdownItem>One-Way</DropdownItem>
                            </Dropdown>
                        </div>
                        <div className='flex justify-end'>
                            <p className='py-[1.1rem]'>Class:</p>
                            <Dropdown header="Economy">
                                <DropdownItem>Economy</DropdownItem>
                                <DropdownItem>Premium Economy</DropdownItem>
                                <DropdownItem>Business</DropdownItem>
                                <DropdownItem>First</DropdownItem>
                            </Dropdown>
                        </div>
                        <div className='flex justify-end'>
                            <p className='py-[1.1rem]'>Sort:</p>
                            <Dropdown header="Recommended">
                                <DropdownItem>Recommended</DropdownItem>
                                <DropdownItem>Price - Cheapest <br />(Lowest to Highest)</DropdownItem>
                                <DropdownItem>Price - Expensive <br />(Highest to Lowest)</DropdownItem>
                                <DropdownItem>Departure Time</DropdownItem>
                                <DropdownItem>Arrival Time</DropdownItem>
                            </Dropdown>
                        </div>
                        <div className='flex justify-end'>
                            <button className='bg-gray-900 border-2 border-black rounded-lg px-4 py-2 ml-2 mt-2 focus:outline-none flex whitespace-nowrap'>
                                Voucher
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff" className='ml-2'><path d="M856-390 570-104q-12 12-27 18t-30 6q-15 0-30-6t-27-18L103-457q-11-11-17-25.5T80-513v-287q0-33 23.5-56.5T160-880h287q16 0 31 6.5t26 17.5l352 353q12 12 17.5 27t5.5 30q0 15-5.5 29.5T856-390ZM260-640q25 0 42.5-17.5T320-700q0-25-17.5-42.5T260-760q-25 0-42.5 17.5T200-700q0 25 17.5 42.5T260-640Z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div >

    );
}

export default BookingBanner;
