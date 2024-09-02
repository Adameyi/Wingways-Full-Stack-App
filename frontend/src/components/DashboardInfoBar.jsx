import '../styles/index.css';
import Sidebar from "../components/Sidebar"
import CircleChart from './CircleChart';

function DashboardInfoBar() {
    return (
        <div className='bg-white col-span-4 ml-5 border-t-2 p-4'>
            {/* Monthly Points Section */}
            <div className='bg-[#454545] p-4 shadow-lg text-white'>
                <div className='grid grid-cols-2 text-center mt-2'>
                    <div className='col-span-1'>
                        <h1 className='text-[1.5rem]'>Monthly Points</h1>
                        <p className='text-gray-400'>Current Progress in Nov</p>
                        <div className='grid grid-cols-2 text-center'>
                            <div className='col-span-1 mt-2'>
                                <div className='text-[#8B8ED1]'>
                                    Flights
                                </div>
                                <div className='text-[1.75rem]'>
                                    49%
                                </div>
                                <div className='text-gray-400'>
                                    9719.20
                                </div>
                            </div>
                            <div className='col-span-1 mt-2'>
                                <div className='text-[#8B8ED1]'>
                                    Flights
                                </div>
                                <div className='text-[1.75rem]'>
                                    49%
                                </div>
                                <div className='text-gray-400'>
                                    9719.20
                                </div>
                            </div>
                            <div className='col-span-1 mt-2'>
                                <div className='text-[#8B8ED1]'>
                                    Flights
                                </div>
                                <div className='text-[1.75rem]'>
                                    49%
                                </div>
                                <div className='text-gray-400'>
                                    9719.20
                                </div>
                            </div>
                            <div className='col-span-1 mt-2'>
                                <div className='text-[#8B8ED1]'>
                                    Flights
                                </div>
                                <div className='text-[1.75rem]'>
                                    49%
                                </div>
                                <div className='text-gray-400'>
                                    9719.20
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1'>
                        <CircleChart />
                    </div>
                </div>
            </div>
            {/*  */}

            {/* Recently Scheduled Flights */}
            <div className='border-2 p-3 mt-4'>
                <div className='flex justify-between mb-2'>
                    <h1>Upcoming Flights</h1>
                    <a href="" className='underline text-slate-400'>See All</a>
                </div>
                <hr />
                {/* Flight Info Chunk */}
                <div className='grid-cols-4 p-3 mb-2'>
                    <h1 className='roboto-bold'>Sydney to Adelaide</h1>
                    <h2 className='roboto-light'>Saturday 21, August 2024</h2>
                    <div className='grid grid-cols-3 mt-2'>
                        <div className='col-span-1 text-center'>
                            <span className='text-[0.75rem]'>SYDNEY</span>
                            <div className='text-[1.5rem] roboto-regular'>
                                06:05
                            </div>
                            Departure
                            <div className='mt-2 underline flex whitespace-nowrap'>
                                <img src="https://1000logos.net/wp-content/uploads/2017/05/Qantas-Logo.png" height={20} width={30} alt="Qantas_Icon" />QF4300
                            </div>
                        </div>
                        <div className='col-span-1 flex justify-center items-center'>
                            _____
                        </div>
                        <div className='col-span-1 text-center'>
                            <span className='text-[0.75rem]'>ADELAIDE</span>
                            <div className='text-[1.5rem] roboto-regular'>
                                08:35
                            </div>
                            Arrival
                            <div className='mt-2'>
                                <p>2h 30m</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                {/* End of Flight Info Chunk  */}

                {/* Flight Info Chunk */}
                <div className='grid-cols-4 p-3 mb-2'>
                    <h1 className='roboto-bold'>Sydney to Adelaide</h1>
                    <h2 className='roboto-light'>Saturday 21, August 2024</h2>
                    <div className='grid grid-cols-3 mt-2'>
                        <div className='col-span-1 text-center'>
                            <span className='text-[0.75rem]'>SYDNEY</span>
                            <div className='text-[1.5rem] roboto-regular'>
                                06:05
                            </div>
                            Departure
                            <div className='mt-2 underline flex whitespace-nowrap'>
                                <img src="https://1000logos.net/wp-content/uploads/2017/05/Qantas-Logo.png" height={20} width={30} alt="Qantas_Icon" />QF4300
                            </div>
                        </div>
                        <div className='col-span-1 flex justify-center items-center'>
                            _____
                        </div>
                        <div className='col-span-1 text-center'>
                            <span className='text-[0.75rem]'>ADELAIDE</span>
                            <div className='text-[1.5rem] roboto-regular'>
                                08:35
                            </div>
                            Arrival
                            <div className='mt-2'>
                                <p>2h 30m</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                {/*  */}

                {/* Flight Info Chunk */}
                <div className='grid-cols-4 p-3 mb-2'>
                    <h1 className='roboto-bold'>Sydney to Adelaide</h1>
                    <h2 className='roboto-light'>Saturday 21, August 2024</h2>
                    <div className='grid grid-cols-3 mt-2'>
                        <div className='col-span-1 text-center'>
                            <span className='text-[0.75rem]'>SYDNEY</span>
                            <div className='text-[1.5rem] roboto-regular'>
                                06:05
                            </div>
                            Departure
                            <div className='mt-2 underline flex whitespace-nowrap'>
                                <img src="https://1000logos.net/wp-content/uploads/2017/05/Qantas-Logo.png" height={20} width={30} alt="Qantas_Icon" />QF4300
                            </div>
                        </div>
                        <div className='col-span-1 flex justify-center items-center'>
                            _____
                        </div>
                        <div className='col-span-1 text-center'>
                            <span className='text-[0.75rem]'>ADELAIDE</span>
                            <div className='text-[1.5rem] roboto-regular'>
                                08:35
                            </div>
                            Arrival
                            <div className='mt-2'>
                                <p>2h 30m</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                {/*  */}
            </div>
        </div>
    )
}

export default DashboardInfoBar