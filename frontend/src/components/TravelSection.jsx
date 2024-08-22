import React from 'react'
import SelectableTags from './SelectableTags'
import TravelThumbnails from './TravelThumbnails'
import OptionThumbnails from './OptionThumbnails'

const tagsContinent = ['Asia', 'Europe', 'Oceania', 'Africa', 'North America', 'South America', 'Other']
const tagsOptions = ['Tropical', 'Mountains', 'Wildlife', 'Countryside', 'City', 'Safari', 'Beach', 'Cruise', 'Other']


function TravelSection() {
    return (
        <div className='h-screen'>
            <h1 className='roboto-bold text-[2rem] p-4'>Popular Attractions</h1>
            <div className='grid grid-cols-4 px-4'>
                {/* Search Bar */}
                <div className='col-span-1'>
                    <div className="relative w-full max-w-sm">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="#5f6368"
                            className="absolute left-3 top-1/2 transform -translate-y-1/2"
                        >
                            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search Destinations..."
                            className="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
                <div className='col-span-3 px-4'>
                    <SelectableTags tags={tagsContinent} />
                </div>
                <div className='col-span-4'>
                    <TravelThumbnails />
                </div>
                <hr className='col-span-4 mb-4' />
                <div className='col-span-4'>
                    <h1 className='text-center'>Travel Options</h1>
                    <p className='text-center'>Discover your perfect getaway with our diverse selection of breathtaking travel experiences</p>
                </div>
                <div className='col-span-1'>
                    <div className="relative w-full max-w-sm">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="#5f6368"
                            className="absolute left-3 top-1/2 transform -translate-y-1/2"
                        >
                            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search Destinations..."
                            className="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                <div className='col-span-3 px-4'>
                    <SelectableTags tags={tagsOptions} />
                </div>
                <div className='col-span-4'>
                    <OptionThumbnails />
                </div>
                <div className='col-span-4'>
                    <TravelThumbnails />
                </div>
            </div>
        </div>
    )
}

export default TravelSection