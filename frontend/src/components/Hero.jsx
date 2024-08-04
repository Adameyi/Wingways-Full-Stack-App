import '../styles/index.css';
import heroIstanbul from '../assets/images/hero_istanbul.png';
import heroPlane from '../assets/images/hero_plane.png';


function Hero() {
    return (
        <section className='h-screen bg-gradient-to-b from-[#fbfeff] to-blue-100 flex items-center justify-center'>
            <div className='container mx-auto flex'>
                <div className='w-[45%] flex flex-col justify-center p-6'>
                    <h1 className='leading-[5rem] text-[4.5rem] roboto-bold'>
                        Discover Your Next <span className='text-[#000F94]'>Adventure</span>
                    </h1>
                    <h2 className='mt-8 text-[1.5rem] roboto-light'>
                        Experience Hassle-free flight bookings with our price guarantees, 24/7 customer service, and flexible options.
                    </h2>
                    <button className='roboto-regular text-[1.25rem] mt-8 h-12 w-52 flex bg-[#000F94] px-6 py-2 text-white rounded-full hover:bg-blue-500'>
                        <span className='mr-3'>Explore Deals</span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg>
                    </button>
                </div>
                <div className='w-[55%] relative'>
                    <img src={heroIstanbul} alt="hero_istanbul" className='absolute z-10 mt-[8rem]' />
                    <div className='absolute right-10 rounded-[35px] bg-blue-900 w-[30rem] h-[16rem] mt-[-1.5rem] '>
                        <img src={heroPlane} alt="hero_airplane" className=' w-full h-full object-cover' />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;

