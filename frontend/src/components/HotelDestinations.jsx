import React from 'react'
import SelectableTags from '../components/SelectableTags'
import ShortSlideshow from './ShortSlideshow'

//Images
import PopularDest_Singapore from '../assets/images/popularDest_Singapore.png'
import PopularDest_Tokyo from '../assets/images/popularDest_Tokyo.png'
import PopularDest_France from '../assets/images/popularDest_France.png'
import PopularDest_Turkiye from '../assets/images/popularDest_Turkiye.png'


const tagsContinent = ['Popular', 'Europe', 'Oceania', 'Africa', 'Asia', 'Other']

function HotelDestinations() {

    return (
        <div className='grid grid-cols-1 sm:grid-cols-4 pt-6 roboto-regular'>
            {/* Left Col */}
            <div className='col-span-1 bg-gray-600 h-auto p-4 text-white sm:rounded-br-2xl sm:rounded-tr-2xl whitespace-nowrap'>
                <h1 className='roboto-medium text-[2rem] mt-2 mb-2'>Find the Perfect Spot</h1>
                {/* Tags */}
                <SelectableTags tags={tagsContinent} />
                <div className='relative flex flex-row items-center mb-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='mt-4 translate-x-8' height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg>
                    <input
                        type="text"
                        className='mt-4 rounded-full bg-transparent border-2 w-72 pl-10 py-2 mr-2'
                        placeholder='Search Destinations..' />
                    <svg xmlns="http://www.w3.org/2000/svg" className='mt-4' height="36px" viewBox="0 -960 960 960" width="36px" fill="#FFFFFF"><path d="M440-120v-240h80v80h320v80H520v80h-80Zm-320-80v-80h240v80H120Zm160-160v-80H120v-80h160v-80h80v240h-80Zm160-80v-80h400v80H440Zm160-160v-240h80v80h160v80H680v80h-80Zm-480-80v-80h400v80H120Z" /></svg>
                </div>
                <hr className='hidden sm:block' />
                <div className='whitespace-normal p-4 hidden sm:block flex flex-col justify-between'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF"><path d="M522-80v-82q34-5 66.5-18t61.5-34l56 58q-42 32-88 51.5T522-80Zm-80 0Q304-98 213-199.5T122-438q0-75 28.5-140.5t77-114q48.5-48.5 114-77T482-798h6l-62-62 56-58 160 160-160 160-56-56 64-64h-8q-117 0-198.5 81.5T202-438q0 104 68 182.5T442-162v82Zm322-134-58-56q21-29 34-61.5t18-66.5h82q-5 50-24.5 96T764-214Zm76-264h-82q-5-34-18-66.5T706-606l58-56q32 39 51 86t25 98Z" /></svg>
                        <h1 className='roboto-medium text-[1.5rem] mt-4 mb-2'>RSVP to Linkups</h1>
                        <p>Don’t miss out on the excitement! RSVP now to secure your place at our upcoming linkups and special events.<br /><br />
                            Whether you're looking to mingle with fellow guests, enjoy exclusive activities, or simply soak in the vibrant atmosphere, our events offer the perfect opportunity.</p>
                    </div>
                    <div className='mt-4 flex items-center gap-2'>
                        <button type="button" className='w-64 bg-gray-700 rounded-full py-2 px-4 shadow-lg'>Make a Reservation</button>
                        <button type='button' className='rounded-full bg-gray-700 p-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Right Col - Mini Slideshow*/}
            <div className='col-span-1 sm:col-span-3'>
                <ShortSlideshow />
                {/* Popular Destinations Section*/}
                <div className='bg-gray-300 h-screen-min p-4 mt-4 grid grid-cols-2 sm:grid-cols-3'>
                    <h1 className='text-5xl text-gray-500 roboto-medium col-span-3 mt-2 mb-2'>Popular Hotel Destinations</h1>
                    <div className='col-span-1 p-2'>
                        <div
                            style={{
                                backgroundImage: `url(${PopularDest_France})`,
                            }}
                            className='bg-cover rounded-2xl bg-gray-700 h-96  flex flex-row justify-end p-6'>
                            <div className='rounded-2xl bg-white px-4 py-3  h-12 flex gap-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z" /></svg>
                                Paris
                            </div>
                        </div>
                    </div>
                    <div className='col-span-2 p-2'>
                        <div
                            style={{
                                backgroundImage: `url(${PopularDest_Tokyo})`,
                            }}
                            className='bg-cover rounded-2xl bg-gray-700 h-56 flex flex-row justify-end p-6'>
                            <div className='rounded-2xl bg-white px-4 py-3 h-12 flex gap-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z" /></svg>
                                Kyoto
                            </div>
                        </div>
                        <div className=' grid grid-cols-2 gap-4'>
                            <div

                                style={{
                                    backgroundImage: `url(${PopularDest_Singapore})`,
                                }}
                                className='col-span-2 sm:col-span-1 bg-cover rounded-2xl bg-gray-700 h-36 mt-4 flex flex-row justify-end p-6'>
                                <div className='rounded-2xl bg-white px-4 py-3 h-12 flex gap-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z" /></svg>
                                    Jurong
                                </div>
                            </div>
                            <div className='hidden sm:block'>
                                <div
                                    style={{
                                        backgroundImage: `url(${PopularDest_Turkiye})`,
                                    }}
                                    className='bg-cover rounded-2xl bg-gray-700 h-36 mt-4 flex flex-row justify-end p-6'>
                                    <div className='rounded-2xl bg-white px-4 py-3 h-12 flex gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z" /></svg>
                                        Istanbul
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotelDestinations