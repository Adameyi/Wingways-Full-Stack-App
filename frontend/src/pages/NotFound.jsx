import '../styles/index.css';

function NotFound() {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <h2 className="roboto-regular text-[12vw] sm:text-[4vw]">Error</h2>
            <h1 className="roboto-bold text-[50vw] sm:text-[20vw] text-[#000F94] leading-[40vw] sm:leading-[20vw]">404</h1>
            <h2 className="roboto-regular text-[12vw] sm:text-[4vw]">Page Not Found</h2>
            <p className="text-[6vw] text-center sm:text-[2vw]">It appears this page is missing or currently unavailable!</p>
            <a href="/" className="bg-[#000F94] text-white py-5 shadow-xl px-20 roboto-medium mt-4 rounded-full text-[1.5rem]">Return Home</a>
        </div>
    )
}

export default NotFound;
