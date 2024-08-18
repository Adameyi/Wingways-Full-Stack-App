import '../styles/index.css';

function TopDestination() {
    return (
        <section className='h-[120vh] text-center mt-24 '>
            <h2 className='text-[1.5rem] roboto-medium tracking-[1rem]'>POPULAR DESTINATIONS</h2>
            <h1 className='text-[5rem] roboto-bold'>Travel Around the World</h1>
            <p>Explore breathtaking destinations with our curated travel packages. Discover a world of adventure waiting for you.</p>
            {/* Airplane Window Section */}
            <div className='relative container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mt-10 px-20'>

                {/* Left Button */}
                <div className='absolute top-48 shadow-xl h-12 w-12 rounded-full flex justify-center items-center z-10'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" /></svg>
                </div>

                {/* Right Button */}
                <div className='absolute top-48 right-0 shadow-xl h-12 w-12 rounded-full flex justify-center items-center z-10'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" /></svg>
                </div>
                <div className='flex flex-col justify-end bg-cover bg-[url("../assets/images/window_norway.png")] w-[20rem] h-[30rem] rounded-full shadow-lg'>
                    <div className='pt-5 w-full h-1/3 bg-white rounded-b-full'>
                        <div className='flex justify-center items-center ml-[40%] mt-[-3.25rem] bg-white rounded-full h-16 w-16'>
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 122.883 122.882" enable-background="new 0 0 122.883 122.882" xml:space="preserve"><g><path d="M122.883,61.441c0,16.966-6.877,32.326-17.996,43.445c-11.119,11.118-26.479,17.995-43.446,17.995 c-16.966,0-32.326-6.877-43.445-17.995C6.877,93.768,0,78.407,0,61.441c0-16.967,6.877-32.327,17.996-43.445 C29.115,6.877,44.475,0,61.441,0c16.967,0,32.327,6.877,43.446,17.996C116.006,29.115,122.883,44.475,122.883,61.441 L122.883,61.441z M80.717,71.377c1.783,1.735,4.637,1.695,6.373-0.088c1.734-1.784,1.695-4.637-0.09-6.372L64.48,43.078 l-3.142,3.23l3.146-3.244c-1.791-1.737-4.653-1.693-6.39,0.098c-0.05,0.052-0.099,0.104-0.146,0.158L35.866,64.917 c-1.784,1.735-1.823,4.588-0.088,6.372c1.735,1.783,4.588,1.823,6.372,0.088l19.202-18.779L80.717,71.377L80.717,71.377z M98.496,98.496c9.484-9.482,15.35-22.584,15.35-37.055c0-14.472-5.865-27.573-15.35-37.056 C89.014,14.903,75.912,9.038,61.441,9.038c-14.471,0-27.572,5.865-37.055,15.348C14.903,33.869,9.038,46.97,9.038,61.441 c0,14.471,5.865,27.572,15.349,37.055c9.482,9.483,22.584,15.349,37.055,15.349C75.912,113.845,89.014,107.979,98.496,98.496 L98.496,98.496z" /></g></svg>
                        </div>
                        <h1 className='text-[2rem] roboto-bold'>Norway</h1>
                        <h2 className='text-[1.5rem] roboto-light'>Olso</h2>
                        <p>
                            4.1 <span className='text-yellow-500'>★</span>
                        </p>
                    </div>
                </div>
                <div className='flex flex-col justify-end bg-cover bg-[url("../assets/images/window_tokyo.png")] w-[20rem] h-[30rem] rounded-full shadow-lg'>
                    <div className='pt-5 w-full h-1/3 bg-white rounded-b-full'>
                        <div className='flex justify-center items-center ml-[40%] mt-[-3.25rem] bg-white rounded-full h-16 w-16'>
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 122.883 122.882" enable-background="new 0 0 122.883 122.882" xml:space="preserve"><g><path d="M122.883,61.441c0,16.966-6.877,32.326-17.996,43.445c-11.119,11.118-26.479,17.995-43.446,17.995 c-16.966,0-32.326-6.877-43.445-17.995C6.877,93.768,0,78.407,0,61.441c0-16.967,6.877-32.327,17.996-43.445 C29.115,6.877,44.475,0,61.441,0c16.967,0,32.327,6.877,43.446,17.996C116.006,29.115,122.883,44.475,122.883,61.441 L122.883,61.441z M80.717,71.377c1.783,1.735,4.637,1.695,6.373-0.088c1.734-1.784,1.695-4.637-0.09-6.372L64.48,43.078 l-3.142,3.23l3.146-3.244c-1.791-1.737-4.653-1.693-6.39,0.098c-0.05,0.052-0.099,0.104-0.146,0.158L35.866,64.917 c-1.784,1.735-1.823,4.588-0.088,6.372c1.735,1.783,4.588,1.823,6.372,0.088l19.202-18.779L80.717,71.377L80.717,71.377z M98.496,98.496c9.484-9.482,15.35-22.584,15.35-37.055c0-14.472-5.865-27.573-15.35-37.056 C89.014,14.903,75.912,9.038,61.441,9.038c-14.471,0-27.572,5.865-37.055,15.348C14.903,33.869,9.038,46.97,9.038,61.441 c0,14.471,5.865,27.572,15.349,37.055c9.482,9.483,22.584,15.349,37.055,15.349C75.912,113.845,89.014,107.979,98.496,98.496 L98.496,98.496z" /></g></svg>
                        </div>
                        <h1 className='text-[2rem] roboto-bold'>Japan</h1>
                        <h2 className='text-[1.5rem] roboto-light'>Tokyo</h2>
                        <p>
                            4.1 <span className='text-yellow-500'>★</span>
                        </p>
                    </div>
                </div>
                <div className='flex flex-col justify-end bg-cover bg-[url("../assets/images/window_greece.png")] w-[20rem] h-[30rem] rounded-full shadow-lg'>
                    <div className='pt-5 w-full h-1/3 bg-white rounded-b-full'>
                        <div className='flex justify-center items-center ml-[40%] mt-[-3.25rem] bg-white rounded-full h-16 w-16'>
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 122.883 122.882" enable-background="new 0 0 122.883 122.882" xml:space="preserve"><g><path d="M122.883,61.441c0,16.966-6.877,32.326-17.996,43.445c-11.119,11.118-26.479,17.995-43.446,17.995 c-16.966,0-32.326-6.877-43.445-17.995C6.877,93.768,0,78.407,0,61.441c0-16.967,6.877-32.327,17.996-43.445 C29.115,6.877,44.475,0,61.441,0c16.967,0,32.327,6.877,43.446,17.996C116.006,29.115,122.883,44.475,122.883,61.441 L122.883,61.441z M80.717,71.377c1.783,1.735,4.637,1.695,6.373-0.088c1.734-1.784,1.695-4.637-0.09-6.372L64.48,43.078 l-3.142,3.23l3.146-3.244c-1.791-1.737-4.653-1.693-6.39,0.098c-0.05,0.052-0.099,0.104-0.146,0.158L35.866,64.917 c-1.784,1.735-1.823,4.588-0.088,6.372c1.735,1.783,4.588,1.823,6.372,0.088l19.202-18.779L80.717,71.377L80.717,71.377z M98.496,98.496c9.484-9.482,15.35-22.584,15.35-37.055c0-14.472-5.865-27.573-15.35-37.056 C89.014,14.903,75.912,9.038,61.441,9.038c-14.471,0-27.572,5.865-37.055,15.348C14.903,33.869,9.038,46.97,9.038,61.441 c0,14.471,5.865,27.572,15.349,37.055c9.482,9.483,22.584,15.349,37.055,15.349C75.912,113.845,89.014,107.979,98.496,98.496 L98.496,98.496z" /></g></svg>
                        </div>
                        <h1 className='text-[2rem] roboto-bold'>Greece</h1>
                        <h2 className='text-[1.5rem] roboto-light'>Athens</h2>
                        <p>
                            4.1 <span className='text-yellow-500'>★</span>
                        </p>
                    </div>
                </div>
                <div className='flex flex-col justify-end bg-cover bg-[url("../assets/images/window_italy.png")] w-[20rem] h-[30rem] rounded-full shadow-lg'>
                    <div className='pt-5 w-full h-1/3 bg-white rounded-b-full'>
                        <div className='flex justify-center items-center ml-[40%] mt-[-3.25rem] bg-white rounded-full h-16 w-16'>
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 122.883 122.882" enable-background="new 0 0 122.883 122.882" xml:space="preserve"><g><path d="M122.883,61.441c0,16.966-6.877,32.326-17.996,43.445c-11.119,11.118-26.479,17.995-43.446,17.995 c-16.966,0-32.326-6.877-43.445-17.995C6.877,93.768,0,78.407,0,61.441c0-16.967,6.877-32.327,17.996-43.445 C29.115,6.877,44.475,0,61.441,0c16.967,0,32.327,6.877,43.446,17.996C116.006,29.115,122.883,44.475,122.883,61.441 L122.883,61.441z M80.717,71.377c1.783,1.735,4.637,1.695,6.373-0.088c1.734-1.784,1.695-4.637-0.09-6.372L64.48,43.078 l-3.142,3.23l3.146-3.244c-1.791-1.737-4.653-1.693-6.39,0.098c-0.05,0.052-0.099,0.104-0.146,0.158L35.866,64.917 c-1.784,1.735-1.823,4.588-0.088,6.372c1.735,1.783,4.588,1.823,6.372,0.088l19.202-18.779L80.717,71.377L80.717,71.377z M98.496,98.496c9.484-9.482,15.35-22.584,15.35-37.055c0-14.472-5.865-27.573-15.35-37.056 C89.014,14.903,75.912,9.038,61.441,9.038c-14.471,0-27.572,5.865-37.055,15.348C14.903,33.869,9.038,46.97,9.038,61.441 c0,14.471,5.865,27.572,15.349,37.055c9.482,9.483,22.584,15.349,37.055,15.349C75.912,113.845,89.014,107.979,98.496,98.496 L98.496,98.496z" /></g></svg>
                        </div>
                        <h1 className='text-[2rem] roboto-bold'>Italy</h1>
                        <h2 className='text-[1.5rem] roboto-light'>Positano</h2>
                        <p>
                            4.1 <span className='text-yellow-500'>★</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-6'>
                <button className='flex bg-[#86bfdb] px-6 py-2 text-[1.5rem] text-white rounded-full hover:bg-blue-500'>
                    View Destinations
                </button>
            </div>
        </section>
    );
}

export default TopDestination;

