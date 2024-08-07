import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import '../styles/index.css';

function Navbar() {
    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.getElementById('navbar')
            if (window.scrollY > 0) {
                navbar.classList.add('bg-white/90', 'shadow-md')
            } else {
                navbar.classList.remove('bg-white/90', 'shadow-md')
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const isFixed = ['/'].includes(location.pathname)

    return (
        <nav id='navbar' className={`${isFixed ? 'fixed' : 'relative'} top-0 left-0 right-0 z-50 flex items-center justify-between h-20 px-4 bg-transparent transition-all duration-300 ease-in-out`}>
            <a href="/" className='navbar-brand text-navy-blue font-roboto font-bold text-[2rem] text-[#000F94] mt-2'>WingWays</a>
            <ul className='navbar-links flex gap-4 mt-2'>
                <li>
                    <a href="/flights" className='text-gray-800 hover:text-navy-blue'>Flights</a>
                </li>
                <li>
                    <a href="/destinations" className='text-gray-800 hover:text-navy-blue'>Destinations</a>
                </li>
                <li>
                    <a href="/deals" className='text-gray-800 hover:text-navy-blue'>Deals</a>
                </li>
                <li>
                    <a href="/bookings" className='text-gray-800 hover:text-navy-blue'>Bookings</a>
                </li>
                <li>
                    <a href="/about" className='text-gray-800 hover:text-navy-blue'>About</a>
                </li>
                <li>
                    <a href="/contact" className='text-gray-800 hover:text-navy-blue'>Contact</a>
                </li>
            </ul>
            <button className='flex bg-[#000F94] px-6 py-2 text-white rounded-full hover:bg-blue-500 gap-2'>
                Sign Up
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z" /></svg>
            </button>

        </nav>
    );
}

export default Navbar;
