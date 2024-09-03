import React from 'react'

// Static Images
import footerBag1 from '../assets/images/footerBag1.png'
import footerBag2 from '../assets/images/footerBag2.png'
import footerBag3 from '../assets/images/footerBag3.png'
import footerBag4 from '../assets/images/footerBag4.png'
import footerBag5 from '../assets/images/footerBag5.png'
import footerBag6 from '../assets/images/footerBag6.png'
import footerBag7 from '../assets/images/footerBag7.png'
import footerBag8 from '../assets/images/footerBag8.png'


function Footer() {
    return (
        <div className='bg-[#000F94]'>
            <div className='p-6'>
                <div className='relative bg-[#000A65] rounded-2xl flex justify-center p-2'>
                    <div className='absolute left-0 top-0 h-10 w-[25rem] rounded-tl-[1.25rem] rounded-br-[1.25rem] bg-[#0012AF]' />
                    <div className='absolute right-0 bottom-0 h-10 w-[10rem] rounded-tl-[1.25rem] rounded-br-[1.25rem] bg-[#0012AF]' />
                    <div className='absolute right-0 top-0 h-10 w-[15rem] rounded-bl-[1.25rem] rounded-tr-[1.25rem] bg-[#0012AF]' />
                    <div className='relative border-2 border-black w-full text-white grid lg:grid-cols-5 roboto-regular p-4 px-20 pt-12'>
                        {/* Column 1 */}
                        <div className='col-span-1'>
                            <h2 class="text-xl font-semibold mb-4">Navigation</h2>
                            <ul class="space-y-2">
                                <li><a href="#" class="hover:text-gray-400">Flights</a></li>
                                <li><a href="#" class="hover:text-gray-400">Destinations</a></li>
                                <li><a href="#" class="hover:text-gray-400">Deals</a></li>
                                <li><a href="#" class="hover:text-gray-400">Bookings</a></li>
                                <li><a href="#" class="hover:text-gray-400">Contact</a></li>
                            </ul>
                        </div>
                        {/* End Col 1 */}

                        {/* Column 2 */}
                        <div className='col-span-1'>
                            <h2 class="text-xl font-semibold mb-4">Navigation</h2>
                            <ul class="space-y-2">
                                <li><a href="#" class="hover:text-gray-400">Flights</a></li>
                                <li><a href="#" class="hover:text-gray-400">Destinations</a></li>
                                <li><a href="#" class="hover:text-gray-400">Deals</a></li>
                                <li><a href="#" class="hover:text-gray-400">Bookings</a></li>
                                <li><a href="#" class="hover:text-gray-400">About</a></li>
                                <li><a href="#" class="hover:text-gray-400">Contact</a></li>
                            </ul>
                        </div>
                        {/* End Col 2 */}

                        {/* Column 3 */}
                        <div className='col-span-1'>
                            <h2 class="text-xl font-semibold mb-4">Navigation</h2>
                            <ul class="space-y-2">
                                <li><a href="#" class="hover:text-gray-400">Flights</a></li>
                                <li><a href="#" class="hover:text-gray-400">Destinations</a></li>
                                <li><a href="#" class="hover:text-gray-400">Deals</a></li>
                                <li><a href="#" class="hover:text-gray-400">Bookings</a></li>
                                <li><a href="#" class="hover:text-gray-400">About</a></li>
                                <li><a href="#" class="hover:text-gray-400">Contact</a></li>
                            </ul>
                        </div>
                        {/* End Col 3 */}

                        {/* Vertical Divider */}
                        <div className='col-span-1' />
                        <div className="right-96 mt-[-1.5rem] flex flex-col justify-center items-center absolute gap-4">
                            <div className="h-8 w-8 rounded-full bg-[#000F94]" />
                            <div className="h-4 w-4 rounded-full bg-[#000F94]" />
                            <div className="h-4 w-4 rounded-full bg-[#000F94]" />
                            <div className="h-4 w-4 rounded-full bg-[#000F94]" />
                            <div className="h-4 w-4 rounded-full bg-[#000F94]" />
                            <div className="h-4 w-4 rounded-full bg-[#000F94]" />
                            <div className="h-4 w-4 rounded-full bg-[#000F94]" />
                            <div className="h-4 w-4 rounded-full bg-[#000F94]" />
                            <div className="h-4 w-4 rounded-full bg-[#000F94]" />
                            <div className="h-8 w-8 rounded-full bg-[#000F94]" />
                        </div>

                        {/* End V-Divider */}

                        {/* Column 4 */}
                        <div className='col-span-1'>
                            <div className='grid grid-cols-2 gap-60'>
                                <div className='col-span-1'>
                                    <h2 class="text-xl font-semibold mb-4">Navigation</h2>
                                    <ul class="space-y-2">
                                        <li><a href="#" class="hover:text-gray-400">Flights</a></li>
                                        <li><a href="#" class="hover:text-gray-400">Destinations</a></li>
                                        <li><a href="#" class="hover:text-gray-400">Deals</a></li>
                                        <li><a href="#" class="hover:text-gray-400">Bookings</a></li>
                                        <li><a href="#" class="hover:text-gray-400">About</a></li>
                                        <li><a href="#" class="hover:text-gray-400">Contact</a></li>
                                    </ul>
                                </div>
                                {/* Social Media */}
                                <div className='col-span-1 flex flex-col justify-center items-center gap-3 mt-[-2rem]'>
                                    <div className='bg-cover bg-[url("../assets/images/facebookWhite.png")]  h-9 w-9' />
                                    <div className='bg-cover bg-[url("../assets/images/instagramWhite.png")] h-9 w-9' />
                                    <div className='bg-no-repeat bg-[url("../assets/images/youtubeWhite.png")] h-8 w-11' />
                                    <div className='bg-cover bg-[url("../assets/images/twitterWhite.png")] h-9 w-11' />
                                </div>
                            </div>
                        </div>
                        {/* End Col 4 */}
                    </div>

                </div>
                <h1 className='mt-[-5rem] roboto-bold text-[17rem] text-[#0012AF] text-[17.5vw] whitespace-nowrap text-center' >WINGWAYS</h1>
            </div>

            {/* Footer BG Icons */}
            <div className='mt-[-12rem]'>
                <div className='flex flex-row justify-end items-end gap-1'>
                    <div className='h-48 w-52' >
                        <img src={footerBag1} alt="footer_background_bag1" className=' w-full h-full object-cover' />
                    </div>
                    <div className='h-80 w-48' >
                        <img src={footerBag2} alt="footer_background_bag2" className=' w-full h-full object-cover' />
                    </div>
                    <div className='h-30 w-30' >
                        <img src={footerBag3} alt="footer_background_bag3" className=' w-full h-full object-cover' />
                    </div>
                    <div className='h-30 w-30' >
                        <img src={footerBag4} alt="footer_background_bag4" className=' w-full h-full object-cover' />
                    </div>
                    <div className='h-30 w-30' >
                        <img src={footerBag5} alt="footer_background_bag5" className=' w-full h-full object-cover' />
                    </div>
                    <div className='h-72 w-30' >
                        <img src={footerBag6} alt="footer_background_bag6" className=' w-full h-full object-cover' />
                    </div>
                    <div className='h-48 w-60' >
                        <img src={footerBag7} alt="footer_background_bag7" className=' w-full h-full object-cover' />
                    </div>
                    <div className='h-72 w-48' >
                        <img src={footerBag8} alt="footer_background_bag8" className=' w-full h-full object-cover' />
                    </div>
                </div>
                {/* Footer BG End */}

                <div className='bg-[#0B1250] w-full text-white p-4 flex justify-between roboto-regular'>
                    <p>&copy; 2024 Wingways. All rights reserved.</p>

                    <p><u>Privacy Noitce</u> | <u>Terms of Service</u> | <u>Accessibility Statemetnt </u></p>
                </div>
            </div>
        </div>
    )
}

export default Footer