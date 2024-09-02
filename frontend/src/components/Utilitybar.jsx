import '../styles/index.css';

function Utilbar() {
    return (
        <section className='bg-slate-300 h-8 w-full px-4 flex justify-between items-center'>
            <div className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#454545">
                    <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                </svg>
                <p className='ml-2'>Privacy Information: WingWays.com handles your personal information in accordance with our <a className='underline'>Privacy Policy</a></p>
            </div>
            <div className='flex items-center'>
                <p>Language - <u>English</u> ▾</p>
                <button>x</button>
            </div>
        </section>

    );
}

export default Utilbar;
