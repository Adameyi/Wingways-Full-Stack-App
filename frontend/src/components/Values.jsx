import '../styles/index.css';


function Values() {
    return (
        <section className='h-screen-min text-center mt-24 mb-10'>
            <h2 className='text-[1.5rem] roboto-medium tracking-[1rem]'>VALUES AND DISCOUNTS</h2>
            <h1 className='text-[4rem] roboto-bold'>Search Compare and Book Flights with Ease</h1>
            <p className='roboto-light'>Our step-by-step guide will show you how to easily search for flights, compare prices, and book your next trip.</p>

            <div className='mt-6 w-[60%] container mx-auto grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4'>
                {/* col */}
                <div className='flex flex-col justify-between items-center col-span-1 p-4 border-2 p-4 rounded-lg'>
                    <div className='bg-cover bg-[url("../assets/images/family.png")] w-full h-64 rounded-lg shadow-lg' />
                    <h2 className='roboto-bold text-[1.5rem] mt-6'>Exclusive Deals</h2>
                    <p className='text-[1rem] roboto-light'> Unlock special deals and offers that aren't available to the general public. Enter your details to see exclusive promotions and save even more on your travels.</p>
                    <button className='mt-3 flex bg-[#000F94] px-6 py-2 text-white rounded-full hover:bg-blue-500 gap-2'>
                        View Discounts
                    </button>
                </div>
                {/* col */}
                <div className='flex flex-col justify-between items-center col-span-1 p-4 border-2 p-4 rounded-lg'>
                    <div className='bg-cover bg-[url("../assets/images/passengerLuggage.png")] w-full h-64 rounded-lg shadow-lg' />
                    <h2 className='roboto-bold text-[1.5rem] mt-6'>Price Alerts</h2>
                    <p className='text-[1rem] roboto-light'> Set up price alerts to get notified when prices drop for your selected routes. Stay updated on the best deals and never miss an opportunity to save.</p>
                    <button className='mt-3 flex bg-[#000F94] px-6 py-2 text-white rounded-full hover:bg-blue-500 gap-2'>
                        View Discounts
                    </button>
                </div>
                {/* col */}
                <div className='flex flex-col justify-between items-center col-span-1 p-4 border-2 p-4 rounded-lg'>
                    <div>
                        <div className='bg-cover bg-[url("../assets/images/accommodation.png")] w-64 h-64 rounded-lg shadow-lg' />
                        <h2 className='roboto-bold text-[1.5rem] mt-6'>Discounted Prices</h2>
                    </div>
                    <p className='text-[1rem] roboto-light'> Enter your travel details and preferred dates to begin your search.</p>
                    <button className='mt-3 flex bg-[#000F94] px-6 py-2 text-white rounded-full hover:bg-blue-500 gap-2'>
                        View Discounts
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Values;

