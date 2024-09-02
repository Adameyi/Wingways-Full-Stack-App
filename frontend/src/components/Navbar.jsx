import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/index.css';

function Navbar() {
    const [isScrolling, setIsScrolling] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.getElementById('navbar');
            if (navbar && (location.pathname === '/' || location.pathname === '/about')) {
                setIsScrolling(window.scrollY > navbar.clientHeight);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Call handleScroll on mount to set initial state
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location.pathname]);

    const isRoot = location.pathname === '/';
    const isBackgroundImg = location.pathname === '/destinations' || location.pathname === '/hotels';
    const logoDark = location.pathname === '/hotels';

    return (
        <nav
            id='navbar'
            className={`${isRoot ? (isScrolling ? 'top-0' : 'top-6') : 'relative'} fixed left-0 right-0 z-50 flex items-center justify-between h-16 px-4 bg-transparent transition-all duration-300 ease-in-out ${isScrolling ? 'bg-white/90 shadow-md' : ''}`}
        >
            <a href="/" className={`navbar-brand ${isBackgroundImg && !logoDark ? 'text-white' : 'text-navy-blue'} font-roboto font-bold text-[2rem] text-[#000F94] mt-3`}>
                WingWays
            </a>

            {/* Burger Menu Button + Sign Up*/}
            <div className='absolute right-10 pt-3 flex flex-row gap-2'>
                <button className='block sm:hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0000F5"><path d="M480-480q-60 0-102-42t-42-102q0-60 42-102t102-42q60 0 102 42t42 102q0 60-42 102t-102 42ZM192-192v-96q0-23 12.5-43.5T239-366q55-32 116.5-49T480-432q63 0 124.5 17T721-366q22 13 34.5 34t12.5 44v96H192Z" /></svg>
                </button>
                <button
                    className="block sm:hidden text-navy-blue"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" height="42px" viewBox="0 -960 960 960" width="42px" fill="#5f6368">
                        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                    </svg>
                </button>
            </div>

            {/* Navbar Links */}
            <div className="flex-grow flex justify-center">
                <ul
                    className={`${isBackgroundImg ? 'text-black sm:text-white' : 'text-gray-800'
                        } navbar-links flex flex-col sm:flex-row sm:gap-4 mt-2 sm:mt-0 absolute left-0 right-0 sm:static ${menuOpen ? 'block' : 'hidden'
                        } sm:flex sm:justify-center sm:items-center bg-white sm:bg-transparent p-4 sm:p-0 z-40 max-h-[calc(100vh-4rem)] sm:max-h-none overflow-y-auto sm:overflow-visible`}
                >
                    <li><a href="/flights" className='hover:text-navy-blue'>Flights</a></li>
                    <li><a href="/destinations" className='hover:text-navy-blue'>Destinations</a></li>
                    <li><a href="/hotels" className='hover:text-navy-blue'>Hotels</a></li>
                    <li><a href="/bookings" className='hover:text-navy-blue'>Bookings</a></li>
                    <li><a href="/about" className='hover:text-navy-blue'>About</a></li>
                    <li><a href="/contact" className='hover:text-navy-blue'>Contact</a></li>

                    {/* Profile Button Inside Burger Menu */}
                    <li className="sm:hidden">
                        <button className='flex bg-[#000F94] px-6 py-2 mt-2 text-white rounded-full hover:bg-blue-500 gap-2'>
                            Sign Up
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
                                <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z" />
                            </svg>
                        </button>
                    </li>
                </ul>
            </div>

            {/* Profile Button for Desktop */}
            <button className='hidden sm:flex bg-[#000F94] px-6 py-2 text-white rounded-full hover:bg-blue-500 gap-2'>
                Sign Up
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
                    <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z" />
                </svg>
            </button>
        </nav>
    );
}

export default Navbar;