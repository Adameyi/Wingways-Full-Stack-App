import '../styles/index.css';
import Sidebar from "./Sidebar"
import DashboardInfoBar from './DashboardInfoBar';
import MonthlyLineChart from './MonthlyLineChart';
import Dropdown from './Dropdown';
import DropdownItem from './DropdownItem';

function MainOverlay() {
    return (
        <div className='h-screen-min bg-gray-300 flex'>
            <div className='grid grid-cols-12 w-full'>
                <Sidebar />
                <div className='col-span-6 mt-4 ml-4'>
                    <div className=' flex items-center'>
                        <div className='w-1/2 bg-[#8B8ED1] h-1/4 p-4 flex flex-col justify-between shadow-lg'>
                            <div className='flex justify-between'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 -960 960 960" width="60px" fill="#5f6368"><path d="M560-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM280-320q-33 0-56.5-23.5T200-400v-320q0-33 23.5-56.5T280-800h560q33 0 56.5 23.5T920-720v320q0 33-23.5 56.5T840-320H280Zm80-80h400q0-33 23.5-56.5T840-480v-160q-33 0-56.5-23.5T760-720H360q0 33-23.5 56.5T280-640v160q33 0 56.5 23.5T360-400Zm440 240H120q-33 0-56.5-23.5T40-240v-440h80v440h680v80ZM280-400v-320 320Z" /></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 -960 960 960" width="60px" fill="#5f6368"><path d="m136-240-56-56 296-298 160 160 208-206H640v-80h240v240h-80v-104L536-320 376-480 136-240Z" /></svg>
                            </div>
                            <div className='flex flex-col justify-end'>
                                <h1 className='text-[2.75rem] roboto-medium'>
                                    $21,096.00 <span className='text-[1rem]'>AUD</span>
                                </h1>
                                <div className='text-[1.5rem] leading-[1rem]'>Total Balance</div>
                            </div>
                        </div>
                        <div className='w-1/2 bg-[#8B8ED1] ml-4 h-1/4 p-4 flex flex-col justify-between shadow-lg'>
                            <div className='flex justify-between'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 -960 960 960" width="60px" fill="#5f6368"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h168q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm80-80h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm200-190q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790ZM200-200v-560 560Z" /></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 -960 960 960" width="60px" fill="#5f6368"><path d="M653-240v-60h127L539-541 372-374 80-665l43-43 248 248 167-167 283 283v-123h59v227H653Z" /></svg>
                            </div>
                            <div className='flex flex-col justify-end'>
                                <h1 className='text-[2.75rem] roboto-medium'>
                                    121,096.00 <span className='text-[1rem]'>Pts</span>
                                </h1>
                                <div className='text-[1.5rem] leading-[1rem]'>Total WingwayPoints</div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-slate-400 p-6 mt-3'>
                        <MonthlyLineChart />
                    </div>
                    <div className='bg-slate-400 p-6 mt-3'>
                        <div className='flex justify-between'>
                            <h1 className='text-[2rem]'>Latest Transactions</h1>
                            <Dropdown header="2024">
                                <DropdownItem>2020</DropdownItem>
                                <DropdownItem>2021</DropdownItem>
                                <DropdownItem>2022</DropdownItem>
                                <DropdownItem>2023</DropdownItem>
                            </Dropdown>
                        </div>
                        <div className='mt-4'>
                            <div className='bg-slate-300 p-4 flex items-center justify-between'>
                                <div>Sydney to Adelaide (Round Trip)</div>
                                <div>22/04/2024</div>
                                <div>$1500.00</div>
                                <a href="" className='text-blue-400 underline'>View Receipt</a>
                            </div>
                            <div className='bg-slate-200 p-4 flex items-center justify-between'>
                                <div>Sydney to Adelaide (Round Trip)</div>
                                <div>22/04/2024</div>
                                <div>$1500.00</div>
                                <a href="" className='text-blue-400 underline'>View Receipt</a>
                            </div>
                            <div className='bg-slate-300 p-4 flex items-center justify-between'>
                                <div>Sydney to Adelaide (Round Trip)</div>
                                <div>22/04/2024</div>
                                <div>$1500.00</div>
                                <a href="" className='text-blue-400 underline'>View Receipt</a>
                            </div>
                            <div className='bg-slate-200 p-4 flex items-center justify-between'>
                                <div>Sydney to Adelaide (Round Trip)</div>
                                <div>22/04/2024</div>
                                <div>$1500.00</div>
                                <a href="" className='text-blue-400 underline'>View Receipt</a>
                            </div>
                            <div className='bg-slate-300 p-4 flex items-center justify-between'>
                                <div>Sydney to Adelaide (Round Trip)</div>
                                <div>22/04/2024</div>
                                <div>$1500.00</div>
                                <a href="" className='text-blue-400 underline'>View Receipt</a>
                            </div>
                            <div className='bg-slate-200 p-4 flex items-center justify-between'>
                                <div>Sydney to Adelaide (Round Trip)</div>
                                <div>22/04/2024</div>
                                <div>$1500.00</div>
                                <a href="" className='text-blue-400 underline'>View Receipt</a>
                            </div>
                        </div>
                        <div className='mt-4 text-center flex justify-center gap-1'>
                            View More
                            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg>
                        </div>
                    </div>
                </div>
                <DashboardInfoBar />

            </div>
        </div>
    )
}

export default MainOverlay