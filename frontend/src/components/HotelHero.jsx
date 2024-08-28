import React from 'react'
import Navbar from '../components/Navbar'

//Images
import HotelHeroBackground from '../assets/images/hotel_hero.png'
import Hotel_LeftCol_Queensland from '../assets/images/Hotel_LeftCol_Queensland.png'
import Hotel_LeftCol_Honolulu from '../assets/images/Hotel_LeftCol_Honolulu.png'
import Hotel_Perth from '../assets/images/Hotel_Perth.png'

function HotelHero() {

    return (
        <div className='relative overflow-hidden'>
            <div
                className='absolute w-full sm:w-[70vw] h-[50vh] sm:h-screen right-0 bg-cover rounded-bl-3xl'
                style={{
                    backgroundImage: `url(${HotelHeroBackground})`,
                }}
            >
                {/* Social Media Side Selection*/}
                <div className='hidden sm:block'>
                    <div className='absolute right-10 flex items-center h-[65vh]'>
                        <div className='rounded-full h-40 w-14 bg-white bg-opacity-20 flex flex-col justify-center items-center gap-2'>
                            <div className='bg-white h-10 w-10 rounded-full bg-opacity-20 flex justify-center items-center'>
                                <div className='bg-cover bg-[url("../assets/images/facebookWhite.png")]  h-6 w-6' />
                            </div>
                            <div className='bg-white h-10 w-10 rounded-full bg-opacity-20 flex justify-center items-center'>
                                <div className='bg-cover bg-[url("../assets/images/instagramWhite.png")]  h-6 w-6' />
                            </div>
                            <div className='bg-white h-10 w-10 rounded-full bg-opacity-20 flex justify-center items-center'>
                                <div className='bg-cover bg-[url("../assets/images/twitterWhite.png")]  h-5 w-6' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='absolute lg:left-10 bottom-24 grid grid-cols-3'>

                    {/* Hero White Thumbnail */}
                    <div className='hidden md:block'>
                        <div className='col-span-1 bg-white w-full p-4 h-48 rounded-xl grid grid-cols-2'>
                            <div className='col-span-1 roboto-regular px-4'>
                                Perth, WT Australia
                                <div className='flex flex-wrap w-2/3 gap-1'>
                                    <div className='h-9 w-9 rounded-full bg-gray-300 flex justify-center items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z" /></svg>
                                    </div>
                                    <div className='h-9 w-9 rounded-full bg-gray-300 flex justify-center items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M80-200v-240q0-27 11-49t29-39v-112q0-50 35-85t85-35h160q23 0 43 8.5t37 23.5q17-15 37-23.5t43-8.5h160q50 0 85 35t35 85v112q18 17 29 39t11 49v240h-80v-80H160v80H80Zm440-360h240v-80q0-17-11.5-28.5T720-680H560q-17 0-28.5 11.5T520-640v80Zm-320 0h240v-80q0-17-11.5-28.5T400-680H240q-17 0-28.5 11.5T200-640v80Z" /></svg>
                                    </div>
                                    <div className='h-9 w-9 rounded-full bg-gray-300 flex justify-center items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M280-600q-33 0-56.5-23.5T200-680q0-33 23.5-56.5T280-760q33 0 56.5 23.5T360-680q0 33-23.5 56.5T280-600ZM200-80q-17 0-28.5-11.5T160-120q-33 0-56.5-23.5T80-200v-240h120v-30q0-38 26-64t64-26q20 0 37 8t31 22l56 62q8 8 15.5 15t16.5 13h274v-326q0-14-10-24t-24-10q-6 0-11.5 2.5T664-790l-50 50q5 17 2 33.5T604-676L494-788q14-9 30-11.5t32 3.5l50-50q16-16 36.5-25t43.5-9q48 0 81 33t33 81v326h80v240q0 33-23.5 56.5T800-120q0 17-11.5 28.5T760-80H200Z" /></svg>
                                    </div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#5f6368"><path d="m480-320 160-160-160-160-56 56 64 64H320v80h168l-64 64 56 56Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" /></svg>
                            </div>
                            <div
                                style={{
                                    backgroundImage: `url(${Hotel_Perth})`,
                                }}
                                className='col-span-1 rounded-2xl h-40 bg-cover'>

                            </div>
                        </div>
                    </div>
                    {/* Hero Image Text + Hotel Dropdown Selection */}
                    <div className='col-span-2 mx-4 flex flex-col justify-between'>
                        <div className='flex flex-row'>
                            <div className='hidden md:block mt-2 h-16 w-3 mr-4 bg-white' />
                            <h1 className='hidden md:block roboto-regular text-white text-[1.6rem]'>Discover your ultimate escape at
                                Australia's premier luxury resort,
                                where paradise meets perfection.</h1>
                            <h1 className='lg:hidden roboto-regular text-white text-2xl mb-2'>Book your Dream Getaway Today</h1>
                        </div>
                        <div className='flex flex-row'>
                            <button className='bg-white rounded-full p-3 px-4 gap-2 flex flex-row'>
                                <span className='hidden md:block'>Select</span> Location
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="m480-340 180-180-57-56-123 123-123-123-57 56 180 180Zm0 260q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" /></svg>
                            </button>
                            <button className='bg-white rounded-full p-3 px-4 gap-2 flex flex-row'>
                                <span className='hidden md:block'>Select</span> Duration
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="m480-340 180-180-57-56-123 123-123-123-57 56 180 180Zm0 260q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" /></svg>
                            </button>
                            <button className='lg:ml-4 bg-black text-white rounded-full p-3 px-5 gap-2 flex flex-row'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg>
                                <span className='hidden md:block'>Select</span> Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar />
            <div className='grid grid-cols-1 mt-[44vh] sm:mt-0 sm:grid-cols-3 roboto-light'>
                {/* Main Left Column */}
                <div className='col-span-1 container px-3 sm:px-6'>
                    <div className='hidden md:block'>
                        <h1 className='roboto-medium text-[2.5rem] leading-[2.25rem] mt-5'>Book Your Dream Getaway Today</h1>

                        <div className='flex flex-row mt-2 mb-2 items-center'>
                            <h2 className='text-gray-400'>Welcome to your Cozy Retreat!</h2>
                            <div className='h-1 ml-2 w-40 bg-gray-300' />
                        </div>
                    </div>
                    <div className='flex flex-row gap-4'>
                        <div className='bg-gray-200 p-4 h-28 w-28 text-gray-500 rounded-2xl flex flex-col justify-center items-center text-center'>
                            <h2 className='roboto-bold text-[2.5rem] leading-[2.5rem]'>90K</h2>
                            <p className='leading-[1rem]'>Rooms Booked</p>
                        </div>
                        <div className='bg-gray-200 p-4 h-28 w-28 text-gray-500 rounded-2xl flex flex-col justify-center items-center text-center'>
                            <h2 className='roboto-bold text-[2.5rem] leading-[2.5rem]'>25K</h2>
                            <p className='leading-[1rem]'>Registered Accounts</p>
                        </div>
                        <div className='bg-gray-200 p-4 h-28 w-28 text-gray-500 rounded-2xl flex flex-col justify-center items-center text-center'>
                            <h2 className='roboto-bold text-[2.5rem] leading-[2.5rem]'>94%</h2>
                            <p className='leading-[1rem]'>Customer Satisfaction</p>
                        </div>
                    </div>
                    <div
                        style={{
                            backgroundImage: `url(${Hotel_LeftCol_Queensland})`,
                        }}
                        className='mt-4 h-44 w-96 rounded-3xl flex justify-end shadow-lg'>
                        <div className='bg-white shadow-lg w-56 h-8 rounded-2xl flex flex-row m-4 items-center justify-center gap-2 roboto-regular'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z" /></svg>
                            Queensland, Australia
                        </div>
                    </div>
                    <div
                        style={{
                            backgroundImage: `url(${Hotel_LeftCol_Honolulu})`,
                        }}
                        className='mt-4 h-44 w-96 rounded-3xl flex justify-end shadow-lg'>
                        <div className='bg-white shadow-lg w-56 h-8 rounded-2xl flex flex-row m-4 items-center justify-center gap-2 roboto-regular'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z" /></svg>
                            Honolulu, United States
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotelHero
