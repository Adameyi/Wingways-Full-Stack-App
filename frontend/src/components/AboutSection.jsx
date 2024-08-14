import React from 'react';
import AboutCard from './AboutCard';
import Polaroid from './Polaroid';
import aboutOffice from '../assets/images/aboutOffice.png';
import aboutPassengers from '../assets/images/aboutPassengers.png';
import aboutCafe from '../assets/images/aboutCafe.png';
import aboutAwards from '../assets/images/aboutAwards.png';

import '../styles/index.css';

function AboutSection() {
    return (
        <>
            <div className='mt-8 p-12'>
                <div className='relative bg-[url("../assets/images/aboutPlane.png")] bg-center bg-cover w-full h-[65vh] text-white'>
                    <div className="absolute inset-0 bg-black bg-opacity-25" />
                    <h1 className='absolute bottom-[-2.5rem] text-[6.25rem] roboto-medium'>
                        ABOUT US
                    </h1>
                    <div className='bg-gray-200 w-1/3 absolute right-[-2rem] bottom-[-6rem] h-2/5 p-4 text-black shadow-lg flex flex-col gap-4'>
                        <div className='flex items-center'>
                            <div className='bg-gray-600 h-6 w-2 mr-1'></div>
                            <h1 className='text-[1.5rem]'>Welcome to Wingways</h1>
                        </div>
                        <p className='roboto-light'>
                            Your premier choice for exceptional air travel experiences. Founded on the principles of innovation, safety, and satisfaction, WingWays has quickly become a trusted name in the aviation industry.
                        </p>
                    </div>
                </div>
                <div className='w-2/5 p-4 roboto-light flex flex-col gap-5'>
                    <p>At WingWays, we are dedicated to providing an unparalleled level of service, ensuring that every journey is comfortable and memorable.</p>
                    <p>Our state-of-the-art fleet, combined with our team of highly trained professionals, is committed to delivering excellence from takeoff to landing. Whether you’re flying for business or leisure, we strive to make every flight with us a smooth and enjoyable experience.</p>
                    <p>Thank you for choosing WingWays, where your satisfaction is our top priority.</p>
                </div>
            </div>
            <div className='grid grid-cols-2'>
                <div className='col-span-1'>
                    <AboutCard
                        title="Our Mission"
                        description="To connect people with the utmost convenience and comfort. We strive to make every journey a memorable one by providing top-notch services that cater to the needs of our passengers."
                        icon={<svg xmlns="http://www.w3.org/2000/svg" height="72px" viewBox="0 -960 960 960" width="72px" fill="#858585"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h168q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm80-80h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm200-190q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790ZM200-200v-560 560Z" /></svg>}
                    />
                    <AboutCard
                        title="Our Fleet"
                        description="Experience the perfect journey with our diverse fleet of aircraft. From spacious cabins for families to sleek and efficient options for solo travelers, we have the ideal aircraft to suit your needs."
                        icon={<svg xmlns="http://www.w3.org/2000/svg" height="72px" viewBox="0 -960 960 960" width="72px" fill="#858585"><path d="M298-120v-60h152v-148q-54-11-96-46.5T296-463q-74-8-125-60t-51-125v-44q0-25 17.5-42.5T180-752h104v-88h392v88h104q25 0 42.5 17.5T840-692v44q0 73-51 125t-125 60q-16 53-58 88.5T510-328v148h152v60H298Zm-14-406v-166H180v44q0 45 29.5 78.5T284-526Zm196 141q57 0 96.5-40t39.5-97v-258H344v258q0 57 39.5 97t96.5 40Zm196-141q45-10 74.5-43.5T780-648v-44H676v166Zm-196-57Z" /></svg>}
                    />
                    <AboutCard
                        title="Customer Service"
                        description="Our dedicated customer support team is here to assist you every step of the way. Enjoy peace of mind with our 24/7 support and personalized assistance."
                        icon={<svg xmlns="http://www.w3.org/2000/svg" height="72px" viewBox="0 -960 960 960" width="72px" fill="#858585"><path d="M684-381q-39.48 0-66.74-27.26Q590-435.52 590-475q0-39.48 27.26-66.74Q644.52-569 684-569q39.48 0 66.74 27.26Q778-514.48 778-475q0 39.48-27.26 66.74Q723.48-381 684-381ZM488-160v-51q0-26 11-44.5t31-28.5q37-19 75-28t79-9q41 0 79 8.5t75 28.5q20 9 31 28t11 45v51H488Zm-88-321q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42Zm0-150ZM80-160v-94q0-34 17-62.5t50.67-43.5Q215-390 276.5-405q61.5-15 123.25-15 32.25 0 57.25 3t54 9l-25.5 25.5L460-357q-13-2-28-2.5t-32-.5q-56.63 0-110.81 11.5Q235-337 172-306q-14 7-23 22t-9 30v34h288v60H80Zm348-60Zm-28-321q39 0 64.5-25.5T490-631q0-39-25.5-64.5T400-721q-39 0-64.5 25.5T310-631q0 39 25.5 64.5T400-541Z" /></svg>}
                    />
                </div>
                <div className='col-span-1 ml-12 mt-[-12rem] p-4'>
                    <div className='flex items-center'>
                        <Polaroid img={aboutOffice} description={`Company Founded in 1949`} rotate={15} />
                        <Polaroid img={aboutPassengers} description={`First Inagural Flight booking`} rotate={-15} z={10} />
                    </div>
                    <div className='flex items-center'>
                        <Polaroid img={aboutCafe} description={`Averaged a 4.4 Star Google Rating in 2024`} rotate={5} />
                        <Polaroid img={aboutAwards} description={`Awarded best flight booking page of 2024`} rotate={-25} />
                    </div>
                </div>
            </div>
            <h1 className='text-center text-[6.25rem] text-gray-400 roboto-medium'>
                OUR STAFF
            </h1>
        </>
    );
}

export default AboutSection;
