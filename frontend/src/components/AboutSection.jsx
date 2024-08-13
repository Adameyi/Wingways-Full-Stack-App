import React from 'react'

function AboutSection() {
    return (
        <div className='mt-8 p-12'>
            <div className='relative bg-[url("../assets/images/aboutPlane.png")] bg-center bg-cover w-full h-[65vh] text-white'>
                <div className="absolute inset-0 bg-black bg-opacity-25" />
                <h1 className='absolute bottom-[-2.5rem] text-[6.25rem] roboto-medium'>
                    ABOUT US
                </h1>
                <div className='bg-gray-200 w-1/3 absolute right-[-2rem] bottom-[-6rem] h-2/5 p-4 text-black shadow-lg flex flex-col gap-4'>
                    <div className='flex items-center'>
                        <div className='bg-gray-600 h-6 w-2 mr-1'>

                        </div>
                        <h1 className='text-[1.5rem]'>Welcome to Wingways</h1>
                    </div>
                    <p className='roboto-light'>Your premier choice for exceptional air travel experiences.Founded on the principles of innovation, safety, and satisfaction, WingWays has quickly become a trusted name in aviation industry</p>
                </div>
            </div>
            <div className='w-2/5 p-4 roboto-light flex flex-col gap-5'>
                <p>
                    At WingWays, we are dedicated to providing an unparalleled level of service, ensuring that every journey is comfortable and memorable. </p>
                <p>Our state-of-the-art fleet, combined with our team of highly trained professionals, is committed to delivering excellence from takeoff to landing. Whether you’re flying for business or leisure, we strive to make every flight with us a smooth and enjoyable experience. </p>
                <p>Thank you for choosing WingWays, where your satisfaction is our top priority.


                </p>
            </div>
        </div>
    )
}

export default AboutSection