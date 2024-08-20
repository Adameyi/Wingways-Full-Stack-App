import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/index.css';

function Navbar() {
    const [isScrolling, setIsScrolling] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.getElementById('navbar');
            if (navbar && (location.pathname === '/' || location.pathname === '/about')) {
                setIsScrolling(window.scrollY > navbar.clientHeight);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Call handleScroll on mount to set initial state
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location.pathname]);

    const isRootOrAboutPath = location.pathname === '/' || location.pathname === '/about';

    return (
        <nav
            id='navbar'
            className={`${isRootOrAboutPath ? (isScrolling ? 'top-0' : 'top-6') : 'relative'} fixed left-0 right-0 z-50 flex items-center justify-between h-16 px-4 bg-transparent transition-all duration-300 ease-in-out ${isScrolling ? 'bg-white/90 shadow-md' : ''}`}
        >
            <a href="/" className='navbar-brand text-navy-blue font-roboto font-bold text-[2rem] text-[#000F94] mt-3'>WingWays</a>
            <ul className='navbar-links flex gap-4 mt-2'>
                <li><a href="/flights" className='text-gray-800 hover:text-navy-blue'>Flights</a></li>
                <li><a href="/destinations" className='text-gray-800 hover:text-navy-blue'>Destinations</a></li>
                <li><a href="/hotels" className='text-gray-800 hover:text-navy-blue'>Hotels</a></li>
                <li><a href="/bookings" className='text-gray-800 hover:text-navy-blue'>Bookings</a></li>
                <li><a href="/about" className='text-gray-800 hover:text-navy-blue'>About</a></li>
                <li><a href="/contact" className='text-gray-800 hover:text-navy-blue'>Contact</a></li>
            </ul>
            <button className='flex bg-[#000F94] px-6 py-2 text-white rounded-full hover:bg-blue-500 gap-2'>
                Sign Up
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
                    <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z" />
                </svg>
            </button>
        </nav>
    );
}

export default Navbar;
