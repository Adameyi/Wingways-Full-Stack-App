import { useState, useEffect } from 'react'

function mobileViewport() {
    //Set Values to store whether viewport is or isn't Mobile Viewport.
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

    useEffect(() => {
        //Hnadler for window resize events.
        const handleResize = () => {
            //Update state based on new window width
            setIsMobile(window.innerWidth <= 768)
        }

        //Add event listener to handle/update window resize.
        window.addEventListener('resize', handleResize)

        //Clean up the event listener on component unmount.
        return () => window.removeEventListener('resize', handleResize)
    }, []) // Empty Dependecy Array: Ensure this effect runs only once on mount.

    //Return viewport true/false on mobile screen size.
    return isMobile
}

export default mobileViewport