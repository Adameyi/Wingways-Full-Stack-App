import '../styles/index.css';

function Deals() {
    return (
        <section className='h-screen bg-[#7CC8E1] text-white'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                <div className='flex flex-col items-center col-span-2 p-4'>
                    <h2 className='text-[1.5rem] roboto-medium tracking-[1rem] mt-16'>CONVENIENCE</h2>
                    <h1 className='text-[5rem] roboto-bold leading-[5rem]'>Discover the Best <br /> <span className='text-[#000F94]'>Deals</span> on Flights</h1>
                    <p className='text-[1.75rem] p-12'>
                        Book your flights with us and enjoy discounted prices,loyalty rewards, and flexible booking options.
                        We make travel planning super easy and affordable.
                    </p>
                    <div className='flex items-center space-x-4'>
                        <button className='flex bg-[#000F94] px-6 py-2 text-white rounded-full text-[2rem] hover:bg-blue-500'>
                            Sign Up
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" className="w-10 h-10 mt-1 ml-2" width="24px" fill="#FFFFFF"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z" /></svg>
                        </button>
                        <span className='underline text-[2rem]'>
                            Learn More
                        </span>
                    </div>
                </div>
                <div className='flex flex-col justify-center space-y-4 col-span-1 p-3'>
                    <h2 className='roboto-bold text-[2rem] mt-12'>Discounted Prices</h2>
                    <p className='text-[1rem]'> Enjoy exclusive discounts on
                        flights to your favorite destinations.</p>
                    <div className='bg-cover bg-[url("../assets/images/dealsDiscount.png")] h-[28rem] w-[80%] rounded-[3rem]' />
                </div>
                <div className='flex flex-col justify-center space-y-4 col-span-1 p-3'>
                    <div className='bg-cover bg-[url("../assets/images/dealsLoyalty.png")] h-[28rem] w-[80%] rounded-[3rem] mt-12' />
                    <h2 className='roboto-bold text-[2rem] mt-12'>Loyalty Rewards</h2>
                    <p className='text-[1rem]'>Enjoy exclusive discounts on
                        flights to your favorite destinations</p>
                </div>

            </div>
        </section>
    );
}

export default Deals;
